import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Helmet>
        <title>dashboard-addItems</title>
      </Helmet>
      <SectionTitle
        heading="📢Add An Item"
        subHeading="What's New"
      ></SectionTitle>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-11/12 md:w-8/12 mx-auto space-y-4"
        >
          {/* Recipe Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Name*</legend>
            <input
              type="text"
              {...register("name", {required: true})}
              className="input w-full"
              placeholder="Recipe Name"
            />
          </fieldset>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
            {/* category */}
            <fieldset className="fieldset w-full md:w-1/2">
              <legend className="fieldset-legend">Category*</legend>
              <select
                {...register("category", {required: true})}
                defaultValue="Pick a Category"
                className="select w-full"
                placeholder="Category"
              >
                <option disabled={true}>Select a Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </fieldset>

            {/* price */}
            <fieldset className="fieldset w-full md:w-1/2">
              <legend className="fieldset-legend">Price*</legend>
              <input
                type="text"
                {...register("price", {required: true})}
                className="input w-full"
                placeholder="Price"
              />
            </fieldset>
          </div>

          {/* recipe details */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Details*</legend>
            <textarea
            {...register("recipe", {required: true})}
              className="textarea h-24 w-full"
              placeholder="Bio"
            ></textarea>
            <div className="label">Optional</div>
          </fieldset>

          <div>
            <input {...register("image", {required: true})} type="file" className="file-input file-input-info" />
          </div>

          <button className="btn btn-soft btn-success">Add Item <FaUtensils></FaUtensils> </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
