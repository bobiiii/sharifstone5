import { useState, useEffect, useContext } from "react";
import "./DiscoverCollection.css";
import { GoArrowUpRight } from "react-icons/go";
import Context from "../../../Store/contextStore";
import { useNavigate, useParams } from "react-router-dom";
import APIContext from "../../../Store/apiContext";
import { getCollectionByParam } from "../../../apiCall/apiCall";
import { HistoryRouterProps } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import MaxWidthWrapper from "../../MaxWidthWrapper";

const DiscoverCollection = () => {
  // const [clickedItem, setClickedItem] = useState(null);
  const [collection, setCollection] = useState("none");
  const [onMouseOver, setOnMouseOver] = useState("");
  const [innerCollection, setInnerCollection] = useState([]);
  const [flag, setFlag] = useState(true);
  const { apiStore, setAPIStore } = useContext(APIContext);
  const { store, setStore } = useContext(Context);
  const navigate = useNavigate();
  const collectionKeys =
    apiStore?.collections !== undefined && Object.keys(apiStore?.collections);
  const collections =
    apiStore?.collections !== undefined
      ? collectionKeys?.map((v, i) => ({
        color_name: v,
        collection_url: apiStore?.collections[v][0]?.collection_url,
        color_image: apiStore?.collections[v][0]?.color_image,
      }))
      : [];
  const params = useParams();

  const essentialsCollection = [
    {
      name: "ES Arctic White",
      desc: "Sensa - Sensa Premium",
      image:
        "url(images/quartz_collection/essential_collection/ES_Arctic_White.jpg",
    },
    {
      name: "ES Ash Grey",
      desc: "Sensa - Sensa Premium",
      image:
        "url(images/quartz_collection/essential_collection/ES_Ash_Grey.jpg)",
    },
    {
      name: "ES Dolce",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/essential_collection/ES_Dolce.jpg)",
    },
    {
      name: "ES Florida White",
      desc: "Sensa - Sensa Premium",
      image:
        "url(images/quartz_collection/essential_collection/ES_Florida_White.jpg)",
    },
    {
      name: "ES Ice White",
      desc: "Sensa - Sensa Premium",
      image:
        "url(images/quartz_collection/essential_collection/ES_Ice_White.jpg)",
    },
    {
      name: "ES Majestic Waters",
      desc: "Sensa - Sensa Premium",
      image:
        "url(images/quartz_collection/essential_collection/ES_Majestic_Waters.jpg)",
    },
    {
      name: "ES Sparkle Gray",
      desc: "Sensa - Sensa Premium",
      image:
        "url(images/quartz_collection/essential_collection/ES_Sparkle_Gray.jpg)",
    },
    {
      name: "ES Sparkle White",
      desc: "Sensa - Sensa Premium",
      image:
        "url(images/quartz_collection/essential_collection/ES_Sparkle_White.jpg)",
    },
    {
      name: "ES Tropical Rain",
      desc: "Sensa - Sensa Premium",
      image:
        "url(images/quartz_collection/essential_collection/ES_Tropical_Rain.jpg)",
    },
  ];
  const indulgeCollection = [
    {
      name: "ID Affogato",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Affogato.jpg",
    },
    {
      name: "ID Blue Wave",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Blue_Wave.jpg)",
    },
    {
      name: "ID Chai Latte",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Chai_Latte.jpg)",
    },
    {
      name: "ID Earl Grey",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Earl_Grey.jpg)",
    },
    {
      name: "ID Cinnamon Dolce",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Cinnamon_Dolce.jpg)",
    },
    {
      name: "ID Vanilla Bean",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Vanilla_Bean.jpg)",
    },
    {
      name: "ID Tiramisu",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Tiramisu.jpg)",
    },
    {
      name: "ID Rock Sugar",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Rock_Sugar.jpg)",
    },
    {
      name: "ID Kopi Crema",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Kopi_Crema.jpg)",
    },
    {
      name: "ID_Honey_Brulee",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Honey_Brulee.jpg)",
    },
    {
      name: "ID Pistachio",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Pistachio.jpg)",
    },
    {
      name: "ID Golden Amber",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Golden_Amber.jpg)",
    },
    {
      name: "ID Espresso Martini",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Espresso_Martini.jpg)",
    },
    {
      name: "ID Espresso Martini",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Espresso_Martini.jpg)",
    },
    {
      name: "ID Espresso Martini",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Espresso_Martini.jpg)",
    },
  ];
  const internationalCollection = [
    {
      name: "INT Abu Dhabi",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Abu_Dhabi.jpg",
    },
    {
      name: "INT Antartica Blue",
      desc: "Sensa - Sensa Premium",
      image:
        "url(images/quartz_collection/international/INT_Antartica_Blue.jpg",
    },
    {
      name: "INT Australia",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Australia.jpg",
    },
    {
      name: "INT Austria",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Austria.jpg",
    },
    {
      name: "INT Boston",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Boston.jpg",
    },
    {
      name: "INT Cairo",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Cairo.jpg",
    },
    {
      name: "INT Clearwater",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Clearwater.jpg",
    },
    {
      name: "INT Colombia",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Colombia.jpg",
    },
    {
      name: "INT Croatia",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Croatia.jpg",
    },
    {
      name: "INT Dubai",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Dubai.jpg",
    },
    {
      name: "INT Colombia",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Colombia.jpg",
    },
    {
      name: "INT Fiji",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Fiji.jpg",
    },
    {
      name: "INT Finland",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Finland.jpg",
    },
    {
      name: "INT Fontana Di Trevi",
      desc: "Sensa - Sensa Premium",
      image:
        "url(images/quartz_collection/international/INT_Fontana_Di_Trevi.jpg",
    },
    {
      name: "INT Hamburg",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Hamburg.jpg",
    },
    {
      name: "INT Colombia",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Colombia.jpg",
    },
    {
      name: "INT West Coast",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_West_Coast.jpg",
    },
    {
      name: "INT Viena",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Viena.jpg",
    },
    {
      name: "INT Vermont",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Vermont.jpg",
    },
    {
      name: "INT Tokyo",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Tokyo.jpg",
    },
    {
      name: "INT Sweden",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Sweden.jpg",
    },
    {
      name: "INT Sidney",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Sidney.jpg",
    },
    {
      name: "INT Sicily",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Sicily.jpg",
    },
    {
      name: "INT Sao Paulo",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Sao_Paulo.jpg",
    },
    {
      name: "INT Safari",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Safari.jpg",
    },
    {
      name: "INT Rome",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Rome.jpg",
    },
    {
      name: "INT Rio De Janeiro",
      desc: "Sensa - Sensa Premium",
      image:
        "url(images/quartz_collection/international/INT_Rio_De_Janeiro.jpg",
    },
    {
      name: "INT Pisa",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Pisa.jpg",
    },
    {
      name: "INT Oslo",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Oslo.jpg",
    },
    {
      name: "INT Montreal",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Montreal.jpg",
    },
    {
      name: "INT Milan",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Milan.jpg",
    },
    {
      name: "INT Malta",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Malta.jpg",
    },
    {
      name: "INT_Jamaica",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Jamaica.jpg",
    },
    {
      name: "INT Iceburg",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Iceburg.jpg",
    },
    {
      name: "INT Ibiza",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Ibiza.jpg",
    },
  ];
  const mythology = [
    {
      name: "MT Achilles",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Achilles.jpg",
    },
    {
      name: "MT Aphrodite",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Aphrodite.jpg",
    },
    {
      name: "MT Artemis",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Artemis.jpg",
    },
    {
      name: "MT Apollo",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Apollo.jpg",
    },
    {
      name: "MT_Aurora",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Aurora.jpg",
    },
    {
      name: "MT Cemento (Leathered)",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Cemento_.jpg",
    },
    {
      name: "MT Demeter",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Demeter.jpg",
    },
    {
      name: "MT Diana",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Diana.jpg",
    },
    {
      name: "MT Dionysus",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Dionysus.jpg",
    },
    {
      name: "MT Eros",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Eros.jpg",
    },
    {
      name: "MT Hades",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Hades.jpg",
    },
    {
      name: "MT Hera",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Hera.jpg",
    },
    {
      name: "MT Hercules",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Hercules.jpg",
    },
    {
      name: "MT Eros",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Eros.jpg",
    },
    {
      name: "MT_Hermes",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Hermes.jpg",
    },
    {
      name: "MT Hespera",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Hespera.jpg",
    },
    {
      name: "MT Medusa",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Medusa.jpg",
    },
    {
      name: "MT Kronos",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Kronos.jpg",
    },
    {
      name: "MT Odin",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Odin.jpg",
    },
    {
      name: "MT Persephone",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Persephone.jpg",
    },
    {
      name: "MT Poseidon",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Poseidon.jpg",
    },
    {
      name: "MT Rhea",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Rhea.jpg",
    },
    {
      name: "MT Vesta",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Vesta.jpg",
    },
    {
      name: "MT Vulcan",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Vulcan.jpg",
    },
    {
      name: "MT Zeus",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Zeus.jpg",
    },
  ];

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



  const collectionJSX = (v, i, inner, islable = false) => {
    return (
      <div
        className={`flex-grow flex-shrink basis-2/4 px-1 max-w-[70%] lg:flex-none lg:w-[32%] mb-2   ${inner ? " " : ""}   text-center  `}

      >
        <div className="flex flex-col   ">
          <div
            onMouseOver={() => setOnMouseOver(i)}
            onMouseLeave={() => setOnMouseOver("")}
            // onClick={() => setClickedItem(i)} 
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
                className={`sbg-black/50 text-white w-min  px-4 lg:px-8 py-4 lg:py-8 rounded-full absolute  top-[20%] lg:top-[35%]  left-[50%]  cursor-pointer translate-x-[-50%]    opacity-0 group-hover:opacity-100 transition-opacity`}
              >
                <GoArrowUpRight size={35} color="white" className="cursor-pointer" />
              </div>

            </div>
          </div>

          {/* 
        {islable ? (
          <div className="text-center ">
            <div className="text-center">{v.color_name}</div>
          </div>
        ) : (
          <div className="bg-red-400  text-center text-wrap    mx-auto pt-1   ">{v.color_name}</div>
        )} */}

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

      {/* FOR Dynamic Data */}
      {/* <div className=" lg:w-2/3 lg:mx-auto flex gap-4 lg:gap-8 justify-center  flex-wrap    ">
            {flag
              ? collections.length > 0
                ? <><div className=" flex-grow flex-shrink basis-2/5 lg:basis-[30%]      text-center   "><div className=" bg-pink-300 ">a</div>
                
                <div>b</div>
                </div> {collections.map((v, i) => collectionJSX(v, i))}</>
                : loader()
              : innerCollection.length > 0
                ? innerCollection?.map((v, i) => collectionJSX(v, i, true, true))
                : loader()}
          </div> */}


      {/* Dynamic cards  */}
      {/* <div className={`  ${flag ? "lg:w-2/3":""}  lg:w-5/6 lg:mx-auto flex gap-4 lg:gap-8 justify-center  flex-wrap     `}>
            {flag
              ? collections.length > 0
                ? collections.map((v, i) => collectionJSX(v, i))
                : loader()
              : innerCollection.length > 0
                ?<>
                 {innerCollection?.map((v, i) => collectionJSX(v, i, true, true))}
                 {innerCollection?.map((v, i) => 
                 collectionJSX(v, i, true,  true)
                 
                 )}
                </>
                : loader()}
          </div> */}

      <div className={` ${flag ? "lg:w-full" : ""}   lg:mx-auto flex  justify-center lg:gap-4   flex-wrap     `}>
        {flag
          ? collections.length > 0
            ? collections.map((v, i) => collectionJSX(v, i))
            : loader()
          : innerCollection.length > 0
            ? <>
              {innerCollection?.map((v, i) => collectionJSX(v, i, true, true))}

            </>
            : loader()}
      </div>


    </MaxWidthWrapper>
  );
};

export default DiscoverCollection;
