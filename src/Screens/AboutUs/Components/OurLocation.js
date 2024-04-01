import "./OurLocation.css";
import OrlandoMap from '../../../assets/images/orlando_map.png'
import TampaMap from '../../../assets/images/orlando_map2.png'
import ComingSoon from '../../../assets/images/coming_soon.png'
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Heading from "../../resuable/Heading";

function OurLocation() {
  return (
    <MaxWidthWrapper>
      <div className="w-full flex justify-center items-center">
        <div className="ourmission-container">
          <Heading className='sm:text-start text-center'>
            OUR LOCATIONS
          </Heading>
          <hr style={{ margin: "20px 0px", border: '0.5px solid #D9D9D9', opacity: 0.9 }} />
          <div className="w-full flex justify-between lg:flex-row flex-col lg:gap-10 gap-6  mt-4 ">

            <div className="w-full">
              <div>
                <img className="rounded-3xl w-full" src={OrlandoMap} />
              </div>
              <div className="pt-2">
                <Heading className='lg:text-4xl  sm:text-3xl  text-xl'>
                  ORlANDO
                </Heading>
                <p className="sm:text-base text-sm font-light font-albert">
                  2440 Dinneen Ave, Orlando, FL 32804, USA</p>
              </div>

            </div>
            <div className="w-full">
              <div>
                <img className="rounded-3xl w-full" src={TampaMap} />
              </div>
              <div className="pt-2">
                <Heading className='lg:text-4xl  sm:text-3xl  text-xl'>
                  TAMPA
                </Heading>
                <p className="sm:text-base text-sm font-light font-albert">
                  8524 E Adamo Dr, Tampa, FL 33619, USA</p>
              </div>

            </div>
            <div className="w-full">
              <div>
                <img className="rounded-3xl w-full" src={ComingSoon} />
              </div>
              <div className="pt-2">
                <Heading className='lg:text-4xl  sm:text-3xl  text-xl'>
                  Coming soon
                </Heading>

              </div>

            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default OurLocation;
