import "./OurMission.css";
import OurMissionImage from "../../../assets/images/ourmission.jpg";
import MaxWidthWrapper from '../../MaxWidthWrapper'
import Heading from "../../resuable/Heading";
function OurMission() {
  return (
    <MaxWidthWrapper className=''>
      {/* reorganize_container  */}
      <div className=" w-full flex justify-center items-center">
        <div className="ourmission-container">
          <Heading className='md:text-start text-center'>
            OUR COMPANY'S COMMITMENT
          </Heading>
          <hr style={{ margin: "20px 0px", border: '0.5px solid #D9D9D9', opacity: 0.9 }} />
          {/* ourmission-cover ourmission-subcontainer */}
          <div className="flex justify-between mt-4 xl:gap-16 gap-9 lg:flex-row flex-col w-full">
            {/* ourmission-innercontainer-update  */}
            <div className="lg:w-1/2 w-full">
              <img className=" xl:h-full   rounded-[24px] h-full" src={OurMissionImage} />
            </div>
            {/* ourmission-innercontainer */}
            <div className=" lg:w-1/2 w-full">
            {/* ourmission-details */}
              <div className="">
                <b>I. Mission:</b>
                <p className="sm:text-base text-sm font-light font-albert mt-2 ">
                  "Our mission is to provide superior quality stone slabs  that enhance the transformation of living spaces,  ensuring utmost client satisfaction through  dependable service and premium product offerings."
                </p>
                <br />
                <b>II. Vision:</b>
                <p className="sm:text-base text-sm font-light font-albert mt-2 ">
                  "We aspire to be one of the globally leading  companies in the stone industry, renowned for our  commitment to excellence and unparalleled service."
                </p>
                <br />
                <b>III. Goal</b>
                <p className="sm:text-base text-sm font-light font-albert mt-2 ">
                  Our goal is to establish ourselves as the premier stone  supplier across Florida, driving market expansion by  strategically reaching new regions and customer  segments.
                  Over the next 18 months, we aim to achieve a  significant increase in market share, solidifying our  position as the go-to provider for superior quality  stone slabs. This involves not only meeting but  exceeding customer expectations through continuous  innovation, impeccable service, and the introduction  of new, trend-setting designs to ensure our sustained  growth and dominance in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default OurMission;
