import React from "react";
import "./OurLocation.css";
import OrlandoMap from '../../../assets/images/orlando_map.png'
import TampaMap from '../../../assets/images/orlando_map2.png'
import ComingSoon from '../../../assets/images/coming_soon.png'
import MaxWidthWrapper from "../../MaxWidthWrapper";

function OurLocation() {
  return (
    <MaxWidthWrapper>
      <div className="reorganize_container">
        <div className="ourmission-container">
          <div className="ourmission-heading">OUR LOCATIONS</div>
          <hr style={{ margin: "20px 0px", border: '0.5px solid #D9D9D9', opacity: 0.9 }} />
          <div className="ourmission-subcontainer">
            <div className="ourmission-innercontainer">
              <img className="ourmission-image" src={OrlandoMap} />
              <div className="location-name">ORLANDO</div>
              <div className="location-desc">2440 Dinneed Ave. Orlando, FL 32804</div>
            </div>

            <div className="ourmission-innercontainer">
              <img className="ourmission-image" src={TampaMap} />
              <div className="location-name">TAMPA</div>
              <div>8524 E. Adamo Dr. Tampa, FL 33619</div>
            </div>

            <div className="ourmission-innercontainer">
              <img className="ourmission-image" src={ComingSoon} />
              <div className="location-name">Coming Soon</div>

            </div>

          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default OurLocation;
