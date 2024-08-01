import React, { useState, useEffect, useRef } from 'react';
import Button from '../resuable/Button';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { getKitchens, getBathrooms } from '../../apiCall/apiCall';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { GoArrowUpRight } from 'react-icons/go';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import Carousel from 'react-multi-carousel';
function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState('Kitchen');
  const [bathroomData, setBathroomData] = useState([]);
  const [kitchenData, setKitchenData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getKitchens();
      const data2 = await getBathrooms();

      setKitchenData(data);
      setBathroomData(data2);
    };
    fetchData();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case 'Kitchen':
        return <KitchenCategoryData kitchenData={kitchenData} />;
      case 'Bathroom':
        return <BathroomCategoryData bathroomData={bathroomData} />;
      default:
        return <div>Select a category to see content.</div>;
    }
  };

  return (
    <div
      className=" h-screen  grid bg-no-repeat w-screen bg-cover items-center"
      style={{ backgroundImage: 'url(/images/cover/visualizerMain.png)' }}
    >
      <div className="h-[95%]    overflow-hidden   flex flex-col md:justify-center items-center">
        <div className="text-center py-4 ">
          <Link to="/">
            <img src={Logo} className="w-40 h-12" alt='logo' />
          </Link>
        </div>

        <div className="md:mt-0 mt-6">
          {selectedCategory === 'Kitchen' ? (
            <h4 className="pb-4 lg:text-4xl md:text-3xl text-2xl font-albert font-medium text-white">
              Select Kitchen Layout
            </h4>
          ) : (
            <h4 className="pb-4 lg:text-4xl md:text-3xl text-2xl text-white font-albert font-medium">
              Select Bathroom Layout
            </h4>
          )}
        </div>

        <div className=" h-auto  bg-white md:overflow-y-scroll md:py-4 py-6 rounded-2xl text-center cards-scroll   font-bold text-2xl xl:w-4/5  w-[90%] lg:px-10 ">
          <div className=" flex justify-center items-center gap-4">
            <Button
              className={`px-8   md:font-semibold font-medium   ${selectedCategory === 'Kitchen'
                ? ' bg-red-600 text-white py-2.5 '
                : 'bg-white border border-slate-950 text-black py-2'
                } `}
              clickFunc={() => handleCategorySelect('Kitchen')}
            >
              Kitchen
            </Button>
            <Button
              className={` px-8    md:font-semibold font-medium  ${selectedCategory === 'Bathroom'
                ? ' bg-red-600 text-white py-2.5 '
                : 'bg-white border border-slate-950 text-black py-2'
                } `}
              clickFunc={() => handleCategorySelect('Bathroom')}
            >
              Bathroom
            </Button>
          </div>
          <div className="">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default SelectCategory;

export function KitchenCategoryData({ kitchenData }) {

  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };
  return (
    <>
      <div className="  hidden md:grid grid-cols-3 gap-y-4 gap-x-4 place-items-center  items-center mx-auto  p-4 ">
        {kitchenData?.map((card, i) => {
          let link = card.name.replace(/\s+/g, '-');
          let link2 = card?.colors[0]?.colorName.replace(/\s+/g, '-');

          return (
            <div
              key={i}
              className="  mx-auto w-full  items-center flex  justify-center">
              <div

                className=" flex justify-center items-center   w-full "
              >
                <Link
                  to={`/visualizer/${link}/${link2}`}
                  className="lg:w-[90%] w-full relative group"
                >
                  <div className="relative">
                    <img
                      src={`https://drive.google.com/thumbnail?id=${card?.cardImage}&sz=w1000`}
                      className="w-full rounded-3xl"
                      alt='card-image'
                    />
                    <div className="bg-black/50  text-white px-4 lg:px-6 py-4 lg:py-6 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <GoArrowUpRight
                        size={25}
                        color="white"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="md:hidden   h-full  mt-6 mx-auto">
        <Swiper
          loop={true}
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={1}
        >
          {kitchenData?.map((item, i) => {
            let link = item?.name.replace(/\s+/g, '-');
            let link2 = item?.colors[0]?.colorName.replace(/\s+/g, '-');
            return (
              <SwiperSlide key={i}>
                <Link
                  to={`/visualizer/${link}/${link2}`}
                  className="w-full relative group"
                >
                  <div className="relative mx-4">
                    <img
                      src={`https://drive.google.com/thumbnail?id=${item?.cardImage}&sz=w1000`}
                      className="w-full rounded-[31px]"
                      alt="card-image"
                    />
                    <div className="bg-black/50 text-white px-4 lg:px-6 py-4 lg:py-6 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <GoArrowUpRight size={25} color="white" className="cursor-pointer" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="relative w-full flex gap-2 py-4 justify-center items-center mt-2  ">
          <button
            className="bg-[#D4262A] rounded-full  p-2 "
            onClick={handlePrev}
          >
            <MdOutlineKeyboardArrowLeft size={20} className="text-white" />
          </button>
          <button
            className="bg-[#D4262A] rounded-full  p-2 "
            onClick={handleNext}
          >
            <MdKeyboardArrowRight size={20} className="text-white" />
          </button>
        </div>
      </div>
    </>
  );
}

export function BathroomCategoryData({ bathroomData }) {
  const responsive = {
    ' mobile': {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const carouselRef = useRef(null);

  const handlePrevious = () => {
    carouselRef.current.previous();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  return (
    <>
      <div className="  hidden md:grid grid-cols-3 gap-y-4 gap-x-4 place-items-center  items-center mx-auto  p-4 ">
        {bathroomData?.map((card, i) => {
          let link = item?.name.replace(/\s+/g, '-');

          let link2 = item?.colors[0]?.colorName.replace(/\s+/g, '-');

          return (
            <div className=" mx-auto w-full  items-center flex  justify-center">
              <div
                key={i}
                className="flex justify-center items-center   w-full   relative group"
              >
                <Link
                  to={`/visualizer/${link}/${link2}`}
                  className=" lg:w-[90%] w-full "
                >
                  <img
                    src={`https://drive.google.com/thumbnail?id=${card?.cardImage}&sz=w1000`}
                    className="w-full    rounded-3xl"
                    alt='card-image'
                  />

                  <div className="bg-black/50  text-white px-4 lg:px-6 py-4 lg:py-6 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <GoArrowUpRight
                      size={25}
                      color="white"
                      className="cursor-pointer"
                    />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="md:hidden   h-full  mt-6 ">
        <Carousel
          infinite
          ref={carouselRef}
          arrows={false}
          responsive={responsive}
          className="h-full"
        >
          {bathroomData?.map((item, i) => {
            let link = item?.name.replace(/\s+/g, '-');
            let link2 = item?.colors[0]?.colorName.replace(/\s+/g, '-');

            return (
              <Link
                key={i}
                to={`/visualizer/${link}/${link2}`}
                className=" w-full relative group "
              >
                <div className="relative mx-4  ">
                  <img
                    src={`https://drive.google.com/thumbnail?id=${item?.cardImage}&sz=w1000`}
                    className="w-full rounded-[31px]"
                    alt='card-image'
                  />
                  <div className="bg-black/50  text-white px-4 lg:px-6 py-4 lg:py-6 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <GoArrowUpRight
                      size={25}
                      color="white"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
        <div className="relative w-full flex gap-2 py-4 justify-center items-center mt-2  ">
          <button
            className="bg-[#D4262A] rounded-full  p-2 "
            onClick={handlePrevious}
          >
            <MdOutlineKeyboardArrowLeft size={20} className="text-white" />
          </button>
          <button
            className="bg-[#D4262A] rounded-full  p-2 "
            onClick={handleNext}
          >
            <MdKeyboardArrowRight size={20} className="text-white" />
          </button>
        </div>
      </div>
    </>
  );
}
