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
import { Formik } from "formik";
import * as Yup from "yup";
import { FTextField } from "../Components/FTextField";
import { graphql } from "relay-runtime";
import {
  useFragment,
  useLazyLoadQuery,
  useRefetchableFragment,
} from "react-relay";
import { InvoiceCaptureNodeQuery } from "./__generated__/InvoiceCaptureNodeQuery.graphql";
import { InvoiceCapture_Query$key } from "./__generated__/InvoiceCapture_Query.graphql";
import { InvoiceCaptureQuery } from "./__generated__/InvoiceCaptureQuery.graphql";
import { InvoiceCapture_requestPayment$key } from "./__generated__/InvoiceCapture_requestPayment.graphql";
import { useCreatePaymentRequest } from "./Mutations/useCreatePaymentRequestMutation";
import { useParams } from "react-router-dom";
import { InvoiceCaptureRefetchQuery } from "./__generated__/InvoiceCaptureRefetchQuery.graphql";
import { useGeneratePaymentRequestPdf } from "./Mutations/useGeneratePaymentRequestPdf";
import { useEditPaymentRequest } from "./Mutations/useEditPaymentRequestMutation";

const getValidationSchema = (isEditMode: boolean) =>
  Yup.object({
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
    supplierInvoice: isEditMode
      ? Yup.mixed().nullable()
      : Yup.mixed()
          .required("Supplier invoice is required")
          .test(
            "is-pdf",
            "File must be a PDF",
            (file) => file instanceof File && file.type === "application/pdf"
          ),
    proofOfPayment: Yup.mixed().test(
      "is-pdf-or-empty",
      "Proof of payment must be a PDF",
      (file) =>
        !file || (file instanceof File && file.type === "application/pdf")
    ),
  });
interface Props {
  queryKey: InvoiceCapture_Query$key;
  paymentQueryKey: InvoiceCapture_requestPayment$key | null;
}

export interface AutoCompleteOption {
  label: string;
  value: unknown;
}

export interface PaymentRequisitionFormValues {
  fullname: string;
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
      value: id
      label: fullName
    }
    submittedBy {
      id
      fullName
    }

    paymentDateRequested
    paymentDescription
    paymentRicpientName
    proofOfPaymentFile
    proofOfPaymentFileName
    ricpientBankDetails
    invoiceFileName
    proofOfPaymentFileName
  }
`;

const fragment = graphql`
  fragment InvoiceCapture_Query on Query
  @refetchable(queryName: "InvoiceCaptureRefetchQuery") {
    managers {
      value: id
      label: fullName
    }
    departments {
      value: id
      label: nameOfDepartment
    }
  }
