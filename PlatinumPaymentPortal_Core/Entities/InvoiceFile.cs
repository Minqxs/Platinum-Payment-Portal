public class InvoiceFile
{
    public int Id { get; set; }
    public string FilePath { get; set; } = string.Empty;

    public int PaymentRequestId { get; set; }
    public PaymentRequest PaymentRequest { get; set; } = null!;
}