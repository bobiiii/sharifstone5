import React from "react";
import "./GetAQuote.css";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import { FaAngleDown } from "react-icons/fa6";
import Heading from "../../resuable/Heading";

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
      <section className="fixed h-screen w-screen bg-black bg-opacity-55  flex justify-center items-center pb-16 pt-16 z-50 ">
        <main className=' max-w-screen-lg w-full  mx-auto   md:px-16 px-6 '>
          <button onClick={()=>setOpenQuote(false)} className="   text-xl  place-self-end w-full flex justify-end ms-4 -mb-2">
            <div className="bg-white rounded-full p-2 z-50 ">
              <ImCross  className="text-black" size={10} />
            </div>
          </button>
          <div className="bg-[#c9c8c8] backdrop-blur-sm py-6 px-6 flex flex-col gap-8">
            <div className="text-center mb-6">
              <Heading>
                Get A Qoute
              </Heading>
            </div>
            <div>
              <div className="w-full flex justify-between sm:flex-row flex-col gap-4">
                <input
                  className="w-full bg-white py-4 px-4 rounded-xl placeholder-black  outline-none xl:text-base text-sm font-light font-albert"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="w-full bg-white py-4 px-4 rounded-xl placeholder-black  outline-none xl:text-base text-sm font-light font-albert"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="w-full flex justify-between sm:flex-row flex-col gap-4 mt-4">
                <input
                  className="w-full bg-white py-4 px-4 rounded-xl placeholder-black  outline-none xl:text-base text-sm font-light font-albert"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="w-full bg-white py-4 px-4 rounded-xl placeholder-black  outline-none xl:text-base text-sm font-light font-albert"
                  type="number"
                  placeholder="Phone Number"
                />
              </div>
              <div className="relative mt-4">
                <select className="w-full  bg-white py-4 pl-4 pr-10 rounded-xl placeholder-black outline-none xl:text-base text-sm font-light font-albert appearance-none">
                  <option value="" disabled selected className="py-1">Select Option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <FaAngleDown />
                </div>
              </div>
              <div className="w-full mt-4">
                <textarea
                  className="w-full bg-white py-4 px-4 rounded-xl placeholder-black outline-none xl:text-base text-sm font-light font-albert"
                  rows="4"
                  style={{ maxHeight: "100px" }}  // adjust the number of rows as needed
                  placeholder="Message" // placeholder text
                ></textarea>
              </div>
              <div>
                <div className="w-full flex justify-center items-center mt-4 ">
                  <button className="bg-[#EE2A2E] py-2.5 px-28 text-white text-center rounded-3xl">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default GetAQuote;
