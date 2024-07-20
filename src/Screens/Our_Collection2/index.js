import CoverComponent from '../../components/coverComponent';
import DiscoverCollection2 from './Components/DiscoverCollection2';

const OurCollection2 = ({ setShowDropdown }) => {
  return (
    <div>
      <CoverComponent
        setShowDropdown={setShowDropdown}
        imageDesktop={'/images/cover_images/desktop/our_collection.png'}
        imageMobile={'/images/cover_images/mobile/OurCollection.png'}
        label={['OUR', 'COLLECTION']}
      />

      <DiscoverCollection2 />
    </div>
  );
};

export default OurCollection2;
