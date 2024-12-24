import React, { useContext } from "react";
import { IoIosStar } from "react-icons/io";
import { FaRegHeart, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify"; // Import React Image Magnify
import { apiData } from "../ContextApi/ContextApi";

const ShopCard = () => {
  const DetailsApiData = useContext(apiData); // Fetch context data
  const { id } = useParams(); // Get product ID from route params

  // Find product by ID
  const product = DetailsApiData?.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>; // Handle invalid product case
  }

  return (
    <div className="max-w-container mx-auto md:py-20 py-10">
      <div className="mt-5 md:flex md:border gap-10 p-2 shadow-lg">
        {/* Image Section */}
        <div className="flex gap-4">
          <div className="rounded-sm w-[100px] flex flex-col gap-2">
            {product.images?.map((img, index) => (
              <img
                key={index}
                className="w-full bg-[#ebebf0] cursor-pointer"
                src={img}
                alt={`Thumbnail ${index}`}
              />
            ))}
          </div>
          <div className="md:w-[300px] w-[250px] block rounded-sm border relative">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: product.title,
                  isFluidWidth: true,
                  src: product.thumbnail,
                },
                largeImage: {
                  src: product.thumbnail,
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerStyle: {
                  border: "2px solid #000", // Tailwind `border-gray-200`
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Tailwind `shadow-lg`
                  borderRadius: "0.25rem", // Tailwind `rounded-sm`
                  overflow: "hidden",
                  background:"white",
                  display:"flex",
                },
                enlargedImageClassName: "rounded-sm", // Tailwind `rounded-sm`
                hintTextMouse: "Hover to zoom",
              }}
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="pt-5 md:pt-0">
          <h3 className="text-2xl font-bold font-josefin">{product.title}</h3>
          <div className="flex items-center gap-5">
            <div className="flex text-yellow-400">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>
            <p>(22)</p>
          </div>
          <p className="font-bold mt-2">
            ${product.price}
            <span className="text-red-500 pl-5 line-through">
              ${product.discountPercentage}
            </span>
          </p>
          <p className="font-bold mt-2">Color</p>
          <p className="text-[#8f8f97] md:text-[16px] text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus <br /> porttitor purus, et volutpat sit.
          </p>
          <h5 className="flex gap-5 font-bold items-center mt-5 font-josefin">
            Add To Cart <FaRegHeart />
          </h5>
          <p className="font-josefin mt-3">
            <span className="font-bold">Categories:</span> {product.category}
          </p>
          <p className="font-josefin mt-2">
            <span className="font-bold">Tags:</span> {product.tags?.join(", ")}
          </p>
          <div className="flex gap-5 items-center mt-2">
            <p className="font-josefin">Share</p>
            <div className="flex gap-3">
              <FaFacebook />
              <FaInstagramSquare />
              <AiFillTwitterCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
