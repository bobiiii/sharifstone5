import React, { useState } from "react";
import "./ContactForm.css";
import ContactFormBG from "../../../assets/images/contactform_bg.png";
import Upload from "../../../assets/images/upload.png";

import Dropzone from "react-dropzone";
function ContactForm() {
  const [upload, setUpload] = useState();
  return (
    <div className="contactform-container">
      <div className="contactform-formcontainer">
        <div className="contactform-heading">CONTACT US</div>
        <div className="contactform-inputcontainer">
          <input type="text" placeholder="Enter Your Location" />
          <input type="text" placeholder="ZIP Code" />
        </div>
        <div className="contactform-inputcontainer">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="contactform-inputcontainer">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Mobile" />
        </div>
        <div className="contactform-inputcontainer">
          <input
            style={{ width: "100%" }}
            type="text"
            placeholder="Subject: Scope of work"
          />
        </div>
        <div className="contactform-inputcontainer">
          <textarea
            className="contactform-textarea"
            placeholder="Messages"
            rows="5"
            cols="50"
          />
        </div>
        <div className="contactform-uploads">
          <Dropzone onDrop={(acceptedFiles) => setUpload(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div style={{cursor: 'pointer'}} {...getRootProps()}>
                  <input {...getInputProps()} />
                  <img src={Upload} />
                </div>
              </section>
            )}
          </Dropzone>
        </div>
        <div className="contactform-inputcheck">
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <div>
            Yes, sign me up to receive email communications from Sharifstone about products, news, and events. I understand I can
            unsubscribe at any time
          </div>
        </div>
        <div className="contactform-review">
          <div>
            By providing your details and clicking Submit, you acknowledge and
            agree to our website <b>Privacy Policy</b> and <b>Terms of Use</b>.
          </div>
        </div>
        <div className="submit-btn">Submit</div>
        <img className="contactform-bg" src={ContactFormBG} />
      </div>
    </div>
  );
}

export default ContactForm;
