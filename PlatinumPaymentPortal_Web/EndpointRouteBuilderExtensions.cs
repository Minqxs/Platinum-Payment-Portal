using System.Security.Claims;
using HotChocolate.Authorization;
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

        app.MapGet("/profile", (HttpContext httpContext) =>
        {
            var user = httpContext.User;

            if (user.Identity?.IsAuthenticated != true)
            {
                return Results.Problem("User not authenticated", statusCode: 401);
            }

            return Results.Ok("User Authenticated.");
        });

        app.MapPost("/logout", async (
            [FromServices] SignInManager<User> signInManager,
            HttpContext httpContext) =>
        {
            await signInManager.SignOutAsync();
            return Results.Ok("Signed out successfully");
        });

        app.MapPost("/api/users/uploadSignature", async (
                HttpContext context,
                IFormFile signature,
                [FromServices] UserManager<User> userManager
            ) =>
            {
                var user = await userManager.GetUserAsync(context.User);

                if (user != null && signature.Length > 0)
                {
                    using var ms = new MemoryStream();
                    await signature.CopyToAsync(ms);
                    user.SignatureImage = ms.ToArray();
                    user.SignatureImageMimeType = signature.ContentType;

                    var updateResult = await userManager.UpdateAsync(user);
                    if (!updateResult.Succeeded)
                        return Results.Problem("Failed to update user signature.");
                }

                return Results.Ok(new { signatureImageUrl = "/api/users/signature-image" });
            })
            .DisableAntiforgery()
            .Accepts<IFormFile>("multipart/form-data");

        app.MapGet("/api/users/signature-image", async (
            HttpContext context,
            UserManager<User> userManager
        ) =>
        {
            var user = await userManager.GetUserAsync(context.User);
            if (user?.SignatureImage == null)
                return Results.NotFound();

            return Results.File(user.SignatureImage, user.SignatureImageMimeType ?? "image/png");
        }).DisableAntiforgery();
        ;

        app.MapGet("/api/users/me", async (
            HttpContext context,
            UserManager<User> userManager
        ) =>
        {
            var user = await userManager.GetUserAsync(context.User);
            if (user == null) return Results.Unauthorized();

            return Results.Ok(new
            {
                user.Id,
                user.FirstName,
                signatureImageUrl = user.SignatureImage != null ? "/api/users/signature-image" : null
            });
        });
    }

    private record LoginRequest(string Email, string Password);
}