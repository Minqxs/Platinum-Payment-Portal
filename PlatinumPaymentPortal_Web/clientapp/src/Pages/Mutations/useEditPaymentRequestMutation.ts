import { graphql, useMutation } from "react-relay";
import { useEditPaymentRequestMutation } from "./__generated__/useEditPaymentRequestMutation.graphql";

export const useEditPaymentRequest = () =>
  useMutation<useEditPaymentRequestMutation>(graphql`
    mutation useEditPaymentRequestMutation($input: UpdatePaymentRequestInput!) {
      updatePaymentRequest(input: $input) {
        paymentRequest {
          id
        }
      }
    }
  `);
