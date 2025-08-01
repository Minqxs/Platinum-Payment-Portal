using DinkToPdf;
using DinkToPdf.Contracts;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Entities;
using PlatinumPaymentPortal_Core.Services;

namespace PlatinumPaymentPortal;

public static class IServiceCollectionExtensions
{
    public static void AddCoreServices(this IServiceCollection services)
    {
        services.AddCors(options =>
        {
            options.AddPolicy("CorsPolicy",
                policy => policy.WithOrigins("https://localhost:3000")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
        });
        services.AddIdentity<User, Role>()
            .AddEntityFrameworkStores<AppDbContext>();
        services.AddScoped<AuthService>();
        services.AddSingleton(typeof(IConverter), new SynchronizedConverter(new PdfTools()));
        services.AddSingleton<PaymentRequestService>();
        services.AddSingleton<PaymentRequestPdfService>();
        services.AddSingleton<SeedService>();
    }
}