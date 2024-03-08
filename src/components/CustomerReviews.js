import "./CustomerReviews.css";
import Customer1 from "../assets/images/homeImage/customer_batool.png";
import Customer2 from "../assets/images/homeImage/customer_jacob.png";
import Customer3 from "../assets/images/homeImage/customer_sharon.png";
import OrganizationLogo from "../assets/images/homeImage/org_logo.png";
import Carousel from "react-multi-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

const CustomerReview = ({ label }) => {
  const customerArray = [
    {
      name: "Batool Dharamsey",
      desc: "Amazing service. Shirley and Juliana were  very welcoming and knowledgeable with the products . We entered thinking we are going to a showroom but it is warehouse with so much variety. Excellent experience. Definitely going back for the bathroom",
      designation: "Customer",
      image: Customer1,
    },
    {
      name: "Jacob M",
      desc: "Amazing service. Shirley and Juliana were  very welcoming and knowledgeable with the products . We entered thinking we are going to a showroom but it is warehouse with so much variety. Excellent experience. Definitely going back for the bathroom",
      designation: "Customer",
      image: Customer2,
    },
    {
      name: "Sharon White",
      desc: "Amazing service. Shirley and Juliana were  very welcoming and knowledgeable with the products . We entered thinking we are going to a showroom but it is warehouse with so much variety. Excellent experience. Definitely going back for the bathroom",
      designation: "Customer",
      image: Customer3,
    },
  ];
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
  return (
    <div className="home-customerreview-container">
      <div className="home-customerreview-header">{label}</div>

      {window.outerWidth <= 425 && (
        <div className="mobile-testimonials-container">
          {customerArray.map((v, i) => (
            <div className="home-customerreview-card">
              <div className="testimonials-desc">
                <div className="container-center">{v.desc}</div>
              </div>
              <div className="home-customerreview-talentcontainer">
                <div style={{ display: "flex", margin: "0px 10px" }}>
                  <img className="profile-image" src={v.image} />
                  <div style={{ margin: "0px 10px" }}>
                    <div className="home-customerreview-customername">
                      {v.name}
                    </div>
                    <div className="home-customerreview-customer">
                      {v.designation}
                    </div>
                  </div>
                </div>
                <img style={{ marginRight: 10 }} src={OrganizationLogo} />
              </div>
            </div>
          ))}
        </div>
      )}

      {window.outerWidth > 425 && (
        <div className="home-customerreview-cardcontainer">
          {customerArray.map((v, i) => (
            <div className="home-customerreview-card">
              <div className="testimonials-desc">
                <div className="container-center">{v.desc}</div>
              </div>
              <div className="home-customerreview-talentcontainer">
                <div style={{ display: "flex", margin: "0px 10px" }}>
                  <img className="profile-image" src={v.image} />
                  <div style={{ margin: "0px 10px" }}>
                    <div className="home-customerreview-customername">
                      {v.name}
                    </div>
                    <div className="home-customerreview-customer">
                      {v.designation}
                    </div>
                  </div>
                </div>
                <img style={{ marginRight: 10 }} src={OrganizationLogo} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerReview;
