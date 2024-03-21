
import { useState, useEffect } from "react";
import "./home.css";
import home_video from "../../assets/videos/desktop.mp4"
import home_video_webm from "../../assets/videos/desktop2.webm"
import home_video_mov from "../../assets/videos/desktop3.mov"
import home_video2 from "../../assets/videos/mob.mp4"
import home_video2_webm from "../../assets/videos/mob2.webm"
import home_video2_mov from "../../assets/videos/mob3.mov"
import "animate.css/animate.min.css";
import DiscoverCollection from "./Components/DiscoverCollection";
import AboutUS from "./Components/AboutUS";
import QuartzAdvantage from "./Components/QuartzAdvantage";
import LoveUS from "./Components/LoveUs";
import InsideStore from "./Components/InsideStore";
import { Link } from "react-router-dom";
import GetAQuote from "./Components/GetAQuote";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Button from "../resuable/Button";
import useAuth from "../../hooks/useAuth";

function HomeScreen() {
  const { showDropdown, setShowDropdown } = useAuth()

  const [openQuote, setOpenQuote] = useState(false);

  useEffect(() => {

    openQuote ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'

  }, [openQuote]);


  window.onload = function(){
       document.getElementById("autoplay").play();
  }

  return (

    <div >
      {openQuote && <GetAQuote data={{ openQuote, setOpenQuote }} />}
      <div className="w-full h-svh lg:min-h-screen " >
        <div className="w-full flex flex-col h-[65%] lg:h-[100vh]" >
          <div className=" h-full lg:w-full w-screen bg-red-600  flex justify-center items-center overflow-hidden z-10 " onMouseOver={() => { setShowDropdown(false) }}>
            <video className="lg:hidden w-screen h-full object-cover min-w-[100vw] "playsinline  autoPlay loop muted id="autoplay" >
              <source src={home_video2} type="video/mp4" />
              <source src={home_video2_webm} type="video/webm" />
              <source src={home_video2_mov} type="video/mov" />
            </video>

            <video className="hidden lg:block w-full h-full   object-fill" playsinline autoPlay loop muted id="autoplay">
              <source src={home_video} type="video/mp4" />
              <source src={home_video_webm} type="video/webm" />
              <source src={home_video_mov} type="video/mov" />
            </video>
          </div>
        </div>
        <div className=" lg:hidden w-full bg-gradient-hero  h-[35%] justify-center flex items-center   bg-center bg-cover bg-no-repeat  text-white">
          <div className="bg-bg-img-hero lg:bg-none bg-auto bg-no-repeat bg-right h-full    justify-center flex items-center">
            <div className="w-1/2 lg:w-3/5 h-full ">
              <div className="h-full  flex justify-center  items-center 
 ">
                <h3 className="lg:w-4/5 lg:text-5xl md:text-3xl text-2xl   font-medium font-gelasio    leading-relaxed   ps-6 md:px-8 ">
                  BUILDING MEMORIES, ONE STONE AT A TIME</h3>
              </div>
            </div>
            <div className=" w-1/2 lg:w-2/5 h-full flex  gap-4 justify-center  lg:bg-bg-img-hero bg-auto bg-no-repeat bg-right">
              <div className="flex justify-center  flex-col  gap-4 w-full  items-end lg:items-start px-4">
                <p className=" lg:text-2xl sm:text-base text-sm  text-right lg:text-left  font-normal ">
                  Beauty and quality beyond imagination. Service beyond what&apos;s expected.
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
                Beauty and quality beyond imagination. Service beyond what&apos;s expected.
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
      <LoveUS />
      <InsideStore data={{ openQuote, setOpenQuote }} />
    </div>
  );
}

export default HomeScreen;