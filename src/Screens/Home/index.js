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
    <div>
      {openQuote && <GetAQuote data={{ openQuote, setOpenQuote }} />}
      <div className="w-full flex flex-col border  h-[100vh] bg-blue-400">
        <div className="h-full flex justify-center items-center overflow-hidden z-10 ">
        <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src={home_video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full h-[35vh] relative flex justify-center items-center bg-gradient-hero  " >
          <div className="w-full flex text-white ">
            <div className=" w-1/2 h-auto px-4">
              <h3 className="text-xl font-semibold">BUILDING MEMORIES, ONE STONE AT A TIME</h3>
            </div>

            <div className=" w-1/2 h-auto bg-bg-img-hero">
              {/* <div className="homecard-color-carousel">
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
                {/* {colorCarousel.map((v, i) => (
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
              </div> */}

              
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
                
              
            </div>
          </div>
        </div>
      </div>

      <DiscoverCollection />
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