`;

function InvoiceCapturePageInner({ queryKey, paymentQueryKey }: Props) {
  const [create, isCreating] = useCreatePaymentRequest();
  const [edit, isEditing] = useEditPaymentRequest();
  const [generatePdf, isGeneratePdf] = useGeneratePaymentRequestPdf();
  const data = useFragment<InvoiceCapture_requestPayment$key>(
    paymentResFragment,
    paymentQueryKey
  );
  console.log({ data });
  const [dropdown] = useRefetchableFragment<
    InvoiceCaptureRefetchQuery,
    InvoiceCapture_Query$key
  >(fragment, queryKey);
  const d = new Date(data?.paymentDateRequested ?? "")
    .toISOString()
    .split("T")[0];
  console.log();
  const initialValues: PaymentRequisitionFormValues = {
    fullname: data?.submittedBy.fullName ?? "",
    department: data?.department ?? null,
    invoiceDate:
      new Date(data?.invoiceDate ?? "").toISOString().split("T")[0] ?? "",
    paymentRequestedDate:
      new Date(data?.paymentDateRequested ?? "").toISOString().split("T")[0] ??
      "",
    paymentRecipient: data?.paymentRicpientName ?? "",
    paymentDetails: data?.ricpientBankDetails ?? "",
    description: data?.paymentDescription ?? "",
    managerName: data?.manager ?? null,
    supplierInvoice: null,
    proofOfPayment: null,
  };

  console.log({ initialValues });
  const handleSubmit = async (values: typeof initialValues) => {
    const isEditMode = data != null;

    if (!isEditMode) {
      create({
        variables: {
          input: {
            input: {
              description: values.description ?? "",
              invoiceDate: new Date(values.invoiceDate).toISOString() ?? "",
              managerId: (values.managerName?.value as string) ?? "",
              paymentDetails: values.paymentDetails ?? "",
              paymentRecipient: values.paymentRecipient ?? "",
              paymentRequestedDate: new Date(
                values.paymentRequestedDate
              ).toISOString(),
              departmentId: (values.department?.value as string) ?? "",
              supplierInvoice: values.supplierInvoice ?? null,
            },
          },
        },
        onCompleted() {
          console.log("k");
        },
        onError(e) {
          console.log(e);
        },
      });
    } else {
      edit({
        variables: {
          input: {
            input: {
              paymentRequestId: data.id,
              description: values.description ?? "",
              invoiceDate: values.invoiceDate ?? "",
              managerId: (values.managerName?.value as string) ?? "",
              paymentDetails: values.paymentDetails ?? "",
              paymentRecipient: values.paymentRecipient ?? "",
              paymentRequestedDate: values.paymentRequestedDate,
              departmentId: (values.department?.value as string) ?? "",
            },
          },
        },
        onCompleted() {},
        onError(e) {},
      });
    }
  };
  const isEditMode = !!data?.id;
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={3}>
          Capture Invoice Details
        </Typography>
        <Formik<PaymentRequisitionFormValues>
          initialValues={initialValues}
          validationSchema={getValidationSchema(isEditMode)}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ submitForm, setFieldValue, values }) => (
            <>
              <FTextField
                field="fullname"
                label="Submitted by (Name and Surname )"
                showError
                showErrorCaption
                disabled
              />

              <Autocomplete
                options={dropdown.departments ?? []}
                value={values.department || null}
                onChange={(event, value) => {
                  setFieldValue("department", value);
                }}
                renderInput={(params) => (
                  <FTextField
                    field="department"
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
                options={dropdown.managers ?? []}
                value={values.managerName || null}
                onChange={(event, value) => {
                  setFieldValue("managerName", value);
                }}
                renderInput={(params) => (
                  <FTextField
                    field="managerName"
                    {...params}
                    label="Manager Name and Surname"
                    showError
                    showErrorCaption
                  />
                )}
              />

              {/* Supplier Invoice */}
              <Box mt={2}>
                {data?.invoiceFileName != null && (
                  <Typography>{`Existing File:${data?.invoiceFileName}`}</Typography>
                )}
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
                {data?.proofOfPaymentFileName != null && (
                  <Typography>{`Existing File:${data?.proofOfPaymentFileName}`}</Typography>
                )}
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

export default function InvoiceCapturePage() {
  const { paymentId } = useParams<{ paymentId?: string }>();
  if (paymentId != null || paymentId != undefined) {
    return <InvoiceCaptureEditPage id={paymentId} />;
  }

  return <InvoiceCaptureCreatePage />;
}
interface EditProp {
  id: string;
}
function InvoiceCaptureEditPage({ id }: EditProp) {
  const skip = id === null;
  const data = useLazyLoadQuery<InvoiceCaptureNodeQuery>(
    nodeQuery,
    { id, skip },
    { fetchPolicy: "network-only" }
  );
  return (
    <InvoiceCapturePageInner
      queryKey={data}
      paymentQueryKey={data.node ?? null}
    />
  );
}

function InvoiceCaptureCreatePage() {
  const data = useLazyLoadQuery<InvoiceCaptureQuery>(
    query,
    {},
    { fetchPolicy: "network-only" }
  );

  return <InvoiceCapturePageInner queryKey={data} paymentQueryKey={null} />;
}
