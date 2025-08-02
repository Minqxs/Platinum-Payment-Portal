import React from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery, useRefetchableFragment } from "react-relay";
import { Invoices_paymentRequests$key } from "./__generated__/Invoices_paymentRequests.graphql";
import { InvoicesQuery } from "./__generated__/InvoicesQuery.graphql";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

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
    }
  }
`;
function InvoiceListPageInner({ queryRef }: Props) {
  const data = useRefetchableFragment<
    InvoicesQuery,
    Invoices_paymentRequests$key
  >(fragment, queryRef);
  const navigate = useNavigate();
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={3}>
          Payment Requests List
        </Typography>
        <List>
          {data[0].paymentRequests.map((item, idx) => {
            const detail = item.isSignedOff
              ? "Signed by: "
              : "Awaiting Sign Off from: ";

            return (
              <>
                <ListItem
                  secondaryAction={
                    <IconButton
                      onClick={() => navigate(`/invoices/edit/${item.id}`)}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={`Payment Request #${idx + 1} - Submitted by ${
                      item.submittedBy.fullName
                    } on ${new Date(item.invoiceDate).toLocaleDateString()}`}
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
