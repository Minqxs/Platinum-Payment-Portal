using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Entities;

namespace PlatinumPaymentPortal_Core.Queries.Models;

[Node]
[ExtendObjectType<Department>]
public class DepartmentExtension
{
    public async Task<Department> GetDepartment(
        AppDbContext appDbContext,
        [ID(nameof(Department))] int id)
    {
        var department = await appDbContext.Departments.FirstAsync((p) => p.Id == id);
        return department;
    }
}