import React, { useContext } from "react";
import ElectContext from "../../../Context/ElectContext";
import Navbar from "../Navbar/Navbar";
import { IoMdAddCircle } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { TiTrash } from "react-icons/ti";

const Cart = () => {
  const { addedToCart } = useContext(ElectContext);
  const { Add } = useContext(ElectContext);
  const { Subt  } = useContext(ElectContext);
    const { totalCost  } = useContext(ElectContext);
    const { removeFromCart  } = useContext(ElectContext);
  
  return (
    <div className=" mx-auto dark:bg-gray-900 dark:text-white duration-200 relative z-40 dark:border dark:border-green-600 dark:border-b-1 dark:border-t-0 dark:border-x-0">
      <div>
        <Navbar />
      </div>

      <div className=" mt-5 dark:text-green-700 xxs:h-[100vh] sm:h-[105vh] md:h-[90vh]">
        <div className="px-10 text-center">
          <p>Shopping cart</p>
          <p>You have {addedToCart.length} item(s) in your cart </p>
        </div>
        {addedToCart.map((item) => {

            
          return (
            <div className="mt-5">
              <div className="md:w-[60%] sm:w-[70%]  px-5 mx-auto border border-gray dark:border dark:border-green-700 py-1 rounded-lg shadow-xl flex  space-x-2 mb-5 ">
                <div className=" w-[40%] xxs:flex xxs:flex-col sm:flex sm:justify-items-start xxs:gap-0 sm:gap-4 py-1   ">
                  <div className=" flex justify-center sm:border sm:border-green-700 dark:border dark:border-green-700 rounded-md xxs:w-[50%] sm:w-[15%] sm:h-[100%]   ">
                    <img
                      className="rounded-md h-[100%] "
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <p className=" text-green-700 sm:text-md font-semibold">{item.name}</p>
                    <p className=" text-green-700 sm:text-xs font-semibold">{item.brand}</p>
                  </div>
                </div>
                <div className=" xxs:w-[40%] sm:w-[20%] flex justify-center items-center   ">
                    <div className="w-[90%] flex justify-between items-center border border-gray-300 dark:border dark:border-green-700 dark:text-green-700 py-2 px-2 rounded-lg shadow-lg">
                      <div className="text-green-700" onClick={()=>Add(item.id)}>
                        <IoMdAddCircle />
                      </div>
                      <div>{item.amount}</div>
                      <div className="text-green-700" onClick={()=>Subt(item.id)}>
                        <GrSubtractCircle />
                      </div>
                    </div>
                  </div>
                
                <div className=" font-jose font-extrabold w-[40%] gap-3 px-5 flex justify-end items-center  ">
                  <div>{item.price}</div>
                  <div onClick={()=> removeFromCart(item.id)} className="text-red-500">
                  <TiTrash />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      <div className="w-[60%] rounded-lg  text-green-800 font-extrabold shadow-lg mx-auto border border-green-700 text-center p-2">
        <h1 className="font-poppins">Subtotal: <span className=" font-roboto font-extrabold"> $ {parseFloat(totalCost).toFixed(2)} </span> </h1>
      </div>
      </div>
    </div>
  );
};

export default Cart;
