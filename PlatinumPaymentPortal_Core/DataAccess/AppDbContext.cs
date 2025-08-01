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

    public DbSet<User> Users => this.Set<User>();
    public DbSet<Role> Roles => this.Set<Role>();
    public DbSet<PaymentRequest> PaymentRequests => this.Set<PaymentRequest>();
    public DbSet<Department> Department => this.Set<Department>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        // Seed Departments
        builder.Entity<Department>().HasData(
            new Department { Id = 1, NameOfDepartment = "Finance" },
            new Department { Id = 2, NameOfDepartment = "Operations" },
            new Department { Id = 3, NameOfDepartment = "HR" }
        );

        // SubmittedBy relationship
        builder.Entity<PaymentRequest>()
            .HasOne(pr => pr.SubmittedBy)
            .WithMany()
            .HasForeignKey(pr => pr.SubmittedById)
            .OnDelete(DeleteBehavior.Restrict);

        // Manager relationship
        builder.Entity<PaymentRequest>()
            .HasOne(pr => pr.Manager)
            .WithMany()
            .HasForeignKey(pr => pr.ManagerId)
            .OnDelete(DeleteBehavior.Restrict);
        //
        builder.Entity<PaymentRequest>()
            .HasOne(pr => pr.Department)
            .WithMany()
            .HasForeignKey(pr => pr.DepartmentId)
            .OnDelete(DeleteBehavior.Restrict);
    }

    protected override void ConfigureConventions(ModelConfigurationBuilder builder)
    {
        builder.Properties(typeof(Enum))
            .HaveConversion<string>();
    }
}