import React, { useEffect, useState } from 'react';
import main from './images/main.jpg';
import coutertop from './images/coutertop.png';
import Logo from '../../assets/images/logo_footer.png';
import Button from '../resuable/Button';
import { Link, useParams } from 'react-router-dom';
import { getKitchens, getBathrooms } from '../../apiCall/apiCall';
import './visualizer.css';
function VisualizerMain() {
  const [activeTab, setActiveTab] = useState('colors');
  const [ActiveColor, setActiveColor] = useState({});
  const [colors, setColors] = useState([]);
  const [ambient, setAmbient] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const { product } = useParams();
  const { color } = useParams();

  const filteredColors = colors.filter((item) =>
    item.colorName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      let productwithouthyphen = product.replace(/-/g, ' ');
      const kitchens = await getKitchens();
      const bathrooms = await getBathrooms();
      const mixBathroomKitchen = [...kitchens, ...bathrooms];
      const filteredObject = mixBathroomKitchen.filter(
        (item) => item.name === productwithouthyphen
      );
      console.log(filteredObject);
      setColors(filteredObject[0].colors);

      if (kitchens.some((obj) => obj.name === product)) {
        setAmbient(kitchens);
      }

      if (bathrooms.some((obj) => obj.name === product)) {
        setAmbient(bathrooms);
      }
    };
    fetchData();
  }, [product]);

  useEffect(() => {
    let colorWithSpaces = color.replace(/-/g, ' ');
    const activeColor = filteredColors.find(
      (colorItem) => colorItem.colorName === colorWithSpaces
    );
    if (activeColor) {
      setActiveColor(activeColor);
    }
  }, [color, product, filteredColors]);

  return (
    <>
      <div className="h-screen lg:flex hidden ">
        <div className="w-[30%]  xl:w-[25%] overflow-hidden  h-full p-4 flex flex-col  gap-y-10">
          <div className="  xl:h-[20vh]  flex flex-col gap-y-8  ">
            <div className="    xl:h-[50%] 2xl:h-[45%]">
              <img src={Logo} alt="" className="h-full  w-3/5" />
            </div>
            <div className=" flex  gap-x-4  pb-2">
              <Button
                className={`px-6 py-2 2xl:px-8
                                 ${
                                   activeTab === 'colors'
                                     ? 'bg-red-600 text-white '
                                     : 'bg-white text-black border border-black'
                                 }
                                 `}
                clickFunc={() => setActiveTab('colors')}
              >
                Colors
              </Button>
              <Button
                className={`px-6 py-2 2xl:px-8
                                ${
                                  activeTab === 'colors'
                                    ? 'bg-white text-black border border-black'
                                    : ' bg-red-600 text-white '
                                }
                                 `}
                clickFunc={() => setActiveTab('ambient')}
              >
                Ambients
              </Button>
            </div>
          </div>

          {activeTab === 'colors' ? (
            <div className=" xl:h-[75vh] flex flex-col gap-y-8">
              <div className="   xl:h-[30%]">
                <div className=" h-full flex justify-center items-center flex-col">
                  <h5 className="xl:h-[15%] text-base font-light font-albert ">
                    Countertop
                  </h5>
                  <img
                    src={`https://drive.google.com/thumbnail?id=${ActiveColor?.colorCardImage}&sz=w1000`}
                    alt=""
                    className="  w-[50%] xl:h-[70%] my-2 "
                  />
                  <h5 className="xl:h-[15%] text-base font-semibold font-albert ">
                    {ActiveColor?.colorName}
                  </h5>
                </div>
              </div>
              <div className=" xl:h-[70%] overflow-y-scroll cards-scroll2 pr-2 pb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-base font-albert font-medium">
                      Select color
                    </h4>
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      placeholder="Search "
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      class="p-2 border-b border-gray-300 rounded-lg focus:outline-none"
                    />
                    <svg
                      class="absolute right-2 top-2 h-5 w-5 text-gray-500 pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 20l-4.96-4.96M12 17a5 5 0 100-10 5 5 0 000 10z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="text-black grid grid-cols-3 gap-x-2 gap-y-4 mt-3 ">
                  {filteredColors?.map((item, i) => {
                    let link2 = item.colorName.replace(/\s+/g, '-');
                    return (
                      <Link key={i} to={`/visualizer/${product}/${link2}`}>
                        <div
                          className=" flex flex-col lg:h-[100px] 3xl:h-full  2xl:h-[150px]"
                          onClick={() => {
                            setActiveColor(item);
                          }}
                        >
                          {' '}
                          <img
                            src={`https://drive.google.com/thumbnail?id=${item?.colorCardImage}&sz=w1000`}
                            className="rounded-lg cursor-pointer w-full lg:w-full lg:h-64"
                            alt="tile-images"
                          />
                          <h3 className="text-start text-sm font-normal font-albert mt-1">
                            {item?.colorName}
                          </h3>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className=" mb-4 overflow-y-scroll flex flex-col  gap-y-4 cards-scroll2">
              {ambient?.map((item, i) => {
                let link = item?.name?.replace(/\s+/g, '-');
                let link2 = item?.colors[0]?.colorName.replace(/\s+/g, '-');
                return (
                  <Link key={i} to={`/visualizer/${link}/${link2}`}>
                    <div
                      key={i}
                      className="h-auto mb-2 w-3/4 mx-auto"
                      onClick={() => {
                        setActiveColor(item.colors[0]);
                        setActiveTab('colors');
                        setColors(item.colors);
                      }}
                    >
                      <img
                        src={`https://drive.google.com/thumbnail?id=${item?.cardImage}&sz=w1000`}
                        alt="main-image "
                        className="h-full  w-full  "
                      />
                    </div>
                  </Link>
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
      <div className="lg:hidden flex flex-col h-full max-h-screen">
        <div className="bg-white  py-4  flex justify-center items-center">
          <img src={Logo} alt="" className="h-12  " />
        </div>
        <div className="flex flex-col sm:gap-y-6 gap-y-2.5 ">
          <div className="h-[40vh]">
            <img
              src={`https://drive.google.com/thumbnail?id=${ActiveColor?.mainImage}&sz=w1000`}
              alt="main-image "
              className="w-full h-full"
            />
          </div>
          <div className=" flex  gap-x-4  pb-2 px-4">
            <Button
              className={`px-6 py-2 2xl:px-8
                                 ${
                                   activeTab === 'colors'
                                     ? 'bg-red-600 text-white '
                                     : 'bg-white text-black border border-black'
                                 }
                                 `}
              clickFunc={() => setActiveTab('colors')}
            >
              Colors
            </Button>
            <Button
              className={`px-6 py-2 2xl:px-8
                                ${
                                  activeTab === 'colors'
                                    ? 'bg-white text-black border border-black'
                                    : ' bg-red-600 text-white '
                                }
                                 `}
              clickFunc={() => setActiveTab('ambient')}
            >
              Ambients
            </Button>
          </div>
          <div className="overflow-y-scroll cards-scroll2  max-h-[42vh] pr-2">
            {activeTab === 'colors' ? (
              <>
                <div className="  flex justify-center items-center flex-col">
                  <h5 className=" text-base font-light font-albert ">
                    Countertop
                  </h5>
                  <img
                    src={`https://drive.google.com/thumbnail?id=${ActiveColor?.colorCardImage}&sz=w1000`}
                    alt=""
                    className="  sm:w-[40%] w-[30%]   my-2 "
                  />
                  <h5 className=" text-base font-semibold font-albert ">
                    {ActiveColor?.colorName}
                  </h5>
                </div>
                <h4 className="text-base font-albert font-medium px-4">
                  Select color
                </h4>
                <div className="text-black grid grid-cols-3 gap-x-2 gap-y-4 mt-3 px-4">
                  {filteredColors?.map((item, i) => {
                    let link2 = item?.colorName.replace(/\s+/g, '-');
                    return (
                      <Link key={i} to={`/visualizer/${product}/${link2}`}>
                        <div
                          key={i}
                          className=" flex flex-col lg:h-[100px] 3xl:h-full  2xl:h-[150px]"
                          onClick={() => {
                            setActiveColor(item);
                          }}
                        >
                          <img
                            src={`https://drive.google.com/thumbnail?id=${item?.colorCardImage}&sz=w1000`}
                            className="rounded-lg cursor-pointer w-full lg:w-full lg:h-64"
                            alt="tile-images"
                          />

                          <h3 className="text-start text-sm font-normal font-albert mt-1">
                            {item?.colorName}
                          </h3>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4 px-4">
                  {ambient?.map((item, i) => {
                    // let link2 = item?.colorName.replace(/\s+/g, '-');
                    return (
                      <Link key={i} to={`/visualizer/${product}`}>
                        <div
                          className="  gap-4   mb-2  mx-auto"
                          onClick={() => {
                            setActiveColor(item.colors[0]);
                            setActiveTab('colors');
                            setColors(item.colors);
                          }}
                        >
                          <img
                            src={`https://drive.google.com/thumbnail?id=${item?.cardImage}&sz=w1000`}
                            alt="main-image "
                            className="h-full  w-full  "
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default VisualizerMain;
