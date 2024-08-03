import { GoArrowUpRight } from "react-icons/go";
import { Link, useNavigate, useParams } from "react-router-dom";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import useAuth from "../../../hooks/useAuth";

const DiscoverCollection = () => {

  const { collections } = useAuth();




  const collectionJSX = (obj, i) => {
    let link = obj.collectionName.replace(/\s+/g, "-");



    return (

      <div key={i}
        className={`flex-grow flex-shrink basis-2/4 px-1 max-w-[70%] lg:flex-none lg:w-[32%] mb-2     text-center  `}

      >
        <Link to={`/quartz-collection/${link}`}>

          <div className="flex flex-col   ">
            <div
            >
              <div className="relative group">
                <img src={`https://drive.google.com/thumbnail?id=${obj.collectionImage}&sz=w4000`} className="h-40 cursor-pointer w-full lg:w-full lg:h-64" alt="tile-images" />

                <div className="absolute bottom-0 left-[50%] translate-x-[-50%]  w-full ">
                  <div className=" lg:w-min  w-max px-2   mx-auto bg-white/50  py-1 lg:py-1 lg:px-3 ">
                    <h4 className="font-medium   lg:font-semibold text-xs lg:text-xl font-gelasio text-[#221F1F]  lg:text-nowrap">
                      {obj.collectionName}
                    </h4>
                  </div>
                </div>

                <div
                  className={`bg-black/50 text-white w-min  px-4 lg:px-8 py-4 lg:py-8 rounded-full absolute  top-[20%] lg:top-[35%]  left-[50%]  cursor-pointer translate-x-[-50%]    opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  <GoArrowUpRight size={35} color="white" className="cursor-pointer" />
                </div>
              </div>
            </div>


          </div>
        </Link>
      </div >

    );
  };


  return (
    <MaxWidthWrapper className={" max-w-screen-2xl lg:px-0 md:px-0 sm:px-0 px-0"}>

      <div className=" lg:w-full lg:mx-auto">
        <h4 className="font-extrabold lg:text-5xl text-3xl text-center font-gelasio">
          DISCOVER OUR NEW COLLECTION        </h4>
      </div>
      <div className="text-center py-4 lg:w-1/2 lg:mx-auto">
        <p>
          Discover the perfect quartz design in our collection, featuring both timeless classics and modern styles. Find the ideal match for your space and elevate your surroundings effortlessly with SharifStone.

        </p>
      </div>

      <div className={` lg:w-full   lg:mx-auto flex  justify-center lg:gap-4   flex-wrap     `}>
        {collections.length > 0 ? collections.map((obj, i) => collectionJSX(obj, i)) : "loading"}
      </div>
    </MaxWidthWrapper>
  );
};

export default DiscoverCollection;
