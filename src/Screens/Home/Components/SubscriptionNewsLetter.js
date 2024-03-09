import "./SubscriptionNewsLetter.css";
import BG from "../../../assets/images/homeImage/subscript_bg.png";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";
import MaxWidthWrapper from "../../MaxWidthWrapper";

const SubscriptionNewsLetter = () => {
  const [mailto, setMailto] = useState("");
  const submitForm = (e) => {
    console.log('i am submitting...');
    window.location.href = `mailto: ${mailto}`;
    e.preventDefault();
  }
  return (
    <MaxWidthWrapper>
      <div className="home-subscribe">
        {/* home-subscription-container */}
        <div className="bg-[#F3F5F5] flex justify-center items-center flex-col sm:gap-16 gap-8 py-16 relative">
          {/* home-subscription-header */}
          <div className="xl:w-[80%] w-screen px-2  font-gelasio lg:text-5xl   font-semibold sm:text-4xl  xs:text-2xl text-xl  text-[rgb(34,31,31)] text-center" >
            SUBSCRIBE TO OUR NEWSLETTER TO GET UPDATES ON NEW PROMOTIONS AND
            PRODUCTS
          </div>
          <div className="flex justify-center items-center  w-full">
            <form style={{ zIndex: 100, marginBottom: 30 }} className="lg:w-[70%] md:w-[80%]
             w-full sm:px-2 px-4 flex" onSubmit={submitForm}>
              {/* home-subscript-input */}
              <input
                className=" rounded-l-[30px] w-full bg-white sm:py-4 py-2 px-4 text-base"
                placeholder="Enter Your Email"
                value={mailto}
                onChange={(e) => setMailto(e.target.value)}
                type="text"
                required
              />
              {/* home-subscription-btn */}
              <button type="submit" className=" bg-[#ee2a2e]  text-center items-center px-10 py-2 -ml-6 rounded-[30px] md:flex hidden whitespace-nowrap text-white font-semibold sm:text-base text-sm  font-gelasio">
                Subcribe
              </button >
              <button type="submit" className=" bg-[#ee2a2e]  text-center items-center px-6 py-2.5 -ml-6 rounded-[30px] whitespace-nowrap md:hidden flex text-white font-semibold  font-gelasio">
                <IoIosSend size={25} color={"white"} />
              </button>

            </form>
          </div>

          <img className="home-subscrion-bg" src={BG} />

        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default SubscriptionNewsLetter;
