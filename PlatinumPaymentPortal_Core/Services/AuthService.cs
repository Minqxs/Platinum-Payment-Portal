using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Entities;

namespace PlatinumPaymentPortal_Core.Services;

public class AuthService
{
    public async Task<User> GetUser(
        AppDbContext dbContext,
        Guid id)
    {
        var user = await dbContext.Users.FirstOrDefaultAsync(u => u.Id == id)
                   ?? throw new Exception("User not found");
        return user;
    }
}