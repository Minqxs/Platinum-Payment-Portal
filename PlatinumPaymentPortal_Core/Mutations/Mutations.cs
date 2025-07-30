using HotChocolate;
using HotChocolate.Authorization;
using HotChocolate.Types;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Entities;
using PlatinumPaymentPortal_Core.Services;

[Authorize]
public class Mutation
{
    public async Task<InvoiceFile> UploadInvoiceAsync(
        SharedTypes.UploadInvoiceRequestInput input,
        AppDbContext dbContext,
        [Service] InvoiceService invoiceService
    ) => await invoiceService.UploadInvoiceAsync(dbContext, input);

    public async Task<InvoiceFile> UpdateInvoiceAsync(
        SharedTypes.UploadInvoiceRequestInput input,
        AppDbContext dbContext,
        [Service] InvoiceService invoiceService
    ) => await invoiceService.UpdateInvoiceAsync(dbContext, input);

    public async Task<ProofOfPaymentFile> UploadProofOfPaymentAsync(
        SharedTypes.UploadInvoiceRequestInput input,
        AppDbContext dbContext,
        [Service] ProofOfPaymentService proofOfPaymentService
    ) => await proofOfPaymentService.UploadPopAsync(dbContext, input);

    public async Task<ProofOfPaymentFile> UpdateProofOfPaymentAsync(
        SharedTypes.UploadInvoiceRequestInput input,
        AppDbContext dbContext,
        [Service] ProofOfPaymentService proofOfPaymentService
    ) => await proofOfPaymentService.UpdatePopAsync(dbContext, input);

    public async Task<PaymentRequest> CreatePaymentRequestAsync(
        PaymentRequestService.PaymentRequestCreateInput input,
        AppDbContext dbContext,
        [Service] PaymentRequestService paymentRequestService
    ) => await paymentRequestService.CreateAsync(dbContext, input);

    public async Task<PaymentRequest> UpdatePaymentRequestAsync(
        PaymentRequestService.PaymentRequestEditInput input,
        AppDbContext dbContext,
        [Service] PaymentRequestService paymentRequestService
    ) => await paymentRequestService.UpdateAsync(dbContext, input);

    public async Task<PaymentRequest> SignOffPaymentRequestAsync(
        PaymentRequestService.PaymentRequestDeleteInput input,
        AppDbContext dbContext,
        [Service] PaymentRequestService paymentRequestService
    ) => await paymentRequestService.SignOffAsync(dbContext, input);

    public async Task<PaymentRequest> DeletePaymentRequestAsync(
        PaymentRequestService.PaymentRequestDeleteInput input,
        AppDbContext dbContext,
        [Service] PaymentRequestService paymentRequestService
    ) => await paymentRequestService.DeleteAsync(dbContext, input);
}

