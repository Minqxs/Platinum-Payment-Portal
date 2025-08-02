using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PlatinumPaymentPortal_Core.Entities;

namespace PlatinumPaymentProtal;

public static class EndpointRouteBuilderExtensions
{
    public static void MapAuthEndpoints(this WebApplication app)
    {
        app.MapPost("/login", async Task<IResult> (
            [FromBody] LoginRequest loginRequest,
            [FromServices] SignInManager<User> signInManager,
            [FromServices] UserManager<User> userManager,
            HttpContext httpContext) =>
        {
            var result = await signInManager.PasswordSignInAsync(
                loginRequest.Email,
                loginRequest.Password,
                isPersistent: true,
                lockoutOnFailure: false);

            if (!result.Succeeded)
                return Results.Problem("Invalid login", statusCode: 401);

            var user = await userManager.FindByEmailAsync(loginRequest.Email);

            if (user == null)
                return Results.Problem("User not found", statusCode: 404);

            await httpContext.SignInAsync(
                IdentityConstants.ApplicationScheme,
                new ClaimsPrincipal(await signInManager.CreateUserPrincipalAsync(user)));

            return Results.Ok("Logged in successfully");
        });
    }

    private record LoginRequest(string Email, string Password);
}