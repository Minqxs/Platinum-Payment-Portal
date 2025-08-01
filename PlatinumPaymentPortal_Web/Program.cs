using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using PlatinumPaymentPortal_Core;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Queries;
using PlatinumPaymentPortal_Core.Queries.Models;
using PlatinumPaymentPortal;


var builder = WebApplication.CreateBuilder(args);


var configuration = builder.Configuration;
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddDbContextFactory<AppDbContext>(options =>
{
    options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddCoreServices();
builder.Services.AddGraphQLServer()
    .AddGlobalObjectIdentification()
    .AddQueryFieldToMutationPayloads()
    .AddQueryType<Query>()
    .AddMutationType<Mutation>()
    .AddAuthorization()
    .AddType<UploadType>()
    .AddType<RoleEnumType>()
    .AddTypeExtension<UserExtension>()
    .AddTypeExtension<PaymentRequestExtension>()
    .AddMutationConventions(true)
    .AddFiltering();


var app = builder.Build();
app.ConfigureWebHostBuilder();

app.Run();