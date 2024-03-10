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
    <div className="quote-form-containerhidden ">
      <div className="quote-form-contactus max-w-[1900px] ">
        <div onClick={() => setOpenQuote(false)} className="quote-cross-icon">
          <ImCross size={15} color={"black"} className="cursor-pointer" />
        </div>
        <Heading>
          Get A Qoute
        </Heading>
        <div className="  max-h-[100vh] max-w-screen-lg  w-full px-6 py-4  ">
          <div className="w-full flex justify-between gap-4">
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
          <div className="w-full flex justify-between gap-4 mt-4">
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
              style={{ maxHeight: "180px" }}  // adjust the number of rows as needed
              placeholder="Message" // placeholder text
            ></textarea>
          </div>
          {/* <div className="w-full  mt-4">
            <input
              className="w-full bg-white py-4 px-4 rounded-xl placeholder-black  outline-none xl:text-base text-sm font-light font-albert"
              type="file"
              accept="image/*"
              placeholder="Choose Image"
            />
          </div> */}
        </div>
        {/* <div >
          <div className="quote-label">STONE INQUIRY</div>
          <div className="quote-field-row">
            <input type={"text"} placeholder={"First Name"} />
            <input type={"text"} placeholder={"Last Name"} />
          </div>
          <div className="quote-field-row">
            <input type={"text"} placeholder={"Email"} />
            <input type={"text"} placeholder={"Phone Number"} />
          </div>
          <div className="select-container">
            <select
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
              id="select-id"
              className="quote-select"
            >
              <option>Select</option>
              <option value="To know the price of a specific stone">
                Check Matched Stones
              </option>
              <option value="Find a fabricator and get a quote from them">
                Check Stone Availability
              </option>
            </select>
          </div>

          <textarea
            id="w3review"
            placeholder="Message"
            className="quote-message"
            rows="6"
            cols="50"
          ></textarea>

          <div className="quote-field-row">
            <label
              htmlFor="imageUpload"
              style={{ backgroundColor: "white" }}
              className="quote-field-row"
            >
              Choose Image
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              style={{ display: "none" }}
            // onChange={(e) => handleImageUpload(e)}
            />
          </div>
          <div className="quote-submit">Submit</div>
        </div> */}
      </div>
    </div>
  );
}

export default GetAQuote;
