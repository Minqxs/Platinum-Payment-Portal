using HotChocolate;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Entities;
using PlatinumPaymentPortal_Core.Services;

namespace PlatinumPaymentPortal_Core.Queries.Models;

[Node(NodeResolver = nameof(GetAsync))]
[ExtendObjectType(typeof(User))]
public class UserExtension
{
    public async Task<List<RoleEnum>> Roles(
        [Parent] User user,
        [Service] AuthService authService,
        [Service] AppDbContext dbContext)
    {
        var roles = await authService.GetUsersRoles(dbContext, user.Id);
        return roles.ConvertAll(c => c.Name!.ConvertRole());
    }


    public async Task<User> GetAsync(
        [Service] AppDbContext dbContext,
        [Service] AuthService authService,
        [ID] Guid id)
    {
        return await authService.GetUser(dbContext, id);
    }
}