using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core.Entities;

namespace PlatinumPaymentPortal_Core.DataAccess;

public class AppDbContext : IdentityDbContext<User, IdentityRole<int>, int>
{
    public AppDbContext(
        DbContextOptions options)
        : base(options)
    {
    }

    // public DbSet<Manager> Managers => Set<Manager>();
    // public DbSet<PaymentRequest> PaymentRequests => Set<PaymentRequest>();
    // public DbSet<InvoiceFile> InvoiceFiles => Set<InvoiceFile>();
    // public DbSet<ProofOfPaymentFile> ProofOfPaymentFiles => Set<ProofOfPaymentFile>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<Manager>().ToTable("Managers");
        builder.Entity<User>().ToTable("Users");
    }

    protected override void ConfigureConventions(ModelConfigurationBuilder builder)
    {
        builder.Properties(typeof(Enum))
            .HaveConversion<string>();
    }

}