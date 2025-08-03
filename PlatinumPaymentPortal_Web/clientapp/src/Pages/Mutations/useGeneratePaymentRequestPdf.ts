import {graphql, useMutation} from "react-relay";
import {useGeneratePaymentRequestPdfMutation} from "./__generated__/useGeneratePaymentRequestPdfMutation.graphql";

export const useGeneratePaymentRequestPdf = () =>
useMutation<useGeneratePaymentRequestPdfMutation>(graphql`
    mutation useGeneratePaymentRequestPdfMutation(
        $input: GeneratePaymentRequestPdfInput!
    ) {
        generatePaymentRequestPdf(input: $input) {
            string
        }
    }
`);
