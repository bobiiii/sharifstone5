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
      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-10 ">

        <div className="lg:w-1/2 ">
          <div className="lg:w-full  bg-cover bg-no-repeat  rounded-3xl">
            {showColor ? <img src={colorDetails?.display_image} alt={"product-im"} className="lg:w-full lg:h-[650px] bg-cover bg-no-repeat h-full" /> : <img src={colorDetails?.color_image} className="lg:w-full lg:h-[650px] bg-cover bg-no-repeat h-full" alt={"product-im"} />}

          </div>
          
          <div className="ms-6 flex py-4 items-center ">
            <span className="font-bold" >Space</span>
            <Switch className="px-2" onHandleColor={"#fff"} offColor={"#D6D6D6"} onColor={"#EE2A2E"} checkedIcon={false} uncheckedIcon={true} onChange={() => setShowColor(!showColor)} checked={!showColor} />
            <span style={{ fontWeight: !showColor ? 600 : 400 }}>Color</span>
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <h3 className="text-nowrap font-gelasio font-medium lg:py-2 text-[54px]">{colorDetails?.color_name}</h3>
          
          <div className="font-bold  text-2xl  ">Description</div>
          <p className="text-lg lg:py-4">
            {colorDetails?.description}
          </p>
          <div className="font-bold text-2xl">Finishes Available</div>
          <div className="lg:py-4 flex ">
            <div className="basis-2/5 flex-shrink" >
              <div className="font-bold text-lg">Grip +</div>
              <span className=" text-lg lg:py-2">
                {colorDetails?.grip}
              </span>
            </div>
            <div className="basis-2/5 flex-shrink">
              <div className="font-bold text-lg">Matte</div>
              <span className=" text-lg lg:py-2">{colorDetails?.matte}</span>
            </div>
          </div>
          <div className="font-bold text-lg">Thicknesses</div>
          <span className="text-lg lg:py-4">
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
