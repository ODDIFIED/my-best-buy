import React, { useState } from "react";
import { ProductAPI } from "../../../Data";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ElectContext from "../../../Context/ElectContext";

const ProductCard = () => {
  const { AddToCart } = useContext(ElectContext);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const showCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className=" w-full   dark:bg-gray-900 dark:text-white  pt-5 text-center md:px-10  mx-auto" id="shop">
        <h1 className="font-jose text-green-600  pb-5 font-bold">Products</h1>
        <div className="">
          <div className=" dark:border dark:border-green-600  dark:bg-gray-900 dark:text-white bg-gray-200 rounded-xl  p-3  xxs:flex xxs:flex-wrap xxs:gap-2 xxs:justify-evenly sm:gap-0    ">
            {ProductAPI.map((item) => {
              return (
                <div>
                  <button
                    key={item.category}
                    className=" text-sm bg-green-700 text-white rounded-xl p-2"
                    onClick={() => showCategory(item.category)}
                  >
                    {item.category}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div  className="mt-3">
          <motion.div className=" place-items-center xxs:grid xxs:grid-cols-1 xs:grid-cols-2  sm:grid-cols-3   ">
            {ProductAPI.map((items) =>
              items.products.map((products) =>
                items.category === selectedCategory ? (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className=" mt-7 mb-10 hover:shadow-lg border  border-gray-200 dark:border-green-600  rounded py-4 xxs:w-[80%] xxs:h-[90%] sm:w-[75%] md:w-[80%] lg:w-[55%]      "
                  >
                    <Link to={`/ProductDetails/${products.id}`}>
                    <div className="flex justify-center  pt-2 ">
                      <img
                        className=" object-contain xxs:w-48 sm:w-48 h-32  "
                        src={products.image}
                        alt={products.name}
                        />
                    </div>
                        </Link>
                    <div className="p-3">
                      <h2 className="font-roboto mt-3 xxs:text-xs sm:text-xs  md:text-sm font-semibold sm:text-right">
                        {products.name}
                      </h2>
                      <hr className="border-t-1 border-green-600 my-2" />
                      <h6 className=" font-normal mt-2  text-gray-500 xxs:text-xs sm:text-xs  md:text-sm  sm:text-right">
                        {products.features}
                      </h6>
                      <p className="mt-3 font-roboto font-bold text-sm sm:text-right">
                        $ {products.price}
                      </p>
                    </div>

                    <div className=" mt-3 sm:pb-3 items-center">
                      <button
                        onClick={() => AddToCart(products)}
                        className="   sm:mt-2 rounded border border-green-600 bg-green-700 text-white font-jose font-semibold xxs:px-3 xxs:py-2 md:px-10 ss:py-2 "
                      >
                        Add to cart
                      </button>
                    </div>
                  </motion.div>
                ) : null
              )
            )}
          </motion.div>
        
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
