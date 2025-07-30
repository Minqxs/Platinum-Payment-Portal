using HotChocolate.Types.Relay;
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
                PaymentDateRequested = input.PaymentDateRequested,
                PayeeName = input.PayeeName,
                PayeeBankDetails = input.PayeeBankDetails,
                PaymentDescription = input.PaymentDescription,
                ManagerId = input.ManagerId,
         };

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
            paymentRequest.SubmittedById = input.SubmittedById;
            paymentRequest.InvoiceDate = input.InvoiceDate;
            paymentRequest.PaymentDateRequested = input.PaymentDateRequested;
            paymentRequest.PayeeName = input.PayeeName;
            paymentRequest.PayeeBankDetails = input.PayeeBankDetails;
            paymentRequest.PaymentDescription = input.PaymentDescription;
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
        int SubmittedById,
        DateTime InvoiceDate,
        DateTime PaymentDateRequested,
        string PayeeName,
        string PayeeBankDetails,
        string PaymentDescription,
        int ManagerId
    );

    public record PaymentRequestEditInput(
        [property: ID] int PaymentRequestId,
        int SubmittedById,
        DateTime InvoiceDate,
        DateTime PaymentDateRequested,
        string PayeeName,
        string PayeeBankDetails,
        string PaymentDescription,
        int ManagerId
    );

    public record PaymentRequestDeleteInput(
        [property: ID] int PaymentRequestId
    );
}