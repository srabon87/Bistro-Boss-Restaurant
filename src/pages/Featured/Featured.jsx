import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg"
import "./Featured.css"
const Featured = () => {
  return (
    <div className="featured-items bg-fixed text-white pt-7 my-20">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Featured Items"}
      ></SectionTitle>
      <div className="md:flex justify-center bg-opacity-30 bg-slate-800 items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2025</p>
          <p className="uppercase font-bold">Where can I get some?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente soluta assumenda nihil tempore totam eum eveniet fuga, cum sed? Deserunt quod excepturi recusandae! Consectetur animi illo culpa obcaecati, provident explicabo nobis aperiam id illum asperiores enim sequi eius .consequuntur cum veniam modi error quos </p>
          <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 text-white">ORDER NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
