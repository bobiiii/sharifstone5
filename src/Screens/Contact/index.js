import React from "react";
import CoverComponent from "../../components/coverComponent";
import ContactDetails from "./Components/ContactDetails";
import ContactForm from "./Components/ContactForm";
import FAQ from "./Components/FAQ";
import "./Contact.css";

function ContactScreen() {
  return (
    <div>
      <CoverComponent
        image={"images/cover/contact_us.png"}
        label={["SPEAK", "WITH US"]}
      />
      {/* contact-maindesc */}
      <div className="contact-maincontainer">
        <div className="lg:w-[60%] max-w-screen-lg w-[80%] sm:text-lg text-sm font-light font-albert text-center  ">
          Feel free to contact us with questions via our form below and we will
          get back to you as soon as possible. Visit our Sharifstone Distribution Centers here. For Media Relations inquiries, please click
          here.
        </div>
      </div>
      <ContactForm />
      {/* <ContactDetails /> */}
      <FAQ />
    </div>
  );
}

export default ContactScreen;
