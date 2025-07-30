using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core.DataAccess;

namespace PlatinumPaymentPortal_Core.Services;

public class InvoiceService
{

    public async Task<InvoiceFile> UploadInvoiceAsync(AppDbContext dbContext, SharedTypes.UploadInvoiceRequestInput input)
    {
        using var ms = new MemoryStream();
        await input.File.CopyToAsync(ms);

        var doc = new InvoiceFile()
        {
            FileName = input.File.Name,
            Content = ms.ToArray(),
        };

        await dbContext.Set<InvoiceFile>().AddAsync(doc);
        await dbContext.SaveChangesAsync();
        return doc;
    }

    public async Task<InvoiceFile> UpdateInvoiceAsync(AppDbContext dbContext, SharedTypes.UploadInvoiceRequestInput input)
    {
        var newFile = await this.UploadInvoiceAsync(dbContext, input);
        var paymentRequest = await dbContext.Set<PaymentRequest>().FirstOrDefaultAsync(p => p.Id == input.PaymentRequestId);

        if (paymentRequest != null)
        {
            paymentRequest.InvoiceFile = newFile;
            dbContext.Set<PaymentRequest>().Update(paymentRequest);
        }
        await dbContext.SaveChangesAsync();
        return newFile;
    }

}