import { useState, useEffect, useContext } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MaxWidthWrapper from '../../MaxWidthWrapper';
import useAuth from '../../../hooks/useAuth';

const DiscoverCollection2 = () => {
  const { variety2 } = useParams();
  const [varieties, setVarieties] = useState([]);

  
  let varietyWithSpaces = variety2.replace(/-/g, " ");
  const { collections,  } = useAuth();
  const [filteredVarietiesState, setFilteredVarietiesState] = useState([]) 
  useEffect(() => {
    const fetchData = async () => {
      const filteredVarieties = collections.filter(
        (collection) => collection.collectionName === varietyWithSpaces
      );
      setFilteredVarietiesState(filteredVarieties)

      setVarieties(filteredVarieties[0]?.variety);
    };
    fetchData();
  },[collections, variety2]);

  const collectionJSX = (obj, i, filteredVarieties) => {
    let link = obj.varietyName.replace(/\s+/g, "-");
    let link2 = filteredVarieties[0]?.collectionName.replace(/\s+/g, "-");

    return (
      <div
        key={i}
        className={`flex-grow flex-shrink basis-2/4 px-1 max-w-[70%] lg:flex-none lg:w-[32%] mb-2     text-center  `}
      >
        <Link to={`/${link2}/${link}`}>
          <div className="flex flex-col   ">
            <div>
              <div className="relative group">
                <img
                  src={`https://drive.google.com/thumbnail?id=${obj.varietyCardImage}&sz=w1000`}
                  className="h-40 cursor-pointer w-full lg:w-full lg:h-64"
                  alt="tile-images"
                />

                <div className="absolute bottom-0 left-[50%] translate-x-[-50%]  w-full ">
                  <div className="w-full lg:w-min w-max px-2 py-1  mx-auto bg-white/50  py-1 lg:py-1 lg:px-3 ">
                    <h4 className="font-medium  lg:font-semibold text-xs lg:text-xl font-gelasio text-[#221F1F]  lg:text-nowrap">
                      {obj.varietyName}
                    </h4>
                  </div>
                </div>

                <div
                  className={`bg-black/50 text-white w-min  px-4 lg:px-8 py-4 lg:py-8 rounded-full absolute  top-[20%] lg:top-[35%]  left-[50%]  cursor-pointer translate-x-[-50%]    opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  <GoArrowUpRight
                    size={35}
                    color="white"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <>
      {varieties?.length > 0 ? (
        <MaxWidthWrapper
          className={' max-w-screen-2xl lg:px-0 md:px-0 sm:px-0 px-0'}
        >
          <div className=" lg:w-full lg:mx-auto">
            <h4 className="font-extrabold lg:text-5xl text-3xl text-center font-gelasio">
              {varietyWithSpaces}
            </h4>
          </div>
          <div className="text-center py-4 lg:w-1/2 lg:mx-auto">
            <p>
              Discover the perfect quartz design in our collection, featuring
              both timeless classics and modern styles. Find the ideal match for
              your space and elevate your surroundings effortlessly with
              SharifStone.{' '}
            </p>
          </div>

          <div
            className={` lg:w-full   lg:mx-auto flex  justify-center lg:gap-4   flex-wrap     `}
          >
            {varieties?.length > 0
              ? varieties?.map((obj, i) => collectionJSX(obj, i, filteredVarietiesState))
              : 'loading'}
          </div>
        </MaxWidthWrapper>) :"loading"
      }
    </>
  );
};

export default DiscoverCollection2;
