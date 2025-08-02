using System.Security.Claims;
using HotChocolate;
using HotChocolate.Authorization;
using Microsoft.AspNetCore.Identity;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Entities;
using PlatinumPaymentPortal_Core.Services;

[Authorize]
public class Mutation
{
    public async Task<string?> GeneratePaymentRequestPdfAsync(
        int paymentRequestId,
        [Service] AppDbContext dbContext,
        [Service] PaymentRequestPdfService pdfService)
    {
        return await pdfService.GeneratePdfStringFromHtmlAsync(dbContext, paymentRequestId);
    }

    public async Task<PaymentRequest> CreatePaymentRequestAsync(
        PaymentRequestService.PaymentRequestCreateInput input,
        AppDbContext dbContext,
        [Service] PaymentRequestService paymentRequestService,
        ClaimsPrincipal userClaimsPrincipal,
        [Service] UserManager<User> userManager
    )
    {
        var user = await userManager.GetUserAsync(userClaimsPrincipal);
        return await paymentRequestService.CreateAsync(dbContext, input, user!.Id);
    }

    public async Task<PaymentRequest> UpdatePaymentRequestAsync(
        PaymentRequestService.PaymentRequestEditInput input,
        AppDbContext dbContext,
        [Service] PaymentRequestService paymentRequestService
    )
    {
        return await paymentRequestService.UpdateAsync(dbContext, input);
    }

    public async Task<PaymentRequest> SignOffPaymentRequestAsync(
        PaymentRequestService.PaymentRequestDeleteInput input,
        AppDbContext dbContext,
        [Service] PaymentRequestService paymentRequestService
    )
    {
        return await paymentRequestService.SignOffAsync(dbContext, input);
    }

    public async Task<PaymentRequest> DeletePaymentRequestAsync(
        PaymentRequestService.PaymentRequestDeleteInput input,
        AppDbContext dbContext,
        [Service] PaymentRequestService paymentRequestService
    )
    {
        return await paymentRequestService.DeleteAsync(dbContext, input);
    }
}