import React, { useEffect, useState } from "react";
import "./quatzDropdown.css";
import EssentialCollectionImage from "../assets/images/essential_dropdown_image.png";
import IndulgeCollectionImage from "../assets/images/indulge_dropdown_image.png";
import MythologyCollectionImage from "../assets/images/mythology_dropdown_image.png";
import InternationalCollectionImage from "../assets/images/international_dropdown_image.png";
import SuperJumboCollectionImage from "../assets/images/superjumbo_dropdown_image.png";
import DropdownIcon from "../assets/images/dropdown-icon.png";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth"






const QuartzDropdown = () => {
  const {showDropdown, setShowDropdown} = useAuth()
  
  // const { setShowDropdown}= navState2;
  const [hover, setHover] = useState("");
  const dropdown = [
    {
      title: "Essentials Collection (ES)",
      image: EssentialCollectionImage,
      backURL: `${EssentialCollectionImage}`,
      url: '/collection/ESSENTIAL-COLLECTION',
    },
    {
      title: "Indulge Collection(ID)",
      image: IndulgeCollectionImage,
      backURL: `${IndulgeCollectionImage}`,
      url: '/collection/INDULGE-COLLECTION',
    },
    {
      title: "Mythology Collection(MT)",
      image: MythologyCollectionImage,
      backURL: `${MythologyCollectionImage}`,
      url: '/collection/MYTHOLOGY-COLLECTION',
    },
    {
      title: "International Collection(INT)",
      image: InternationalCollectionImage,
      backURL: `${InternationalCollectionImage}`,
      url: '/collection/INTERNATIONAL-COLLECTION',
    },
    {
      title: "Super Jumbo Collection(SJ)",
      image: SuperJumboCollectionImage,
      backURL: `${SuperJumboCollectionImage}`,
      url: '/collection/SUPER-JUMBO%20COLLECTION',
    },
  ];


  return (
    <div className="lg:block z-50 bg-white rounded-2xl left-1/2 transform -translate-x-1/2    absolute top-10  mx-auto mt-10">
      {/* <div id="drop-down" className="end-dropdown" onMouseOver={() => navState.setShowDropdown(false)}></div> */}

      <div className="">
      <div className=" w-full  px-4 flex justify-center z-20 ">
        {dropdown.map((v, i) => {
          
          return(
          <Link
            to={v.url}
            onMouseEnter={() => setHover(v.title)}
            onMouseLeave={() => setHover("")}
            onClick={() => setShowDropdown(false)}
            className="dropdown-item"
            // style={{ backgroundImage: hover === v.title ? v.backURL : "" }}
          >


{/* <div
              className="dropdown-item-text "
              style={{ color: hover === v.title ? "#fff" : "" }}
            >
              {v.title}
            </div> */}

 <div className=" relative h-[200px] w-[230px] px-2  ">
{hover === v.title  
?
// when i hover this card appear, but it is going out of box

<div className=" w-[100%] h-[100%]  " >
<img src={v.backURL} className=" w-[100%] h-[100%]  " alt="a"/>
<p className="text-white  w-[210px] pt-2  font-semibold font-albert text-[17px] text-center absolute top-0 ">{v.title}</p>
<img className=" absolute bottom-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2  " src={DropdownIcon} alt="" />
</div>
:<div className=" w-full  h-full py-2">
  <p className="h-1/5 text-black font-medium text-base text-center text-nowrap truncate px-2">{v.title}</p>
  <img className="w-full h-3/5 rounded-lg " src={v.image} alt=""/>


  </div>}
</div> 
            
            {/* <div className="items-center flex justify-center ">
              {hover === v.title ? (
                <img className="dropdown-img   " src={DropdownIcon} alt="" />
              ) : (
                <img className="dropdown-img rounded-xl border border-red-600" src={v.image} alt="" />
              )}
            </div> */}
          </Link>
        )})}
      </div>
      </div>
    </div>
  );
};

export default QuartzDropdown;
