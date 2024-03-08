import Carousel from "react-multi-carousel";
import LoveUSCover1 from "../../../assets/images/homeImage/loveus1a.svg";
import LoveUSCover2 from "../../../assets/images/homeImage/loveus1b.svg";
import LoveUSCover3 from "../../../assets/images/homeImage/loveus1c.svg";

import "./loveus.css";
// import

const LoveUS = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center  py-8">
      <div className="home-loveus-innercontainer hidden">
        {/* <img src={LoveUSCover} className="loveus-image" /> */}
      </div>
      <div className="w-full text-center">
        <div className="font-semibold text-xl text-[#221F1F] pb-3">WHY DESIGNERS LOVE US</div>
        <div className="home-loveus-desc">
          Our diverse range of designs and products allows us to cater to a wide
          spectrum of design preferences, ensuring that our offerings seamlessly
          complement various interior styles. <br />
          <br />
          The durability and practicality of our designs provide not just
          aesthetic value but also functional excellence, making us a top choice
          for designers seeking both style and substance.
        </div>

        <div className="w-full overflow-hidden ">

          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}

            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 3,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=" flex gap-10 w-full "
            slidesToSlide={1}
            swipeable
          >
            <div className="bg-cover w-[200px]  ">
              <img src={LoveUSCover1} className="h-full" />


            </div>
            <div className="bg-cover w-[200px] ">

              <img src={LoveUSCover2} className="h-full"/>
            </div>
            <div className="bg-cover w-[200px] "><img src={LoveUSCover3} className="h-full" /></div>
            <div className="bg-cover w-[200px] "><img src={LoveUSCover2} className="h-full" /></div>

          </Carousel>
        </div>


        <div className="home-loveus-progress hidden">
          <div className="homebrand-button" onClick={() => { }}>
            Download the 2024 Digital Catalog
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveUS;
