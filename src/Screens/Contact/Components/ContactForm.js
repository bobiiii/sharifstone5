import { useState } from "react";
import "./ContactForm.css";
import ContactFormBG from "../../../assets/images/contactform_bg.png";
import Upload from "../../../assets/images/upload.png";
import Heading from "../../resuable/Heading";
import Button from "../../resuable/Button";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import axios from "axios";

import Dropzone from "react-dropzone";
function ContactForm() {
  const [upload, setUpload] = useState(null);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    location: "",
    zipCode: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
    agreeCheckbox: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);

    const formDataToSend = new FormData();
    formDataToSend.append("location", formData.location);
    formDataToSend.append("zipcode", formData.zipCode);
    formDataToSend.append("firstname", formData.firstName);
    formDataToSend.append("lastname", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("mobile", formData.mobile);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("checked", formData.agreeCheckbox);
    formDataToSend.append("upload", upload);
    console.log(formData);
    try {
      const response = await axios.post(
        'https://sharifstone-backend.vercel.app/api/contact/add-contact',
        formDataToSend
      );

      if (response.status === 200) {
        setMessage(response.data.message);
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      setMessage(error.response.data.message); 
    } finally {
      setLoader(false);
    }
  };

  const handleFileDrop = (acceptedFiles) => { 
    setUpload(acceptedFiles[0]);
  };
  return (
    <MaxWidthWrapper className='px-0'>
      <div className="contactform-container">
        <form onSubmit={handleSubmit} className="contactform-formcontainer sm:py-18 py-4">
          <Heading className='py-4 xs:block hidden'>
            CONTACT US
          </Heading>
          <div className=" text-center  w-full ">
            <Heading className='py-4 xs:hidden  '>
              Find A Fabricator
            </Heading>
          </div>

          <div className="contactform-inputcontainer md:w-[80%] w-full flex justify-evenly  px-3">
            <input
              type="text"
              placeholder="Enter Your Location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
            <input
              type="text"
              placeholder="ZIP Code"
              value={formData.zipCode}
              onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
            />
          </div>
          <div className="contactform-inputcontainer md:w-[80%] w-full flex justify-evenly px-3">
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </div>
          <div className="contactform-inputcontainer md:w-[80%] w-full flex justify-evenly px-3">
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              style={{ width: "100%" }}
              type="number"
              placeholder="mobile"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            />

          </div>
          <div className="contactform-inputcontainer md:w-[80%] w-full flex justify-evenly px-3">
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Subject: Scope of work"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>

          <div className="contactform-inputcontainer md:w-[80%] w-full flex justify-evenly px-3">
            <textarea
              className="contactform-textarea"
              placeholder="Messages"
              rows="5"
              cols="60"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div className="  md:w-[80%] w-full  mt-2 flex justify-start items-start z-50 xs:px-6 px-3  ">
            <Dropzone onDrop={handleFileDrop}>
              {({ getRootProps, getInputProps }) => (
                <section className="text-sm">
                  <div style={{ cursor: 'pointer' }} {...getRootProps()}>
                    <input {...getInputProps()} />
                    <img src={Upload} className="xs:w-20 w-16" alt="Upload icon" />
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="contactform-inputcheck  md:w-[80%] w-full flex md:gap-4 gap-1 md:px-6 px-4">
            <input
              type="checkbox"
              name="agreeCheckbox"
              className="mt-1.5"
              checked={formData.agreeCheckbox}
              onChange={(e) => setFormData({ ...formData, agreeCheckbox: e.target.checked })}
            />
            <p className="xs:text-base text-sm font-light font-albert ">
              Yes, sign me up to receive email communications from Sharifstone about products, news, and events. I understand I can
              unsubscribe at any time

              <span className="text-[12px] mt-4 font-light font-albert">
                By providing your details and clicking Submit, you acknowledge and
                agree to our website <span className="text-[12px] font-bold font-albert ">Privacy Policy</span> and <span className="text-[12px] font-bold font-albert ">Terms of Use</span>.
              </span>
            </p>
          </div>
          <div className="w-full flex-col gap-2 flex justify-center items-center text-center">
            <p className="z-50">{message}</p>
            <Button type="submit" className='z-50 bg-[#EE2A2E] sm:px-10 px-6 sm:text-base text-sm'>
              {
                loader ? "loading..." : "Submit"
              }
            </Button>
          </div>

          <img className="contactform-bg" src={ContactFormBG} />
        </form>
      </div>
    </MaxWidthWrapper>
  );
}

export default ContactForm;
