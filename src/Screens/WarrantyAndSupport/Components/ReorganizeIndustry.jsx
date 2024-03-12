import React from "react";
import "./ReorganizeIndustry.css";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import bg from './images/reorganize_industry.png'
function ReorganizeIndustry() {
  return (
    <MaxWidthWrapper>
      {/* reorganize_container */}
      {/* <div className="w-full flex justify-center items-center">
      <div className="reorganize-imagecontainer w-full">
        <div className="reorganize-subcontainer">
          <div className="reorganize-heading">OUR LIFE TIME WARRANTY.</div>
          <div className="reorganize-desc">
          <b>Sharifstone ®</b> Residential transferable LIFE-TIME WARRANTY covers and
            warrants the original residential owner/purchaser for the life of
            the product from the date of installation of the Sharifstone®
            Surfaces in their residential home location, that the material will
            be free from manufacturing defects and perform as engineered for its
            service life, when it was properly installed by a licensed and
            authorized Sharifstone® Fabricator/Installer, and maintained with
            care as instructed by our guidelines.
            <br /> <br />
            This warranty covers claims made by the original consumer purchaser
            of Sharifstone® Surfaces.In the event a manufacturing defect occurs
            during the warranty period thereafter, Sharifstone® will at its
            option, repair or replace the defective Sharifstone® Surfaces. This
            limited warranty is transferable.
          </div>
        </div>
      </div>
    </div> */}
      <div className="w-full h-[700px] bg-no-repeat  bg-cover bg-center  rounded-3xl flex justify-end  lg:items-center items-end " style={{ backgroundImage: `url(${bg})` }}>
        <div className=" lg:w-1/2 w-full flex flex-col  xl:gap-12 md:gap-10 gap-6 py-4 lg:pb-0 pb-8 lg:pr-4 lg:px-0 sm:px-6 px-3">
          <h1 className="xl:text-[40px] md:text-4xl text-2xl text-white  font-semibold font-gelasio">OUR LIFE TIME <br  className="mt-2"/>  WARRANTY</h1>
          <p className="lg:text-lg md:text-base text-sm text-white font-normal font-albert">Sharifstone ® Residential transferable LIFE-TIME WARRANTY covers and warrants the original residential owner/purchaser for the life of the product from the date of installation of the Sharifstone® Surfaces in their residential home location, that the material will be free from manufacturing defects and perform as engineered for its service life, when it was properly installed by a licensed and authorized Sharifstone® Fabricator/Installer, and maintained with care as instructed by our guidelines.</p>
          <p className="lg:text-lg md:text-base text-sm text-white font-normal font-albert">This warranty covers claims made by the original consumer purchaser of Sharifstone® Surfaces.In the event a manufacturing defect occurs during the warranty period thereafter, Sharifstone® will at its option, repair or replace the defective Sharifstone® Surfaces. This limited warranty is transferable.</p>
        </div>
      </div>


    </MaxWidthWrapper>
  );
}

export default ReorganizeIndustry;
