import React from "react";
import "./OurMission.css";
import OurMissionImage from "../../../assets/images/ourmission.jpg";
function OurMission() {
  return (
    <div className="reorganize_container">
      <div className="ourmission-container">
        <div className="ourmission-heading">OUR COMPANY'S COMMITMENT</div>
        <hr style={{ margin: "20px 0px", border: '0.5px solid #D9D9D9', opacity: 0.9 }} />
        <div className="ourmission-cover ourmission-subcontainer">
          <div className="ourmission-innercontainer-update">
            <img className="ourmission-image-update" src={OurMissionImage} />
          </div>
          <div className="ourmission-innercontainer">
            <div className="ourmission-details">
              <b>I. Mission:</b>
              <br />
              "Our mission is to provide superior quality stone slabs  that enhance the transformation of living spaces,  ensuring utmost client satisfaction through  dependable service and premium product offerings."
              <br />
              <br />
              <b>II. Vision:</b>
              <br />
              "We aspire to be one of the globally leading  companies in the stone industry, renowned for our  commitment to excellence and unparalleled service."
              <br />
              <br />
              <b>III. Goal</b>
              <br />
              Our goal is to establish ourselves as the premier stone  supplier across Florida, driving market expansion by  strategically reaching new regions and customer  segments.
              Over the next 18 months, we aim to achieve a  significant increase in market share, solidifying our  position as the go-to provider for superior quality  stone slabs. This involves not only meeting but  exceeding customer expectations through continuous  innovation, impeccable service, and the introduction  of new, trend-setting designs to ensure our sustained  growth and dominance in the industry.

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
