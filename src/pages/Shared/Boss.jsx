import bgImage from "../../assets/shop/banner2.jpg";
import React from "react";
const Boss = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="md:w-full md:h-[540px] sm:w-[700px] flex justify-center items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center bg-opacity-90 bg-white w-9/12 p-14">
        <h1 className="font-bold text-black text-2xl sm:text-2xl md:text-4xl lg:text-5xl">
        Bistro Boss
        </h1>
        <h2 className=" text-black mt-4 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</h2>
        </div>
      </div>
    </div>
  );
};

export default Boss;