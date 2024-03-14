import React from "react";
import "./InsideStore.css";
import InsideStoreImage1 from '../../../assets/images/homeImage/insidestore1.jpg'
import InsideStoreImage2 from '../../../assets/images/homeImage/insidestore2.jpg'
import InsideStoreImage3 from '../../../assets/images/homeImage/insidestore3.jpg'
import InsideStoreImage4 from '../../../assets/images/homeImage/insidestore4.jpg'
import BackS from '../../../assets/images/back_s.png'
import { Link } from "react-router-dom";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Heading from "../../resuable/Heading";
import Button from "../../resuable/Button";

function InsideStore({ data }) {
  const { openQuote, setOpenQuote } = data
  const imageArray = [InsideStoreImage1, InsideStoreImage2, InsideStoreImage3, InsideStoreImage4]
  const catalog = [
    {
      name: 'Color Catalog',
      image: 'url(images/inside_icon1.png)',
      href: "/quartz-collection"
    },
    {
      name: 'Digital Brochure',
      image: 'url(images/inside_icon2.png)',
      href: "/"
    },
    {
      name: 'Where To Buy',
      image: 'url(images/inside_icon3.png)',
      href: "/where-to-buy"
    },
  ]
  return (
    <MaxWidthWrapper className='px-0 '>
      <div className="home-advantagecontainer home-advantagecontainer-center  ">
        <div className="home-advantageinnercontainer border ">
          <img className="home-back-s " src={BackS} alt="" />
          {/* home-section */}
          <div className="w-full md:px-6 px-2">
            <div className="home-insidestore-container">
              {/* home-insidestore-heading */}
              <Heading className='md:text-start text-center w-full pr-1'>
                STEP INSIDE OUR STORE
              </Heading>
              {/* <div className="homebrand-button">View Full Catalogue</div> */}
              <div className="bg-[#ee2a2e] text-center items-center px-6 py-2.5 rounded-3xl whitespace-nowrap text-white font-semibold font-gelasio md:flex hidden" onClick={() => setOpenQuote(true)}>Get Directions</div>
            </div>
            {/* home-insidestore-imagecontainer */}
            <div className="grid md:grid-cols-4 grid-cols-2 justify-between gap-4  px-2 mt-8 full">
              {
                imageArray.map((v, i) => <img src={v} className="rounded-[20px]  w-full h-full flex flex-grow" />)
              }
            </div>
            <div className="flex justify-center items-center mt-6">
            {/* <Button clickFunc={() => setOpenQuote(true)}>
            Get Directions

            </Button> */}
            </div>

            

            {/* <div className="home-insidestore-container">
            <div className="home-insidestore-subheading">DISCOVER OUR TOP-QUALITY STONE OPTIONS TO PERFECTLY MATCH YOUR DESIRED SPACE!</div>
            
          </div> */}
            {/* <div className="home-insidestore-imagecontainer">
            {
              catalog.map((v, i) => (
                <Link to={v.href} className="homeinsider-offercard">
                  <div style={{ backgroundImage: v.image}} className="homeinsider-offercard-image" />
                  <div className="homeinsider-offercard-text">{v.name}</div>
                </Link>
                ))
            }
          </div> */}

          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default InsideStore;
