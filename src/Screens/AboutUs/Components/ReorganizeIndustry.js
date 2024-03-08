import React from "react";
import { Link } from "react-router-dom";
import "./ReorganizeIndustry.css";
function ReorganizeIndustry() {
  return (
    <div className="reorganize_container">
      <div className="reorganize-imagecontainer">
        <div className="reorganize-subcontainer">
          <div className="reorganize-heading">
            WE ARE REDEFINING THE QUARTZ INDUSTRY
          </div>
          <div className="reorganize-desc">
            <b>Sharifstone ®</b> is one of the leading companies of engineered Quartz
            in Florida.
            <br /> <br />
            Our goal is to make the customers feel proud to put their trust in
            our company because we believe that our customers deserve the best
            and that quality performance is a result of our ability to
            understand our customers’ specific needs.
            <br /> <br />
            By having more than 30 years of experience that exceeds the
            expectations of our customers, we are able to give the customers
            more than what they have expected.
          </div>
          <div style={{display: 'flex'}}><Link to={"/contact"} className="reorganize-getstarted">Get Started</Link></div>
        </div>
      </div>
    </div>
  );
}

export default ReorganizeIndustry;
