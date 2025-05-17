import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and thenget an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if(res.data.success){
      // now send ther data menu item data to the server with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      }
      const menuRes = await axiosSecure.post('/menu', menuItem);
      console.log(menuRes.data);
      if(menuRes.data.insertedId){
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log( 'with image url', res.data);
  };
  return (
    <div>
      <Helmet>
        <title>Dashboard | Add Items</title>
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
              {...register("name", { required: true })}
              className="input w-full"
              placeholder="Recipe Name"
            />
          </fieldset>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
            {/* category */}
            <fieldset className="fieldset w-full md:w-1/2">
              <legend className="fieldset-legend">Category*</legend>
              <select
                {...register("category", { required: true })}
                defaultValue="default"
                className="select w-full"
                placeholder="Category"
              >
                <option value="default" disabled={true}>
                  Select a Category
                </option>
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
                {...register("price", { required: true })}
                className="input w-full"
                placeholder="Price"
              />
            </fieldset>
          </div>

          {/* recipe details */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Details*</legend>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea h-24 w-full"
              placeholder="Bio"
            ></textarea>
          </fieldset>

          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-info"
            />
          </div>

          <button className="btn btn-soft btn-success">
            Add Item <FaUtensils></FaUtensils>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
