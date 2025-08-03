import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Tooltip,
} from "@mui/material";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery, useRefetchableFragment } from "react-relay";
import { Invoices_paymentRequests$key } from "./__generated__/Invoices_paymentRequests.graphql";
import { InvoicesQuery } from "./__generated__/InvoicesQuery.graphql";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { useGeneratePaymentRequestPdf } from "./Mutations/useGeneratePaymentRequestPdf";
import { DownloadOutlined } from "@mui/icons-material";

interface Props {
  queryRef: Invoices_paymentRequests$key;
}

const query = graphql`
  query InvoicesQuery {
    ...Invoices_paymentRequests
  }
`;

const fragment = graphql`
  fragment Invoices_paymentRequests on Query
  @refetchable(queryName: " Invoices_paymentRequestsReFetchQuery") {
    paymentRequests {
      id
      submittedBy {
        id
        fullName
      }
      coverSheetPdfPath
      department {
        value: id
        label: nameOfDepartment
      }
      invoiceDate
      invoiceFile
      invoiceFileName
      isSignedOff
      manager {
        value: id
        label: fullName
      }

      paymentDateRequested
      paymentDescription
      paymentRicpientName
      proofOfPaymentFile
      proofOfPaymentFileName
      ricpientBankDetails
      paymentRequestNumber
    }
  }
`;

function InvoiceListPageInner({ queryRef }: Props) {
  const data = useRefetchableFragment<
    InvoicesQuery,
    Invoices_paymentRequests$key
  >(fragment, queryRef);
  const [generatePdf, isGeneratePdf] = useGeneratePaymentRequestPdf();
  const navigate = useNavigate();

  const downloadPaymentRequestPdf = (
    response: string,
    paymentRequestNumber: number
  ) => {
    try {
      let base64 = response;
      const cleanedBase64 = base64
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .replace(/\s/g, "");

      const padLength = 4 - (cleanedBase64.length % 4);
      const paddedBase64 =
        padLength !== 4 ? cleanedBase64 + "=".repeat(padLength) : cleanedBase64;

      const binary = atob(paddedBase64);
      const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
      const blob = new Blob([bytes], { type: "application/pdf" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `payment-request-${paymentRequestNumber}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      alert("Failed to generate or download PDF.");
    }
  };

  const handleDownloadPdf = (id: string, requestNumber: number) => {
    generatePdf({
      variables: {
        input: {
          input: {
            paymentRequestId: id ?? "",
          },
        },
      },
      onCompleted({ generatePaymentRequestPdf }) {
        console.log("hi");
        downloadPaymentRequestPdf(
          generatePaymentRequestPdf.string ?? "",
          requestNumber
        );
      },
      onError(e) {
        alert(e.message);
      },
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={3}>
          Payment Requests List
        </Typography>
        <List>
          {data[0].paymentRequests?.map((item) => {
            const detail = item.isSignedOff
              ? "Signed by: "
              : "Awaiting Sign Off from: ";

            return (
              <>
                <ListItem
                  secondaryAction={
                    <>
                      <Tooltip title={"View Invoice"} placement="left">
                        <IconButton
                          onClick={() => navigate(`/invoices/edit/${item.id}`)}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>

                      {item.isSignedOff && (
                        <Tooltip title={"Download cover page"} placement="left">
                          <IconButton
                            onClick={() => {
                              handleDownloadPdf(
                                item.id,
                                item.paymentRequestNumber
                              );
                            }}
                          >
                            <DownloadOutlined />
                          </IconButton>
                        </Tooltip>
                      )}
                    </>
                  }
                >
                  <ListItemText
                    primary={`Payment Request #${
                      item.paymentRequestNumber
                    } - Submitted by ${item.submittedBy.fullName} on ${new Date(
                      item.invoiceDate
                    ).toLocaleDateString()}`}
                    secondary={`${detail} ${item.manager.label}`}
                  />
                </ListItem>
                <ListItem divider />
              </>
            );
          })}
        </List>
      </Paper>
    </Container>
  );
}

export default function InvoiceListPage() {
  const data = useLazyLoadQuery<InvoicesQuery>(
    query,
    {},
    { fetchPolicy: "network-only" }
  );
  return <InvoiceListPageInner queryRef={data} />;
}
