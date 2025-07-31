import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  InputLabel,
  Autocomplete,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FTextField } from "../Components/FTextField";
import { graphql } from "relay-runtime";
import { useFragment, useLazyLoadQuery } from "react-relay";
import {
  InvoiceCaptureNodeQuery,
  InvoiceCaptureNodeQuery$data,
} from "./__generated__/InvoiceCaptureNodeQuery.graphql";
import { InvoiceCapture_Query$key } from "./__generated__/InvoiceCapture_Query.graphql";
import { InvoiceCaptureQuery } from "./__generated__/InvoiceCaptureQuery.graphql";
import { InvoiceCapture_requestPayment$key } from "./__generated__/InvoiceCapture_requestPayment.graphql";
import { useCreatePaymentRequest } from "./Mutations/useCreatePaymentRequestMutation";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  surname: Yup.string().required("Surname is required"),
  department: Yup.string().nullable(),
  invoiceDate: Yup.date()
    .required("Invoice date is required")
    .typeError("Invalid date"),
  paymentRequestedDate: Yup.date()
    .required("Payment requested date is required")
    .typeError("Invalid date"),
  paymentRecipient: Yup.string().required("Recipient name is required"),
  paymentDetails: Yup.string().required("Banking details are required"),
  description: Yup.string().required("Description is required"),
  managerName: Yup.string().nullable(),
  supplierInvoice: Yup.mixed()
    .required("Supplier invoice is required")
    .test(
      "is-pdf",
      "File must be a PDF",
      (file) => file instanceof File && file.type === "application/pdf"
    ),
  proofOfPayment: Yup.mixed().test(
    "is-pdf-or-empty",
    "Proof of payment must be a PDF",
    (file) => !file || (file instanceof File && file.type === "application/pdf")
  ),
});

interface Props {
  queryKey: InvoiceCapture_Query$key;
  paymentQuery: InvoiceCapture_requestPayment$key | null;
}
export interface AutoCompleteOption {
  label: string;
  value: unknown;
}

export interface PaymentRequisitionFormValues {
  name: string;
  surname: string;
  department: AutoCompleteOption | null;
  invoiceDate: string;
  paymentRequestedDate: string;
  paymentRecipient: string;
  paymentDetails: string;
  description: string;
  managerName: AutoCompleteOption | null;
  supplierInvoice: File | null;
  proofOfPayment?: File | null;
}

const nodeQuery = graphql`
  query InvoiceCaptureNodeQuery($id: ID!, $skip: Boolean!) {
    ...InvoiceCapture_Query
    node(id: $id) @skip(if: $skip) {
      ... on PaymentRequest {
        ...InvoiceCapture_requestPayment
      }
    }
  }
`;

const paymentResFragment = graphql`
  fragment InvoiceCapture_requestPayment on PaymentRequest {
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
      label: firstName
      value: id
    }
    paymentDateRequested
    paymentDescription
    paymentRicpientName
    proofOfPaymentFile
    proofOfPaymentFileName
    ricpientBankDetails
  }
`;

const fragment = graphql`
  fragment InvoiceCapture_Query on Query
  @refetchable(queryName: "InvoiceCaptureRefetchQuery") {
    paymentRequests {
      id
    }
  }
`;

