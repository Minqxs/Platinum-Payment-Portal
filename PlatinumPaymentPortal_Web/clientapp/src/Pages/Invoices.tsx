import React from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery, useRefetchableFragment } from "react-relay";
import { Invoices_paymentRequests$key } from "./__generated__/Invoices_paymentRequests.graphql";
import { InvoicesQuery } from "./__generated__/InvoicesQuery.graphql";

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
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={3}>
          Payment Requests List
        </Typography>

        <List>
          {/* Mock invoice items */}
          <ListItem divider>
            <ListItemText
              primary="Payment Request #1"
              secondary="Submitted by John Doe on 2025-07-31"
            />
          </ListItem>

          <ListItem divider>
            <ListItemText
              primary="Payment Request #2"
              secondary="Submitted by Jane Smith on 2025-07-29"
            />
          </ListItem>
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
