import { Helmet } from "react-helmet-async";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import React from "react";
const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Foods</title>
      </Helmet>
      <Cover img={orderCover} title="Order Food"></Cover>
      <Tabs
        className="mb-10"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="font-serif font-bold flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 mb-10 mt-10">
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        {/* <TabList className="font-serif mx-auto md:w-9/12 sm:w-1/12 font-bold flex justify-evenly mb-10 mt-10">
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DIRINKS</Tab>
        </TabList> */}
        <TabPanel>
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
            {salad.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div> */}
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          {/* <div className="grid md:grid-cols-3 gap-10">
            {pizza.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div> */}
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          {/* <div className="grid md:grid-cols-3 gap-10">
            {soup.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div> */}
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          {/* <div className="grid md:grid-cols-3 gap-10">
            {desserts.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div> */}
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          {/* <div className="grid md:grid-cols-3 gap-10">
            {offered.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div> */}
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
