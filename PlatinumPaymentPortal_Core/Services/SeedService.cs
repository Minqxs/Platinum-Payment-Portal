using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Entities;

namespace PlatinumPaymentPortal_Core.Services;

public class SeedService(IServiceProvider services)
{
    public async Task SeedUsersAsync(UserManager<User> userManager, RoleManager<Role> roleManager)
    {
        using var scope = services.CreateScope();
        var roles = new[] { "Manager", "Admin", "Employee" };
        foreach (var role in roles)
        {
            if (!await roleManager.RoleExistsAsync(role))
                await roleManager.CreateAsync(new Role
                {
                    Name = role
                });
        }

        var users = new[]
        {
            new { Email = "tim.manager@company.com", Role = "Manager" },
            new { Email = "leon.manager@company.com", Role = "Manager" },
            new { Email = "tod.manager@company.com", Role = "Admin" },
            new { Email = "ben.manager@company.com", Role = "Employee" },
        };

        foreach (var u in users)
        {
            var existingUser = await userManager.FindByEmailAsync(u.Email);
            if (existingUser == null)
            {
                var user = new User { UserName = u.Email, Email = u.Email };
                var createResult = await userManager.CreateAsync(user);
                if (createResult.Succeeded)
                {
                    await userManager.AddPasswordAsync(user, "P@55w0rd");
                    await userManager.AddToRoleAsync(user, u.Role);
                }

            }
        }
    }

    public async Task SeedRolesAsync(RoleManager<Role> roleManager)
    {

        var roles = new[] { "Manager", "Admin", "Employee" };

        foreach (var role in roles)
        {
            if (!await roleManager.RoleExistsAsync(role))
                await roleManager.CreateAsync(new Role
                {
                    Name = role
                });
        }
    }
}