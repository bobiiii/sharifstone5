import React from "react";
import Logo from "../assets/images/logo_footer.png";
import { ImLocation } from "react-icons/im";
import { TiLocation } from "react-icons/ti";
import { TbPhoneFilled, TbMailFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import BgImage from "../assets/images/bg_S.png";
import MaxWidthWrapper from "../Screens/MaxWidthWrapper";
import Heading from "../Screens/resuable/Heading";
import mail from "./mail.png";
import { IoMail } from "react-icons/io5";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const company = [
    {
      name: "About Us",
      route: "/about",
    },
    {
      name: "Contact",
      route: "/contact",
    },
    {
      name: "Warranty & Support",
      route: "/warranty-n-support",
    },
  ];

  const product = [
    {
      name: "Kitchen",
      route: "/kitchen-visualizer/Stylish-Kitchen",
    },
    {
      name: "Bathroom",
      route: "/kitchen-visualizer/Stylish-Bathroom-Vanity",
    },
  ];

  return (
    <footer className="lg:py-16  md:py-6 py-4   ">
      <MaxWidthWrapper className=' md:mt-0 mt-0'>
        <div className="relative bg-white w-full xs:h-full   h-screen   flex flex-col sm:justify-between  justify-evenly sm:gap-16 gap-4">
          <img className="absolute right-0 bottom-0 " src={BgImage} alt={"alt"} />

          <div className="w-full">
            <img src={Logo} alt="" className="" />
          </div>

          <div className="w-full grid lg:grid-cols-4 grid-cols-2 sm:gap-16 gap-8 lg:justify-between justify-center ">
            <ul className="flex flex-col gap-6  ">
              <h4 className="text-[#2D2E2E] text-xl  font-semibold ">Orlando</h4>
              <li className="flex gap-2 ">
                <FaLocationDot className="text-[#EE2A2E] mt-1" size={20} />
                <span className="py-0">
                  <p className="font-albert font-normal sm:text-base text-[12px] text-black">2440 Dinneen</p>
                  <p className="font-albert font-normal sm:text-base text-[12px] text-black">Ave, Orlando, FL</p>
                  <p className="font-albert font-normal sm:text-base text-[12px] text-black">32804</p>
                </span>


              </li>
              <li className="flex gap-2 ">
                <FaPhone className="text-[#EE2A2E] " size={20} />
                <span className="py-0">
                  <p className="font-albert font-normal sm:text-base text-[12px] text-black">(407) 286-4677</p>
                </span>


              </li>
              <li className="flex gap-2 ">
                {/* <TbMailFilled className="text-[#EE2A2E] " size={20} />  */}
                <img src={mail} alt="" className="w-4 h-4" />
                <span className="py-0">
                  <p className="font-albert font-normal sm:text-base text-[12px] text-black whitespace-nowrap">orlando@sharifstone.com</p>
                </span>


              </li>

            </ul>
            <ul className="flex flex-col gap-6">
              <h4 className="text-[#2D2E2E] text-xl  font-semibold ">Tampa</h4>
              <li className="flex gap-2">
                <FaLocationDot className="text-[#EE2A2E] mt-1" size={20} />
                <span className="py-0">
                  <p className="font-albert font-normal sm:text-base text-[12px] text-black">8524 E. Adamo </p>
                  <p className="font-albert font-normal sm:text-base text-[12px] text-black">Dr. Tampa, FL</p>
                  <p className="font-albert font-normal sm:text-base text-[12px] text-black">33619</p>
                </span>
              </li>

              <li className="flex gap-2 ">
                <FaPhone className="text-[#EE2A2E] " size={20} />
                <span className="py-0">
                  <p className="font-albert font-normal sm:text-base text-[12px] text-black">(407) 286-4677</p>
                </span>


              </li>

              <li className="flex gap-1.5 ">
                {/* <IoMail className="text-[#EE2A2E] " size={20} />  */}
                <img src={mail} alt="" className="w-4 h-4" /> 
                <span className="py-0">
                  <p className="font-albert font-normal sm:text-base text-[12px] text-black whitespace-nowrap">tempa@sharifstone.com</p>
                </span>
              </li>

            </ul>
            <ul className="flex flex-col gap-6">
              <h4 className="text-[#2D2E2E] text-xl  font-semibold ">Company</h4>
              <li className="flex gap-3 ">
                <Link to="/about" className="font-albert font-normal sm:text-base text-[12px]  text-black">About Us</Link>
              </li>
              <li className="flex gap-3 ">
                <Link to="/contact" className="font-albert font-normal sm:text-base text-[12px] text-black">Contact</Link>
              </li>
              <li className="flex gap-3 ">
                <Link to="/warranty-n-support" className="font-albert font-normal text-[12px] sm:text-base  text-black">Warranty & Support</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-6">
              <h4 className="text-[#2D2E2E] text-xl  font-semibold ">Products</h4>
              <li className="flex gap-3 ">
                <Link to='/kitchen-visualizer' className="font-albert font-normal sm:text-base text-[12px] text-black">Kitchen</Link>
              </li>
              <li className="flex gap-3 ">
                <Link to='#' className="font-albert font-normal sm:text-base text-[12px] text-black">Bathroom</Link>
              </li>
            </ul>
          </div>


          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:w-[85%] w-full lg:gap-0 gap-4">

            <div className="lg:hidden">
              <h3 className="font-albert  font-semibold text-lg"> We are Social</h3>
            </div>

            <div className="flex  gap-4  flex-col items-center lg:order-2">
              <div className="lg:flex hidden">
                <h3 className="font-albert  font-semibold text-2xl"> We are Social </h3>
              </div>
              <div className="flex ">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/30/EE2A2E/facebook-new.png"
                  alt="facebook-new"
                />
                <a href="https://www.instagram.com/sharifstones/" target="_blank">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/EE2A2E/instagram-new.png"
                    alt="instagram-new"
                  />
                </a>

                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/30/EE2A2E/twitterx--v2.png"
                  alt="twitterx--v2"
                />
                <a href="https://www.instagram.com/sharifstones/" target="_blank">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/EE2A2E/youtube-play.png"
                    alt="youtube-play"
                  />
                </a>
              </div>
            </div>

            <div className="lg:order-1 mt-6 ">
              <h4>Copyright @2023 Sharifstone</h4>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}

export default Footer;