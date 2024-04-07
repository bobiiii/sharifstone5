import { useState } from "react";
import "./DiscoverCollection.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import Heading from "../../resuable/Heading";
import Button from "../../resuable/Button";
function DiscoverCollection() {


  const [index, setIndex] = useState(1)

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
          <Heading className=" whitespace-nowrap py-2 text-center ">
            DISCOVER OUR NEW ARRIVALS!
          </Heading>
      </div>
      <div className="sm:w-[60%]  w-[95%] md:mt-4 ">
        <p className="sm:text-base text-sm text-center">
          Check out our latest arrivals,  showcasing a vibrant mix of colors from different stone  selections. Each piece is a blend of style and quality,  giving you a range of options to spice up your space.
        </p>
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
      <div className="w-full justify-center text-center items-center md:mt-16 mt-10">
        <Button>
          <Link
            to={"/quartz-collection"}
            className=" "
          >
            See More
          </Link>
        </Button>
      </div>
    </div>

  );
}

export default DiscoverCollection;
