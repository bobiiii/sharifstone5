import { useState, useEffect } from 'react';
import CoverComponent from '../../components/coverComponent';
import './productDescription.css';
import RelatedProduct from './Components/RelatedProduct';
import { getCollectionByParam, getColorByParam } from '../../apiCall/apiCall';
import { useNavigate, useParams } from 'react-router-dom';
import CoverImage from '../../assets/images/product_description.png';
import MaxWidthWrapper from '../../Screens/MaxWidthWrapper';
import Heading from '../resuable/Heading';
import Button from '../resuable/Button';
import useAuth from '../../hooks/useAuth';

function ProductDescription() {
  const { collections } = useAuth();
  const { variety } = useParams();
  const [currentVariety, setCurrentVariety] = useState(null);
  const [showColor, setShowColor] = useState(1);
  const navigate = useNavigate();
  const matchedCollection = collections.find((collection) =>
    collection.variety.some((varietyObj) => varietyObj.varietyName === variety)
  );

  let matchedVariety;
  if (matchedCollection) {
    matchedVariety = matchedCollection.variety.find(
      (varietyObj) => varietyObj.varietyName === variety
    );
  } else {
    navigate('/');
  }
  useEffect(() => {
    setCurrentVariety(matchedVariety);
  }, [currentVariety]);

  return (
    <div>
      <CoverComponent
        imageDesktop={'/images/cover_images/desktop/product_description.png'}
        imageMobile={'/images/cover_images/mobile/OurCollection.png'}
        label={['PRODUCT', 'DESCRIPTION']}
      />
      <MaxWidthWrapper>
        {currentVariety === null ? (
          'loading'
        ) : (
          <div className="flex flex-col justify-center gap-10 ">
            <div className="w-full ">
              <div className="w-full  bg-cover bg-no-repeat  rounded-3xl">
                {showColor === 1 ? (
                  <img
                    src={`https://drive.google.com/thumbnail?id=${matchedVariety?.fullSlabImage}&sz=w1000`}
                    alt={'product-im'}
                    className="w-full lg:h-[650px] bg-cover bg-no-repeat h-[50vh]"
                  />
                ) : showColor === 2 ? (
                  <img
                    src={`https://drive.google.com/thumbnail?id=${matchedVariety?.closeLookUp}&sz=w1000`}
                    className="w-full lg:h-[650px] bg-cover bg-no-repeat h-[50vh]"
                    alt={'product-im'}
                  />
                ) : (
                  <img
                    src={`https://drive.google.com/thumbnail?id=${matchedVariety?.instalLook}&sz=w1000`}
                    className="w-full lg:h-[650px] bg-cover bg-no-repeat h-[50vh]"
                    alt={'product-im'}
                  />
                )}
              </div>

              <div className=" flex pt-6 items-center  justify-center gap-4 ">
                <Button
                  className={`${
                    showColor === 1 ? 'bg-[#221F1F]' : ''
                  }  sm:text-base text-[12px]   whitespace-nowrap`}
                  clickFunc={() => {
                    setShowColor(1);
                  }}
                >
                  Full Slab
                </Button>
                <Button
                  className={`${
                    showColor === 2 ? 'bg-[#221F1F]' : ''
                  }  sm:text-base text-[12px]   whitespace-nowrap`}
                  clickFunc={() => {
                    setShowColor(2);
                  }}
                >
                  Close Look Up
                </Button>
                <Button
                  className={`${
                    showColor === 3 ? 'bg-[#221F1F]' : ''
                  }  sm:text-base text-[12px]   whitespace-nowrap`}
                  clickFunc={() => {
                    setShowColor(3);
                  }}
                >
                  Installed Look
                </Button>
              </div>
            </div>
            <div className="w-full ">
              <Heading>{matchedVariety?.varietyName}</Heading>

              <div className="font-bold  sm:text-2xl text-lg sm:py-4 py-2   ">
                Description
              </div>
              <p className="sm:text-lg text-sm lg:py-4 py-2">
                {matchedVariety?.description}
              </p>
              <div className="font-bold  sm:text-2xl text-lg sm:py-4 py-2  ">
                Finishes Available
              </div>
              <div className="lg:py-0 flex flex-col lg:flex-row lg:gap-4   ">
                <div className="basis-2/6 lg:basis-2/6  ">
                  <div className="font-bold  sm:text-2xl text-sm  lg:py-2  ">
                    Grip +
                  </div>
                  <span className=" sm:text-lg text-sm lg:py-2 ">
                    {matchedVariety?.grip}
                  </span>
                </div>
                <div className="basis-2/6 lg:basis-2/6   py-2 lg:py-0">
                  <div className="font-bold sm:text-2xl text-sm   lg:py-2  ">
                    Matte
                  </div>
                  <span className=" sm:text-lg text-sm lg:py-2 ">
                    {matchedVariety?.mate}
                  </span>
                </div>

                <div className="basis-2/6 lg:basis-2/6  ">
                  <div className="font-bold  sm:text-2xl text-sm  lg:py-2  ">
                    Thicknesses
                  </div>
                  <span className=" sm:text-lg text-sm lg:py-2 ">
                    {matchedVariety?.thickness}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
      <RelatedProduct variety={variety} collections={collections} />
    </div>
  );
}

export default ProductDescription;
