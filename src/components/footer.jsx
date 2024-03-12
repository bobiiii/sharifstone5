import React from "react";
import Logo from "../assets/images/logo_footer.png";
import { ImLocation } from "react-icons/im";
import { TiLocation } from "react-icons/ti";
import { TbPhoneFilled, TbMailFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import BgImage from "../assets/images/bg_S.png";
import MaxWidthWrapper from "../Screens/MaxWidthWrapper";

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
    // <>
    // <div className="footer-container">
    //   <img className="footer-bgimage" src={BgImage} alt={"alt"} />
    //   <div className="footer-innercontainer">
    //     <img src={Logo} alt="logo" />
    //     <div className="footer-container-links">

    //     {/* Orlando Address */}
    //     <div className="footer-innersection">
    //       <div>Orlando</div>
    //       <div className="footer-column">
    //         <div className="footer-contacticon-container">
    //           <TiLocation size={23} color={"#EE2A2E"} />
    //           <a>
    //             2440 Dinneed Ave.
    //             <br />
    //             Orlando, FL 32804
    //           </a>
    //         </div>
    //         <br />
    //         <div className="footer-contacticon-container">
    //           <TbPhoneFilled size={23} color={"#EE2A2E"} />
    //           <a href="tel:+4072864677" style={{ color: 'black', textDecoration: 'none' }}>(407) 286-4677</a>
    //           </div>
    //           <br />
    //           <br />
    //           <div className="footer-contacticon-container">
    //           <TbMailFilled size={23} color={"#EE2A2E"} />
    //           <a href="mailto:orlando@sharifstone.com" style={{ color: 'black', textDecoration: 'none' }}>orlando@sharifstone.com</a>
    //           </div>
    //       </div>
    //     </div>

    //     {/* Tampa Address */}
    //     <div className="footer-innersection">
    //       <div>Tampa</div>
    //       <div className="footer-column">
    //         <div className="footer-contacticon-container">
    //           <TiLocation size={23} color={"#EE2A2E"} />
    //           <a>
    //           8524 E. Adamo Dr.
    //             <br />
    //             FL 33619
    //           </a>
    //         </div>
    //         <br />
    //         <div className="footer-contacticon-container">
    //           <TbPhoneFilled size={23} color={"#EE2A2E"} />
    //           <a href="tel:+18135334553" style={{ color: 'black', textDecoration: 'none' }}>(813) 533-4553</a>
    //           </div>
    //           <br />
    //           <br />
    //           <div className="footer-contacticon-container">
    //           <TbMailFilled size={23} color={"#EE2A2E"} />
    //           <a href="mailto:tampa@sharifstone.com" style={{ color: 'black', textDecoration: 'none' }}>tampa@sharifstone.com</a>
    //           </div>
    //       </div>
    //       </div>


    //       <div className="footer-innersection">
    //           <div>Company</div>
    //           <div className="footer-column">
    //             {company.map((v, i) => (
    //               <Link key={i} className="footer-link" to={v.route}>{v.name}</Link>
    //             ))}
    //           </div>
    //         </div>
    //         <div className="footer-innersection">
    //           <div>Products</div>
    //           <div className="footer-column">
    //           {product.map((v, i) => (
    //               <Link key={i} className="footer-link" to={v.route}>{v.name}</Link>
    //             ))}
    //           </div>
    //         </div>
    //       </div>

    //     <div className="foolter-endsection">
    //       <div className="footer-copyright">Copyright @2024 Sharifstone</div>
    //       <div className="footer-socialmedia">
    //         <img
    //           width="30"
    //           height="30"
    //           src="https://img.icons8.com/ios-glyphs/30/EE2A2E/facebook-new.png"
    //           alt="facebook-new"
    //         />
    //         <a href="https://www.instagram.com/sharifstones/" target="_blank">
    //           <img
    //             width="30"
    //             height="30"
    //             src="https://img.icons8.com/ios-glyphs/30/EE2A2E/instagram-new.png"
    //             alt="instagram-new"
    //           />
    //         </a>

    //         <img
    //           width="30"
    //           height="30"
    //           src="https://img.icons8.com/ios-glyphs/30/EE2A2E/twitterx--v2.png"
    //           alt="twitterx--v2"
    //         />
    //         <a href="https://www.instagram.com/sharifstones/" target="_blank">
    //           {/* <span> */}
    //           <img
    //             width="30"
    //             height="30"
    //             src="https://img.icons8.com/ios-glyphs/30/EE2A2E/youtube-play.png"
    //             alt="youtube-play"
    //           />
    //           {/* </span> */}
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <footer className="">
      <MaxWidthWrapper className='relative bg-white w-full xs:h-full  h-screen lg:py-16 md:py-6  py-4    flex flex-col sm:justify-between justify-evenly sm:gap-16 gap-10 md:mt-0 mt-0'>
        <img className="absolute right-0 bottom-0" src={BgImage} alt={"alt"} />

        <div className="w-full">
          <img src={Logo} alt="" />
        </div>
        <div className="w-full grid lg:grid-cols-4 grid-cols-2 gap-16 lg:justify-between justify-center ">
          <ul className="flex flex-col gap-6  ">
            <h4 className="text-[#2D2E2E] text-xl  font-semibold ">Orlando</h4>
            <li className="flex gap-3 ">
              <FaLocationDot className="text-[#EE2A2E] mt-1" size={20} />
              <span className="py-0">
                <p className="font-albert font-normal sm:text-base text-sm text-black">2440 Dinneen</p>
                <p className="font-albert font-normal sm:text-base text-sm text-black">Ave, Orlando, FL</p>
                <p className="font-albert font-normal sm:text-base text-sm text-black">32804</p>
              </span>


            </li>
            <li className="flex gap-3 ">
              <FaPhone className="text-[#EE2A2E] " size={20} />
              <span className="py-0">
                <p className="font-albert font-normal sm:text-base text-sm text-black">(407) 286-4677</p>
              </span>


            </li>
            <li className="flex gap-3 ">
              <TbMailFilled className="text-[#EE2A2E] " size={20} />
              <span className="py-0">
                <p className="font-albert font-normal sm:text-base text-sm text-black">orlando@sharifston e.com</p>
              </span>


            </li>

          </ul>
          <ul className="flex flex-col gap-6">
            <h4 className="text-[#2D2E2E] text-xl  font-semibold ">Tampa</h4>
            <li className="flex gap-3 ">
              <FaLocationDot className="text-[#EE2A2E] mt-1" size={20} />
              <span className="py-0">
                <p className="font-albert font-normal sm:text-base text-sm text-black">8524 E. Adamo </p>
                <p className="font-albert font-normal sm:text-base text-sm text-black">Dr. Tampa, FL</p>
                <p className="font-albert font-normal sm:text-base text-sm text-black">33619</p>
              </span>
            </li>

            <li className="flex gap-3 ">
              <FaPhone className="text-[#EE2A2E] " size={20} />
              <span className="py-0">
                <p className="font-albert font-normal sm:text-base text-sm text-black">(407) 286-4677</p>
              </span>


            </li>

            <li className="flex gap-3 ">
              <TbMailFilled className="text-[#EE2A2E] " size={20} />
              <span className="py-0">
                <p className="font-albert font-normal sm:text-base text-sm text-black">orlando@sharifston e.com</p>
              </span>
            </li>

          </ul>
          <ul className="flex flex-col gap-6">
            <h4 className="text-[#2D2E2E] text-xl  font-semibold ">Company</h4>
            <li className="flex gap-3 ">
              <Link to='#' className="font-albert font-normal sm:text-base text-sm text-black">About Us</Link>
            </li>
            <li className="flex gap-3 ">
              <Link to='#' className="font-albert font-normal sm:text-base text-sm text-black">Contact</Link>
            </li>
            <li className="flex gap-3 ">
              <Link to='#' className="font-albert font-normal sm:text-base text-sm text-black">Warranty & Support</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-6">
            <h4 className="text-[#2D2E2E] text-xl  font-semibold ">Products</h4>
            <li className="flex gap-3 ">
              <Link to='#' className="font-albert font-normal text-base text-black">Kitchen</Link>
            </li>
            <li className="flex gap-3 ">
              <Link to='#' className="font-albert font-normal text-base text-black">Bathroom</Link>
            </li>
          </ul>
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:w-[85%] w-full lg:gap-0 gap-6">
          <div>
            <h4>Copyright @2023 Sharifstone</h4>
          </div>
          <div className="flex gap-4">
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
      </MaxWidthWrapper>
    </footer>
  );
}

export default Footer;