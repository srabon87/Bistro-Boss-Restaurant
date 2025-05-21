import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { MdPayment } from "react-icons/md";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment error", error);
      setError(error.message);
    } else {
      console.log("Payment method", paymentMethod);
      setError('');
    }
  };

  return (
    <div className="md:w-7/12 mx-auto mt-36 sm:w-7/12">
      <form onSubmit={handleSubmit}>
        <CardElement>
          options=
          {{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        </CardElement>
        <div className="flex flex-col items-center justify-center mt-5 mx-auto w-5/12">
          <button
            className="btn btn-primary btn-soft w-full"
            type="submit"
            disabled={!stripe}
            style={{ marginTop: "20px" }}
          >
            Pay <MdPayment />
          </button>
          <p className="text-red-600 mt-5">{error}</p>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
