using HotChocolate.Types;
using HotChocolate.Types.Relay;

namespace PlatinumPaymentPortal_Core.Services;

public class SharedTypes
{
    public record UploadInvoiceRequestInput( [property:ID] int? PaymentRequestId, IFile File, string FileName);
}