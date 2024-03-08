import React, { useState, useEffect, useContext } from "react";
import CoverComponent from "../../components/coverComponent";
import "./productDescription.css";
import ProductImage from "../../assets/images/product/gk07cepp0.png";
import RelatedProduct from "./Components/RelatedProduct";
import Context from "../../Store/contextStore";
import { getCollectionByParam, getColorByParam } from "../../apiCall/apiCall";
import { useParams } from "react-router-dom";
import CoverImage from "../../assets/images/product_description.png";
import Switch from "react-switch";

function ProductDescription() {
  const [colorDetails, setColorDetails] = useState({});
  const [relatedColors, setRelatedColors] = useState([]);
  const [showColor, setShowColor] = useState(true)
  const { store } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    console.log('PARA<S....',params);
    if (params?.color !== undefined) {
      new Promise(async (resolve, reject) => {
        const data = await getColorByParam(params?.color);
        resolve(data[0]);
      }).then(async (result) => {
        setColorDetails(result);
        let relatedColor = await getCollectionByParam(
          result?.collection_url
        );
        console.log('444444',colorDetails?.color_url,relatedColors);
        relatedColor = relatedColor.filter(value => value?.color_url !== colorDetails?.color_url)
        console.log('44444',relatedColor);
        setRelatedColors(relatedColor.slice(0,3));
      });
    }
  }, [params?.color]);
  return (
    <div>
      <CoverComponent
        image={`url(${CoverImage})`}
        label={["PRODUCT", "DESCRIPTION"]}
      />
      <div className="product-infocontainer">
        <div className="product-infosub">
          {/* <img src={ProductImage} /> */}
          <div
            className="product-innerimage"
            style={{ backgroundImage: showColor ? `url(${colorDetails?.display_image})` : `url(${colorDetails?.color_image})` }}
          />
          <div className="switch-container">
            <span style={{fontWeight: showColor ? 600 : 400}}>Space</span>
            <Switch onHandleColor={"#fff"} offColor={"#D6D6D6"} onColor={"#EE2A2E"} checkedIcon={false} uncheckedIcon={true} onChange={() => setShowColor(!showColor)} checked={!showColor} />
            <span style={{fontWeight: !showColor ? 600 : 400}}>Color</span>
          </div>
        </div>
        <div className="product-infosub">
          <div className="product-profilename">{colorDetails?.color_name}</div>
          {/* <div className='product-profilesubtitle '>{store[0]?.name}</div> */}
          <div className="product-descriptionheading">Description</div>
          <div className="product-description">
            {colorDetails?.description}
          </div>
          <div className="product-descriptionheading">Finishes Available</div>
          <div className="flex-row">
            <div className="finishes-details">
              <div>Grip +</div>
              <span>
                {colorDetails?.grip}
              </span>
            </div>
            <div className="finishes-details">
              <div>Matte</div>
              <span>{colorDetails?.matte}</span>
            </div>
          </div>
          <div className="product-descriptionheading">Thicknesses</div>
          <span className="product-desc-span">
            {colorDetails?.thicknesses}
          </span>
        </div>
      </div>
      <RelatedProduct relatedImages={relatedColors} />
    </div>
  );
}

export default ProductDescription;
