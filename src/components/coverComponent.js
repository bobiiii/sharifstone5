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
  

  return (
    <div className='coverComponent overflow-hidden'>
      <div className='w-full h-full grid place-items-center bg-no-repeat bg-center bg-cover zoomedImage' style={{ backgroundImage: image }}>
        {label[0]}<br />{label[1]}
      </div>
    </div>
  );
};

export default CoverComponent;
