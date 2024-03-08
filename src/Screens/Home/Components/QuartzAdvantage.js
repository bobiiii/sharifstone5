import React from "react";
import "./QuartzAdvantage.css";
import QuartzCover from "../../../assets/images/homeImage/quartz_advantages.png";
import { Link } from "react-router-dom";
import MTHelenImage from "../../../assets/images/mt_helen.jpg";
import MaxWidthWrapper from "../../MaxWidthWrapper";

function QuartzAdvantage() {
  const advantages = [
    
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
      url: "url(images/wide_range.png)",
    },
    {
      name: `MT HELEN`,
      url: "url(images/HELEN.png)",

    },
  ];
  return (
    <MaxWidthWrapper>
      <div className="home-advantagecontainer">
        <div className="home-advantageinnercontainer">
          {/* <div className="home-advamtageheading">QUARTZ ADVANTAGES</div>
          <div className="home-advamtagedesc">
            Quartz surfaces are created through a blend of various components,
            with the use of advanced technology to guarantee both durability and
            sustainability, while also boasting an appealing aesthetic. This
            cutting-edge solution caters to a wide range of surface requirements
            for different interior settings.
          </div> */}
          <div className="">
            <h1 className="lg:text-[50px] font-medium sm:text-4xl text-xl whitespace-nowrap py-2  text-center  font-gelasio text-[rgb(34,31,31)]">
              Quartz  Advantages
            </h1>

          </div>
          <div className="sm:w-[80%]  w-[95%] md:mt-4 sm:text-base text-sm text-center">
            Quartz  Advantages
            Quartz surfaces are created through a blend of various components, with the use of advanced technology to guarantee both durability and sustainability, while also boasting an appealing aesthetic. This cutting-edge solution caters to a wide range of surface requirements for different interior settings.
          </div>
          <div
            className="home-advantagebg "
            style={{ backgroundImage: "url(images/quartz_advantages.png)" }}
          >
            {/* homebrand-images */}
            <div className="flex w-full justify-center">
              <div className="flex items-end justify-center  xl:w-full w-screen mb-4 ">
                <div className=" w-full    items-center grid xl:grid-cols-7 grid-cols-3 lg:gap-y-4 gap-y-6 ">
                  {advantages.map((v, i) => (
                    // homebrand-text

                    <div className=" text-center flex justify-center items-center flex-col gap-2.5">
                      {/* homebrand-image */}
                      <div
                        className="xl:w-12 xl:h-12 w-8 h-8 items-start text-white"
                        style={{
                          backgroundImage: v.url,
                        }}
                      />
                      {/* homebrand-text */}
                      <div className="text-white font-medium md:text-base text-[13px] w-[90px]">{v.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
          <Link
            to="/files/slab.pdf"
            target="_blank"
            download
            className="homebrand-button"
          >
            Download Slab Technical Chart
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default QuartzAdvantage;
