using Microsoft.AspNetCore.Identity;

namespace PlatinumPaymentPortal_Core.Entities;

public class User : IdentityUser<int>
{
public string FullName { get; set; } = string.Empty;
public string Department { get; set; } = string.Empty;

public List<PaymentRequest> SubmittedRequests { get; set; } = new();
}