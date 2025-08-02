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
    public IQueryable<PaymentRequest> PaymentRequests(
        AppDbContext dbContext)
    {
        var paymentRequests = dbContext
            .PaymentRequests
            .Include(p => p.Department)
            .Include(p => p.Manager)
            .Include(p => p.SubmittedBy)
            .AsQueryable();
        return paymentRequests;
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