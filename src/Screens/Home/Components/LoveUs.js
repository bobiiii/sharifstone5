import LoveUSCover from "../../../assets/images/designer_love.png";
import "./loveus.css";
// import

const LoveUS = () => {
  return (
    <main className='max-w-screen-2xl w-full mx-auto px-4 md:py-16 py-10'>
      <div className="home-loveus-container w-full   flex justify-center items-center ">
        <div className="home-loveus-innercontainer lg:mt-0 mt-8">
          <img src={LoveUSCover} className="loveus-image" />
        </div>
        {/* home-loveus-innercontainer2 */}
        <div className=" xl:w-1/2 md:w-[65%] w-full flex justify-center items-center flex-col ">
          <div className=" w-full h-full mb-6 ">
            <h1 className=" w-full font-gelasio leading-5 lg:text-5xl  font-semibold sm:text-4xl xs:text-2xl text-xl  text-[rgb(34,31,31)] lg:text-start text-center " >
              WHY DESIGNERS  LOVE US
            </h1>
          </div>
          <div className="home-loveus-desc  lg:text-start text-center flex flex-col md:gap-6 gap-4">
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
              <div className="homebrand-button px-4  whitespace-nowrap lg:w-[80%] sm:w-[70%] w-[90%] " onClick={() => { }}>
                Download the 2024 Digital Catalog
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default LoveUS;