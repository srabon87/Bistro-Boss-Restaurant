import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem";
import React from "react";
const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 mt-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-10 text-black">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
