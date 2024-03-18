import { useEffect } from 'react';
import './coverComponent.css';
import useAuth from "../hooks/useAuth"

const CoverComponent = ({ image, label }) => {
  const { setShowDropdown } = useAuth()



  useEffect(() => {
    const zoomImages = document.querySelectorAll('.zoomedImage');
    zoomImages.forEach(image => {
      image.classList.remove('zoomed');
    });

    setTimeout(() => {
      zoomImages.forEach(image => {
        image.classList.add('zoomed');
      });
    }, 1000);

    return () => {
      zoomImages.forEach(image => {
        image.classList.remove('zoomed');
      });
    };
  }, []);



  return (
    <div className='coverComponent overflow-hidden ' onMouseOver={() => { setShowDropdown(false) }}>
      <div className='w-full  2xl:h-[60vh]  h-[530px] grid place-items-center ' >
        <div className=' relative  h-full w-screen'>
          <img src={`${image}`} alt='cover' className='bg-no-repeat bg-center bg-cover zoomedImage h-full w-full' />

          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center '>
            {label[0]}<br />{label[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverComponent;
