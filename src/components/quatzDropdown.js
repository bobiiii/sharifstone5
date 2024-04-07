import { useState } from "react";
import "./quatzDropdown.css";
import DropdownIcon from "../assets/images/dropdown-icon.png";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth"

const QuartzDropdown = () => {
  const { setShowDropdown, collections } = useAuth()
const [hover, setHover] = useState("");
const limitedCollections = collections.slice(0, 5);
  return (
    <div className="xl:block hidden z-50 bg-white rounded-2xl left-1/2 transform -translate-x-1/2   absolute top-10  mx-auto mt-10">
      <div className="">
        <div className=" w-full  px-4 flex justify-center z-20 ">
          {limitedCollections?.map((v, i) => {
            let link = v?.collectionName.replace(/\s+/g, "-");

            return (
              <Link
                key={i}
                to={`/${link}`}
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
