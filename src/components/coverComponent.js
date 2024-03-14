import React, { useEffect } from 'react';
import './coverComponent.css';

const CoverComponent = ({ image, label }) => {
  
  useEffect(() => {
    const zoomImages = document.querySelectorAll('.zoomedImage');
    
  
    // Remove zoom effect first
    zoomImages.forEach(image => {
      image.classList.remove('zoomed');
    });
  
    // Apply zoom effect
    setTimeout(() => {
      console.log("class added")
      zoomImages.forEach(image => {
        image.classList.add('zoomed');
      });
    }, 1000); 
    // Clean-up function to remove zoom effect when component unmounts
    return () => {
      zoomImages.forEach(image => {
        image.classList.remove('zoomed');
      });
    };
  }, []);
  

  return (
    <div className='coverComponent overflow-hidden'>
      <div className='w-full h-full grid place-items-center bg-no-repeat bg-cover zoomedImage' style={{ backgroundImage: image }}>
        {label[0]}<br />{label[1]}
      </div>
    </div>
  );
};

export default CoverComponent;
