using PlatinumPaymentPortal;
using PlatinumPaymentProtal;

namespace PlatinumPaymentPortal;

public static class WebApplicationExtensions
{
    public static WebApplication ConfigureWebHostBuilder(this WebApplication app)
    {
        app.MapAuthEndpoints();
        app.UseRouting();
        app.MapGraphQL();
        return app;
    }
}