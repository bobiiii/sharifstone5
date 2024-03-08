import React from "react";
import "./GetAQuote.css";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";

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
    <div className="quote-form-containerhidden">
      <div className="quote-form-contactus">
        <div onClick={() => setOpenQuote(false)} className="quote-cross-icon">
          <ImCross size={15} color={"black"} />
        </div>
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
      </div>
    </div>
  );
}

export default GetAQuote;
