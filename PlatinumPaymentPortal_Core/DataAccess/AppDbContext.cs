using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core.Entities;

namespace PlatinumPaymentPortal_Core.DataAccess;

public class AppDbContext : IdentityDbContext<User, Role, Guid>
{
    public AppDbContext(
        DbContextOptions options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<User>().ToTable("Users");
    }

    protected override void ConfigureConventions(ModelConfigurationBuilder builder)
    {
        builder.Properties(typeof(Enum))
            .HaveConversion<string>();
    }
}