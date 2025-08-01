using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Queries;
using PlatinumPaymentPortal_Core.Queries.Models;
using PlatinumPaymentPortal;
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

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("https://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials(); // if you're using cookies
    });
});

var app = builder.Build();

await app.Initialize();
app.UseCors();
app.UseRouting();
app.MapGraphQL();
app.MapAuthEndpoints();
app.Run();