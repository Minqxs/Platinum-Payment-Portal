using System.Collections.Immutable;
using Microsoft.AspNetCore.Identity;

namespace PlatinumPaymentPortal_Core.Entities;

public enum RoleEnum
{
    Admin,
    Employee,
    DepartmentManager
}
public class Role : IdentityRole<Guid>
{
        public const string Admin = "Admin";

        public const string Employee = "Employee";

        public const string DepartmentManager = "DepartmentManager";

        public static readonly ImmutableList<string> AllRoles = new List<string>
        {
            Admin,
            Employee,
            DepartmentManager,
        }.ToImmutableList();
}