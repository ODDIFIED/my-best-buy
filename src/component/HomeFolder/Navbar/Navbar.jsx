import React, { useContext, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { CiSearch } from "react-icons/ci";
import { AiFillShopping } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import Darkmode from "./Darkmode";
import ElectContext from "../../../Context/ElectContext";

const Navbar = () => {
  const { addedToCart } = useContext(ElectContext);

  const MenuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Shop",
      link: "/#shop",
    },
    {
      id: 3,
      name: "Blogs",
      link: "/#blog",
    },
  ];

  const [nav, setNav] = useState(false);

  const handleaNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" mx-auto dark:bg-gray-900 dark:text-white duration-200 relative z-40 dark:border dark:border-green-600 dark:border-b-1 dark:border-t-0 dark:border-x-0">
      <div className=" sm:flex sn:justify-between sm:items-center xxs:hidden sm:px-10 md:px-10 py-3">
        <div className=" w-50% container flex justify-start items-center ">
          {/* left side */}
          <div>
            <Link to={"/"}>
              <p className="font-righteous capitalize sm:text-3xl md:text-3xl text-green-600  ">
                Bigbuy.
              </p>
            </Link>
          </div>
          <div>
            <div className="sm:flex sm:items-center  items-center   ">
              {MenuLinks.map((data, index) => {
                return (
                  <div className="ml-5" key={index}>
                    <Link to={data.link}>{data.name}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-50%  flex justify-evenly space-x-5 items-center">
          {/* search container */}
          <div className="relative group hidden xs:hidden sm:block ">
            <input
              type="text"
              placeholder="Search "
              className="search-bag text-sm text-white   dark:text-gray-400 px-2 py-1 rounded bg-black dark:bg-white"
            />
            <CiSearch className="text-xl   text-green-500 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
          </div>
            <Link to={'/Cart'}>
          <div  className="flex">
            <AiFillShopping  size={25} color="green" className="green" />
            <span className="text-xs border border-black bg-black dark:bg-green-600 text-white rounded-full  h-full  px-1  place-self-auto">
              {addedToCart.length}
            </span>
          </div>
          </Link>
          <div>
            {/* dark mode */}
            <Darkmode />
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="w-full max-w-full  dark:bg-gray-900 dark:text-white  duration-200 relative">
        <div className="  xxs:flex sm:hidden  py-3 xxs:px-5 sm:px-10">
          <div className=" container flex justify-between items-center ">
            {/* left side */}
            <div>
              <Link to={"/"}>
                <p className="font-righteous capitalize xs:text-2xl sm:text-3xl md:text-4xl text-green-600  ">
                  Bigbuy.
                </p>
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center gap-3
          ">
            <div className="flex justify-center ">
            <Link to={'/Cart'}>
            <div className="flex justify-evenly">
              <AiFillShopping size={25} color="green" className="green" />
              <span className="text-xs  border border-black bg-black text-white rounded-full  h-6  px-2 place-content-center">
                {addedToCart.length}
              </span>
              </div>
              </Link>
            </div>
            <div className="xs:mt-1 sm:mt-0" onClick={handleaNav}>
              {nav ? (
                <IoClose
                  className=" fill-gray-600  dark:fill-green-500"
                  size={"30px"}
                />
              ) : (
                <GiHamburgerMenu
                  className=" fill-gray-500 dark:fill-green-500"
                  size={"25px"}
                  color={"gray"}
                />
              )}
            </div>
          </div>
          <div
            className={
              nav
                ? "absolute xxs:w-full  xxs:h-[113vh]  bg-gray-300 border-r-0 dark:bg-gray-900 dark:border dark:border-t-4 dark:border-green-700  xxs:top-14 xxs:right-0 xxs:left-0 xxs:bottom-0    ease-in-out  duration-500 -z-40  "
                : "hidden"
            }
          >
            <div>
              {MenuLinks.map((data, index) => {
                return (
                  <div
                    className=" text-2xl text-center mt-16 dark:text-green-700  xxs:text-center sm:text-right "
                    key={index}
                  >
                    <Link to={data.link}>{data.name}</Link>
                  </div>
                );
              })}

              <div onClick={handleaNav} className="flex xxs:justify-center text-center sm:justify-end mt-24 items-center">
                {/* dark mode */}
                <Darkmode />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
