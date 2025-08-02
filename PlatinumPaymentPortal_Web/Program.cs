using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Entities;
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

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

builder.Services.ConfigureApplicationCookie(options =>
{
    options.LoginPath = "/login";
    options.Cookie.HttpOnly = true;
    options.Cookie.SameSite = SameSiteMode.Lax;
    options.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
});

builder.Services.AddIdentity<User, Role>()
    .AddEntityFrameworkStores<AppDbContext>()
    .AddDefaultTokenProviders();

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
    .AddTypeExtension<DepartmentExtension>()
    .AddMutationConventions(true)
    .AddFiltering();

builder.Services.AddCoreServices();

var app = builder.Build();

await app.Initialize();

app.UseCors();
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapGraphQL();
app.MapAuthEndpoints();

app.Use(async (context, next) =>
{
    var identity = context.User.Identity;
    Console.WriteLine("Cookie Present: " + context.Request.Cookies.ContainsKey(".AspNetCore.Identity.Application"));
    Console.WriteLine("Authenticated: " + identity?.IsAuthenticated);
    Console.WriteLine("Name: " + identity?.Name);
    await next();
});
app.Run();