function InvoiceCapturePageInner({ queryKey, paymentQuery }: Props) {
  const [create, isCreating] = useCreatePaymentRequest();
  const data = useFragment<InvoiceCapture_requestPayment$key>(
    paymentResFragment,
    paymentQuery
  );

  const initialValues: PaymentRequisitionFormValues = {
    name: "",
    surname: "",
    department: data?.department ?? null,
    invoiceDate: data?.invoiceDate ?? "",
    paymentRequestedDate: data?.paymentDateRequested ?? "",
    paymentRecipient: data?.paymentRicpientName ?? "",
    paymentDetails: data?.ricpientBankDetails ?? "",
    description: data?.paymentDescription ?? "",
    managerName: data?.manager ?? null,
    supplierInvoice: null,
    proofOfPayment: null,
  };

  const handleSubmit = async (values: typeof initialValues) => {
    const isEditMode = data != null;

    // if (!isEditMode) {
    //   create({
    //     variables: {
    //       input: {
    //         input: {
    //           description: values.description ?? "",
    //           invoiceDate: values.invoiceDate ?? "",
    //           managerId: (values.managerName?.value as string) ?? "",
    //           paymentDetails: values.paymentDetails ?? "",
    //           paymentRecipient: values.paymentRecipient ?? "",
    //           paymentRequestedDate: values.paymentRequestedDate,
    //           departmentId: (values.department?.value as string) ?? "",
    //         },
    //       },
    //     },
    //   });
    // }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={3}>
          Capture Invoice Details
        </Typography>
        <Formik<PaymentRequisitionFormValues>
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ submitForm, setFieldValue }) => (
            <>
              <FTextField
                field="name"
                label="Name"
                showError
                showErrorCaption
              />
              <FTextField
                field="surname"
                label="Surname"
                showError
                showErrorCaption
              />
              <Autocomplete
                disablePortal
                options={[]}
                renderInput={(params) => (
                  <FTextField
                    field={"department"}
                    {...params}
                    label="Department"
                    showError
                    showErrorCaption
                  />
                )}
              />

              <FTextField
                field="invoiceDate"
                label="Date of Invoice"
                type="date"
                InputLabelProps={{ shrink: true }}
                showError
                showErrorCaption
              />
              <FTextField
                field="paymentRequestedDate"
                label="Date Payment Requested"
                type="date"
                InputLabelProps={{ shrink: true }}
                showError
                showErrorCaption
              />
              <FTextField
                field="paymentRecipient"
                label="Name of Recipient "
                multiline
                showError
                showErrorCaption
              />
              <FTextField
                field="paymentDetails"
                label="Banking Details"
                multiline
                minRows={2}
                showError
                showErrorCaption
              />
              <FTextField
                field="description"
                label="Description of Payment"
                multiline
                minRows={3}
                showError
                showErrorCaption
              />

              <Autocomplete
                disablePortal
                options={[]}
                renderInput={(params) => (
                  <FTextField
                    field="managerName"
                    {...params}
                    label="Manager Name and Surname"
                  />
                )}
              />

              {/* Signature Upload */}
              {/* <Box mt={2}>
                <InputLabel>Manager Signature (Upload)</InputLabel>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setManagerSignature(e.target.files?.[0] || null)
                  }
                />
              </Box> */}

              {/* Supplier Invoice */}
              <Box mt={2}>
                <InputLabel>Supplier Invoice (PDF)</InputLabel>
                <input
                  name="supplierInvoice"
                  type="file"
                  accept="application/pdf"
                  required
                  onChange={(e) =>
                    setFieldValue(
                      "supplierInvoice",
                      e.target.files?.[0] || null
                    )
                  }
                />
              </Box>

              {/* Proof of Payment */}
              <Box mt={2}>
                <InputLabel>Proof of Payment (Optional)</InputLabel>
                <input
                  name="proofOfPayment"
                  type="file"
                  accept="application/pdf"
                  onChange={(e) =>
                    setFieldValue("proofOfPayment", e.target.files?.[0] || null)
                  }
                />
              </Box>

              <Button
                variant="contained"
                type="submit"
                onClick={submitForm}
                sx={{ mt: 3 }}
              >
                Save Invoice Details
              </Button>
            </>
          )}
        </Formik>
      </Paper>
    </Container>
  );
}

const query = graphql`
  query InvoiceCaptureQuery {
    ...InvoiceCapture_Query
  }
`;

export default function InvoiceCapturePage({ id }: { id?: string }) {
  if (id) {
    return <InvoiceCaptureEditPage id={id} />;
  }

  return <InvoiceCaptureCreatePage />;
}

function InvoiceCaptureEditPage({ id }: { id: string }) {
  const data = useLazyLoadQuery<InvoiceCaptureNodeQuery>(
    nodeQuery,
    { id, skip: id != null },
    { fetchPolicy: "network-only" }
  );

  return (
    <InvoiceCapturePageInner queryKey={data} paymentQuery={data.node ?? null} />
  );
}

function InvoiceCaptureCreatePage() {
  const data = useLazyLoadQuery<InvoiceCaptureQuery>(
    query,
    {},
    { fetchPolicy: "network-only" }
  );

  return <InvoiceCapturePageInner queryKey={data} paymentQuery={null} />;
}
