using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PlatinumPaymentPortal_Core.Entities;

namespace PlatinumPaymentProtal;

public static class EndpointRouteBuilderExtensions
{
    public static void MapAuthEndpoints(this WebApplication app)
    {
        app.MapPost("/api/auth/login", async Task<Results<Ok<string>, ProblemHttpResult>> ([FromBody] LoginRequest loginRequest, [FromServices] SignInManager<User> signInManager) =>
        {
            var result = await signInManager.PasswordSignInAsync(loginRequest.Email, loginRequest.Password, true, false);

            if (!result.Succeeded)
            {
                return TypedResults.Problem(result.ToString(), statusCode: StatusCodes.Status401Unauthorized);
            }

            return TypedResults.Ok("You have bee logged in successfully");
        });
    }

    private record LoginRequest(string Email, string Password);
}
