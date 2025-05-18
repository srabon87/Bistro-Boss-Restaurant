import React from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddCart = () => {
    if (user && user.email) {
      // send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to the card`,
            showConfirmButton: false,
            timer: 1300,
          });
          //refetch cart to update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // sent the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 transition-transform hover:scale-[1.01] p-5 mx-auto lg:w-10/12 shadow-xl">
      <figure>
        <img className="rounded-lg h-60 object-cover" src={image} alt="Coming Soon" />
      </figure>
      <p className="absolute top-5 right-5 bg-black text-white px-2 py-1 rounded-md text-sm">
           ${price}
         </p>
      <div className="card-body text-center">
        <h2 className="text-center text-2xl font-bold">{name}</h2>
        <p>{recipe}</p>
        <div
          onClick={handleAddCart}
          className="card-actions justify-center"
        >
          <button className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-10 text-black">
            Add To Card
          </button>
        </div>
      </div>
    </div>

    // <div className="max-w-sm mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl bg-base-100 p-4 rounded-lg shadow-md transition-transform hover:scale-[1.01]">
    //   <div className="relative">
    //     <img
    //       className="w-full h-56 object-cover rounded-lg"
    //       src={image}
    //       alt={name}
    //     />
    //     <p className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-md text-sm">
    //       ${price}
    //     </p>
    //   </div>
    //   <div className="text-center mt-4 space-y-2">
    //     <h2 className="text-2xl font-semibold">{name}</h2>
    //     <p className="text-sm text-gray-600">{recipe}</p>
    //     <div className="flex justify-center mt-4">
    //       <button
    //         onClick={handleAddCart}
    //         className="btn btn-outline w-full max-w-[200px] bg-slate-100 border-orange-400 border-0 border-b-4 text-black"
    //       >
    //         Add To Cart
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default FoodCard;
