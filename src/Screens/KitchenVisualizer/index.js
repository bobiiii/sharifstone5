import Logo from "../../assets/images/logo.png";
import "./KitchenVisualizer.css";
import { Link } from "react-router-dom";
import Button from "../resuable/Button";

const KitchenVisualizer = () => {
  return (
    <>

      <div
        className="kitchen-visualizer-container overflow-hidden"
        style={{ backgroundImage: "url(/images/cover/visualizerMain.png)" }}
      >
        <div className="kitchen-visualizer-logo   flex-1 lg:block  hidden ">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="py-2 px-4 bg-[#ee2a2e]   whitespace-nowrap  mt-6 w-max  rounded-lg">
            <p className="release-text">2024 RELEASE</p>
          </div>
        </div>
        <div className="flex-1  text-white   lg:flex hidden justify-center items-center w-full h-auto">
          <div className="flex items-center rounded-3xl px-6 max-w-screen-2xl mx-auto w-[70%] bg-black bg-opacity-50 h-auto py-10 mb-4  ">

            <div className="  w-2/3 text-left  ">
              <h3 className="text-4xl  font-semibold font-albert pb-2">SHARIFSTONE ONLINE <br /> VISUALIZER</h3>
              <div className="leading-6  ">
                <p className="text-base  font-albert font-normal">
                  Our Kitchen and Bathroom Visualizer allows you to explore
                  different colors, materials, and design options, helping you
                  envision the perfect look for your space. With just a few
                  clicks, you can select from a wide range of cabinets,
                  countertops, and backsplashes. Experiment with various color
                  schemes, textures, and finishes to create a personalized kitchen
                  that reflects your style and taste.
                </p>
              </div>
            </div>
            <div className=" w-1/3 " >
              <div
                className="cursor-pointer rounded-xl w-full mx-auto flex justify-center "
              >
                <Button className={"p-0 py-2 px-16 font-albert font-semibold text-xl"}><Link to={"/kitchen/select-category"} className={""}>Start</Link></Button>
              </div>


            </div>
          </div>
        </div>

        <div className=" lg:hidden h-screen flex flex-col justify-center items-center  py-8 px-4 gap-y-10">
          <div className="">
            <Link to="/" >
              <img src={Logo} className="w-44" alt="logo-image"/>
            </Link>
            <div className="py-2 px-4 bg-[#ee2a2e]   whitespace-nowrap  mt-6 w-max  rounded-lg">
              <p className="release-text text-white">2024 RELEASE</p>
            </div>
          </div>
          <div className="flex  items-center rounded-3xl px-6 max-w-screen-2xl mx-auto  bg-black bg-opacity-50 h-auto py-10 mb-4  flex-col">

            <div className="  w-full text-center ">
              <h3 className="text-white lg:text-4xl text-2xl font-semibold font-albert pb-2">SHARIFSTONE ONLINE <br /> VISUALIZER</h3>
              <div className="leading-6 md:py-10 py-4">
                <p className="text-white lg:text-base text-sm font-albert font-normal">
                  Our Kitchen and Bathroom Visualizer allows you to explore
                  different colors, materials, and design options, helping you
                  envision the perfect look for your space. With just a few
                  clicks, you can select from a wide range of cabinets,
                  countertops, and backsplashes. Experiment with various color
                  schemes, textures, and finishes to create a personalized kitchen
                  that reflects your style and taste.
                </p>
              </div>
            </div>
            <div className=" w-full lg:w-1/3 " >
              <div

                className="cursor-pointer rounded-xl w-full mx-auto flex justify-center "
              >
                <Button className={"p-0 py-2 px-16 w-full font-albert lg:font-semibold font-medium lg:text-xl text-base"}><Link to={"/kitchen/select-category"} className={""}>Start</Link></Button>
              </div>


            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default KitchenVisualizer;