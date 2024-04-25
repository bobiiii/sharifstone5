import { useRef } from 'react';
import { Link } from 'react-router-dom';
import MaxWidthWrapper from '../../MaxWidthWrapper';
import Heading from '../../resuable/Heading';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function RelatedProduct({ variety, collections }) {
  const matchedCollection = collections.find((collection) =>
    collection.variety.some((varietyObj) => varietyObj.varietyName === variety)
  );

  const responsive = {
    ' mobile': {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 641 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
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
      <div className=" w-full flex flex-col justify-center items-center">
        <Heading className="sm:flex hidden">RELATED PRODUCTS</Heading>
        <div className="w-11/12 sm:block hidden sm:pt-10 pt-4  px-2">
          <div className="relative">
            {matchedCollection?.variety && (
              <Carousel
                responsive={responsive2}
                infinite
                arrows={false}
                itemClass="px-2 "
                ref={carouselRef2}
              >
                {matchedCollection?.variety?.map((item, i) => {
                  let link = item?.varietyName.replace(/\s+/g, '-');

                  return (
                    <div key={i} className="flex flex-col gap-2  h-full">
                      <Link
                        to={`/quartz-collection/${matchedCollection.collectionName.replace(
                          /\s+/g,
                          '-'
                        )}/${link}`}
                        className="h-full relative "
                      >
                        <img
                          src={`https://drive.google.com/thumbnail?id=${item?.varietyCardImage}&sz=w1000`}
                          alt=""
                          className="h-full rounded-lg w-full cursor-pointer "
                        />
                      </Link>
                      <h4 className="absolute bottom-0 left-[50%] translate-x-[-50%] bg-white/50 w-max px-4 text-center lg:text-2xl  text-lg font-semibold font-albert bg-white  py-2">
                        {item.varietyName}
                      </h4>
                    </div>
                  );
                })}
              </Carousel>
            )}
            <span className=" absolute top-0 bottom-0 mb-8   items-center  flex justify-center">
              <button
                className="bg-[#D4262A]  rounded-full  p-4 lg:-ml-14 -ml-3"
                onClick={handlePrevious2}
              >
                <FaArrowLeft size={20} className="text-white" />
              </button>
            </span>
            <span className="absolute top-0 bottom-0  mb-8  right-0 items-center flex justify-center">
              <button
                className="bg-[#D4262A] rounded-full  p-4 lg:-mr-14 -mr-3"
                onClick={handleNext2}
              >
                <FaArrowRight size={20} className="text-white" />
              </button>
            </span>
          </div>
        </div>

        <div className="flex sm:hidden justify-between w-full items-center">
          <div>
            <Heading className=" text-base">RELATED PRODUCTS</Heading>
          </div>
          <div className="flex gap-2 text-white">
            <button
              className="bg-[#D5262A] rounded-full p-2"
              onClick={handlePrevious}
            >
              <IoIosArrowBack className="text-center" />
            </button>
            <button
              className="bg-[#D5262A] rounded-full p-2"
              onClick={handleNext}
            >
              <IoIosArrowForward className="text-center" />
            </button>
          </div>
        </div>

        <div className="w-full sm:hidden block mt-6 ">
          {matchedCollection?.variety && (
            <Carousel
              responsive={responsive}
              infinite
              arrows={false}
              itemClass="px-2 "
              ref={carouselRef}
            >
              {matchedCollection?.variety?.map((item, i) => {
                let link = item?.varietyName.replace(/\s+/g, '-');

                return (
                  <Link
                    key={i}
                    to={`/quartz-collection/${matchedCollection.collectionName.replace(
                      /\s+/g,
                      '-'
                    )}/${link}`}
                    className="relative"
                  >
                    <img
                      src={`https://drive.google.com/thumbnail?id=${item?.varietyCardImage}&sz=w1000`}
                      alt=""
                      className=" h-[300px]  rounded-lg w-full cursor-pointer "
                    />
                    <h3 className="absolute text-center text-lg font-bold bottom-0 left-[50%] translate-x-[-50%] bg-white/50 w-full">
                      {item.varietyName}
                    </h3>
                  </Link>
                );
              })}
            </Carousel>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default RelatedProduct;
