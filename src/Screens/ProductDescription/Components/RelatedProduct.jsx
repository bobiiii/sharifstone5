import React, { useRef } from "react";
import "./RelatedProduct.css";
import Product1 from "../../../assets/images/product/gk07cepp0-1.png";
import Product2 from "../../../assets/images/product/gk07cepp0-2.png";
import Product3 from "../../../assets/images/product/gk07cepp0-3.png";
import ExpandImage from '../../../assets/images/product/gk07cepp0-expand.png';
import { Link, useNavigate } from "react-router-dom";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Heading from "../../resuable/Heading";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function RelatedProduct({ relatedImages }) {
  console.log(relatedImages);

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
  const showProducts = (item) => {
    console.log(item);
    // navigate(`/product-description/${item?.color_url}`, { replace: false });
  }

  const responsive = {
    ' mobile': {
      breakpoint: { max: 480, min: 0 },
      items: 1
    }
  };

  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 480 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1
    }
  };

  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);

  const handlePrevious = () => {
    carouselRef.current.previous();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };
  const handlePrevious2 = () => {
    carouselRef2.current.previous();
  };

  const handleNext2 = () => {
    carouselRef2.current.next();
  };


  return (
    <MaxWidthWrapper>
      {/* related-container */}
      <div className=" related-container">
        {/* <div className="productrelated-heading"></div> */}
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
        <Heading className='sm:flex hidden'>
          RELATED PRODUCTS
        </Heading>


        {/* <div className="w-full xs:grid hidden md:grid-cols-3 grid-cols-2 gap-8 sm:pt-10 pt-4 px-4">
          {relatedProductObj?.map((v, i) => (
            <div key={i} onClick={() => showProducts(v)} className="flex flex-grow w-full flex-col gap-4">
              <img src={v.image} alt="" />
              <h3 className="xl:text-3xl md:text-2xl text-xl font-semibold font-albert">{v.name}</h3>
            </div>
          ))}
        </div> */}

        {/* Desktop Carousel */}
        <div className="w-full sm:block hidden sm:pt-10 pt-4  px-2">
          <div className="relative">
            <Carousel
              responsive={responsive2}
              infinite
              arrows={false}
              itemClass="px-2 "
              ref={carouselRef2}

            >
              {relatedImages?.map((item, i) => (
                <Link key={i} to={`/product-description/${item?.color_url}`}>
                  <img src={item.color_image} alt="" className=" h-full rounded-lg w-full cursor-pointer " />
                </Link>
              ))}
            </Carousel>;
            <span className=" absolute top-0 bottom-0 items-center  flex justify-center">

              <button className="bg-[#D4262A]  rounded-full  p-4 lg:-ml-5 -ml-3" onClick={handlePrevious2}>
                <FaArrowLeft size={20} className="text-white" />
              </button>
            </span>
            <span className="absolute top-0 bottom-0  right-0 items-center flex justify-center">
              <button className="bg-[#D4262A] rounded-full  p-4 lg:-mr-5 -mr-3" onClick={handleNext2}>
                <FaArrowRight size={20} className="text-white" />
              </button>
            </span>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="flex sm:hidden justify-between w-full items-center">
          <div>
            <Heading className=' text-base'>
              RELATED PRODUCTS
            </Heading>
          </div>
          <div className="flex gap-2 text-white">
            <button className="bg-[#D5262A] rounded-full p-2" onClick={handlePrevious}>
              < IoIosArrowBack className="text-center" />
            </button>
            <button className="bg-[#D5262A] rounded-full p-2" onClick={handleNext}>
              < IoIosArrowForward className="text-center" />
            </button>
          </div>
        </div>

        <div className="w-full sm:hidden block mt-6 ">
          <Carousel
            responsive={responsive}
            infinite
            arrows={false}
            itemClass="px-2 "
            ref={carouselRef}
          >
            {relatedImages?.map((item, i) => (
              <Link key={i} to={`/product-description/${item?.color_url}`}>
                <img src={item.color_image} alt="" className=" h-[300px]  rounded-lg w-full cursor-pointer " />
              </Link>
            ))}
          </Carousel>
        </div>


        {/* productexpand-container */}
        {/* <div className="  lg:mt-12 sm:mt-6 mt-4">
          <img src={ExpandImage} className=" mt-4" />
          productexpand-btncontainer
          <div className="flex justify-center items-center">
            <div className="w-full max-w-screen-md mx-auto gap-4 grid md:grid-cols-3 grid-cols-2 gap-y-6 justify-center items-center  ms:mt-10 mt-6">
              <Link to={"/where-to-buy"} className="bg-[#221F1F] px-4 py-3 rounded-3xl text-white text-center sm:text-base text-[13px]" >Where To Buy</Link>
              productexpand-wheretobuy
              <Link to={"/kitchen-visualizer"} className=" bg-[#EE2A2E] px-2 py-3 rounded-3xl text-white text-center sm:text-base text-[13px]" >Visualize Space</Link>
              productexpand-productcatalog
              <Link to={"/quartz-collection"} className="md:block hidden bg-white px-2 py-3 rounded-3xl text-[#EE2A2E] border border-[#EE2A2E] text-center text-base font-bold   ">Product Catalogue</Link>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Link to={"/quartz-collection"} className=" xs:w-1/2 w-[170px] mt-5 md:hidden bg-white px-2 py-3 rounded-3xl text-[#EE2A2E] border border-[#EE2A2E] text-center sm:text-base text-[13px] font-bold    ">Product Catalogue</Link>
          </div>

        </div> */}
      </div>
    </MaxWidthWrapper >
  );
}

export default RelatedProduct;
