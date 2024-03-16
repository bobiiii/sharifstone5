import React, { useState } from "react";
import "./ContactForm.css";
import ContactFormBG from "../../../assets/images/contactform_bg.png";
import Upload from "../../../assets/images/upload.png";
import Heading from "../../resuable/Heading";
import Button from "../../resuable/Button";
import MaxWidthWrapper from "../../MaxWidthWrapper";

import Dropzone from "react-dropzone";
function ContactForm() {
  const [upload, setUpload] = useState();
  return (
    <MaxWidthWrapper className='px-0'>
      <div className="contactform-container">
        <div className="contactform-formcontainer sm:py-18 py-4">
          {/* <div className="contactform-heading"></div> */}
          <Heading className='py-4 xs:block hidden'>
            CONTACT US
          </Heading>
          <div className=" text-center  w-full ">
            <Heading className='py-4 xs:hidden  '>
              Find A Fabricator
            </Heading>
          </div>

          <div className="contactform-inputcontainer md:w-[80%] w-full flex justify-evenly  px-3">
            <input type="text" placeholder="Enter Your Location" />
            <input type="text" placeholder="ZIP Code" />
          </div>
          <div className="contactform-inputcontainer md:w-[80%] w-full flex justify-evenly px-3">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="contactform-inputcontainer md:w-[80%] w-full flex justify-evenly px-3">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Mobile" />
          </div>
          <div className="contactform-inputcontainer md:w-[80%] w-full flex justify-evenly px-3">
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Subject: Scope of work"
            />
          </div>
          <div className="contactform-inputcontainer  md:w-[80%] w-full flex justify-evenly px-3">
            <textarea
              className="contactform-textarea"
              placeholder="Messages"
              rows="5"
              cols="60"
            />
          </div>
          {/* contactform-uploads */}
          {/* md:w-[80%] items-start  text-left flex justify-start w-full z-50 */}
          <div className="  md:w-[80%] w-full  mt-2 flex justify-start items-start z-50 xs:px-6 px-3  ">
            <Dropzone onDrop={(acceptedFiles) => setUpload(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section className="text-sm">
                  <div style={{ cursor: 'pointer' }} {...getRootProps()}>
                    <input {...getInputProps()} />
                    <img src={Upload} className="xs:w-20 w-16" />
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="contactform-inputcheck  md:w-[80%] w-full flex md:gap-4 gap-2 md:px-6 px-4">
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" className="mt-2 px-4 w-8 " />
            <p className="xs:text-base text-sm font-light font-albert ">
              Yes, sign me up to receive email communications from Sharifstone about products, news, and events. I understand I can
              unsubscribe at any time

              <p className="text-[12px] mt-4 font-light font-albert">
                By providing your details and clicking Submit, you acknowledge and
                agree to our website <span className="text-[12px] font-bold font-albert ">Privacy Policy</span> and <span className="text-[12px] font-bold font-albert ">Terms of Use</span>.
              </p>
            </p>
          </div>
          {/* <div className="submit-btn"></div> */}
          <div className="w-full flex justify-center items-center text-center">
            <Button className='z-50 bg-[#EE2A2E] sm:px-10 px-6 sm:text-base text-sm'>
              Submit
            </Button>
          </div>

          <img className="contactform-bg" src={ContactFormBG} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default ContactForm;
