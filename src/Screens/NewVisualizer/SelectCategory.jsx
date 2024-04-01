import React, { useState, useEffect } from 'react';
import Button from '../resuable/Button';
import { Link } from 'react-router-dom';
import { getVisualizer } from '../../apiCall/apiCall';
import useAuth from '../../hooks/useAuth';
import Logo from '../../assets/images/logo_footer.png';
import { getKitchens, getBathrooms } from '../../apiCall/apiCall';
import './visualizer.css'
function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState('Kitchen'); // Initialize with 'Kitchen'
  const [bathroomData, setBathroomData] = useState([]); // Initialize with 'Kitchen'
  const [kitchenData, setKitchenData] = useState([]); // Initialize with 'Kitchen'
  useEffect(() => {
    const fetchData = async () => {
      const data = await getKitchens();
      const data2 = await getBathrooms();

      setKitchenData(data);
      setBathroomData(data2);
    };
    fetchData();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case 'Kitchen':
        return <KitchenCategoryData kitchenData={kitchenData} />;
      case 'Bathroom':
        return <BathroomCategoryData bathroomData={bathroomData}/>;
      default:
        return <div>Select a category to see content.</div>;
    }
  };

  

  return (
    <div
      className=" h-screen  grid bg-no-repeat w-screen bg-cover items-center"
      style={{ backgroundImage: 'url(/images/cover/visualizerMain.png)' }}
    >
      <div className="h-[95%]    overflow-hidden   flex flex-col justify-center items-center">
        <div className="text-center py-4 ">
          <Link to="/">
            <img src={Logo} className='w-40 h-12' />
          </Link>
        </div>

        <div className=''>
          {selectedCategory === 'Kitchen' ? (
            <h4 className="pb-4 text-4xl text-white">Select Kitchen Layout</h4>
          ) : (
            <h4 className="pb-4 text-4xl text-white">Select Bathroom Layout</h4>
          )}
        </div>

        <div className="h-[75%] md:h-auto  bg-white overflow-y-scroll py-4 rounded-2xl text-center cards-scroll   font-bold text-2xl w-3/5 ">
          <div className=" flex justify-center items-center gap-4">
            <Button
              className={`px-10  ${selectedCategory === 'Kitchen'
                ? ' bg-red-600 text-white'
                : 'bg-white border border-slate-950 text-black'
                } `}
              clickFunc={() => handleCategorySelect('Kitchen')}
            >
              Kitchen
            </Button>
            <Button
              className={` px-8  ${selectedCategory === 'Bathroom'
                ? ' bg-red-600 text-white'
                : 'bg-white border border-slate-950 text-black'
                } `}
              clickFunc={() => handleCategorySelect('Bathroom')}
            >
              Bathroom
            </Button>
          </div>
          <div className="">{renderContent()}</div>
        </div>
      </div>

    </div>
  );
}

export default SelectCategory;

export function KitchenCategoryData({ kitchenData }) {
  return (
    <div className="  grid grid-cols-3 gap-y-4  place-items-center  items-center mx-auto  p-4 ">
      {kitchenData?.map((card, i) => {
        return (
          <div className=' mx-auto w-full  items-center flex  justify-center'>
            <div key={i} className="flex justify-center items-center   w-full ">

              <Link to={`/visualizer/${card?.name} `} className=' w-[80%]   '>
                {/* <img src={card?.cardImage} className="" /> */}
                <img
                  src={`https://drive.google.com/thumbnail?id=${card?.cardImage}&sz=w1000`}
                  className="w-full h-full  rounded-3xl"
                />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function BathroomCategoryData({ bathroomData }) {
  return (
    <div className="  grid grid-cols-3 gap-y-4  place-items-center  items-center mx-auto  p-4 ">
    {bathroomData?.map((card, i) => {
      return (
        <div className=' mx-auto w-full  items-center flex  justify-center'>
          <div key={i} className="flex justify-center items-center   w-full ">

            <Link to={`/visualizer/${card?.name} `} className=' w-[80%]   '>
              {/* <img src={card?.cardImage} className="" /> */}
              <img
                src={`https://drive.google.com/thumbnail?id=${card?.cardImage}&sz=w1000`}
                className="w-full h-full  rounded-3xl"
              />
            </Link>
          </div>
        </div>
      );
    })}
  </div>
  );
}
// const bathroomLayout = [
//   {
//     image: '/images/layout/bathroom_1.png',
//     value: 'Stylish-Bathroom-Vanity',
//   },
//   {
//     image: '/images/layout/bathroom_2.png',
//     value: 'Modern-Bathroom-Vanity',
//   },
//   {
//     image: '/images/layout/bathroom_3.png',
//     value: '',
//   },
//   {
//     image: '/images/layout/bathroom_4.png',
//     value: '',
//   },
//   {
//     image: '/images/layout/bathroom_5.png',
//     value: '',
//   },
//   {
//     image: '/images/layout/bathroom_6.png',
//     value: '',
//   },
// ];

const kitchenLayout = [
  {
    image: '/images/layout/kitchen_1.png',
    value: 'Stylish-Kitchen',
  },
  {
    image: '/images/layout/kitchen_2.png',
    value: 'Modern-Kitchen',
  },
  {
    image: '/images/layout/kitchen_3.png',
    value: '',
  },
  {
    image: '/images/layout/kitchen_4.png',
    value: '',
  },
  {
    image: '/images/layout/kitchen_5.png',
    value: '',
  },
  {
    image: '/images/layout/kitchen_6.png',
    value: '',
  },
];
