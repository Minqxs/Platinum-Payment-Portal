using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core.DataAccess;
using PlatinumPaymentPortal_Core.Entities;

namespace PlatinumPaymentPortal_Core.Services;

public class ProofOfPaymentService
{
    public async Task<ProofOfPaymentFile> UploadPopAsync(AppDbContext dbContext, SharedTypes.UploadInvoiceRequestInput input)
    {
        using var ms = new MemoryStream();
        await input.File.CopyToAsync(ms);

        var doc = new ProofOfPaymentFile()
        {
            FileName = input.File.Name,
            Content = ms.ToArray(),
        };

        await dbContext.Set<ProofOfPaymentFile>().AddAsync(doc);
        await dbContext.SaveChangesAsync();
        return doc;
    }

    public async Task<ProofOfPaymentFile> UpdatePopAsync(AppDbContext dbContext, SharedTypes.UploadInvoiceRequestInput input)
    {
        var newFile = await this.UploadPopAsync(dbContext, input);
        var paymentRequest = await dbContext.Set<PaymentRequest>().FirstOrDefaultAsync(p => p.Id == input.PaymentRequestId);

        if (paymentRequest != null)
        {
            paymentRequest.ProofOfPaymentFile = newFile;
            dbContext.Set<PaymentRequest>().Update(paymentRequest);
        }
        await dbContext.SaveChangesAsync();
        return newFile;
    }
}