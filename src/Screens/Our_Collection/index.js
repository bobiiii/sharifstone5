import CoverComponent from '../../components/coverComponent';
import DiscoverCollection from './Components/DiscoverCollection';

const OurCollection = ({ setShowDropdown }) => {
  return (
    <div>
      <CoverComponent
        setShowDropdown={setShowDropdown}
        imageDesktop={'images/cover_images/desktop/our_collection.png'}
        imageMobile={'images/cover_images/mobile/OurCollection.png'}
        label={['OUR', 'COLLECTION']}
      />

      <DiscoverCollection />
    </div>
  );
};

export default OurCollection;
