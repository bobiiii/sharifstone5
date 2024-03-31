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
  const { varietyName } = useParams();
  console.log(varietyName)
  let varietyWithSpaces = varietyName.replace(/-/g, " ");

  const [currentVariety, setCurrentVariety] = useState(null);
  const [showColor, setShowColor] = useState(1);
  const matchedCollection = collections.find((collection) =>
    collection.variety.some((varietyObj) => varietyObj.varietyName === varietyWithSpaces)
  );

  let matchedVariety;
  if (matchedCollection) {
    matchedVariety = matchedCollection.variety.find(
      (varietyObj) => varietyObj.varietyName === varietyWithSpaces
    );
  } else {
    // navigate('/');
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
              <div className="w-full  bg-cover bg-no-repeat grid place-items-center rounded-3xl">
                {showColor === 1 ? (
                  <img
                    src={`https://drive.google.com/thumbnail?id=${matchedVariety?.fullSlabImage}&sz=w1000`}
                    alt={'product-im'}
                    className=" w-full lg:w-4/5 h-[31vh] lg:h-[650px] bg-cover bg-no-repeat "
                  />
                ) : showColor === 2 ? (
                  <img
                    src={`https://drive.google.com/thumbnail?id=${matchedVariety?.closeLookUp}&sz=w1000`}
                    className="w-full lg:w-4/5 h-[31vh] lg:h-[650px] bg-cover bg-no-repeat"
                    alt={'product-im'}
                  />
                ) : (
                  <img
                    src={`https://drive.google.com/thumbnail?id=${matchedVariety?.instalLook}&sz=w1000`}
                    className="w-full lg:w-4/5 h-[31vh] lg:h-[650px] bg-cover bg-no-repeat"
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
            <div className='grid place-items-center'>
            <div className="w-4/5  ">
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
          </div>
        )}
      </MaxWidthWrapper>
      <RelatedProduct variety={varietyWithSpaces} collections={collections} />
    </div>
  );
}

export default ProductDescription;
