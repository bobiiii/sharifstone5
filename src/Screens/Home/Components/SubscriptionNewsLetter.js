import "./SubscriptionNewsLetter.css";
import BG from "../../../assets/images/homeImage/subscript_bg.png";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Heading from "../../resuable/Heading";
import { addNewsletter } from "../../../apiCall/apiCall";

const SubscriptionNewsLetter = () => {
  const [emailAdress, setEmailAdress] = useState("");
  const [emailAdressMessage, setEmailAdressMessage] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(false);

  const submitEmail = async (e) => {
    e.preventDefault();
    if (emailAdress.trim() === "") {
      setEmailAdressMessage("Email address cannot be empty");
      setTimeout(() => {
        setEmailAdressMessage("");
      }, 2000);
      return
    }

    const res = await addNewsletter(emailAdress);
    if (res.status === 200) {
      setEmailSuccess(true);
    }
  };



  return (
    <MaxWidthWrapper className='px-0'>
      <div className="w-full">
        <div className="bg-[#F3F5F5] flex justify-center items-center flex-col sm:gap-8 gap-4 lg:py-16 sm:py-10 py-6 relative px-2 ">
          <Heading className=' lg:w-2/3 md:w-[70%] w-full text-center px-1 lg:text-3xl sm:text-3xl text-base'>
            SUBSCRIBE TO OUR NEWSLETTER TO GET UPDATES ON NEW PROMOTIONS AND
            PRODUCTS
          </Heading>
          <div className=" lg:w-2/3 md:w-[70%] sm:w-[90%] w-full flex flex-col justify-center items-center ">
            <form style={{ marginBottom: 30 }} className="lg:w-[70%] md:w-[80%]
             w-full sm:px-2 px-4 flex " >
              <input
                className=" rounded-l-[30px] sm:w-[90%] w-full bg-white sm:py-4 py-2 px-4 text-base z-20 outline-none"
                placeholder="Enter Your Email"
                value={emailAdress}
                onChange={(e) => setEmailAdress(e.target.value)}
                type="text"
                required
              />
              <button onClick={(e) => { submitEmail(e) }} className=" bg-[#ee2a2e]  text-center items-center px-10 py-2 -ml-6 rounded-[30px] md:flex hidden whitespace-nowrap text-white font-semibold sm:text-base text-sm  font-gelasio z-30">
                Subscribe
              </button >
              <button onClick={(e) => { submitEmail(e) }} className=" bg-[#ee2a2e] z-30 text-center items-center px-6 py-2.5 -ml-6 rounded-[30px] whitespace-nowrap md:hidden flex text-white font-semibold  font-gelasio">
                <IoIosSend size={25} color={"white"} />
              </button>
            </form>
            {emailAdressMessage && <p className="text-red-500">{emailAdressMessage}</p>}
            {emailSuccess && <h3 className="text-red-500 text-center text-lg lg:text-3xl font-bold">Thank You For Being a Part of SharifStone! </h3>}
          </div>
          <img className="home-subscrion-bg" src={BG} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default SubscriptionNewsLetter;
