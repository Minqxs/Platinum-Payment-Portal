using PlatinumPaymentPortal_Core.Entities;

namespace PlatinumPaymentPortal_Core;

public static class Extensions
{
    public static RoleEnum ConvertRole(this string roleType)
    {
        return roleType switch
        {
            "Admin" => RoleEnum.Admin,
            "Manager" => RoleEnum.Manager,
            "Employee" => RoleEnum.Employee,
            _ => throw new Exception($"Cant convert role {roleType}")
        };
    }

    public static string ConvertRole(this RoleEnum roleType)
    {
        return roleType switch
        {
            RoleEnum.Admin => "Admin",
            RoleEnum.Manager => "Manager",
            RoleEnum.Employee => "Employee",
            _ => throw new Exception($"Cant convert role {roleType}")
        };
    }
}