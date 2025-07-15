import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { CircularProgress } from "@mui/material";

const ButtonWrapper = ({ amount, showSpinner, onSuccess }) => {
  const [{ isPending }] = usePayPalScriptReducer();

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount.toString(),
            currency_code: "USD",
          },
        },
      ],
      application_context: {
        shipping_preference: "NO_SHIPPING",
      },
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      onSuccess(details);
    });
  };

  return (
    <>
      {showSpinner && isPending && <CircularProgress />}
      <PayPalButtons
        style={{
          layout: "vertical",
          color: "gold",
          shape: "pill",
          label: "donate",
          height: 45,
        }}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </>
  );
};

export const PayPalDonationButton = ({ amount, onSuccess }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "test", // Replace with your live client ID
        currency: "USD",
        components: "buttons",
        intent: "capture",
        commit: "true", // Show Pay Now button immediately
      }}
    >
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <ButtonWrapper
          amount={amount}
          showSpinner={false}
          onSuccess={onSuccess}
        />
      </div>
    </PayPalScriptProvider>
  );
};
