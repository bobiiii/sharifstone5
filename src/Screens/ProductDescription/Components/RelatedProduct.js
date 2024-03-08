import React from "react";
import "./RelatedProduct.css";
import Product1 from "../../../assets/images/product/gk07cepp0-1.png";
import Product2 from "../../../assets/images/product/gk07cepp0-2.png";
import Product3 from "../../../assets/images/product/gk07cepp0-3.png";
import ExpandImage from '../../../assets/images/product/gk07cepp0-expand.png';
import { Link, useNavigate } from "react-router-dom";
function RelatedProduct({relatedImages}) {
  const navigate = useNavigate()
  const relatedProductObj = [
    {
      name: "MAORI",
      image: Product1,
    },
    {
      name: "MAORI",
      image: Product2,
    },
    {
      name: "MAORI",
      image: Product3,
    },
  ];
  const showProducts = (v) => {
    navigate(`/product-description/${v?.color_url}`, { replace: false });
  }
  return (
    <div className="related-container">
      <div className="productrelated-heading">RELATED PRODUCTS</div>
      <div className="productrelated-container">
        <div className="productrelated-innercontainer">
          {relatedImages?.map((v, i) => (
            <div onClick={() => showProducts(v)} className="productrelated-colorcontainer">
              <div className="productrelated-colorcontainer_img" style={{backgroundImage: `url(${v?.color_image})`}}/>
              <div className="productrelated-name">{v?.color_name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="productexpand-container">
        <img src={ExpandImage} />
        <div className="productexpand-btncontainer">
            <Link to={"/where-to-buy"} className="productexpand-wheretobuy" style={{backgroundColor:'#221F1F'}}>Where To Buy</Link>

            <Link to={"/kitchen-visualizer"}  className="productexpand-wheretobuy" style={{backgroundColor:'#EE2A2E', margin: '0px 20px'}}>Visualize Space</Link>

            <Link to={"/quartz-collection"}  className="productexpand-productcatalog">Product Catalogue</Link>
        </div>
      </div>
    </div>
  );
}

export default RelatedProduct;
