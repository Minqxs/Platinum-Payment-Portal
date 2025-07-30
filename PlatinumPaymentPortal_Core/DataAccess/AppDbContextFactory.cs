using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace PlatinumPaymentPortal_Core.DataAccess;


    public class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
    {
        public AppDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();

            // Set the connection string here
            optionsBuilder.UseSqlServer("Server=127.0.0.1,1433; Server=localhost;Database=PlatinumPaymentsDb;User=sa;Password=Password123!;TrustServerCertificate=True");

            return new AppDbContext(optionsBuilder.Options);
        }
    }
