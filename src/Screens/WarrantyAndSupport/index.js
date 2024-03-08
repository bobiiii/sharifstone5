import React from 'react'
import CoverComponent from '../../components/coverComponent'
import OurMission from './Components/OurMission'
import ReorganizeIndustry from './Components/ReorganizeIndustry'
import NoWarrantyCover from './Components/NoWarrantyCover copy'
import MaintainanceCare from './Components/MaintainanceCare.js'
import WarrantyImage from '../../assets/images/warranty.jpg'
import WarrantyCover from './Components/NoWarrantyCover copy'

import './WarrantyAndSupport.css'
function WarrantyAndSupport() {
  return (
    <div>
      <CoverComponent image={'url(images/cover/warranty.png)'} label={['WARRANTY', 'AND SUPPORT']}/>
      <ReorganizeIndustry />
      <OurMission />
      <NoWarrantyCover />
      <div className='warranty-n-support-image'>
        <img src={WarrantyImage} />
      </div>
      <MaintainanceCare />
    </div>
  )
}

export default WarrantyAndSupport
