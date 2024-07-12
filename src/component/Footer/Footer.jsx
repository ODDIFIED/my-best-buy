import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { LuBitcoin } from "react-icons/lu";
import { FaCcMastercard } from "react-icons/fa6";
import { FaPaypal } from "react-icons/fa";

import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="">
      <footer className="  mx-auto px-10 pt-12 pb-3 bg-green-700 text-sm text-white dark:border dark:border-green-600 dark:border-b-1 dark:border-t-0 dark:border-x-0">
        <div className=" xxs:flex xxs:flex-col  sm:flex sm:flex-row gap-6 ">
          {/* first grid */}
          <div className="sm:w-[50%]">
            <h1 className="font-righteous">BigBuy.</h1>
            <div className="text-balance text-sm">
              <p>
                Discover unbeatable deals and top-notch service at our phone
                store! With the latest models, expert advice, we're here to
                ensure you find the perfect phone. Shop with us for quality you
                can trust and a seamless shopping experience. Don't miss out—buy
                from us today!
              </p>
            </div>
          </div>
          {/* sec grid */}
          <div className="sm:w-[30%] sm:mx-auto   ">
            <b>Available Payment Platform</b>
            <div className="flex sm:justify-start space-x-3 mt-1">
              <>
                <FaCcVisa size={"25px"} />
              </>
              <>
                <FaCcMastercard size={"25px"} />
              </>
              <>
                <LuBitcoin size={"25px"} />
              </>
              <>
                <FaPaypal size={"25px"} />
              </>
            </div>
          </div>
          {/* third grid  */}
          <div className="sm:w-[30%]">
            <b>Contact Info</b>
            <h5>+12345676545,+12345676545</h5>
            <>
              <h5>Big-BuyOps@gmail.com </h5>
              <h5>TalkBigbuy@gmail.com</h5>
            </>
            <h5>Airport Road, Ikeja</h5>

            <div className="mt-1 flex justify-start space-x-3">
              <GrFacebookOption />
              <BsTwitter />
              <AiFillInstagram />
            </div>
          </div>
        </div>
        <div className="text-balance text-start xxs:mt-7 sm:mt-10">
          <p>
            Thank you for choosing us! Follow us on social media for updates and
            special offers. Contact Us | Privacy Policy | Terms of Service ©
            2024 <span className="font-righteous">BigBuy</span>. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
