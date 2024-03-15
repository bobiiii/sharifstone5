import React, { useEffect, useState } from "react";
import VideoImage from "../../../assets/images/homeImage/video_image.png";
import "./AboutUS.css";
import InspireIdeas from "../../../assets/images/homeImage/location.gif";
import VisualizeSpace from "../../../assets/images/homeImage/visualize_space1.gif";
import ViewColor from "../../../assets/images/homeImage/catalog.gif";
import WhereToBuy from "../../../assets/images/homeImage/location.gif";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import about_us_video from "../../../assets/videos/about_us.mp4"
import MaxWidthWrapper from "../../MaxWidthWrapper";
import 'animate.css';
import Heading from "../../resuable/Heading";
import GetAQuote from "./GetAQuote";
import Button from "../../resuable/Button";
import eye from "../../eye.json";
import location from "../../location.json";

import Lottie from "lottie-react";

function AboutUS({ data }) {




  const opts = {
    height: "500",
    width: "750",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const opts2 = {
    height: "550",
    width: "550",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const opts1024 = {
    height: "550",
    width: "470",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const opts1300 = {
    height: "550",
    width: "500",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const opts1400 = {
    height: "550",
    width: "500",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const opts_mobile = {
    height: "400",
    width: "560",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const opts_mobile2 = {
    height: "370",
    width: "330",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const aboutIdeas = [
    {
      name: "VISUALIZE YOUR SPACE",
      image: VisualizeSpace,
      href: "/kitchen-visualizer",
    },
    {
      name: "VIEW COLORS CATALOG",
      image: ViewColor,
      href: "/quartz-collection",
    },
    {
      name: "WHERE TO BUY",
      image: WhereToBuy,
      href: "/where-to-buy",
    },
  ];

  const aboutIdeas2 = [
    {
      name: "VISUALIZE YOUR SPACE",
      image: eye,
      href: "/kitchen-visualizer",
    },
    {
      name: "VIEW COLORS CATALOG",
      image: location,
      href: "/quartz-collection",
    },
    {
      name: "WHERE TO BUY",
      image: location,
      href: "/where-to-buy",
    },
  ];

  const { openQuote, setOpenQuote } = data;
  return (
    <MaxWidthWrapper className='md:mt-20 mt-16' >
      <div className="home-aboutconatiner w-full">
        <div className="home-aboutinnercontainer">
          <Heading className='text-center'>
            GET TO KNOW US
          </Heading>

          <hr
            style={{
              margin: "20px 0px",
              border: "0.5px solid #D9D9D9",
              opacity: 0.9,
            }}
          />
          {/* home-aboutsubcontainer */}
          <div className=" w-full grid lg:grid-cols-2 grid-cols-1 gap-6 justify-start items-start  ">
            <div className="w-full ">
              <video id="about_us_video" className="w-full rounded-2xl h-auto" controls>
                <source src={about_us_video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* home-about-sections */}
            <div className=" w1/2 flex flex-col xl:gap-6 gap-3" >
              <span className=" sm:text-base text-sm">
                Welcome to Sharifstone, a distinguished company in the United
                States specializing in premium stones, including marble, granite,
                and quartz. We take pride in delivering top-quality stones at
                unbeatable prices. Our extensive selection and unwavering
                commitment to surpassing customer expectations set us apart in the
                industry.
              </span>
              <span className="sm:text-base text-sm">
                At Sharifstone, our dedicated team is here to guide you through
                the entire process, offering wide range of stones perfect for
                residential, commercial, and architectural projects. With our
                steadfast commitment to professionalism and customer satisfaction,
                Sharifstone has built strong relationships with clients
                nationwide.
              </span>
              <span className="sm:text-base text-sm">
                Explore the perfect stones for your project and elevate your space
                with Sharifstone!
              </span>
              <span className="flex lg:justify-start  justify-center ">
                <Button clickFunc={() => setOpenQuote(true)}>Stone Inquiry</Button>

              </span>
            </div>

          </div>
          {/* home-aboutcard */}
          <div className=" w-full  md:hidden flex flex-wrap py-4    items-center justify-center">
            {aboutIdeas.map((v, i) => (
              <div className="  flex w-[45%]  justify-center items-center text-center   mx-auto ">
                <Link
                  to={v.href}
                  className=" flex flex-col justify-center items-center border   border-red-500 w-full mt-4   py-6 px-2   rounded-lg"
                  style={{ textDecoration: "none" }}
                >
                  <img src={v.image} className="w-24  lg:w-12  " />
                  <div className="mt-4 text-center ">
                    <h5 className="sm:text-base text-[12px] whitespace-nowrap font-semibold text-black   lg:mt-4">
                      {v.name}
                    </h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center w-full items-center">
            <div className=" w-full px-10 hidden justify-center items-center max-w-screen-lg md:flex gap-8 py-4 my-6  ">
              {aboutIdeas.map((v, i) => (
                <div className="  flex lg:w-[25%] w-[32%]  justify-center items-center     ">
                  <Link
                    to={v.href}
                    className=" flex flex-col justify-center items-center  w-full mt-4   py-6 px-2   rounded-lg border   border-red-500 shadow-2xl"
                    style={{ textDecoration: "none" }}
                  >
                    <img src={v.image} className="w-24   " /> 
                    <div className="mt-2 text-center">
                      <h5 className="sm:text-base text-[12px] whitespace-nowrap font-semibold text-black   lg:mt-4">
                        {v.name}
                      </h5>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>


          {/* animated icons */}
          {/* <div className="flex justify-center w-full items-center">
            <div className=" w-full px-10 hidden justify-center items-center max-w-screen-lg md:flex gap-8 py-4 my-6  ">
              <div className="  flex  lg:w-[25%] w-[32%]  justify-center items-center     ">
                <Link
                  to={'/kitchen-visualizer'}
                  className="home-aboutcards w-full mt-4 flex-grow h-full  py-3 px-2  "
                  style={{ textDecoration: "none" }}
                >
                  <img src={v.image} className="sm:w-20 w-12" /> 
                  <Lottie color="#ee2a2e" className="sm:w-32 w-12 " animationData={location} size={10} />
                  <div className="mt-2 text-center">
                    <h5 className="sm:text-base text-[12px] whitespace-nowrap font-semibold text-black mt-4">
                      VISUALIZE YOUR SPACE
                    </h5>
                  </div>
                </Link>
              </div>
              <div className="  flex lg:w-[25%] w-[32%]   justify-center items-center     ">
                <Link
                  to={'/quartz-collection'}
                  className="home-aboutcards w-full h-full flex-grow mt-4  py-6 px-2  "
                  style={{ textDecoration: "none" }}
                >
                  <img src={v.image} className="sm:w-20 w-12" /> 
                  <Lottie color="#ee2a2e" className="sm:w-32 w-12 " animationData={eye} size={10} />
                  <div className="mt-2 text-center">
                    <h5 className="sm:text-base text-[12px] whitespace-nowrap font-semibold text-black mt-4">
                      VIEW COLORS CATALOG
                    </h5>
                  </div>
                </Link>
              </div>
              <div className="  flex lg:w-[25%] w-[32%]   justify-center items-center     ">
                <Link
                  to={'/where-to-buy'}
                  className="home-aboutcards w-full mt-4  h-full flex-grow  py-3 px-2  "
                  style={{ textDecoration: "none" }}
                >
                  <img src={v.image} className="sm:w-20 w-12" /> 
                  <Lottie color="#ee2a2e" className="sm:w-32 w-12 " animationData={location} size={10} />
                  <div className="mt-2 text-center">
                    <h5 className="sm:text-base text-[12px] whitespace-nowrap font-semibold text-black mt-4">
                      WHERE TO BUY
                    </h5>
                  </div>
                </Link>
              </div>

              {
                aboutIdeas2.map((item, i) => {
                  return (
                    <div className="border-[1px] flex-grow justify-center  h-100   items-center border-[#f7dada] rounded-3xl shadow-xl px-4 py-4 h-full ">
                      <div className="flex justify-center items-center flex-col flex-grow h-full"
                      >
                        <div >
                        <img src={item.image} className="sm:w-20 w-12" /> 
                          <Lottie color="#ee2a2e" className="sm:w-32 w-12 " animationData={item.image} height={10} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <h5 className="sm:text-base text-[12px] whitespace-nowrap font-semibold text-black mt-4">{item.name}</h5>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div> */}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default AboutUS;
