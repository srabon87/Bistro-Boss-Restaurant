import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { MdPayment } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [cart, refetch] = useCart();
  // const { reset } = useForm;
  // const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const totalPrice = parseFloat(
    cart.reduce((total, item) => total + item.price, 0).toFixed(2)
  );

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log("Client secret:", res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch((err) => {
          console.error("Error creating payment intent:", err);
        });
    }
  }, [axiosSecure, totalPrice]);

  // useEffect(() => {
  //   axiosSecure
  //     .post("/create-payment-intent", { price: totalPrice })
  //     .then((res) => {
  //       console.log(res.data.clientSecret);
  //       setClientSecret(res.data.clientSecret);
  //     });
  // }, [axiosSecure, totalPrice]);

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
      setError("");
    }

    // confirm payment //
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user.displayName || "anonymous",
          },
        },
      });

    // if (confirmError) {
    //   console.log("confirm error");
    // } else {
    //   console.log("payment intent", paymentIntent);
    //   if (paymentIntent.status === "succeeded") {
    //     console.log("transaction id", paymentIntent.id);
    //     setTransactionId(paymentIntent.id);
    //   }
    // }

    if (confirmError) {
      console.log("Confirm error:", confirmError.message);
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: confirmError.message,
        confirmButtonColor: "#d33",
      });
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: moment().utc().format("YYYY-MM-DD HH:mm:ss"), // utc date convert. use Moment js
          // date: new Date(), // utc date convert. use Moment js
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment save", res.data);
        refetch();
        // if(res.data?.paymentResult?.insertedId){
        //   Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: "Thank You for giving us taka poisha",
        //     showConfirmButton: false,
        //     timer: 1500
        //   });
        // }
      }

      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          // text: `Transaction ID: ${paymentIntent.id}`,
          text: 'Thank You for Submiting Payment',
          confirmButtonColor: "#3085d6",
        });
        navigate('/dashboard/paymentHistory')
      }
    }
  };

  return (
    <div className="lg:w-5/12 md:w-7/12 mx-auto mt-36 sm:w-7/12">
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
            disabled={!stripe || !clientSecret}
            style={{ marginTop: "20px" }}
          >
            Pay <MdPayment />
          </button>
          <p className="text-red-600 mt-8">{error}</p>
          {transactionId && (
            <p className="text-green-600">
              Your Transaction id: {transactionId}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
