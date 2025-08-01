using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Entities;
using PlatinumPaymentPortal_Core.Services;
using PlatinumPaymentProtal;

namespace PlatinumPaymentPortal;

public static class WebApplicationExtensions
{
    public static WebApplication ConfigureWebHostBuilder(this WebApplication app)
    {
        app.UseRouting();
        app.MapGraphQL();
        app.MapAuthEndpoints();
        return app;
    }

    public static async Task Initialize(this WebApplication app)
    {
        var factory = app.Services.GetRequiredService<IDbContextFactory<AppDbContext>>();
        await using var appDbContext = await factory.CreateDbContextAsync();
        var seedService = app.Services.GetRequiredService<SeedService>();
        var userManager = app.Services.CreateScope().ServiceProvider.GetRequiredService<UserManager<User>>();
        var roleManager = app.Services.CreateScope().ServiceProvider.GetRequiredService<RoleManager<Role>>();
        await seedService.SeedRolesAsync(roleManager);
        await seedService.SeedUsersAsync(userManager, roleManager);
    }

}