import {graphql, useMutation} from "react-relay";
import {useCreatePaymentRequestMutation} from "./__generated__/useCreatePaymentRequestMutation.graphql";

export const useCreatePaymentRequest = () =>
useMutation<useCreatePaymentRequestMutation>(graphql`
    mutation useCreatePaymentRequestMutation(
        $input: CreatePaymentRequestInput!
    ) {
        createPaymentRequest(input: $input) {
            paymentRequest {
                id
                coverSheetPdfPath
            }
        }
    }
`);
