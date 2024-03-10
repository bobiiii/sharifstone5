import React, { useState, useContext } from "react";
import "./DiscoverCollection.css";
import { MdOutlineArrowBackIos, MdOutlineArrowRight } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import ScrollAnimation from '@nathanyoung/react-animate-on-scroll';
import 'animate.css';
import Heading from "../../resuable/Heading";
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

    <div className="w-full  flex justify-center items-center flex-col  ">
      <div className="">
        <ScrollAnimation animateIn='animate__backInLeft'
          animateOut='animate__backInRight'>
          <Heading className=" whitespace-nowrap py-2 text-center">
            DISCOVER OUR NEW ARRIVALS!
          </Heading>
        </ScrollAnimation>
      </div>
      <div className="sm:w-[60%]  w-[95%] md:mt-4 sm:text-base text-sm text-center">
        Check out our latest arrivals,  showcasing a vibrant mix of colors from different stone  selections. Each piece is a blend of style and quality,  giving you a range of options to spice up your space.
      </div>
      <div className="sm:w-full w-screen flex justify-center items-center relative px-6 mt-6 lg:mt-16">
        <div
          className=" w-2/12 bg-center bg-no-repeat bg-cover duration-500 ease-in h-44  md:h-80  rounded-lg flex items-center justify-center"
          style={{
            backgroundImage: `url(images/scroller_images/scroller_${index}.jpg)`,
          }}
        >

          <button className="bg-[#d5262a] rounded-full p-2">
            <IoIosArrowBack className="text-white" onClick={() => changeFunction(false)} />
          </button>
        </div>
        <div
          className="w-8/12 duration-500 ease-in shadow-2xl md:mx-8 mx-4 bg-center bg-no-repeat bg-cover h-52 md:h-96 rounded-lg "
          style={{
            backgroundImage: `url(images/scroller_images/scroller_${index + 1}.jpg)`,
          }}
        />

        <div
          className="w-2/12 bg-center bg-no-repeat duration-500 ease-in bg-cover h-44 md:h-80  rounded-lg flex items-center justify-center"
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
