import "./InsideStore.css";
import InsideStoreImage1 from '../../../assets/images/homeImage/insidestore1.jpg'
import InsideStoreImage2 from '../../../assets/images/homeImage/insidestore2.jpg'
import InsideStoreImage3 from '../../../assets/images/homeImage/insidestore3.jpg'
import InsideStoreImage4 from '../../../assets/images/homeImage/insidestore4.jpg'
import BackS from '../../../assets/images/back_s.png'
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Heading from "../../resuable/Heading";
import Button from "../../resuable/Button";
import { Link } from "react-router-dom";

function InsideStore({ data }) {
  const { setOpenQuote } = data

  const imageArray = [InsideStoreImage1, InsideStoreImage2, InsideStoreImage3, InsideStoreImage4]

  return (
    <MaxWidthWrapper className='px-0 '>
      <div className="home-advantagecontainer home-advantagecontainer-center  ">
        <div className="home-advantageinnercontainer border ">
          <img className="home-back-s " src={BackS} alt="INSIDE-OUR-STORE" />
          <div className="w-full md:px-6 px-2">
            <div className="home-insidestore-container">
              <Heading className='md:text-start text-center w-full pr-1'>
                STEP INSIDE OUR STORE
              </Heading>
              <Link to='/where-to-buy' className="bg-[#ee2a2e] text-center items-center px-6 py-2.5 rounded-3xl whitespace-nowrap text-white font-semibold z-40 cursor-pointer font-gelasio md:flex hidden "  >Get Directions</Link>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 justify-between gap-4  px-2 mt-8 full">
              {
                imageArray.map((v, i) => <img key={i} src={v} className="rounded-[20px]  w-full h-full flex flex-grow sm:max-h-full max-h-[25vh] " alt="INSIDE-OUR-STORE" />)
              }
            </div>
            <div className="md:hidden  flex justify-center items-center mt-6">

              <Link to='/where-to-buy' className="bg-[#ee2a2e] text-center items-center px-6 py-2.5 rounded-3xl whitespace-nowrap text-white font-semibold z-40 cursor-pointer font-gelasio  "  >Get Directions</Link>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default InsideStore;
