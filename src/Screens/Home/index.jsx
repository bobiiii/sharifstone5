
import React, { useState, useEffect } from "react";
import "./home.css";
import CoverImage from "../../assets/images/homeImage/landingcover.png";
import home_video from "../../assets/videos/home_video.mp4"
import home_video2 from "../../assets/videos/home_video2.mp4"
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import "animate.css/animate.min.css";
import DiscoverCollection from "./Components/DiscoverCollection";
import AboutUS from "./Components/AboutUS";
import QuartzAdvantage from "./Components/QuartzAdvantage";
import Gallery from "./Components/Gallery";
import LoveUS from "./Components/LoveUs";
import InsideStore from "./Components/InsideStore";
import CustomerReview from "../../components/CustomerReviews";
import { Link } from "react-router-dom";
import GetAQuote from "./Components/GetAQuote";
import bg from "../Home/images/dis-bg.png";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Button from "../resuable/Button";
import useAuth from "../../hooks/useAuth"





function HomeScreen() {
  const {showDropdown, setShowDropdown} = useAuth()
  
  
  const [activeColor, setActiveColor] = useState(0);
  const [openQuote, setOpenQuote] = useState(false);
  const [index, setIndex] = useState(1);
  const colorCarousel = [
    "url(images/color_1.png)",
    "url(images/color_2.png)",
    "url(images/color_3.png)",
  ];

  useEffect(() => {

    openQuote ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'

  }, [openQuote]);


  const changeFunction = (isNext) => {
    if (isNext) {
      if (index === 8) {
        setIndex(1);
      } else {
        setIndex(index + 1);
      }
    } else {
      if (index === 1) {
        setIndex(8);
      } else {
        setIndex(index - 1);
      }
    }
  };

  const changeColor = (isNext) => {
    if (isNext) {
      if (activeColor === 2) {
        setActiveColor(0);
      } else {
        setActiveColor(activeColor + 1);
      }
    } else {
      if (activeColor === 0) {
        setActiveColor(2);
      } else {
        setActiveColor(activeColor - 1);
      }
    }
  };

  return (

    <div >
      {openQuote && <GetAQuote data={{ openQuote, setOpenQuote }} />}
      <div className="w-full h-svh lg:min-h-screen " >
        <div className="w-full flex flex-col h-[65%] lg:h-[100vh]" onMouseOver={()=>setShowDropdown(false)}>
          <div className=" h-full  bg-red-600  flex justify-center items-center overflow-hidden z-10 ">
             {/* <video className="lg:hidden w-full h-full  sm:object-cover object-fill" autoPlay loop muted>
              <source src={home_video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video className="hidden lg:block w-full h-full  sm:object-cover object-fill" autoPlay loop muted>
              <source src={home_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </div>
        <div className=" lg:hidden bg-gradient-hero  h-[35%] justify-center flex items-center bg-cover  bg-center bg-no-repeat  text-white">
          <div className="bg-bg-img-hero lg:bg-none bg-auto bg-no-repeat bg-right h-full    justify-center flex items-center">
            <div className="w-1/2 lg:w-3/5 h-full ">
              <div className="h-full  flex justify-center  items-center 
 ">
                <h3 className="lg:w-4/5 lg:text-5xl md:text-3xl text-3xl   font-medium font-gelasio    leading-relaxed   ps-6 md:px-8 ">
                  BUILDING MEMORIES, ONE STONE AT A TIME</h3>
              </div>
            </div>
            <div className=" w-1/2 lg:w-2/5 h-full flex  gap-4 justify-center  lg:bg-bg-img-hero bg-auto bg-no-repeat bg-right">
              <div className="flex justify-center  flex-col  gap-4 w-full  items-end lg:items-start px-4">
                <p className=" lg:text-2xl sm:text-base  text-right lg:text-left  font-normal ">
                  Beauty and quality beyond imagination. Service beyond what's expected.
                </p>

                <Link to='/quartz-collection'>
                  <Button className={"bg-white text-red-500 font-medium text-sm  py-2 "}>
                    View Collection
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className=" bg-gradient-hero  h-[30vh] justify-center hidden lg:flex items-center bg-cover  bg-center bg-no-repeat  text-white">
          <div className="bg-bg-img-hero lg:bg-none bg-auto bg-no-repeat bg-right h-full    justify-center flex items-center">
            <div className="w-1/2 lg:w-3/5 h-full ">
              <div className="h-full  flex justify-center  items-center 
 ">
                <h3 className="lg:w-4/5 lg:text-5xl md:text-3xl text-3xl   font-medium font-gelasio    leading-relaxed   ps-6 md:px-8 ">
                  BUILDING MEMORIES, ONE STONE AT A TIME</h3>
              </div>
            </div>
            <div className=" w-1/2 lg:w-2/5 h-full flex  gap-4 justify-center  lg:bg-bg-img-hero bg-auto bg-no-repeat bg-right">
              <div className="flex justify-center  flex-col  gap-4 w-full  items-end lg:items-start px-4">
                <p className=" lg:text-2xl sm:text-base  text-right lg:text-left  font-normal ">
                  Beauty and quality beyond imagination. Service beyond what's expected.
                </p>

                <Link to='/quartz-collection'>
                  <Button className={"bg-white text-red-500 font-medium text-sm  py-2 "}>
                    View Collection
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>



      <MaxWidthWrapper >
        <DiscoverCollection />
      </MaxWidthWrapper>
      <AboutUS data={{ openQuote, setOpenQuote }} />
      <QuartzAdvantage />
      {/* <Gallery /> */}
      <LoveUS />
      <InsideStore data={{ openQuote, setOpenQuote }} />
      {/* <iframe
        src="https://491744c8fa6a4bdda6b6d67be74ff1b7.elf.site"
        width="100%"
        height="500"
        frameborder="0"
      ></iframe> */}
    </div>
  );
}

export default HomeScreen;