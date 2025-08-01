using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Entities;

namespace PlatinumPaymentPortal_Core.Services;

public class AuthService
{
    public async Task<User> GetUser(
        AppDbContext dbContext,
        Guid id)
    {
        var user = await dbContext.Users.FirstOrDefaultAsync(u => u.Id == id)
                   ?? throw new Exception("User not found");
        return user;
    }

    public async Task<List<Role>> GetUsersRoles(AppDbContext dbContext, Guid userId)
    {
        var usersRoles = dbContext.UserRoles.Where(ur => ur.UserId == userId).Select(r => r.RoleId);
        var roles = await dbContext.Roles.Where(r => usersRoles.Contains(r.Id)).ToListAsync();
        return roles;
    }

    public async Task<User> CreateUser(
        UserManager<User> userManager,
        CreateUserInput input)
    {
        var user = new User
        {
            Email = input.Email,
            UserName = input.UserName,
        };
        var roles = input.Roles.ConvertAll(r => r.ConvertRole());
        user.PasswordHash = userManager.PasswordHasher.HashPassword(user, input.Password);
        await userManager.CreateAsync(user);
        await userManager.AddToRolesAsync(user, roles);
        return user;
    }

    public record CreateUserInput(string UserName, string Email, string Password, List<RoleEnum> Roles);
}