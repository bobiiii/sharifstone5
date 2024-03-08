import React from "react";
import "./InsideStore.css";
import InsideStoreImage1 from '../../../assets/images/homeImage/insidestore1.jpg'
import InsideStoreImage2 from '../../../assets/images/homeImage/insidestore2.jpg'
import InsideStoreImage3 from '../../../assets/images/homeImage/insidestore3.jpg'
import InsideStoreImage4 from '../../../assets/images/homeImage/insidestore4.jpg'
import BackS from '../../../assets/images/back_s.png'
import { Link } from "react-router-dom";

function InsideStore({data}) {
  const {openQuote, setOpenQuote} = data
  const imageArray = [InsideStoreImage1, InsideStoreImage2, InsideStoreImage3, InsideStoreImage4]
  const catalog = [
    {
      name: 'Color Catalog',
      image: 'url(images/inside_icon1.png)',
      href:"/quartz-collection"
    },
    {
      name: 'Digital Brochure',
      image: 'url(images/inside_icon2.png)',
      href:"/"
    },
    {
      name: 'Where To Buy',
      image: 'url(images/inside_icon3.png)',
      href:"/where-to-buy"
    },
  ]
  return (
    <div className="home-advantagecontainer home-advantagecontainer-center">
      <div className="home-advantageinnercontainer">
      <img className="home-back-s" src={BackS} alt="" />
        <div className="home-section">
          <div className="home-insidestore-container">
            <div className="home-insidestore-heading">STEP INSIDE OUR STORE</div>
            {/* <div className="homebrand-button">View Full Catalogue</div> */}
            <div className="homebrand-button"  onClick={() => setOpenQuote(true)}>Get Directions</div>
          </div>
          <div className="home-insidestore-imagecontainer">
            {
              imageArray.map((v, i) => <img src={v} />)
            }
          </div>
          {/* <div className="home-insidestore-container">
            <div className="home-insidestore-subheading">DISCOVER OUR TOP-QUALITY STONE OPTIONS TO PERFECTLY MATCH YOUR DESIRED SPACE!</div>
            
          </div> */}
          {/* <div className="home-insidestore-imagecontainer">
            {
              catalog.map((v, i) => (
                <Link to={v.href} className="homeinsider-offercard">
                  <div style={{ backgroundImage: v.image}} className="homeinsider-offercard-image" />
                  <div className="homeinsider-offercard-text">{v.name}</div>
                </Link>
                ))
            }
          </div> */}
          
        </div>
      </div>
    </div>
  );
}

export default InsideStore;
