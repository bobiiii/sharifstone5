import CoverComponent from '../../components/coverComponent'
import OurMission from './Components/OurMission'
import ReorganizeIndustry from './Components/ReorganizeIndustry'
import NoWarrantyCover from './Components/NoWarrantyCover copy'
import MaintainanceCare from './Components/MaintainanceCare.js'
import WarrantyImage from '../../assets/images/warranty.jpg'
import './WarrantyAndSupport.css'
import MaxWidthWrapper from '../MaxWidthWrapper.jsx'

function WarrantyAndSupport() {
  return (
    <div>
      <CoverComponent imageDesktop={'images/cover_images/desktop/warranty.png'} imageMobile={'images/cover_images/mobile/warranty.png'} label={['WARRANTY', 'AND SUPPORT']} />
      <ReorganizeIndustry />
      <OurMission />
      <NoWarrantyCover />
      <MaxWidthWrapper className=' md:mt-0 mt-0' >
        <div className=''>
          <img src={WarrantyImage} className='rounded-[30px]' alt='warranty-image' />
        </div>
      </MaxWidthWrapper>
      <MaintainanceCare />
    </div>
  )
}

export default WarrantyAndSupport
