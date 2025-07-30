namespace PlatinumPaymentPortal_Core.Entities;

public enum AttachmentType
{
    Invoice,
    ProofOfPayment
}

public class Attachment
{
    public int Id { get; set; }

    public int PaymentRequestId { get; set; }
    public PaymentRequest? PaymentRequest { get; set; }

    public string FileName { get; set; } = string.Empty;
    public string FilePath { get; set; } = string.Empty;

    public AttachmentType Type { get; set; }
}