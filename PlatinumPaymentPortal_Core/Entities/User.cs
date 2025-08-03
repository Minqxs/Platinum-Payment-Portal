using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Principal;
using Microsoft.AspNetCore.Identity;

namespace PlatinumPaymentPortal_Core.Entities;

public class User : IdentityUser<Guid>
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;

    [NotMapped]
    public string FullName => this.FirstName + " " + this.LastName;
    public byte[]? SignatureImage { get; set; } // Signature image stored as byte array
    public string? SignatureImageMimeType { get; set; } // e.g., "image/png"
}