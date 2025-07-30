using PlatinumPaymentPortal_Core.Entities;

public class PaymentRequest
{
    public int Id { get; set; }

    public int SubmittedById { get; set; }
    public User SubmittedBy { get; set; } = null!;

    public DateTime InvoiceDate { get; set; }
    public DateTime PaymentDateRequested { get; set; }

    public string PayeeName { get; set; } = string.Empty;
    public string PayeeBankDetails { get; set; } = string.Empty;
    public string PaymentDescription { get; set; } = string.Empty;

    public int ManagerId { get; set; }
    public Manager Manager { get; set; } = null!;
    public bool IsSignedOff { get; set; } = false;
    public DateTime? SignedOffAt { get; set; }

    public string? CoverSheetPdfPath { get; set; }  // Optional final PDF after merge

    public InvoiceFile Invoice { get; set; } = null!;
    public ProofOfPaymentFile? ProofOfPayment { get; set; }
}