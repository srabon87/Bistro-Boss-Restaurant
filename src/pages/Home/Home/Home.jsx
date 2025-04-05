import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Boss from "../../Shared/Boss";
import Popular from "../PopularMenu/Popular";
import Call from "../../../components/Call";
import Featured from "../../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Boss></Boss>
      <Popular></Popular>
      <Call></Call>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
