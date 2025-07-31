using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core.DataAccess;

namespace PlatinumPaymentPortal_Core.Queries.Models;

[Node]
[ExtendObjectType<PaymentRequest>]
public class PaymentRequestExtension
{
    public async Task<PaymentRequest> GetPaymentRequest(
        AppDbContext appDbContext,
        [ID(nameof(PaymentRequest))] int id)
    {
        var requestPayment = await appDbContext.Set<PaymentRequest>().FirstAsync((p) => p.Id == id);
        return requestPayment;
    }
}