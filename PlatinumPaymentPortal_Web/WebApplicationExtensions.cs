namespace PlatinumPaymentProtal;

public static class WebApplicationExtensions
{
    public static WebApplication ConfigureWebHostBuilder(this WebApplication app)
    {
        app.UseRouting();
        app.MapGraphQL();
        return app;
    }
}