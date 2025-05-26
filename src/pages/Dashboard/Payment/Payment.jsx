import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO:add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div>
      <Helmet>
        <title>Payments Getway | Dashboard</title>
      </Helmet>
      <div className="text-xl w-8/12 mx-auto">
      <SectionTitle
        heading="Payment"
        subHeading="Please Pay To Eat"
      ></SectionTitle>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
