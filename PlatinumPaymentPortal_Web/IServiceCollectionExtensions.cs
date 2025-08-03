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
        services.AddScoped<AuthService>();
        services.AddSingleton(typeof(IConverter), new SynchronizedConverter(new PdfTools()));
        services.AddSingleton<PaymentRequestService>();
        services.AddSingleton<PaymentRequestPdfService>();
        services.AddSingleton<PaymentRequestReadService>();
        services.AddSingleton<SeedService>();
    }
}