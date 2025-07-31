using System.Security.Claims;
using HotChocolate;
using Microsoft.AspNetCore.Http;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Entities;
using PlatinumPaymentPortal_Core.Services;

namespace PlatinumPaymentPortal_Core.Queries;

public class Query
{
    public IQueryable<PaymentRequest> PaymentRequests(
        AppDbContext dbContext)
    {
        var paymentRequests = dbContext.Set<PaymentRequest>();
        return paymentRequests;
    }

    public async Task<User> Me(
        [Service] AppDbContext dbContext,
        [Service] IHttpContextAccessor contextAccessor,
        [Service] AuthService authService)
    {
        var user = contextAccessor.HttpContext?.User;
        var claims = user?.Claims.ToList();
        var userIdClaim = claims?.FirstOrDefault(f => f.Type == ClaimTypes.NameIdentifier);
        var userId = Guid.Parse(userIdClaim?.Value ?? throw new Exception("UserId is null"));
        return await authService.GetUser(dbContext, userId);
    }
}