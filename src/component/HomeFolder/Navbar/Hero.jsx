import React from "react";
import tv from "../../../assets/hero/phonebg.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div class="   sm:px-10 py-10 mx-auto  bg-gray-200   dark:bg-gray-900 dark:text-white ">
        <div className="  w-full sm:flex sm:flex-row sm:justify-between xxs:items-center sm:gap-10 xxs:flex-col ">
          <motion.div
            initial={{ x: "-250vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="  sm:w-[50%] xxs:text-center sm:text-left xxs:w-[100%]  "
          >
            <p className="font-roboto  xxs:text-2xl sm:text-sm md:text-3xl">Welcome to</p>
            <div>
              <span className="font-righteous  sm:text-7xl md:text-8xl  xxs:text-6xl text-green-600">
                BigBuy.
              </span>
            </div>

            
          </motion.div>
          <div className="xxs:w-[100%] sm:w-[50%] xxs:mt-10 sm:mt-0 xxs:mx-auto ">
            <motion.div
              initial={{ x: "250vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="h-10vh w-[100%] xxs:px-5 sm:px-0 mx-auto"
            >
              <img src={tv} alt={tv} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
