import React, { useContext } from "react";
import ElectContext from "../../../Context/ElectContext";

const PcardDetails = ({ item }) => {
    const {AddToCart} = useContext(ElectContext)
  return (
    <div className="xxs:mt-5 sm:mt-20">
      <div className=" sm:px-24  sm:flex sm:justify-center sm:flex-row  xxs:flex xxs:flex-col xxs:justify-center  gap-5 ">
        <div className="flex justify-center items-center xxs:w-[100%] sm:w-[50%]">
          <div className=" shadow-lg dark:shadow-2xl rounded-md xxs:w-[100%] sm:w-[70%]  flex justify-center items-center   ">
            <img
              className=" object-contain xxs:w-[100%]  sm:w-[85%] sm:h-[70%] "
              src={item.image}
              alt={item.name}
            /> 
          </div>
        </div>
        <div className=" mx-auto text-center  xxs:place-content-center xxs:items-center sm:items-center xxs:w-[90%]  sm:w-[50%] sm:text-start sm:mt-5 ">
            <p className="font-jose font-bold text-green-700">Description</p>
          <h1 className="text-4xl py-4 font-roboto font-bold"> {item.name} </h1>
          <p className="font-roboto">Brand:{item.brand}</p>
          <ul className="sm:w-[80%] xxs:py-2 sm:py-2 ">
            {item.features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
          </ul>
            <p className="font-roboto font-bold xxs:py-2">Price: ${item.price}</p>
          <div className="  sm:pb-3 items-center">
            <button
              onClick={() => AddToCart(item)}
              className=" xxs:mt-2 rounded border border-green-600 bg-green-700 text-white xxs:px-2 xxs:py-2 md:px-10 ss:py-2 "
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcardDetails;
