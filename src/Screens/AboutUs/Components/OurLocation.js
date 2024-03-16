import React from "react";
import "./OurLocation.css";
import OrlandoMap from '../../../assets/images/orlando_map.png'
import TampaMap from '../../../assets/images/orlando_map2.png'
import ComingSoon from '../../../assets/images/coming_soon.png'
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Heading from "../../resuable/Heading";

function OurLocation() {
  return (
    <MaxWidthWrapper>
      {/* reorganize_container  */}
      <div className="w-full flex justify-center items-center">
        <div className="ourmission-container">
          {/* <div className="ourmission-heading"></div> */}
          <Heading className='sm:text-start text-center'>
            OUR LOCATIONS
          </Heading>
          <hr style={{ margin: "20px 0px", border: '0.5px solid #D9D9D9', opacity: 0.9 }} />
          {/* ourmission-subcontainer */}
          <div className="w-full flex justify-between lg:flex-row flex-col lg:gap-10 gap-6 items-center mt-4">
            <div className="flex flex-grow flex-col gap-6  w-full">
              <div>
                <img className="rounded-3xl w-full" src={OrlandoMap} />
              </div>
              <div>
                <Heading className='lg:text-4xl  sm:text-3xl  text-xl'>
                  ORlANDO
                </Heading>
                <p className="sm:text-base text-sm font-light font-albert">
                  2440 Dinneed Ave. Orlando, FL 32804
                </p>
              </div>

            </div>
            <div className="flex flex-grow flex-col gap-6  w-full">
              <div>
                <img className="rounded-3xl w-full" src={TampaMap} />
              </div>
              <div>
                <Heading className='lg:text-4xl  sm:text-3xl  text-xl'>
                  Tempa
                </Heading>
                <p className="sm:text-base text-sm font-light font-albert">
                  2440 Dinneed Ave. Orlando, FL 32804
                </p>
              </div>

            </div>
            <div className="flex flex-grow flex-col gap-6  w-full">
              <div>
                <img className="rounded-3xl w-full" src={ComingSoon} />
              </div>
              <div>
                <Heading className='lg:text-4xl  sm:text-3xl  text-xl'>
                  Coming soon
                </Heading>
              </div>
            </div>




            {/* <div className="ourmission-innercontainer">
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

            </div> */}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default OurLocation;
