import React from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const InvoiceListPage: React.FC = () => {
  // TODO: Fetch payment requests and render here

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
};

export default InvoiceListPage;
