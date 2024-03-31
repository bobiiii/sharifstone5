import React, { useState, useEffect } from 'react';
import Button from '../resuable/Button';
import { Link } from 'react-router-dom';
import { getVisualizer } from '../../apiCall/apiCall';
import useAuth from '../../hooks/useAuth';
import Logo from '../../assets/images/logo_footer.png';
import { getKitchens } from '../../apiCall/apiCall';
function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState('Kitchen'); // Initialize with 'Kitchen'
  const [bathroomData, setBathroomData] = useState([]); // Initialize with 'Kitchen'
  const [kitchenData, setKitchenData] = useState([]); // Initialize with 'Kitchen'
  useEffect(() => {
    const fetchData = async () => {
      const data = await getKitchens();

      setKitchenData(data);
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
        return <BathroomCategoryData />;
      default:
        return <div>Select a category to see content.</div>;
    }
  };

  return (
    <div
      className=" h-screen   grid  items-center"
      style={{ backgroundImage: 'url(/images/cover/visualizerMain.png)' }}
    >
      <div className="h-[80%]   overflow-hidden   flex flex-col justify-center items-center">
        <div className="text-center py-4">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>

        {selectedCategory === 'Kitchen' ? (
          <h4 className="pb-4 text-5xl text-white">Select Kitchen Layout</h4>
        ) : (
          <h4 className="pb-4 text-5xl text-white">Select Bathroom Layout</h4>
        )}

        <div className=" bg-white p-4 rounded-2xl text-center font-bold text-2xl w-3/5 ">
          <div className=" flex justify-center gap-4">
            <Button
              className={` ${
                selectedCategory === 'Kitchen'
                  ? ' bg-red-600 text-white'
                  : 'bg-white border border-slate-950 text-black'
              } w-[150px]`}
              clickFunc={() => handleCategorySelect('Kitchen')}
            >
              Kitchen
            </Button>
            <Button
              className={`${
                selectedCategory === 'Bathroom'
                  ? ' bg-red-600 text-white'
                  : 'bg-white border border-slate-950 text-black'
              } w-[150px]`}
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
    <div className="  grid grid-cols-3 gap-6 justify-center p-4">
      {kitchenData?.map((card, i) => {
        return (
          <div key={i} className="    bg-cover">
            <Link to={`/visualizer/${card?.name}`}>
              {/* <img src={card?.cardImage} className="" /> */}
              <img
                src={`https://drive.google.com/thumbnail?id=${card?.cardImage}&sz=w1000`}
                className=""
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export function BathroomCategoryData() {
  return (
    <div className=" grid grid-cols-3 gap-6 justify-center p-4">
      {bathroomLayout.map((card, i) => {
        return (
          <div className="    bg-cover">
            <Link to={`/visualizer/${card.value}`}>
              <img src={card.image} className="h-full" />
            </Link>
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
