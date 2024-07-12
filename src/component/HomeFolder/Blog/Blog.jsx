import React from "react";
import delivery from "../../../assets/blogs/delivery_service_bag.png";
import woman from "../../../assets/blogs/Young_woman_working_in_office_.png";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

const IconTube =[
  {
    id: 1,
    icon : <FaArrowRightArrowLeft />,
    feature: "Trade In",
    Desc: "Trade in your old devices for new ones"
  },
  {
    id: 2,
    icon : <MdHealthAndSafety />,
    feature: "BigBuy+",
    Desc: "Extra Protection and Peace of mind"
  },
  {
    id: 3,
    icon : <MdSupportAgent />,
    feature: "24/7 Support",
    Desc: "We've got you Covered"
  }
]

const Blog = () => {
  return (
    <div className="sm:px-10 py-10 mx-auto   bg-white xxs:p-5   dark:bg-gray-900 dark:text-white"  id="blog">
      <div className="text-center">
        <p className="font-jose text-green-600   font-extrabold">Blog</p>
      </div>
      <div className=" xxs:flex-col-reverse  sm:px-5 sm:flex sm:flex-row  sm:justify-between  sm:mx-auto mt-16 items-center">
        {/* left side */}

        <div className="sm:w-[50%] xxs:mt-5 ">
          <h1 className="font-roboto text-green-700 font-extrabold t xxs:text-3xl sm:text-4xl pb-4">
            Quick and Reliable delivery
          </h1>
          <p className="sm:w-[90%]">
            Get your order delivered in no time! Enjoy our super-fast, reliable
            service and have your items at your doorstep before you know it.
            Order now for quick delivery and experience the convenience of
            shopping with us. Satisfaction guaranteed!
          </p>
        </div>
        {/* right side */}
        <div className="sm:w-[35%] xxs:w-[100%]">
          <div className=" sm:flex sm:justify-end xxs:mt-4 sm:mt-0 ">
            <img className="w-[100%] " src={delivery} alt="DELIVERY-MAN" />
          </div>
        </div>
      </div>
      <div className=" xxs:flex-col-reverse  sm:px-5 sm:flex sm:flex-row-reverse sm:justify-between  sm:mx-auto  items-center mt-20">
        {/* left side */}

        <div className="sm:w-[50%] xxs:mt-5 sm:text-end  ">
          <h1 className="font-roboto  text-green-700 font-extrabold text-4xl pb-4">
            24/7 Customer Service
          </h1>
          <p className="w-[90%] sm:ml-12 ">
            Introducing our 24/7 customer service, designed to serve you
            anytime, anywhere! Whether you need assistance with an order, have a
            question, or require support, our dedicated team is available around
            the clock. We pride ourselves on quick responses and effective
            solutions, ensuring a seamless shopping experience. Trust us to be
            there for you whenever you need us—day or night!
          </p>
        </div>
        {/* right side */}
        <div className="sm:w-[35%] xxs:w-[100%]">
          <div className=" flex justify-end xxs:mt-4 sm:mt-0 ">
            <img className="w-[100%] " src={woman} alt="DELIVERY-MAN" />
          </div>
        </div>
      </div>

      <div className="mt-20 sm:pb-7 ">
        <div className="   sm:flex sm:justify-evenly items-center">
          {IconTube.map((item)=>{
            return(


              <div className="border border-green-700 border-x-2 border-y-2 xxs:mt-5 sm:mt-0 text-green-700 w-44 h-52  text-center py-5 rounded-xl mx-auto px-4">
                <div className="flex justify-center text-5xl text-green-700">
                {item.icon }

                </div>
                <h1 className="flex justify-center font-righteous mt-2 text-green-600">
                  {item.feature}
                </h1>
                <h3 className="mt-5"> 
                  {item.Desc}
                </h3>
              </div>
        )
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
