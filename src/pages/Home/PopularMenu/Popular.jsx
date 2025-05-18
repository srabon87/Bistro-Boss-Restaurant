import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../hooks/useMenu";
import React from "react";

const Popular = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-20">
      <SectionTitle
        subHeading={"Popular Items"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4 text-black">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default Popular;
