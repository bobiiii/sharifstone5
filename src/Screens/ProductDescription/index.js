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
import MaxWidthWrapper from "../../Screens/MaxWidthWrapper";
import Heading from "../resuable/Heading";
import Button from "../resuable/Button";



function ProductDescription() {
  const [colorDetails, setColorDetails] = useState({});
  const [relatedColors, setRelatedColors] = useState([]);
  const [showColor, setShowColor] = useState(true)
  const { store } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    console.log('PARA<S....', params);
    if (params?.color !== undefined) {
      new Promise(async (resolve, reject) => {
        const data = await getColorByParam(params?.color);
        console.log("data", data)
        resolve(data[0]);
      }).then(async (result) => {
        setColorDetails(result);
        let relatedColor = await getCollectionByParam(
          result?.collection_url
        );
        relatedColor = relatedColor.filter(value => value?.color_url !== colorDetails?.color_url)
        setRelatedColors(relatedColor.slice(0, 3));
      });
    }

  }, [params?.color]);

  return (

    <div>
      <CoverComponent
        image={`url(${CoverImage})`}
        label={["PRODUCT", "DESCRIPTION"]}
      />
      <MaxWidthWrapper>
        <div className="flex flex-col justify-center gap-10 ">

          <div className="w-full ">
            <div className="w-full  bg-cover bg-no-repeat  rounded-3xl">
              {showColor ? <img src={colorDetails?.display_image} alt={"product-im"} className="w-full lg:h-[650px] bg-cover bg-no-repeat h-[50vh]" /> : <img src={colorDetails?.color_image} className="w-full lg:h-[650px] bg-cover bg-no-repeat h-[50vh]" alt={"product-im"} />}

            </div>

            <div className=" flex pt-6 items-center  justify-center gap-4 ">
              {/* <span className="font-bold text-sm" >Space</span>
              <Switch className="px-2" onHandleColor={"#fff"} offColor={"#D6D6D6"} onColor={"#EE2A2E"} checkedIcon={false} uncheckedIcon={true} onChange={() => setShowColor(!showColor)} checked={!showColor} />
              <span style={{ fontWeight: !showColor ? 600 : 400 }} className="
              text-sm">Color</span> */}
              <Button className='bg-[#221F1F] sm:text-base text-[12px]   whitespace-nowrap  ' clickFunc={() => setShowColor(true)}  >
                Full Slab
              </Button>
              <Button className='sm:text-base text-[12px]    whitespace-nowrap' clickFunc={() => setShowColor(false)}>
                Close Look Up
              </Button>
              <Button className='sm:text-base text-[12px]    whitespace-nowrap'>
                Installed Look
              </Button>
            </div>
          </div>
          <div className="w-full ">
            <Heading >{colorDetails?.color_name}</Heading>

            <div className="font-bold  sm:text-2xl text-lg sm:py-4 py-2   ">Description</div>
            <p className="sm:text-lg text-sm lg:py-4 py-2">
              {colorDetails?.description}
            </p>
            <div className="font-bold  sm:text-2xl text-lg sm:py-4 py-2  ">Finishes Available</div>
            <div className="lg:py-4 flex sm:flex-row  flex-col gap-2">
              <div className="basis-2/5 flex-shrink" >
                <div className="font-bold  sm:text-2xl text-sm sm:py-4 py-2  ">Grip +</div>
                <span className=" sm:text-lg text-sm lg:py-2">
                  {colorDetails?.grip}
                </span>
              </div>
              <div className="basis-2/5 flex-shrink">
                <div className="font-bold sm:text-2xl text-sm  sm:py-4 py-2  ">Matte</div>
                <span className=" sm:text-lg text-sm lg:py-2">{colorDetails?.matte}</span>
              </div>
            </div>
            <div className="font-bold  sm:text-2xl text-sm sm:py-4 py-2">Thicknesses</div>
            <span className="sm:text-lg text-sm lg:py-4">
              {colorDetails?.thicknesses}
            </span>
          </div>
        </div>
      </MaxWidthWrapper>
      <RelatedProduct relatedImages={relatedColors} />
    </div>
  );
}

export default ProductDescription;
