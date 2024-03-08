import React, { useState, useContext } from "react";
import "./DiscoverCollection.css";
import { MdOutlineArrowBackIos, MdOutlineArrowRight } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import MaxWidthWrapper from "../../MaxWidthWrapper";

function DiscoverCollection() {

  const [imageArr, setImagesArr] = useState([
    "url(images/scroller_images/scroller_1.png)",
    "url(images/scroller_images/scroller_2.png)",
    "url(images/scroller_images/scroller_3.png)",
  ])
  const [index, setIndex] = useState(1)
  const images = [
    "url(images/collection_color/ESSENTIAL/ES_Bianco_Puro.jpg)",
    "url(images/collection_color/ESSENTIAL/ES_Bianco_Puro.jpg)",
    "url(images/collection_color/ESSENTIAL/ES_Bianco_Puro.jpg)",
    "url(images/collection_color/ESSENTIAL/ES_Bianco_Puro.jpg)",
    "url(images/collection_color/ESSENTIAL/ES_Bianco_Puro.jpg)",
  ]
  const changeFunction = (isNext) => {
    const totalImages = 7;

    if (isNext) {
      if (index === totalImages - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    } else {
      if (index === 0) {
        setIndex(totalImages - 1);
      } else {
        setIndex(index - 1);
      }
    }
  };

  return (
    
      <div className="w-full  flex justify-center items-center flex-col py-16 ">
        <div className="">
          <h1 className="lg:text-[50px] font-medium sm:text-4xl text-xl whitespace-nowrap py-2  text-center  font-gelasio text-[rgb(34,31,31)]">
            DISCOVER OUR NEW ARRIVALS!
          </h1>

        </div>
        <div className="sm:w-[60%]  w-[95%] md:mt-4 sm:text-base text-sm text-center">
          Check out our latest arrivals,  showcasing a vibrant mix of colors from different stone  selections. Each piece is a blend of style and quality,  giving you a range of options to spice up your space.
        </div>
        <div className="sm:w-full w-screen flex justify-center items-center relative  mt-6 lg:mt-16">
          <div
            className=" w-2/12 bg-center bg-no-repeat bg-cover h-44  rounded-lg flex items-center justify-center"
            style={{
              backgroundImage: `url(images/scroller_images/scroller_${index}.jpg)`,
            }}
          >

            <button className="bg-[#d5262a] rounded-full p-2">
              <IoIosArrowBack className="text-white" onClick={() => changeFunction(false)} />
            </button>
          </div>
          <div
            className="w-8/12 shadow-2xl mx-3 bg-center bg-no-repeat bg-cover h-52 lg:h-80 rounded-lg "
            style={{
              backgroundImage: `url(images/scroller_images/scroller_${index + 1}.jpg)`,
            }}
          />

          <div
            className="w-2/12 bg-center bg-no-repeat bg-cover h-44 rounded-lg flex items-center justify-center"
            style={{
              backgroundImage: `url(images/scroller_images/scroller_${index + 2}.jpg)`,
            }}
          >
            <button className="bg-[#d5262a] rounded-full p-2">
              <IoIosArrowForward className="text-white" onClick={() => changeFunction(true)} />
            </button>


          </div>
        </div>
        <div className="sm:text-lg text-sm home-discovercollection-container hidden">
          <Link
            to={"/quartz-collection"}
            className=" "
          >
            See More
          </Link>
        </div>
      </div>
    
  );
}

export default DiscoverCollection;
