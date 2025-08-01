using System.Text;
using DinkToPdf;
using DinkToPdf.Contracts;
using Microsoft.EntityFrameworkCore;
using PlatinumPaymentPortal_Core.DataAccess;

namespace PlatinumPaymentPortal_Core.Services;

public class PaymentRequestPdfService
{
    private readonly IConverter _converter;

    public PaymentRequestPdfService(IConverter converter)
    {
        _converter = converter;
    }

    private string RenderPaymentRequestHtml(PaymentRequest request)
    {
        var sb = new StringBuilder();

        sb.Append($@"
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Payment Request</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            margin: 40px;
            line-height: 1.5;
        }}
        h1 {{
            text-align: center;
            font-size: 24px;
            margin-bottom: 30px;
        }}
        table {{
            width: 100%;
            border-collapse: collapse;
        }}
        th, td {{
            text-align: left;
            padding: 8px;
            border: 1px solid #ccc;
        }}
        th {{
            background-color: #f2f2f2;
        }}
        .section {{
            margin-bottom: 25px;
        }}
        .signature {{
            margin-top: 40px;
        }}
    </style>
</head>
<body>
    <h1>Payment Request #{request.Id}</h1>

    <div class='section'>
        <table>
            <tr>
                <th>Submitted By</th>
                <td>{request.SubmittedBy?.FirstName}</td>
            </tr>
            <tr>
                <th>Department</th>
                <td>{request.Department?.NameOfDepartment}</td>
            </tr>
            <tr>
                <th>Manager</th>
                <td>{request.Manager?.FirstName}</td>
            </tr>
            <tr>
                <th>Invoice Date</th>
                <td>{request.InvoiceDate:yyyy-MM-dd}</td>
            </tr>
            <tr>
                <th>Requested Payment Date</th>
                <td>{request.PaymentDateRequested:yyyy-MM-dd}</td>
            </tr>
            <tr>
                <th>Recipient Name</th>
                <td>{request.PaymentRicpientName}</td>
            </tr>
            <tr>
                <th>Bank Details</th>
                <td>{request.RicpientBankDetails}</td>
            </tr>
            <tr>
                <th>Description</th>
                <td>{request.PaymentDescription}</td>
            </tr>
            <tr>
                <th>Signed Off</th>
                <td>{(request.IsSignedOff ? "Yes" : "No")}</td>
            </tr>");

        if (request.IsSignedOff && request.SignedOffAt.HasValue)
            sb.Append($@"
            <tr>
                <th>Signed Off At</th>
                <td>{request.SignedOffAt.Value:yyyy-MM-dd HH:mm}</td>
            </tr>");

        sb.Append($@"
        </table>
    </div>

    <div class='signature'>
        <p>Signature:</p>
        <p>____________________________</p>
        <p>Manager: {request.Manager?.FirstName}</p>
    </div>
</body>
</html>");

        return sb.ToString();
    }

    private byte[] GeneratePdfBytesFromHtml(string htmlContent)
    {
        var doc = new HtmlToPdfDocument()
        {
            GlobalSettings = new GlobalSettings
            {
                Orientation = Orientation.Portrait,
                PaperSize = PaperKind.A4
            },
            Objects =
            {
                new ObjectSettings
                {
                    HtmlContent = htmlContent,
                    WebSettings = { DefaultEncoding = "utf-8" }
                }
            }
        };

        return _converter.Convert(doc);
    }


    public async Task<string?> GeneratePdfStringFromHtmlAsync(AppDbContext dbContext, int paymentRequestId)
    {
        var request = await dbContext.PaymentRequests
            .FirstOrDefaultAsync(r => r.Id == paymentRequestId);

        if (request == null)
            return null;

        var html = RenderPaymentRequestHtml(request);
        var pdfBytes = GeneratePdfBytesFromHtml(html);

        return Convert.ToBase64String(pdfBytes);
    }
}