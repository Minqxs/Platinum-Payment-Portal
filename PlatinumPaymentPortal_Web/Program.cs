using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Mutations;
using PlatinumPaymentPortal_Core.Queries;
using PlatinumPaymentProtal;

var builder = WebApplication.CreateBuilder(args);



var configuration = builder.Configuration;
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddDbContextFactory<AppDbContext>(options =>
{
    options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddCoreServices();
builder.Services.AddGraphQLServer()
    .AddQueryType<Query>()
    .AddMutationType<Mutations>()
    .AddFiltering();

var app = builder.Build();
app.ConfigureWebHostBuilder();
app.Run();
