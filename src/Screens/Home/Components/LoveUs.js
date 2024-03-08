import LoveUSCover from "../../../assets/images/designer_love.png";
import "./loveus.css";
// import

const LoveUS = () => {
  return (
    <div className="home-loveus-container w-full flex justify-center items-center ">
      <div className="home-loveus-innercontainer">
        <img src={LoveUSCover} className="loveus-image"/>
      </div>
      <div className="home-loveus-innercontainer2  ">
        <div className=" w-full home-loveus-heading text-lg font-extrabold  tracking-tighter line-clamp-6	 ">WHY DESIGNERS LOVE US</div>
        <div className="home-loveus-desc">
          Our diverse range of designs and products allows us to cater to a wide
          spectrum of design preferences, ensuring that our offerings seamlessly
          complement various interior styles. <br />
          
          The durability and practicality of our designs provide not just
          aesthetic value but also functional excellence, making us a top choice
          for designers seeking both style and substance.
        </div>
        <div className="w bg-[#d8dedf] mt-3">
          <div className="homebrand-button" onClick={() => {}}>
            Download the 2024 Digital Catalog
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveUS;