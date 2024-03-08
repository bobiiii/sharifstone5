import "./SubscriptionNewsLetter.css";
import BG from "../../../assets/images/homeImage/subscript_bg.png";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";

const SubscriptionNewsLetter = () => {
  const [mailto, setMailto] = useState("");
  const submitForm = (e) => {
    console.log('i am submitting...');
    window.location.href = `mailto: ${mailto}`;
    e.preventDefault();
  }
  return (
    <div className="home-subscribe">
      <div className="home-subscription-container">
        <div className="home-subscription-header">
          SUBSCRIBE TO OUR NEWSLETTER TO GET UPDATES ON NEW PROMOTIONS AND
          PRODUCTS
        </div>
        <form style={{zIndex: 100}} onSubmit={submitForm}>
          <div style={{ display: "flex", marginBottom: 30}}>
            <input
              className="home-subscript-input"
              placeholder="Enter Your Email"
              value={mailto}
              onChange={(e) => setMailto(e.target.value)}
              type="text"
              required
            />
            <button
            type="submit"
              className="home-subscription-btn"
            >
              {window.outerWidth <= 768 ? (
                <IoIosSend size={30} color={"white"} />
              ) : (
                "Subscribe"
              )}
            </button>
          </div>
        </form>
        <img className="home-subscrion-bg" src={BG} />
      </div>
    </div>
  );
};

export default SubscriptionNewsLetter;
