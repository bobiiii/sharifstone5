import React from "react";
import "./RelatedProduct.css";
import Product1 from "../../../assets/images/product/gk07cepp0-1.png";
import Product2 from "../../../assets/images/product/gk07cepp0-2.png";
import Product3 from "../../../assets/images/product/gk07cepp0-3.png";
import ExpandImage from '../../../assets/images/product/gk07cepp0-expand.png';
import { Link, useNavigate } from "react-router-dom";
import MaxWidthWrapper from "../../MaxWidthWrapper";
function RelatedProduct({ relatedImages }) {
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
    <MaxWidthWrapper>
      {/* related-container */}
      <div className=" related-container">
        <div className="productrelated-heading">RELATED PRODUCTS</div>
        <div className="productrelated-container">
          <div className="productrelated-innercontainer">
            {relatedImages?.map((v, i) => (
              <div onClick={() => showProducts(v)} className="productrelated-colorcontainer">
                <div className="productrelated-colorcontainer_img" style={{ backgroundImage: `url(${v?.color_image})` }} />
                <div className="productrelated-name">{v?.color_name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="productexpand-container">
          <img src={ExpandImage} />
          {/* productexpand-btncontainer */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-screen-md mx-auto gap-4 grid md:grid-cols-3 grid-cols-2 gap-y-6 justify-center items-center  mt-10">
              <Link to={"/where-to-buy"} className="bg-[#221F1F] px-4 py-3 rounded-3xl text-white text-center text-base" >Where To Buy</Link>
              {/* productexpand-wheretobuy */}
              <Link to={"/kitchen-visualizer"} className=" bg-[#EE2A2E] px-2 py-3 rounded-3xl text-white text-center text-base" >Visualize Space</Link>
              {/* productexpand-productcatalog */}
              <Link to={"/quartz-collection"} className=" bg-white px-2 py-3 rounded-3xl text-[#EE2A2E] border border-[#EE2A2E] text-center text-base font-bold   ">Product Catalogue</Link>
            </div>
          </div>

        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default RelatedProduct;
