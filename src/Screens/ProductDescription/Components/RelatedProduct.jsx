import React, { useRef } from "react";
import "./RelatedProduct.css";
import Product1 from "../../../assets/images/product/gk07cepp0-1.png";
import Product2 from "../../../assets/images/product/gk07cepp0-2.png";
import Product3 from "../../../assets/images/product/gk07cepp0-3.png";
import ExpandImage from '../../../assets/images/product/gk07cepp0-expand.png';
import { Link, useNavigate } from "react-router-dom";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Heading from "../../resuable/Heading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <MaxWidthWrapper>
      {/* related-container */}
      <div className=" related-container">
        {/* <div className="productrelated-heading"></div> */}
        <Heading>
          RELATED PRODUCTS
        </Heading>
        {/* <div className="productrelated-container ">
          <div className="productrelated-innercontainer">
            {relatedImages?.map((v, i) => (
              <div onClick={() => showProducts(v)} className="productrelated-colorcontainer">
                <div className="productrelated-colorcontainer_img" style={{ backgroundImage: `url(${v?.color_image})` }} />
                <div className="productrelated-name">{v?.color_name}</div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="w-full sm:block hidden  bg-[#FEF6F7] md:px-10 px-6 md:py-10 py-6 mt-10 rounded-md">
          <div className="w-full grid md:grid-cols-3 grid-cols-2   gap-8 border-[3px] border-[#D6D6D6] rounded-lg py-10 px-4">
            {relatedProductObj?.map((v, i) => (
              <div key={i} onClick={() => showProducts(v)} className="flex flex-grow w-full flex-col gap-4">
                <img src={v.image} alt="" />
                <h3 className="xl:text-3xl md:text-2xl text-xl font-semibold font-albert">{v.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full sm:hidden block ">
          <Carousel responsive={responsive}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel>;
        </div>



        <div className="productexpand-container">
          <img src={ExpandImage} />
          {/* productexpand-btncontainer */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-screen-md mx-auto gap-4 grid md:grid-cols-3 grid-cols-2 gap-y-6 justify-center items-center  mt-10">
              <Link to={"/where-to-buy"} className="bg-[#221F1F] px-4 py-3 rounded-3xl text-white text-center sm:text-base text-[13px]" >Where To Buy</Link>
              {/* productexpand-wheretobuy */}
              <Link to={"/kitchen-visualizer"} className=" bg-[#EE2A2E] px-2 py-3 rounded-3xl text-white text-center sm:text-base text-[13px]" >Visualize Space</Link>
              {/* productexpand-productcatalog */}
              <Link to={"/quartz-collection"} className="md:block hidden bg-white px-2 py-3 rounded-3xl text-[#EE2A2E] border border-[#EE2A2E] text-center text-base font-bold   ">Product Catalogue</Link>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Link to={"/quartz-collection"} className=" xs:w-1/2 w-[170px] mt-5 md:hidden bg-white px-2 py-3 rounded-3xl text-[#EE2A2E] border border-[#EE2A2E] text-center sm:text-base text-[13px] font-bold    ">Product Catalogue</Link>
          </div>

        </div>
      </div>
    </MaxWidthWrapper >
  );
}

export default RelatedProduct;
