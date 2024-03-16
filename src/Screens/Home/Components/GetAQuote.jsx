import React, { useEffect } from "react";
import "./GetAQuote.css";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import { FaAngleDown } from "react-icons/fa6";
import Heading from "../../resuable/Heading";
import Button from "../../resuable/Button";

function GetAQuote({ data }) {
  const { openQuote, setOpenQuote } = data;

  // const iconId = document?.getElementById('icon-id');
  // const selectId = document?.getElementById('select-id')
  // iconId.addEventListener("mousedown",function(){
  //   var evt = event
  //   setTimeout(function(){
  //     selectId.dispatchEvent(Event.)
  //   })
  // })
  return (
    <>
      {/* <section className="fixed cs-height2 h-screen w-screen bg-black bg-opacity-55  flex justify-center items-center pb-16 pt-16 z-50 ">
        <main className=" max-w-screen-lg w-full  mx-auto   md:px-16 px-6 ">
          <button
            onClick={() => setOpenQuote(false)}
            className="   text-xl  place-self-end w-full flex justify-end ms-4 -mb-2"
          >
            <div className="bg-white rounded-full p-2 z-50 ">
              <ImCross className="text-black" size={10} />
            </div>
          </button>
          <div className="bg-[#c9c8c8] h-[80vh] lg:h-min cs-height backdrop-blur-sm  py-6 px-6 flex flex-col gap-8">
            <div className="text-center mb-6  input-box2">
              <Heading>Get A Qoute</Heading>
            </div>
            <div>
              <div className="w-full flex justify-between sm:flex-row flex-col gap-4">
                <input
                  className="w-full bg-white py-4 px-4 rounded-xl placeholder-black  outline-none xl:text-base text-sm font-light font-albert input-box"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="w-full bg-white py-4 px-4 rounded-xl placeholder-black  outline-none xl:text-base text-sm font-light font-albert input-box"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="w-full flex justify-between sm:flex-row flex-col gap-4 mt-4">
                <input
                  className="w-full bg-white py-4 px-4 input-box rounded-xl placeholder-black  outline-none xl:text-base text-sm font-light font-albert"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="w-full bg-white py-4 px-4 rounded-xl placeholder-black  outline-none xl:text-base text-sm font-light font-albert input-box"
                  type="number"
                  placeholder="Phone Number"
                />
              </div>
              <div className="relative mt-4">
                <select className="w-full  bg-white py-4 pl-4 pr-10 rounded-xl placeholder-black outline-none xl:text-base text-sm font-light font-albert appearance-none input-box">
                  <option value="" disabled selected className="py-1">
                    Select Option
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none input-box">
                  <FaAngleDown />
                </div>
              </div>

              <div className="w-full mt-4">
                <textarea
                  className="w-full bg-white py-4 px-4 rounded-xl placeholder-black outline-none xl:text-base text-sm font-light font-albert"
                  rows="4"
                  style={{ maxHeight: "100px" }} // adjust the number of rows as needed
                  placeholder="Message" // placeholder text
                ></textarea>
              </div>
              <div>
                <div className="w-full text-center bg-white my-2 py-3 px-4 rounded-xl placeholder-black  outline-none xl:text-base text-sm font-light font-albert input-box">
                  <label className="w-full ">
                    CHOOSE IMAGE
                    <input
                      type="file"
                      className="hidden"
                      // You can add additional attributes or event handlers as needed
                    />
                  </label>
                </div>

                <div className="w-full flex justify-center items-center mt-4 input-box3">
                  <button className="bg-[#EE2A2E] py-2.5 px-28 text-white text-center rounded-3xl">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section> */}

      <div className=" fixed h-dvh z-50 flex justify-center items-center w-screen bg-black bg-opacity-55">
        <div className="flex h-max py-4 w-11/12  rounded-3xl flex-col justify-center items-center bg-[#c9c8c8]">
          <button
            onClick={() => setOpenQuote(false)}
            className="   text-xl  place-self-end w-full flex justify-end ms-4 -mb-2"
          >
            <div className="bg-white rounded-full p-2 lg:p-4 lg:mr-3 z-30 ">
              <ImCross className="text-black  " size={14} />
            </div>
          </button>

          <div className="mb-4">
            <Heading>Get A Qoute</Heading>
          </div>
          <div className="w-full px-4">
            <div className="w-full  flex justify-between sm:flex-row flex-col gap-4">
              <input
                className="w-full bg-white py-4 px-4 rounded-xl placeholder-black  outline-none xl:text-base text-sm font-light font-albert input-box"
                type="text"
                placeholder="First Name"
              />
              <input
                className="w-full bg-white py-4 px-4 rounded-xl placeholder-black  outline-none xl:text-base text-sm font-light font-albert input-box"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="w-full   flex justify-between sm:flex-row flex-col gap-4 mt-4">
              <input
                className="w-full bg-white py-4 px-4 input-box rounded-xl placeholder-black  outline-none xl:text-base text-sm font-light font-albert"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full bg-white py-4 px-4 rounded-xl placeholder-black  outline-none xl:text-base text-sm font-light font-albert input-box"
                type="number"
                placeholder="Phone Number"
              />
            </div>
            <div className="w-full relative  mt-4">
              <select className="w-full  bg-white py-4 pl-4 pr-10 rounded-xl placeholder-black outline-none xl:text-base text-sm font-light font-albert appearance-none input-box">
                <option value="" disabled selected className="py-1">
                  Select Option
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none input-box">
                <FaAngleDown />
              </div>
            </div>

            <div className="w-full mt-4">
              <textarea
                className="w-full bg-white py-4 px-4 rounded-xl placeholder-black outline-none xl:text-base text-sm font-light font-albert"
                rows="4"
                style={{ maxHeight: "100px" }} // adjust the number of rows as needed
                placeholder="Message" // placeholder text
              ></textarea>
            </div>
            <div>
              <div className="w-full  text-center bg-white my-2 py-3 px-4 rounded-xl placeholder-black  outline-none xl:text-base text-sm font-light font-albert input-box">
                <label className="w-full ">
                  CHOOSE IMAGE
                  <input
                    type="file"
                    className="hidden"
                    // You can add additional attributes or event handlers as needed
                  />
                </label>
              </div>

              <div className="w-full flex justify-center items-center mt-4 input-box3">
                <Button className={"px-10 py-3 lg:px-32"}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetAQuote;
