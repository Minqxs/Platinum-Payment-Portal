using System.Security.Claims;
using HotChocolate;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Entities;
using PlatinumPaymentPortal_Core.Services;

namespace PlatinumPaymentPortal_Core.Queries;

public class Query
{
    public async Task<IQueryable<PaymentRequest>?> PaymentRequests(
        AppDbContext dbContext,
        [Service] PaymentRequestReadService paymentRequestReadService,
        ClaimsPrincipal userClaimsPrincipal,
        [Service] UserManager<User> userManager)
    {
        var user = await userManager.GetUserAsync(userClaimsPrincipal);
        if (user == null)
        {
            return null;
        }

        var roles = await userManager.GetRolesAsync(user);
        var role = roles.FirstOrDefault()!.ConvertRole();

        switch (role)
        {
            case RoleEnum.Admin:
                return paymentRequestReadService.PaymentRequests(dbContext);
            case RoleEnum.Employee:
                return paymentRequestReadService.PaymentRequestsBySubmittedBy(dbContext, user.Id);
            case RoleEnum.Manager:
                return paymentRequestReadService.PaymentRequestsByAssignedManager(dbContext, user.Id);
            default:
                return null;
        }
    }

    public IQueryable<User> Managers(
        AppDbContext dbContext)
    {
        var managerRole = dbContext.Roles.SingleOrDefault(r => r.Name == "Manager");
        var managerIds = dbContext.UserRoles.Where(r => r.RoleId == managerRole.Id).Select(l => l.UserId);
        var users = dbContext.Users.Where(p => managerIds.Contains(p.Id));
        return users;
    }

    public IQueryable<Department> Departments(
        AppDbContext dbContext)
    {
        var departments = dbContext.Departments.AsQueryable();
        return departments;
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