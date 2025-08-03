import { graphql, useMutation } from "react-relay";
import { useSignOffPaymentRequestMutation } from "./__generated__/useSignOffPaymentRequestMutation.graphql";

export const useSignOffPaymentRequest = () =>
  useMutation<useSignOffPaymentRequestMutation>(graphql`
    mutation useSignOffPaymentRequestMutation(
      $input: SignOffPaymentRequestInput!
    ) {
      signOffPaymentRequest(input: $input) {
        paymentRequest {
          id
        }
      }
    }
  `);
