import CoverComponent from "../../components/coverComponent"
import SubscriptionNewsLetter from "../Home/Components/SubscriptionNewsLetter"
import DiscoverCollection from "./Components/DiscoverCollection"
import CollectionCover from '../../assets/images/cover/our_collection.png'
// `url(${CollectionCover})`
const OurCollection = ({setShowDropdown}) => {
    console.log(setShowDropdown)
    return(
        <div>
            <CoverComponent setShowDropdown={setShowDropdown}  image={`${CollectionCover}`} label={['OUR', 'COLLECTION']}/>
       
            <DiscoverCollection />
        </div>
    )
}

export default OurCollection