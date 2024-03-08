import React from "react";
import Logo from "../assets/images/logo_footer.png";
import { ImLocation } from "react-icons/im";
import { TiLocation } from "react-icons/ti";
import { TbPhoneFilled, TbMailFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import BgImage from "../assets/images/bg_S.png";
import "./footer.css";

function Footer() {
 const company = [
    {
      name: "About Us",
      route: "/about",
    },
    {
      name: "Contact",
      route: "/contact",
    },
    {
      name: "Warranty & Support",
      route: "/warranty-n-support",
    },
 ];

 const product = [
  {
    name: "Kitchen",
    route: "/kitchen-visualizer/Stylish-Kitchen",
  },
  {
    name: "Bathroom",
    route: "/kitchen-visualizer/Stylish-Bathroom-Vanity",
  },
];

 return (
  <div className="footer-container">
    <img className="footer-bgimage" src={BgImage} alt={"alt"} />
    <div className="footer-innercontainer">
      <img src={Logo} alt="logo" />
      <div className="footer-container-links">

      {/* Orlando Address */}
      <div className="footer-innersection">
        <div>Orlando</div>
        <div className="footer-column">
          <div className="footer-contacticon-container">
            <TiLocation size={23} color={"#EE2A2E"} />
            <a>
              2440 Dinneed Ave.
              <br />
              Orlando, FL 32804
            </a>
          </div>
          <br />
          <div className="footer-contacticon-container">
            <TbPhoneFilled size={23} color={"#EE2A2E"} />
            <a href="tel:+4072864677" style={{ color: 'black', textDecoration: 'none' }}>(407) 286-4677</a>
            </div>
            <br />
            <br />
            <div className="footer-contacticon-container">
            <TbMailFilled size={23} color={"#EE2A2E"} />
            <a href="mailto:orlando@sharifstone.com" style={{ color: 'black', textDecoration: 'none' }}>orlando@sharifstone.com</a>
            </div>
        </div>
      </div>

      {/* Tampa Address */}
      <div className="footer-innersection">
        <div>Tampa</div>
        <div className="footer-column">
          <div className="footer-contacticon-container">
            <TiLocation size={23} color={"#EE2A2E"} />
            <a>
            8524 E. Adamo Dr.
              <br />
              FL 33619
            </a>
          </div>
          <br />
          <div className="footer-contacticon-container">
            <TbPhoneFilled size={23} color={"#EE2A2E"} />
            <a href="tel:+18135334553" style={{ color: 'black', textDecoration: 'none' }}>(813) 533-4553</a>
            </div>
            <br />
            <br />
            <div className="footer-contacticon-container">
            <TbMailFilled size={23} color={"#EE2A2E"} />
            <a href="mailto:tampa@sharifstone.com" style={{ color: 'black', textDecoration: 'none' }}>tampa@sharifstone.com</a>
            </div>
        </div>
        </div>


        <div className="footer-innersection">
            <div>Company</div>
            <div className="footer-column">
              {company.map((v, i) => (
                <Link key={i} className="footer-link" to={v.route}>{v.name}</Link>
              ))}
            </div>
          </div>
          <div className="footer-innersection">
            <div>Products</div>
            <div className="footer-column">
            {product.map((v, i) => (
                <Link key={i} className="footer-link" to={v.route}>{v.name}</Link>
              ))}
            </div>
          </div>
        </div>

      <div className="foolter-endsection">
        <div className="footer-copyright">Copyright @2024 Sharifstone</div>
        <div className="footer-socialmedia">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/EE2A2E/facebook-new.png"
            alt="facebook-new"
          />
          <a href="https://www.instagram.com/sharifstones/" target="_blank">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/EE2A2E/instagram-new.png"
              alt="instagram-new"
            />
          </a>

          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/EE2A2E/twitterx--v2.png"
            alt="twitterx--v2"
          />
          <a href="https://www.instagram.com/sharifstones/" target="_blank">
            {/* <span> */}
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/EE2A2E/youtube-play.png"
              alt="youtube-play"
            />
            {/* </span> */}
          </a>
        </div>
      </div>
    </div>
  </div>
);
}

export default Footer;