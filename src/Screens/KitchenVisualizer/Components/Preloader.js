import  { useEffect, useState } from 'react';

const Preloader = ({ imageUrls }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const loadImage = (url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => reject();
          img.src = url;
        });
      };

      try {
        await Promise.all(imageUrls.map(loadImage));
        setImagesLoaded(true);
      } catch (error) {
        console.error('Failed to load images', error);
      }
    };

    loadImages();
  }, [imageUrls]);

  if (!imagesLoaded) {
    return <div>Loading images...</div>;
  }

  return null;
};

export default Preloader;
