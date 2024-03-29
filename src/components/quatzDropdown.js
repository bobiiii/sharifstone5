import { useState } from "react";
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
  const { setShowDropdown, collections } = useAuth()
  console.log(collections);
  console.log(collections[0].collectionImage);

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
    <div className="xl:block hidden z-50 bg-white rounded-2xl left-1/2 transform -translate-x-1/2   absolute top-10  mx-auto mt-10">

      <div className="">
        <div className=" w-full  px-4 flex justify-center z-20 ">
          {collections.map((v, i) => {

            return (
              <Link
                key={i}
                to={`/quartz-collection/${v.collectionName}`}
                onMouseEnter={() => setHover(v.collectionName)}
                onMouseLeave={() => setHover("")}
                onClick={() => setShowDropdown(false)}
                className="dropdown-item"
              >



                <div className=" relative  h-[200px] w-[230px] px-2  ">
                  {hover === v.collectionName
                    ?

                    <div className=" w-[100%] h-[100%]  " >
                      <img src={`https://drive.google.com/thumbnail?id=${v.dropDownImage}&sz=w1000`} className=" w-[100%] h-[100%]  " alt="a" />
                      <p className="text-white  w-[210px] pt-2  font-semibold font-albert text-[17px] text-center absolute top-0 ">{v.collectionName}</p>
                      <img className=" absolute bottom-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2  " src={DropdownIcon} alt="" />
                    </div>
                    : <div className=" w-full  h-full py-2">
                      <p className="h-1/5 text-black font-medium text-base text-center text-nowrap truncate px-2">{v.collectionName}</p>
                      <img className="w-full h-3/5 rounded-lg " src={`https://drive.google.com/thumbnail?id=${v.dropDownImage}&sz=w1000`} alt="" />


                    </div>}
                </div>

              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default QuartzDropdown;
