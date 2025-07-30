import React from "react";
import { Typography, Box, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        gap={3}
        mt={2}
        justifyContent="flex-start"
      >
        <Paper sx={{ p: 2, width: { xs: "100%", sm: "45%", md: "22%" } }}>
          <Typography variant="h6">New Payment Request</Typography>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            fullWidth
            onClick={() => navigate("/invoices/new")}
          >
            Capture Invoice
          </Button>
        </Paper>

        <Paper sx={{ p: 2, width: { xs: "100%", sm: "45%", md: "22%" } }}>
          <Typography variant="h6">Sign Off Requests</Typography>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            fullWidth
            onClick={() => navigate("/invoices/signoff")}
          >
            Sign Off
          </Button>
        </Paper>

        <Paper sx={{ p: 2, width: { xs: "100%", sm: "45%", md: "22%" } }}>
          <Typography variant="h6">View Payment Requests</Typography>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            fullWidth
            onClick={() => navigate("/invoices")}
          >
            View All
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}

export default DashboardPage;
