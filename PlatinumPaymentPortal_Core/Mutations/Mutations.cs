using HotChocolate;
using HotChocolate.Authorization;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Services;

[Authorize]
public class Mutation
{
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

