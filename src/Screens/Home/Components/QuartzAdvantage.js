import React from "react";
import "./QuartzAdvantage.css";
import QuartzCover from "../../../assets/images/homeImage/quartz_advantages.png";
import { Link } from "react-router-dom";
import MTHelenImage from "../../../assets/images/mt_helen.jpg";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import mt from '../images/mt.png'
import Heading from "../../resuable/Heading";
import Button from "../../resuable/Button";
function QuartzAdvantage() {
  const advantages = [

    // {
    //   name: `MT HELEN`,
    //   // url: "url(images/HELEN.png)",
    //   url: 'url(images/quartz_advantages.png)',
    // },
    {
      name: "PREMIUM QUALITY",
      url: "url(images/premium_quantity.png)",
    },
    {
      name: "LIFETIME WARRANTY",
      url: "url(images/lifetime_warranty.png)",
    },
    {
      name: "STAIN RESISTANT",
      url: "url(images/stain_resistant.png)",
    },
    {
      name: "SCRATCH RESISTANT",
      url: "url(images/scratch_resistant.png)",
    },
    {
      name: "IMPACT RESISTANT",
      url: "url(images/impact_resistant.png)",
    },
    {
      name: "WIDE RANGE OF COLORS",
      // url: "url(images/mt.png)",
      url: "url(images/mask1.png)",
    },

  ];
  return (
    <MaxWidthWrapper className='px-0'>
      <div className="home-advantagecontainer ">
        <div className="home-advantageinnercontainer ">
          {/* <div className="home-advamtageheading">QUARTZ ADVANTAGES</div>
          <div className="home-advamtagedesc">
            Quartz surfaces are created through a blend of various components,
            with the use of advanced technology to guarantee both durability and
            sustainability, while also boasting an appealing aesthetic. This
            cutting-edge solution caters to a wide range of surface requirements
            for different interior settings.
          </div> */}
          <div className="mt-2 lg:mt-6 ">
            <Heading className='text-center '>
              Quartz  Advantages
            </Heading>

          </div>
          <div className="sm:w-[80%]  w-[95%] md:mt-4 mt-2 sm:text-base text-sm text-center">
            Quartz  Advantages
            Quartz surfaces are created through a blend of various components, with the use of advanced technology to guarantee both durability and sustainability, while also boasting an appealing aesthetic. This cutting-edge solution caters to a wide range of surface requirements for different interior settings.
          </div>
          <div
            className="home-advantagebg h-[500px] my-4"
            style={{ backgroundImage: "url(images/quartz_advantages.png)" }}
          >
            {/* homebrand-images */}
            <div className="flex w-full justify-center items-end">
              <div className=" lex flex-col lg:flex-row items-center justify-center  xl:w-full w-screen mb-4 ">
                <div className=" xl:hidden flex justify-center items-center   w-[35%] mb-2.5 ms-2 ">
                  <div className={` px-8  my-4  flex justify-center items-start     flex-col gap-2.5  `}>
                    {/* homebrand-image */}
                    <div
                      className="xl:w-12 xl:h-12 w-12 h-10 bg-no-repeat items-start text-white  "
                      style={{
                        backgroundImage: "url(images/helen1.png)",
                      }}
                    />
                    {/* homebrand-text */}
                    <div className="text-white ps-2 font-medium md:text-base text-[13px] w-[90px]">MT <br /> HELEN</div>
                  </div>
                </div>

                <div className=" w-full    items-center grid xl:grid-cols-7 grid-cols-3 lg:gap-y-4 gap-y-6 ">

                  <div className={` px-8  my-4  xl:flex hidden justify-center items-center    flex-col gap-2.5 text-center `}>
                    {/* homebrand-image */}
                    <div
                      className="xl:w-12 xl:h-12 w-12 h-10 bg-no-repeat items-start text-white  "
                      style={{
                        backgroundImage: "url(images/helen1.png)",
                      }}
                    />
                    {/* homebrand-text */}
                    <div className="text-white font-medium md:text-base text-[13px] w-[90px]">MT <br /> HELEN</div>
                  </div>


                  {advantages.map((v, i) => (
                    // homebrand-text

                    <div className={`   text-center flex  justify-center items-center flex-col gap-2.5  `}>
                      {/* homebrand-image */}
                      <div
                        className="w-14  h-14 bg-no-repeat items-start text-white "
                        style={{
                          backgroundImage: v.url,
                        }}
                      />
                      {/* homebrand-text */}
                      <div className="text-white font-medium md:text-base text-[13px] w-[100px]">{v.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <Button >
          <Link
            to="/files/slab.pdf"
            target="_blank"
            download
            
          >
            Download Slab Technical Chart
          </Link>
                </Button>
          
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default QuartzAdvantage;
