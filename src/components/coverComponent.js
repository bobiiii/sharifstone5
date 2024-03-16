import React, { useEffect } from 'react';
import './coverComponent.css';

const CoverComponent = ({ image, label }) => {
  
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

  console.log(image)
  

  return (
    <div className='coverComponent overflow-hidden'>
  <div className='w-full h-full grid place-items-center '>
    <div className=' relative h-full'>
      <img src={`${image}`} alt='cover' className='bg-no-repeat bg-center bg-cover zoomedImage h-full w-full'/>

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center '>
        {label[0]}<br />{label[1]}
      </div>
    </div>
  </div>
</div>

    
    // <div className='coverComponent overflow-hidden'>
    //   <div className='w-full h-full grid place-items-center bg-no-repeat bg-center bg-cover zoomedImage' style={{ backgroundImage: image }}>
        
        
    //     {label[0]}<br />{label[1]}
    //   </div>
    // </div>
  );
};

export default CoverComponent;
