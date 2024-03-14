import React, { useEffect, useState } from "react";
import "./quatzDropdown.css";
import EssentialCollectionImage from "../assets/images/essential_dropdown_image.png";
import IndulgeCollectionImage from "../assets/images/indulge_dropdown_image.png";
import MythologyCollectionImage from "../assets/images/mythology_dropdown_image.png";
import InternationalCollectionImage from "../assets/images/international_dropdown_image.png";
import SuperJumboCollectionImage from "../assets/images/superjumbo_dropdown_image.png";
import DropdownIcon from "../assets/images/dropdown-icon.png";
import { Link } from "react-router-dom";
const QuartzDropdown = ({ navState }) => {
  const [hover, setHover] = useState("");
  const dropdown = [
    {
      title: "Essentials Collection (ES)",
      image: EssentialCollectionImage,
      backURL: `url(${EssentialCollectionImage})`,
      url: '/collection/ESSENTIAL-COLLECTION',
    },
    {
      title: "Indulge Collection(ID)",
      image: IndulgeCollectionImage,
      backURL: `url(${IndulgeCollectionImage})`,
      url: '/collection/INDULGE-COLLECTION',
    },
    {
      title: "Mythology Collection(MT)",
      image: MythologyCollectionImage,
      backURL: `url(${MythologyCollectionImage})`,
      url: '/collection/MYTHOLOGY-COLLECTION',
    },
    {
      title: "International Collection(INT)",
      image: InternationalCollectionImage,
      backURL: `url(${InternationalCollectionImage})`,
      url: '/collection/INTERNATIONAL-COLLECTION',
    },
    {
      title: "Super Jumbo Collection(SJ)",
      image: SuperJumboCollectionImage,
      backURL: `url(${SuperJumboCollectionImage})`,
      url: '/collection/SUPER-JUMBO%20COLLECTION',
    },
  ];


  return (
    <div className="lg:block hidden">
      <div id="drop-down" className="end-dropdown" onMouseOver={() => navState.setShowDropdown(false)}></div>
      <div className="dropdown-container">
        {dropdown.map((v, i) => (
          <Link
            to={v.url}
            onMouseEnter={() => setHover(v.title)}
            onMouseLeave={() => setHover("")}
            onClick={() => navState.setShowDropdown(false)}
            className="dropdown-item"
            style={{ backgroundImage: hover === v.title ? v.backURL : "" }}
          >
            <div
              className="dropdown-item-text "
              style={{ color: hover === v.title ? "#fff" : "" }}
            >
              {v.title}
            </div>
            <div className="items-center flex justify-center ">
              {hover === v.title ? (
                <img className="dropdown-img " src={DropdownIcon} alt="" />
              ) : (
                <img className="dropdown-img rounded-xl" src={v.image} alt="" />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuartzDropdown;
