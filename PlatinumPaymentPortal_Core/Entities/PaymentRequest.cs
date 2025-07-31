using PlatinumPaymentPortal_Core.Entities;

public class PaymentRequest
{
    public int Id { get; set; }

    public int SubmittedById { get; set; }
    public User SubmittedBy { get; set; } = null!;

    public DateTime InvoiceDate { get; set; }
    public DateTime PaymentDateRequested { get; set; }

    public string PaymentRicpientName { get; set; } = string.Empty;
    public string RicpientBankDetails { get; set; } = string.Empty;
    public string PaymentDescription { get; set; } = string.Empty;


    public int DepartmentId { get; set; }
    public Department Department { get; set; } = null!;

    public int ManagerId { get; set; }
    public User Manager { get; set; } = null!;
    public bool IsSignedOff { get; set; } = false;
    public DateTime? SignedOffAt { get; set; }

    public string? CoverSheetPdfPath { get; set; }

    public byte[] InvoiceFile { get; set; } = Array.Empty<byte>();
    public string InvoiceFileName { get; set; } = string.Empty;

    public byte[]? ProofOfPaymentFile { get; set; }
    public string? ProofOfPaymentFileName { get; set; }

    public bool IsDeleted { get; set; } = false;
}