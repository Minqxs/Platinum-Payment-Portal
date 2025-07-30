namespace PlatinumPaymentPortal_Core.Entities;

public class ProofOfPaymentFile
{
    public int Id { get; set; }
    public string FileName { get; set; } = string.Empty;
    public byte[] Content { get; set; } = Array.Empty<byte>();
    public int PaymentRequestId { get; set; }
    public PaymentRequest PaymentRequest { get; set; } = null!;
}