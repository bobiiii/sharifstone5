import { useEffect } from 'react';
import './coverComponent.css';
import useAuth from "../hooks/useAuth"

const CoverComponent = ({ imageMobile, imageDesktop, label }) => {
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
      <div className='w-full   2xl:h-[80vh]  h-[530px] grid place-items-center ' >
        <div className=' relative  h-full w-screen'>
          <img src={`${imageMobile}`} alt='cover' className='lg:hidden bg-no-repeat bg-center bg-cover  h-full w-full  zoomedImage' />
          <img src={`${imageDesktop}`} alt='cover' className='hidden lg:block bg-no-repeat bg-center bg-cover  h-full w-full  zoomedImage' />

          <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center '>
            {label[0]}<br />{label[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverComponent;
