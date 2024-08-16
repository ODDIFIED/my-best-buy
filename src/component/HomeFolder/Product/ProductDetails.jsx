import React from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { ProductAPI } from "../../../Data";
import { HashLink as Link } from "react-router-hash-link";

import { FaArrowLeft } from "react-icons/fa";

import PcardDetails from "./PcardDetails";

const ProductDetails = () => {
  const { id } = useParams();
  console.log("Product ID from params:", id);

  const products = ProductAPI.flatMap((category) => category.products);
  console.log("All products:", products);

  const item = products.find((products) => products.id === Number(id));
  console.log("Found product:", item);



  if (!item) {
    return (
      <div>
        <Navbar />
        <div>
          <p className=" text-center font-jose text-green-600  pb-3 font-bold">
            Product not found
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" absolute   dark:bg-gray-900 dark:text-white ">
      <div className="absolute">
          <Navbar/>
        </div>
      <div className="sm:mt-92 xxs:mt-5  relative xxs:h-[102vh] sm:h-[100vh] ">
        
         <PcardDetails item={item} />
      </div>
    </div>
  );
};

export default ProductDetails;
