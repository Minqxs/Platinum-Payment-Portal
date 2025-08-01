using HotChocolate;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core.DataAccess;

namespace PlatinumPaymentPortal_Core.Services;

public class PaymentRequestService
{
    public async Task<PaymentRequest> CreateAsync(
        AppDbContext dbContext,
        PaymentRequestCreateInput input
    )
    {
        var requisition = new PaymentRequest()
        {
            SubmittedById = input.SubmittedById,
            InvoiceDate = input.InvoiceDate,
            PaymentDateRequested = input.PaymentRequestedDate,
            PaymentRicpientName = input.PaymentRecipient,
            RicpientBankDetails = input.PaymentDetails,
            PaymentDescription = input.Description,
            DepartmentId = input.DepartmentId,
            ManagerId = input.ManagerId
        };

        // Read Supplier Invoice file
        {
            using var ms = new MemoryStream();
            await input.SupplierInvoice.CopyToAsync(ms);
            requisition.InvoiceFile = ms.ToArray();
            requisition.InvoiceFileName = input.SupplierInvoice.Name;
        }

        // Read Proof of Payment file (optional)
        if (input.ProofOfPayment != null)
        {
            using var ms = new MemoryStream();
            await input.ProofOfPayment.CopyToAsync(ms);
            requisition.ProofOfPaymentFile = ms.ToArray();
            requisition.ProofOfPaymentFileName = input.ProofOfPayment.Name;
        }

        dbContext.Add(requisition);
        await dbContext.SaveChangesAsync();
        return requisition;
    }


    public async Task<PaymentRequest> UpdateAsync(
        AppDbContext dbContext,
        PaymentRequestEditInput input
    )
    {
        var paymentRequest =
            await dbContext.Set<PaymentRequest>().FirstOrDefaultAsync(p => p.Id == input.PaymentRequestId);
        if (paymentRequest != null)
        {
            paymentRequest.InvoiceDate = input.InvoiceDate;
            paymentRequest.PaymentDateRequested = input.PaymentRequestedDate;
            paymentRequest.PaymentRicpientName = input.PaymentRecipient;
            paymentRequest.RicpientBankDetails = input.PaymentDetails;
            paymentRequest.PaymentDescription = input.Description;
            paymentRequest.DepartmentId = input.DepartmentId;
            paymentRequest.ManagerId = input.ManagerId;
            dbContext.Update(paymentRequest);
        }
        else
        {
            throw new NullReferenceException("PaymentRequest not found.");
        }

        await dbContext.SaveChangesAsync();
        return paymentRequest;
    }

    public async Task<PaymentRequest> SignOffAsync(
        AppDbContext dbContext,
        PaymentRequestDeleteInput input
    )
    {
        var paymentRequest =
            await dbContext.Set<PaymentRequest>().FirstOrDefaultAsync(p => p.Id == input.PaymentRequestId);
        if (paymentRequest != null)
        {
            paymentRequest.IsSignedOff = true;
            dbContext.Update(paymentRequest);
        }
        else
        {
            throw new NullReferenceException("PaymentRequest not found.");
        }

        await dbContext.SaveChangesAsync();
        return paymentRequest;
    }

    public async Task<PaymentRequest> DeleteAsync(
        AppDbContext dbContext,
        PaymentRequestDeleteInput input
    )
    {
        var paymentRequest =
            await dbContext.Set<PaymentRequest>().FirstOrDefaultAsync(p => p.Id == input.PaymentRequestId);
        if (paymentRequest != null)
        {
            paymentRequest.IsDeleted = true;
            dbContext.Update(paymentRequest);
        }
        else
        {
            throw new NullReferenceException("PaymentRequest not found.");
        }

        await dbContext.SaveChangesAsync();
        return paymentRequest;
    }

    public record PaymentRequestCreateInput(
        [property: ID] int PaymentRequestId,
        [property: ID] int SubmittedById,
        [property: ID] int ManagerId,
        [property: ID] int DepartmentId,
        DateTime InvoiceDate,
        DateTime PaymentRequestedDate,
        string PaymentRecipient,
        string PaymentDetails,
        string Description,
        [property: GraphQLType(typeof(UploadType))]
        IFile SupplierInvoice,
        [property: GraphQLType(typeof(UploadType))]
        IFile? ProofOfPayment
    );

    public record PaymentRequestEditInput(
        [property: ID] int PaymentRequestId,
        [property: ID] int DepartmentId,
        [property: ID] int ManagerId,
        DateTime InvoiceDate,
        DateTime PaymentRequestedDate,
        string PaymentRecipient,
        string PaymentDetails,
        string Description,
        [property: GraphQLType(typeof(UploadType))]
        IFile SupplierInvoice,
        [property: GraphQLType(typeof(UploadType))]
        IFile? ProofOfPayment
    );

    public record PaymentRequestDeleteInput(
        [property: ID] int PaymentRequestId
    );
}