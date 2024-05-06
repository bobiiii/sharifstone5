import CoverComponent from '../../components/coverComponent'
import OurMission from './Components/OurMission'
import OurLocation from './Components/OurLocation'
import BusinessHours from './Components/BusinessHours'
import CustomerReview from "../../components/CustomerReviews";
import { Helmet } from 'react-helmet';

function AboutUs() {
  return (

    <div>
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is a description of my page" />
        <meta name="keywords" content="react, meta tags, seo" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="My Page Title" />
        <meta property="og:description" content="This is a description of my page" />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content="https://example.com/my-page" />
        <meta name="twitter:title" content="My Page Title" />
        <meta name="twitter:description" content="This is a description of my page" />
        <meta name="twitter:image" content="https://example.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>



      <CoverComponent imageDesktop={'images/cover_images/desktop/about_us.png'} imageMobile={'images/cover_images/mobile/about_us.png'} label={['ABOUT', 'SHARIFSTONE']} />
      <OurMission />
      <OurLocation />
      <BusinessHours />
      <CustomerReview label={"WHAT OUR CLIENT SAY"} />
    </div>
  )
}

export default AboutUs
