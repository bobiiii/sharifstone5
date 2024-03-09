import React from "react";
import "./OurMission.css";
import WarrantyImage from "../../../assets/images/warranty1.png";
import mw from './images/mw.png'
function OurMission() {
  return (
    <main className="max-w-screen-2xl w-full mx-auto  md:px-6 px-4">
      <div className="reorganize_container">
        <div className="ourmission-container">
          <div className="ourmission-heading">MORE ABOUT WARRANTY</div>
          <hr style={{ margin: "20px 0px", border: '0.5px solid #D9D9D9', opacity: 0.9 }} />
          {/* ourmission-subcontaine */}
          <div className="flex justify-between gap-8 w-full lg:flex-row flex-col items-center">
            {/* ourmission-innercontainer */}
            <div className="lg:w-1/2 w-full">
              <img className="w-full rounded-[24px] xl:h-full  lg:h-[50vh] h-full" src={WarrantyImage} />
            </div>
            {/* ourmission-innercontainer-warranty */}
            <div className="lg:w-1/2 w-full">
              <b>I. WARRANTY COVERS</b>
              <br />
              This category pertains to Sharifstone® Surfaces that  have been purchased from an Authorized Sharifstone®  Installer/Dealer and installed in your residence  location by an Authorized Installer.
              <br />
              <br />
              <b>II. WHAT IT COVERS IN DETAIL</b>
              <br />
              The warranty specifically addresses defects arising  from the manufacturing process. When making a claim  during the warranty coverage period, an inspection  will be conducted on the installed Surfaces. If the  defects are confirmed as originating from the  manufacturing process, the warranty will cover the  replacement of the Surface with either the same  material or a comparable alternative available at the  time of the claim.
              <br />
              <br />
              <b>III. MAINTENANCE REQUIREMENTS</b>
              <br />
              Maintenance coverage is contingent on adhering to  the Sharifstone® Surfaces Care and Maintenance  guidelines, as well as maintaining the Surfaces in  accordance with accepted standards for engineered  Quartz surfaces.

            </div>
          </div>

          {/* Oppsite */}

          <div className="flex justify-between gap-8 w-full lg:flex-row flex-col-reverse items-center">

            {/* ourmission-innercontainer-warranty */}
            <div className="lg:w-1/2 w-full">
              <b>I. WARRANTY COVERS</b>
              <br />
              This category pertains to Sharifstone® Surfaces that  have been purchased from an Authorized Sharifstone®  Installer/Dealer and installed in your residence  location by an Authorized Installer.
              <br />
              <br />
              <b>II. WHAT IT COVERS IN DETAIL</b>
              <br />
              The warranty specifically addresses defects arising  from the manufacturing process. When making a claim  during the warranty coverage period, an inspection  will be conducted on the installed Surfaces. If the  defects are confirmed as originating from the  manufacturing process, the warranty will cover the  replacement of the Surface with either the same  material or a comparable alternative available at the  time of the claim.
              <br />
              <br />
              <b>III. MAINTENANCE REQUIREMENTS</b>
              <br />
              Maintenance coverage is contingent on adhering to  the Sharifstone® Surfaces Care and Maintenance  guidelines, as well as maintaining the Surfaces in  accordance with accepted standards for engineered  Quartz surfaces.

            </div>
            {/* ourmission-innercontainer */}
            <div className="lg:w-1/2 w-full mt-10">
              <img className="w-full rounded-[24px] xl:h-full lg:h-[50vh] h-full" src={mw} />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

export default OurMission;
