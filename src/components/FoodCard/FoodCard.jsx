import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  const handleAddCart = food => {
    console.log(food);
  }
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
        onClick={() => handleAddCart(item)}
        className="card-actions justify-center">
          <button className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-10 text-black">
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
