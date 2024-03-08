import { useState } from "react";
import "./VisualizerForm.css";
import Logo from "../../../assets/images/logo_footer.png";
import { GoArrowUpRight } from "react-icons/go";
import Carousel from "react-multi-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button className="carousel-btn" onClick={() => onClick()}>
      <FaChevronLeft size={15} color={"#fff"} />
    </button>
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button className="carousel-btn" onClick={() => onClick()}>
      <FaChevronRight size={15} color={"#fff"} />
    </button>
  );
};

const VisualizerForm = ({ data, kitchenLayout, bathroomLayout }) => {
  const [layout, setLayout] = useState("Kitchen");
  const [hoverContainer, setHoverContainer] = useState(-1);
  const [changeImageLayout, setChangeImageLayout] = useState("Kitchen");
  const { currentScreen, setCurrentScreen, currentAmbient, setCurrentAmbient } =
    data;
  const navigate = useNavigate();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const selectLayout = (layout, { value }) => {
    if (layout === "Kitchen") {
      setCurrentScreen("Pick Kitchen");
      setCurrentAmbient(value);
      navigate(`/kitchen-visualizer/${value}`, { replace: true });
    } else if (layout === "Bathroom") {
      setCurrentScreen("Pick Bathroom");
      setCurrentAmbient(value);
      navigate(`/kitchen-visualizer/${value}`, { replace: true });
    } else {
      console.log("i guess not today");
    }
  };
  const LayoutJSX = (imageLayout = "Kitchen", layoutArray = kitchenLayout) =>
    layout === imageLayout &&
    layoutArray.map((v, i) => (
      <div
        className="visualizerform-image"
        onMouseOver={() => setHoverContainer(i)}
        style={{ backgroundImage: v.image }}
      >
        {v?.value === "" ? (
          <h3 style={{ color: "#fff" }}>Coming Soon</h3>
        ) : (
          <>
            {i === hoverContainer && (
              <div
                onClick={() => selectLayout(layout, v)}
                className="discover-collectionexpand"
              >
                <GoArrowUpRight size={35} color="white" />
              </div>
            )}
          </>
        )}
      </div>
    ));
  const LayoutMobileJSX = (
    imageLayout = "Kitchen",
    layoutArray = kitchenLayout
  ) =>
    layout === imageLayout && (
      <Carousel
        containerClass="carousel-container"
        draggable={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        responsive={responsive}
      >
        {layoutArray.map((v, i) => (
          <div
            className="visualizerform-image"
            style={{ backgroundImage: v.image }}
          >
            {i === 0 && (
              <div
                onClick={
                  v?.value !== "" && layout === "Kitchen"
                    ? () => setCurrentScreen("Pick Kitchen")
                    : () => setCurrentScreen("Pick Bathroom")
                }
                className="discover-collectionexpand"
              >
                <GoArrowUpRight size={35} color="white" />
              </div>
            )}
          </div>
        ))}
      </Carousel>
    );
  return (
    <div
      className="visualizerform-container"
      style={{ backgroundImage: "url(images/cover/visualizer_form_bg.png)" }}
    >
      <Link to="/">
        <img src={Logo} />
      </Link>
      <div className="visualizerform-heading">SELECT BATHROOM LAYOUT</div>
      <div className="visualizerform-form">
        <div className="visualizerform-itembtn">
          <div
            onClick={() => setLayout("Kitchen")}
            className={
              layout === "Kitchen"
                ? "visualizerform-btn1"
                : "visualizerform-btn2"
            }
          >
            Kitchen
          </div>
          <div
            onClick={() => setLayout("Bathroom")}
            className={
              layout === "Bathroom"
                ? "visualizerform-btn1"
                : "visualizerform-btn2"
            }
          >
            Bathroom
          </div>
        </div>
        <div className="visualizerform-items">
          {window.outerWidth <= 425
            ? LayoutMobileJSX("Kitchen", kitchenLayout)
            : LayoutJSX("Kitchen", kitchenLayout)}
          {window.outerWidth <= 425
            ? LayoutMobileJSX("Bathroom", bathroomLayout)
            : LayoutJSX("Bathroom", bathroomLayout)}
        </div>
      </div>
    </div>
  );
};

export default VisualizerForm;
