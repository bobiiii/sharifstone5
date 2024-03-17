import CoverComponent from "../../components/coverComponent"
import DiscoverCollection from "./Components/DiscoverCollection"
import CollectionCover from '../../assets/images/cover/our_collection.png'

const OurCollection = ({setShowDropdown}) => {
    return(
        <div>
            <CoverComponent setShowDropdown={setShowDropdown}  image={`${CollectionCover}`} label={['OUR', 'COLLECTION']}/>
       
            <DiscoverCollection />
        </div>
    )
}

export default OurCollection