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
    if(user && user.email){
      // send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to the card`,
            showConfirmButton: false,
            timer: 1300
          });
          //refetch cart to update the cart items count
          refetch();
        }
      })
    }else{
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login"
      }).then((result) => {
        if (result.isConfirmed) {
          // sent the user to the login page
          navigate('/login', {state: {from: location}});
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 mx-auto md:w-10/12 lg:w-9/12 shadow-xl">
      <figure>
        <img className="rounded-3xl" src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 w-[45px] rounded-md bg-black text-white">
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
  );
};

export default FoodCard;
