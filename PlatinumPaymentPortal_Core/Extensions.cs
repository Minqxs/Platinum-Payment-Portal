using PlatinumPaymentPortal_Core.Entities;

namespace PlatinumPaymentPortal_Core;

public static class Extensions
{
    public static RoleEnum ConvertRole(this string roleType)
    {
        return roleType switch
        {
            "Admin" => RoleEnum.Admin,
            "Manager" => RoleEnum.DepartmentManager,
            "Employee" => RoleEnum.Employee,
            _ => throw new Exception($"Cant convert role {roleType}")
        };
    }
}