import React, {useState} from "react";
import "./Gallery.css";
import Bathroom from '../../../assets/images/homeImage/bathroom.png'
import Kitchen from '../../../assets/images/homeImage/kitchen.png'
import Livingroom from '../../../assets/images/homeImage/livingroom.png'
import { Link } from "react-router-dom";

function Gallery() {
    const [currentImage,setCurrentImage] = useState('Kitchen')
    const galleryType = ['Kitchen', 'Bathroom', 'Living Rooms']
  return (
    <div className="home-aboutconatiner">
      <div className="home-aboutinnercontainer">
        <div className="home-aboutheading">GALLERY</div>
        <hr style={{ margin: "20px 0px", border: '0.5px solid #D9D9D9', opacity: 0.9}} />

        <div className="home-gallerycontainer">
          <div className="home-gallerysub-container1">
            <div className="home-gallery-contain">
                {
                    galleryType.map((v,i) => <div onClick={() => setCurrentImage(v)} style={{color: currentImage === v ? '#EE2A2E' : '', fontWeight: currentImage === v ? '600' : '400'}} className="homecontainer1-tabs">{v}</div>)
                }
            </div>
            <div className="homebrand-dowmloadcontainer">
              <Link to="/kitchen-visualizer" className="homebrand-button">
                View All Products
              </Link>
            </div>
          </div>
          <div className="home-gallerysub-container2">
            <img src={currentImage === 'Kitchen' ? Kitchen : currentImage === 'Bathroom' ? Bathroom : Livingroom} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
