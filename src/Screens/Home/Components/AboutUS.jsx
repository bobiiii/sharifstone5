import "./AboutUS.css";
import VisualizeSpace from "../../../assets/images/homeImage/visualize_space1.gif";
import ViewColor from "../../../assets/images/homeImage/catalog.gif";
import WhereToBuy from "../../../assets/images/homeImage/location.gif";
import { Link } from "react-router-dom";
import about_us_video from "../../../assets/videos/about_us.mp4"
import MaxWidthWrapper from "../../MaxWidthWrapper";
import 'animate.css';
import Heading from "../../resuable/Heading";
import Button from "../../resuable/Button";
import Lottie from "lottie-react";

function AboutUS({ data }) {

  const aboutIdeas = [
    {
      name: "VISUALIZE YOUR SPACE",
      image:'../eye.json',
      href: "/kitchen-visualizer",
    },
    {
      name: "VIEW COLORS CATALOG",
      image:'../eye.json',
      href: "/quartz-collection",
    },
    {
      name: "WHERE TO BUY",
      image:'../eye.json',
      href: "/where-to-buy",
    },
  ];


  const { setOpenQuote } = data;
  return (
    <MaxWidthWrapper className='md:mt-20 mt-11' >
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
          <div className=" w-full grid lg:grid-cols-2 grid-cols-1 gap-6 justify-start items-start  ">
            <div className="w-full ">
              <video id="about_us_video" className="w-full rounded-2xl h-auto" controls>
                <source src={about_us_video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
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

          <div className=" w-full  md:hidden flex flex-wrap py-4    items-center justify-center">
            {aboutIdeas.map((v, i) => (  
              
              
              <div key={i} className="  flex w-[45%]  justify-center items-center text-center   mx-auto ">
                <Link

                  to={v.href}
                  className="h-44 flex flex-col justify-center items-center border   border-red-500 w-full mt-4   py-6 px-2   rounded-lg"
                  style={{ textDecoration: "none" }}
                >
                  {
  i === 0 ? <Lottie animationData={require("../eye.json")}  className="h-5/6 "/> :
  i === 1 ? <Lottie animationData={require("../color.json")}  className="h-5/6 "/> :
  i === 2 ? <Lottie animationData={require("../buy.json")} className="h-5/6 "/>:
  null
}
                    
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
                <div key={i} className="  flex lg:w-[25%] w-[32%] h-full  justify-center items-center     ">
                  <Link
                    to={v.href}
                    className=" flex flex-col justify-center items-center  w-full mt-4    px-2   rounded-lg  shadow-2xl"
                    style={{ textDecoration: "none" }}
                  >
                  {
  i === 0 ? <Lottie animationData={require("../eye.json")}  className=" "/> :
  i === 1 ? <Lottie animationData={require("../color.json")} /> :
  i === 2 ? <Lottie animationData={require("../buy.json")} />:
  null
}
                  
                  
                     <div className="text-center">
                      <h5 className="sm:text-base text-[12px] whitespace-nowrap font-semibold text-black   lg:mb-2">
                        {v.name}
                      </h5>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default AboutUS;
