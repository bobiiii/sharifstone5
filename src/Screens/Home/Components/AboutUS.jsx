import React from "react";
import VideoImage from "../../../assets/images/homeImage/video_image.png";
import "./AboutUS.css";
import InspireIdeas from "../../../assets/images/homeImage/inspire_ideas.gif";
import VisualizeSpace from "../../../assets/images/homeImage/visualize_space.gif";
import ViewColor from "../../../assets/images/homeImage/view_color.gif";
import WhereToBuy from "../../../assets/images/homeImage/wheretobuy.gif";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import about_us_video from "../../../assets/videos/about_us.mp4"
import MaxWidthWrapper from "../../MaxWidthWrapper";


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
  const { openQuote, setOpenQuote } = data;
  return (
    <MaxWidthWrapper>
      <div className="home-aboutconatiner w-full">
        <div className="home-aboutinnercontainer">
          <div className="font-gelasio md:text-5xl sm:text-3xl text-2xl ">GET TO KNOW US</div>

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
              <video className="w-full rounded-2xl h-auto " loop controls >
                <source src={about_us_video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* home-about-sections */}
            <div className=" w1/2 flex flex-col gap-3" >
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
              <span className="home-discover-container-button-container mt-2">
                <div
                  onClick={() => setOpenQuote(true)}
                  className="home-discovercollection-button"
                >
                  Stone Inquiry
                </div>
              </span>
            </div>

          </div>
          {/* home-aboutcard */}
          <div className=" w-full flex flex-wrap py-4  ">
            {aboutIdeas.map((v, i) => (
              <div className="  flex w-[45%]  justify-center items-center   mx-auto  ">
                <Link
                  to={v.href}
                  className="home-aboutcards w-full mt-4  py-6 px-2  "
                  style={{ textDecoration: "none" }}
                >
                  <img src={v.image} className="sm:w-20 w-12" />
                  <div className="mt-4 text-center">
                    <h5 className="sm:text-base text-[12px] whitespace-nowrap font-semibold text-black mt-4">
                      {v.name}
                    </h5>


                  </div>

                </Link>
              </div>
            ))}
          </div>


        </div>

      </div>
    </MaxWidthWrapper>
  );
}

export default AboutUS;
