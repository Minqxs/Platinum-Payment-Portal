using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core.DataAccess;

namespace PlatinumPaymentPortal_Core.Services;

public class PaymentRequestReadService
{
    public IQueryable<PaymentRequest> PaymentRequests(
        AppDbContext dbContext)
    {
        var paymentRequests = dbContext
            .PaymentRequests
            .Include(p => p.Department)
            .Include(p => p.Manager)
            .Include(p => p.SubmittedBy)
            .AsQueryable();
        return paymentRequests;
    }

    public IQueryable<PaymentRequest> PaymentRequestsBySubmittedBy(
        AppDbContext dbContext,
        Guid submittedById
       )
    {
        var paymentRequests = this.PaymentRequests(dbContext).Where(p => p.SubmittedBy.Id == submittedById);
            ;
        return paymentRequests;
    }

    public IQueryable<PaymentRequest> PaymentRequestsByAssignedManager(
        AppDbContext dbContext,
        Guid assignedManagerId)
    {
        var paymentRequests = this.PaymentRequests(dbContext).Where(p => p.Manager.Id == assignedManagerId);
        return paymentRequests;
    }
}