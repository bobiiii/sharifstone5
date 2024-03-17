import "./BusinessHours.css";
import Reception from "../../../assets/images/reception.png";
import { TbClockHour5 } from "react-icons/tb";
import MaxWidthWrapper from '../../MaxWidthWrapper'
import Heading from "../../resuable/Heading";
function BusinessHours() {
  const hours = [
    {
      day: "Monday",
      time: "8:00 AM - 5:30 PM",
    },
    {
      day: "Tuesday",
      time: "8:00 AM - 5:30 PM",
    },
    {
      day: "Wednesday",
      time: "8:00 AM - 5:30 PM",
    },
    {
      day: "Thursday",
      time: "8:00 AM - 5:30 PM",
    },
    {
      day: "Friday",
      time: "8:00 AM - 5:30 PM",
    },
    {
      day: "Saturday",
      time: "8:00 AM - 5:30 PM",
    },
    {
      day: "Sunday",
      time: "Sunday: (10:00 – 4:00pm) for Sharifstone Orlando only",
    },
  ];
  return (
    <MaxWidthWrapper >
      {/* reorganize_container  */}
      <div className="w-full flex justify-center items-center">
        <div className="ourmission-container">
          <Heading>
            BUSINESS HOURS
          </Heading>
          <hr style={{ margin: "20px 0px", border: '0.5px solid #D9D9D9', opacity: 0.9 }} />
          <div className="flex justify-between xl:gap-16 gap-9 lg:flex-row flex-col-reverse items-center ">
            {/* ourmission-innercontainer */}
            <div className="lg:w-1/2 w-full">
              {hours.map((v, i) => (
                <div className="businesshour-row" key={i}>
                  <div className="business-time">
                    <TbClockHour5 size={30} className="sm:text-[#EE2A2E] text-[#000000]" />
                    <div>{v.day}</div>
                  </div>
                  {/* businesshour-row */}
                  <div className="business-timing  ">
                    <h6 className="sm:w-80 w-full">
                      {v.time}
                    </h6>

                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-1/2 w-full">
              {/* businesshours-img */}
              <img className="w-full rounded-[24px]" src={Reception} />
            </div>

          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default BusinessHours;
