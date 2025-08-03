using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Services;
using Xunit;

public class PaymentRequestServiceTests
{
    private AppDbContext CreateDbContext()
    {
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
            .Options;
        return new AppDbContext(options);
    }

    [Fact]
    public async Task CreateAsync_ShouldAddNewPaymentRequest()
    {
        // Arrange
        using var dbContext = CreateDbContext();
        var service = new PaymentRequestService();

        // Seed related entities if needed (Manager, Department)
        var managerId = Guid.NewGuid();
        var departmentId = 1;

        dbContext.Managers.Add(new Manager { Id = managerId, FirstName = "John" });
        dbContext.Departments.Add(new Department { Id = departmentId, NameOfDepartment = "Finance" });
        await dbContext.SaveChangesAsync();

        var input = new PaymentRequestService.PaymentRequestCreateInput(
            ManagerId: managerId,
            DepartmentId: departmentId,
            InvoiceDate: DateTimeOffset.UtcNow.AddDays(-1),
            PaymentRequestedDate: DateTimeOffset.UtcNow,
            PaymentRecipient: "Jane Doe",
            PaymentDetails: "Bank XYZ, Account 123456",
            Description: "Payment for services rendered",
            SupplierInvoice: null,
            ProofOfPayment: null
        );

        var submittedById = Guid.NewGuid();

        // Act
        var result = await service.CreateAsync(dbContext, input, submittedById);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(input.Description, result.PaymentDescription);
        Assert.Equal(1, await dbContext.PaymentRequests.CountAsync());
        Assert.Equal(submittedById, result.SubmittedById);
    }

    [Fact]
    public async Task UpdateAsync_ShouldModifyExistingPaymentRequest()
    {
        // Arrange
        using var dbContext = CreateDbContext();
        var service = new PaymentRequestService();

        var paymentRequest = new PaymentRequest
        {
            Id = 1,
            InvoiceDate = DateTimeOffset.UtcNow.AddDays(-10),
            PaymentDateRequested = DateTimeOffset.UtcNow.AddDays(-5),
            PaymentRicpientName = "Old Recipient",
            RicpientBankDetails = "Old Bank Details",
            PaymentDescription = "Old Description",
            DepartmentId = 1,
            ManagerId = Guid.NewGuid()
        };

        dbContext.PaymentRequests.Add(paymentRequest);
        await dbContext.SaveChangesAsync();

        var input = new PaymentRequestService.PaymentRequestEditInput(
            PaymentRequestId: 1,
            DepartmentId: 2,
            ManagerId: paymentRequest.ManagerId,
            InvoiceDate: DateTimeOffset.UtcNow,
            PaymentRequestedDate: DateTimeOffset.UtcNow.AddDays(2),
            PaymentRecipient: "New Recipient",
            PaymentDetails: "New Bank Details",
            Description: "New Description",
            SupplierInvoice: null,
            ProofOfPayment: null
        );

        // Act
        var updated = await service.UpdateAsync(dbContext, input);

        // Assert
        Assert.NotNull(updated);
        Assert.Equal("New Recipient", updated.PaymentRicpientName);
        Assert.Equal(2, updated.DepartmentId);
        Assert.Equal("New Description", updated.PaymentDescription);
    }

    [Fact]
    public async Task DeleteAsync_ShouldMarkAsDeleted()
    {
        // Arrange
        using var dbContext = CreateDbContext();
        var service = new PaymentRequestService();

        var paymentRequest = new PaymentRequest
        {
            Id = 1,
            IsDeleted = false
        };
        dbContext.PaymentRequests.Add(paymentRequest);
        await dbContext.SaveChangesAsync();

        var input = new PaymentRequestService.PaymentRequestDeleteInput(1);

        // Act
        var deleted = await service.DeleteAsync(dbContext, input);

        // Assert
        Assert.True(deleted.IsDeleted);
    }

    [Fact]
    public async Task SignOffAsync_ShouldMarkAsSignedOff()
    {
        // Arrange
        using var dbContext = CreateDbContext();
        var service = new PaymentRequestService();

        var paymentRequest = new PaymentRequest
        {
            Id = 1,
            IsSignedOff = false
        };
        dbContext.PaymentRequests.Add(paymentRequest);
        await dbContext.SaveChangesAsync();

        var input = new PaymentRequestService.PaymentRequestDeleteInput(1);

        // Act
        var signedOff = await service.SignOffAsync(dbContext, input);

        // Assert
        Assert.True(signedOff.IsSignedOff);
    }
}
