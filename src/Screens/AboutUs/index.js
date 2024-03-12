import React from 'react'
import CoverComponent from '../../components/coverComponent'
import OurMission from './Components/OurMission'
import ReorganizeIndustry from './Components/ReorganizeIndustry'
import OurLocation from './Components/OurLocation'
import BusinessHours from './Components/BusinessHours'
import CustomerReview from "../../components/CustomerReviews";

function AboutUs() {
  return (
    
    <div>
      <CoverComponent image={'url(images/cover/about_us.png)'} label={['ABOUT', 'SHARIFSTONE']}/>
      {/* <ReorganizeIndustry />  */}
      <OurMission />
      <OurLocation /> 
      <BusinessHours />
      <CustomerReview label={"WHAT OUR CLIENT SAY"}/>  
    </div>
  )
}

export default AboutUs
