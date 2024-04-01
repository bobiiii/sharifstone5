import React, { useEffect, useState } from 'react';
import main from './images/main.jpg';
import coutertop from './images/coutertop.png';
import Logo from '../../assets/images/logo_footer.png';
import Button from '../resuable/Button';
import { useParams } from 'react-router-dom';
import { getKitchens, getBathrooms } from '../../apiCall/apiCall';

function VisualizerMain() {
  const [activeTab, setActiveTab] = useState('colors');
  const [ActiveColor, setActiveColor] = useState({});
  const [colors, setColors] = useState([]);
  const [ambient, setAmbient] = useState([]);
  const { product } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const kitchens = await getKitchens();
      const bathrooms = await getBathrooms();
      const mixBathroomKitchen = [...kitchens, ...bathrooms];
      const filteredObject = mixBathroomKitchen.filter(
        (item) => item.name === product
      );

      setColors(filteredObject[0].colors);
      setActiveColor(filteredObject[0].colors[0]);
      if (kitchens.some((obj) => obj.name === product)) {
        setAmbient(kitchens);
      }

      if (bathrooms.some((obj) => obj.name === product)) {
        setAmbient(bathrooms);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen flex ">
      <div className="w-[30%] xl:w-[25%] h-full p-4 flex flex-col  gap-y-2">
        <div className="  xl:h-[20%] brb flex flex-col justify-between  ">
          <div className="    xl:h-[50%]">
            <img src={Logo} alt="" className="h-full  w-3/5" />
          </div>
          <div className=" flex  gap-x-4  pb-2">
            <Button
              className={`px-6 py-2 
                                 bg-red-600 text-white
                                 `}
              clickFunc={() => setActiveTab('colors')}
            >
              Colors
            </Button>
            <Button
              className={`px-6 py-2
                                 bg-white text-black border border-black
                                 `}
              clickFunc={() => setActiveTab('ambient')}
            >
              Ambients
            </Button>
          </div>
        </div>

        {activeTab === 'colors' ? (
          <div className="brr xl:h-[75%]">
            <div className=" brg  xl:h-[30%]">
              <div className=" h-full flex justify-center items-center flex-col">
                <h5 className="xl:h-[15%] text-base font-light font-albert ">
                  Countertop
                </h5>
                <img
                  src={`https://drive.google.com/thumbnail?id=${ActiveColor?.colorCardImage}&sz=w1000`}
                  alt=""
                  className=" brr w-[50%] xl:h-[60%] my-1 "
                />
                <h5 className="xl:h-[15%]">{ActiveColor?.colorName}</h5>
              </div>
            </div>
            <div className="brb xl:h-[70%] overflow-y-scroll cards-scroll">
              <div className="flex justify-between">
                <div>Select Color</div>
                <div>Input Box</div>
              </div>
              <div className="text-black grid grid-cols-3 gap-2 brg ">
                {colors?.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="brr flex flex-col h-[85px]"
                      onClick={() => {
                        setActiveColor(item);
                      }}
                    >
                      <img
                        src={`https://drive.google.com/thumbnail?id=${item?.colorCardImage}&sz=w1000`}
                        className="rounded-xl cursor-pointer w-full lg:w-full lg:h-64"
                        alt="tile-images"
                      />

                      <h3 className="text-center">{item?.colorName}</h3>
                    </div>
                  );
                })}
                {colors?.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="brr flex flex-col h-[85px]"
                      onClick={() => {
                        setActiveColor(item);
                      }}
                    >
                      <img
                        src={`https://drive.google.com/thumbnail?id=${item?.colorCardImage}&sz=w1000`}
                        className="rounded-xl cursor-pointer w-full lg:w-full lg:h-64"
                        alt="tile-images"
                      />

                      <h3 className="text-center">{item?.colorName}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="brr py-2 overflow-y-scroll cards-scroll">
            {ambient?.map((item, i) => {
              console.log(item);
              return (
                <div
                  key={i}
                  className="h-[30%] mb-2 w-3/4 mx-auto"
                  onClick={() => {
                    setActiveColor(item.colors[0]);
                    setActiveTab('colors');
                    setColors(item.colors);
                  }}
                >
                  <img
                    src={`https://drive.google.com/thumbnail?id=${item?.cardImage}&sz=w1000`}
                    alt="main-image "
                    className="h-full  w-full "
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* image container */}
      <div className="w-[70%] xl:w-[75%]  h-screen">
        <img
          src={`https://drive.google.com/thumbnail?id=${ActiveColor?.mainImage}&sz=w1000`}
          alt="main-image "
          className="h-screen  w-full "
        />
      </div>
    </div>
  );
}

export default VisualizerMain;
