import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// TODO:add publishable key
const stripePromise = loadStripe('');

const Payment = () => {
  return (
    <div>
      <Helmet>
        <title>Payments Getway | Dashboard</title>
      </Helmet>
      <SectionTitle
        heading="Payment"
        subHeading="Please Pay To Eat"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>

        </Elements>
      </div>
    </div>
  );
};

export default Payment;
