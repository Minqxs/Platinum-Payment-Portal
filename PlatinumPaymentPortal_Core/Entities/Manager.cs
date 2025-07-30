using Microsoft.AspNetCore.Identity;

namespace PlatinumPaymentPortal_Core.Entities;

public class Manager : IdentityUser<int>
{

    public string FullName { get; set; } = string.Empty;

    public string SignatureFilePath { get; set; } = string.Empty;

    public List<PaymentRequest> PaymentRequests { get; set; } = new();
}