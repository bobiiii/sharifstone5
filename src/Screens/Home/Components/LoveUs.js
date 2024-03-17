import LoveUSCover from "../../../assets/images/designer_love.png";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Heading from "../../resuable/Heading";
import Button from "../../resuable/Button";
import "./loveus.css";

const LoveUS = () => {
  return (
    <MaxWidthWrapper >
      <div className="w-full  lg:overflow-hidden   flex flex-col-reverse lg:flex-row justify-center items-center ">
        <div className="lg:w-1/2   lg:mt-0  mt-8 overflow-hidden  ">
          <div className="lg:w-[120%]  lg:block hidden ">
            <img src={LoveUSCover} className="lg:h-full  lg:ml-[-18%] " />
          </div>
          <div className="w-[100vw] max-h-[40vh] overflow-hidden  lg:hidden  ">
            <div className="w-[500px] ml-[-15%]">
              <img src={LoveUSCover} className="h-full bg-[#f3f5f5]  " />
            </div>          </div>
        </div>
        <div className=" xl:w-1/2 md:w-[60%] w-full flex justify-center items-center flex-col ">
          <div className=" w-full  h-full lg:mb-6 mb-3 ">
            <Heading className='lg:text-start text-center'>
              WHY DESIGNERS  LOVE US
            </Heading>
          </div>
          <div className="lg:px-2 lg:me-10 home-loveus-desc   lg:text-start text-center flex flex-col md:gap-6 gap-4">
            <p>
              Our diverse range of designs and products allows us to cater to a wide
              spectrum of design preferences, ensuring that our offerings seamlessly
              complement various interior styles.
            </p>

            <p>
              The durability and practicality of our designs provide not just
              aesthetic value but also functional excellence, making us a top choice
              for designers seeking both style and substance.
            </p>
            <div className=" mt-3 w-full flex lg:justify-start lg:items-start justify-center items-center">


              <Button >
                Download the 2024 Digital Catalog
              </Button>
            </div>
          </div>

        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default LoveUS;