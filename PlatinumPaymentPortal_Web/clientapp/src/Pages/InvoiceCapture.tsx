import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Container,
  Paper,
  InputLabel,
} from "@mui/material";

export default function InvoiceCapturePage() {
  const [submittedBy, setSubmittedBy] = useState("");
  const [department, setDepartment] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [paymentRequestedDate, setPaymentRequestedDate] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [description, setDescription] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerSignature, setManagerSignature] = useState<File | null>(null);
  const [supplierInvoice, setSupplierInvoice] = useState<File | null>(null);
  const [proofOfPayment, setProofOfPayment] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("submittedBy", submittedBy);
    formData.append("department", department);
    formData.append("invoiceDate", invoiceDate);
    formData.append("paymentRequestedDate", paymentRequestedDate);
    formData.append("paymentDetails", paymentDetails);
    formData.append("description", description);
    formData.append("managerName", managerName);
    if (managerSignature) formData.append("managerSignature", managerSignature);
    if (supplierInvoice) formData.append("supplierInvoice", supplierInvoice);
    if (proofOfPayment) formData.append("proofOfPayment", proofOfPayment);

    // TODO: Submit `formData` to backend (GraphQL upload or REST)

    alert("Invoice data captured (mock)");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={3}>
          Capture Invoice Details
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Name and Surname (Submitted by)"
            value={submittedBy}
            onChange={(e) => setSubmittedBy(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Date of Invoice"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Date Payment Requested"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={paymentRequestedDate}
            onChange={(e) => setPaymentRequestedDate(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Details of Payment (Name/Company, Bank Details)"
            value={paymentDetails}
            onChange={(e) => setPaymentDetails(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            minRows={2}
            required
          />
          <TextField
            label="Description of Payment"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            minRows={3}
            required
          />
          <TextField
            label="Manager Name and Surname"
            value={managerName}
            onChange={(e) => setManagerName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />

          {/* Signature Upload */}
          <Box mt={2}>
            <InputLabel>Manager Signature (Upload)</InputLabel>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setManagerSignature(e.target.files?.[0] || null)}
            />
          </Box>

          {/* Supplier Invoice */}
          <Box mt={2}>
            <InputLabel>Supplier Invoice (PDF)</InputLabel>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setSupplierInvoice(e.target.files?.[0] || null)}
              required
            />
          </Box>

          {/* Proof of Payment */}
          <Box mt={2}>
            <InputLabel>Proof of Payment (Optional)</InputLabel>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setProofOfPayment(e.target.files?.[0] || null)}
            />
          </Box>

          <Button variant="contained" type="submit" sx={{ mt: 3 }}>
            Save Invoice Details
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
