import { useState, useEffect, useContext } from "react";
import "./DiscoverCollection.css";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate, useParams } from "react-router-dom";
import APIContext from "../../../Store/apiContext";
import { getCollectionByParam } from "../../../apiCall/apiCall";
import { Audio } from "react-loader-spinner";
import MaxWidthWrapper from "../../MaxWidthWrapper";

const DiscoverCollection = () => {
  
  const [collection] = useState("none");
  const [ setOnMouseOver] = useState("");
  const [innerCollection, setInnerCollection] = useState([]);
  const [flag, setFlag] = useState(true);
  const { apiStore } = useContext(APIContext);
  const navigate = useNavigate();
  const collectionKeys =
    apiStore?.collections !== undefined && Object.keys(apiStore?.collections);
  const collections =
    apiStore?.collections !== undefined
      ? collectionKeys?.map((v) => ({
        color_name: v,
        collection_url: apiStore?.collections[v][0]?.collection_url,
        color_image: apiStore?.collections[v][0]?.color_image,
      }))
      : [];
  const params = useParams();


  const content = {
    none: [
      "DISCOVER OUR NEW COLLECTION",
      "Discover the perfect quartz design in our collection, featuring both timeless classics and modern styles. Find the ideal match for your space and elevate your surroundings effortlessly with SharifStone.",
    ],
    "ESSENTIALS COLLECTION": [
      "ESSENTIALS COLLECTION",
      "Thoughtfully curated range of classic colors that serve as the perfect base for any design. This collection is all about giving your space an effortlessly elegant and adaptable look that never goes out of style.",
    ],
    "INDULGE COLLECTION": [
      "DISCOVER OUR NEW COLLECTION",
      "Inspired by the tempting world of desserts and comfort food. This collection brings a cozy and inviting vibe to your living spaces, adding a touch of sweet luxury to your everyday life.",
    ],
    "INTERNATIONAL COLLECTION": [
      "DISCOVER OUR NEW COLLECTION",
      "This collection takes you on a global journey, with each piece named after iconic cities around the world. These beautiful veined stones bring the essence of these locations into your home, infusing an international vibe that transports you across continents without leaving your space",
    ],
    "MYTHOLOGY COLLECTION": [
      "DISCOVER OUR NEW COLLECTION",
      "This collection is all about infusing your surfaces with a sense of Greek mythology. The intricate patterns pay homage to the tales of the Greek Gods and Goddesses, with delicate veining that adds depth and a touch of ancient charm.",
    ],
    "MY COLLECTION": [
      "DISCOVER OUR NEW COLLECTION",
      "For over three decades, we’ve been crafting the most trusted countertops by blending exquisite design with top durability. Join us on a journey of partnership and creativity, to fulfill your dream with the countertop that brings it to life.",
    ],
  };

  const gotoNextScreen = (value) => {
    setFlag(false);
    if (flag) {
      navigate(`/collection/${value?.collection_url}`, { replace: false });
    } else {
      navigate(
        `/product-description/${value?.collection_url?.toLowerCase()}/${value?.color_url
        }`,
        { replace: false }
      );
    }
    setOnMouseOver('')

  };



  const collectionJSX = (v, i, inner) => {
    return (
      <div key={i}
        className={`flex-grow flex-shrink basis-2/4 px-1 max-w-[70%] lg:flex-none lg:w-[32%] mb-2   ${inner ? " " : ""}   text-center  `}

      >
        <div className="flex flex-col   ">
          <div
            onMouseOver={() => setOnMouseOver(i)}
            onMouseLeave={() => setOnMouseOver("")}
            
            className="   "

          >
            <div className="relative group">



              <img src={`${v?.color_image}`} className="h-40 cursor-pointer w-full lg:w-full lg:h-64   " alt="tile-images" />

              <div className="absolute bottom-0 left-[50%] translate-x-[-50%] font-medium  lg:font-semibold text-xs lg:text-xl font-gelasio text-[#221F1F]  lg:text-nowrap w-full ">
                <div className="w-full lg:w-min mx-auto bg-white/50  py-1 lg:py-1 lg:px-3 ">
                  {v.color_name}
                </div>
              </div>

              <div
                onClick={() => gotoNextScreen(v)}
                className={`bg-black/50 text-white w-min  px-4 lg:px-8 py-4 lg:py-8 rounded-full absolute  top-[20%] lg:top-[35%]  left-[50%]  cursor-pointer translate-x-[-50%]    opacity-0 group-hover:opacity-100 transition-opacity`}
              >
                <GoArrowUpRight size={35} color="white" className="cursor-pointer" />
              </div>

            </div>
          </div>

          
        </div>

      </div >
    );
  };

  const loader = () => (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="gray"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  );

  const callAPI = async () => {
    const data = await getCollectionByParam(params?.collection);
    setInnerCollection(data);
    setFlag(false);
  };

  useEffect(() => {
    if (params?.collection !== undefined) {
      setFlag(true);
      callAPI();
    } else {
      if (!flag) {
        setFlag(true);
      }
    }
  }, [params?.collection]);

  useEffect(() => {
    if (window.location.pathname !== "/quartz-collection") {
      setFlag(false);
    }
  }, []);
  return (
    <MaxWidthWrapper className={" max-w-screen-2xl lg:px-0 md:px-0 sm:px-0 px-0"}>

      <div className="font-extrabold text-3xl text-center font-gelasio lg:w-1/2 lg:mx-auto">
        {flag ? content[collection][0] : innerCollection[0]?.collection_name}
      </div>
      <div className="text-center py-4 lg:w-1/2 lg:mx-auto">{content[collection][1]}</div>

      <div className={` ${flag ? "lg:w-full" : ""}   lg:mx-auto flex  justify-center lg:gap-4   flex-wrap     `}>
        {flag
          ? collections.length > 0
            ? collections.map((v, i) => collectionJSX(v, i))
            : loader()
          : innerCollection.length > 0
            ? <>
              {innerCollection?.map((v, i) => collectionJSX(v, i, true))}

            </>
            : loader()}
      </div>


    </MaxWidthWrapper>
  );
};

export default DiscoverCollection;
