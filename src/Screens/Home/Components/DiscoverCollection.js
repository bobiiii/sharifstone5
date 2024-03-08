import React, {useState, useContext} from "react";
import "./DiscoverCollection.css";
import { MdOutlineArrowBackIos, MdOutlineArrowRight } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";


function DiscoverCollection() {
  
  const [imageArr, setImagesArr] = useState([
    "url(images/scroller_images/scroller_1.png)",
    "url(images/scroller_images/scroller_2.png)",
    "url(images/scroller_images/scroller_3.png)",
  ])
  const [index, setIndex] = useState(1)
  const images = [
    "url(images/collection_color/ESSENTIAL/ES_Bianco_Puro.jpg)",
    "url(images/collection_color/ESSENTIAL/ES_Bianco_Puro.jpg)",
    "url(images/collection_color/ESSENTIAL/ES_Bianco_Puro.jpg)",
    "url(images/collection_color/ESSENTIAL/ES_Bianco_Puro.jpg)",
    "url(images/collection_color/ESSENTIAL/ES_Bianco_Puro.jpg)",
  ]
  const changeFunction = (isNext) => {
    const totalImages = 7;
  
    if (isNext) {
      if (index === totalImages - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    } else {
      if (index === 0) {
        setIndex(totalImages - 1);
      } else {
        setIndex(index - 1);
      }
    }
  };
  
  return (
    <div className="home-discovercollection">
      <div className="home-discovercollection-heading">
      DISCOVER OUR NEW ARRIVALS!
      </div>
      <div className="home-desciption">
      Check out our latest arrivals,  showcasing a vibrant mix of colors from different stone  selections. Each piece is a blend of style and quality,  giving you a range of options to spice up your space.
      </div>
      <div className="discovercollection-carousel">
        <div
          className="discovercollection-carouse-sideimage"
          style={{
            backgroundImage: `url(images/scroller_images/scroller_${index}.jpg)`,
          }}
        >
          <MdOutlineArrowBackIos
            onClick={() => changeFunction(false)}
            color="white"
            size={20}
            className="discovercollection-arrow"
          />
        </div>
        <div
          className="discovercollection-carouse-image"
          style={{
            backgroundImage: `url(images/scroller_images/scroller_${index+1}.jpg)`,
          }}
        />
        <div
          className="discovercollection-carouse-sideimage"
          style={{
            backgroundImage: `url(images/scroller_images/scroller_${index+2}.jpg)`,
          }}
        >
          <MdOutlineArrowForwardIos
            onClick={() => changeFunction(true)}
            color="white"
            size={20}
            className="discovercollection-arrow"
          />
        </div>
      </div>
      <div className="home-discovercollection-container">
      <Link
        to={"/quartz-collection"}
        className="home-discovercollection-button"
      >
        See More
      </Link>
      </div>
    </div>
  );
}

export default DiscoverCollection;
