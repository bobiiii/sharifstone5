import React, { useState } from "react";
import "./home.css";
import CoverImage from "../../assets/images/homeImage/landingcover.png";
import home_video from "../../assets/videos/home_video.mp4"
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

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

function HomeScreen() {
  const [activeColor, setActiveColor] = useState(0);
  const [openQuote, setOpenQuote] = useState(false);
  const [index, setIndex] = useState(1);
  const colorCarousel = [
    "url(images/color_1.png)",
    "url(images/color_2.png)",
    "url(images/color_3.png)",
  ];
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
      <div className="w-full min-h-screen ">
      <div className="w-full flex flex-col h-[70vh] ">
        <div className=" h-full  bg-red-600  flex justify-center items-center overflow-hidden z-10 ">
          {/* <video className="w-full h-full  sm:object-cover object-fill" autoPlay loop muted>
            <source src={home_video} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </div> 

      <div style={{ backgroundImage: `url(${bg})` }} className=" bg-cover  bg-center bg-no-repeat ">
        <MaxWidthWrapper className=''>
          <div className="w-full py-8 lg:py-6  flex gap-4 justify-center items-center   " >
            <div className="w-full flex text-white items-center gap-4 justify-center ">
              <div className=" w-1/2 h-auto ">
                <h3 className="lg:text-5xl sm:text-3xl text-xl whitespace-nowrap  font-medium font-gelasio 	">BUILDING </h3>
                <h3 className="lg:text-5xl sm:text-3xl text-xl  whitespace-nowrap font-medium font-gelasio 	py-2">MEMORIES, ONE </h3>
                <h3 className="lg:text-5xl sm:text-3xl text-xl font-medium font-gelasio 	">  STONE AT A TIME</h3>
              </div>

              <div className="w-1/2 ">
                <div className="flex justify-between lg:flex-row flex-col  gap-4 w-full lg:items-center items-start">
                  <p className="max-w-md lg:text-xl sm:text-base text-sm font-normal">
                    Beauty and quality beyond imagination. Service beyond what's expected.
                  </p>
                  <Button className={""} >
                    View Collection
                  </Button>
                </div>

              </div>

              {/* <div className=" w-1/2 h-auto bg-bg-img-hero">
                 <div className="homecard-color-carousel">
                <HiArrowLongLeft
                  onClick={() => changeFunction(false)}
                  size={30}
                  color={"#fff"}
                />
                <div
                  // onClick={() => setActiveColor(i)}
                  className="homecard-color-card"
                  style={{
                    backgroundImage: `url(images/scroller_images/scroller_${index}.jpg)`,
                    // border: activeColor === i ? "3px solid black" : "",
                  }}
                ></div>
                <div
                  // onClick={() => setActiveColor(i)}
                  className="homecard-color-card"
                  style={{
                    backgroundImage: `url(images/scroller_images/scroller_${
                      index + 1
                    }.jpg)`,
                    border: "3px solid black",
                  }}
                ></div>
                <div
                  // onClick={() => setActiveColor(i)}
                  className="homecard-color-card"
                  style={{
                    backgroundImage: `url(images/scroller_images/scroller_${
                      index + 2
                    }.jpg)`,
                    // border: activeColor === i ? "3px solid black" : "",
                  }}
                ></div>
                 {colorCarousel.map((v, i) => (
                  <div
                    onClick={() => setActiveColor(i)}
                    className="homecard-color-card"
                    style={{
                      backgroundImage: v,
                      border: activeColor === i ? "3px solid black" : "",
                    }}
                  ></div>
                ))} 
                <HiArrowLongRight
                  style={{ zIndex: 1 }}
                  onClick={() => changeFunction(true)}
                  size={30}
                  color={"#fff"}
                />
              </div> 


                <p className="text-sm">
                  Beauty and quality beyond imagination. Service beyond what's expected.
                </p>
                <div className=" my-3">
                  <Link
                    to={"/quartz-collection"}
                    className="bg-white text-red-500 p-2  "
                  >
                    View Collection
                  </Link>
                </div>


              </div> */}
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      </div>
      <MaxWidthWrapper>
        <DiscoverCollection />
      </MaxWidthWrapper>
      <AboutUS data={{ openQuote, setOpenQuote }} />
      <QuartzAdvantage />
      {/* <Gallery /> */}
      <MaxWidthWrapper>
      <LoveUS />
      </MaxWidthWrapper>
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
