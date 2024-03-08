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
    <div className="home-aboutconatiner">
      <div className="home-aboutinnercontainer">
        <div className="home-aboutheading">GET TO KNOW US</div>

        <hr
          style={{
            margin: "20px 0px",
            border: "0.5px solid #D9D9D9",
            opacity: 0.9,
          }} 
        />
        <div className="home-aboutsubcontainer">
          <div className="home-about-sections-specific-video">
          <video className="about-us-video" loop controls width="85%" height="auto">
              <source src={about_us_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="home-about-sections">
            <span>
              Welcome to Sharifstone, a distinguished company in the United
              States specializing in premium stones, including marble, granite,
              and quartz. We take pride in delivering top-quality stones at
              unbeatable prices. Our extensive selection and unwavering
              commitment to surpassing customer expectations set us apart in the
              industry.
            </span>
            <span>
              At Sharifstone, our dedicated team is here to guide you through
              the entire process, offering wide range of stones perfect for
              residential, commercial, and architectural projects. With our
              steadfast commitment to professionalism and customer satisfaction,
              Sharifstone has built strong relationships with clients
              nationwide.
            </span>
            <span>
              Explore the perfect stones for your project and elevate your space
              with Sharifstone!
            </span>
            <span className="home-discover-container-button-container">
              <div
                onClick={() => setOpenQuote(true)}
                className="home-discovercollection-button"
              >
                Stone Inquiry
              </div>
            </span>
          </div>
        </div>
        <div className="home-aboutcard">
          {aboutIdeas.map((v, i) => (
            <Link
              to={v.href}
              className="home-aboutcards"
              style={{ textDecoration: "none" }}
            >
              <img src={v.image} />
              <div>{v.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
