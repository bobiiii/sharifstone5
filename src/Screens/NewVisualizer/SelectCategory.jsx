import React, { useState, useEffect } from "react";
import Button from "../resuable/Button";
import { Link } from "react-router-dom";
import { getVisualizer } from "../../apiCall/apiCall";
import useAuth from '../../hooks/useAuth';


function SelectCategory() {
  const {KitchenData, setKitchenData} = useAuth()
  const [selectedCategory, setSelectedCategory] = useState("Kitchen"); // Initialize with 'Kitchen'
  // const [kitchenData, setKitchenData] = useState([]); // Initialize with 'Kitchen'
  const [bathroomData, setBathroomData] = useState([]); // Initialize with 'Kitchen'
  // console.log(kitchenData);

  

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case "Kitchen":
        return <KitchenCategoryData  />;
      case "Bathroom":
        return <BathroomCategoryData />;
      default:
        return <div>Select a category to see content.</div>;
    }
  };

  return (
    <div className="min-h-screen brr grid place-items-center">
      <div className="brg text-center font-bold text-2xl w-3/5 h-3/4">
        Select a category:
        <div>
          <Button clickFunc={() => handleCategorySelect("Kitchen")}>
            Kitchen
          </Button>
          <Button
            className="bg-white border-red-500 border text-red-700"
            clickFunc={() => handleCategorySelect("Bathroom")}
          >
            Bathroom
          </Button>
        </div>
        <div className="brb">{renderContent()}</div>
      </div>
    </div>
  );
}

export default SelectCategory;

function KitchenCategoryData({ data }) {
  return (
    <div className="brr grid grid-cols-3 gap-6 justify-center p-4">
      {kitchenLayout.map((card, i) => {
        return (
          <div
            className=" brb   bg-cover"
          ><Link to={`/visualizer/${card.value}`}>

<img src={card.image} className="h-full"/>
</Link>
          </div>
        );
      })}
    </div>
  );
}

function BathroomCategoryData() {
  return (
    <div className="brr grid grid-cols-3 gap-6 justify-center p-4">
      {bathroomLayout.map((card, i) => {
        return (
          <div
            className=" brb   bg-cover"
          ><Link to={`/visualizer/${card.value}`}>

<img src={card.image} className="h-full"/>
</Link>
          </div>
        );
      })}
    </div>
  );
}
const bathroomLayout = [
  {
    image: "/images/layout/bathroom_1.png",
    value: "Stylish-Bathroom-Vanity",
  },
  {
    image: "/images/layout/bathroom_2.png",
    value: "Modern-Bathroom-Vanity",
  },
  {
    image: "/images/layout/bathroom_3.png",
    value: "",
  },
  {
    image: "/images/layout/bathroom_4.png",
    value: "",
  },
  {
    image: "/images/layout/bathroom_5.png",
    value: "",
  },
  {
    image: "/images/layout/bathroom_6.png",
    value: "",
  },
];


const kitchenLayout = [
  {
    image: "/images/layout/kitchen_1.png",
    value: "Stylish-Kitchen",
  },
  {
    image: "/images/layout/kitchen_2.png",
    value: "Modern-Kitchen",
  },
  {
    image: "/images/layout/kitchen_3.png",
    value: "",
  },
  {
    image: "/images/layout/kitchen_4.png",
    value: "",
  },
  {
    image: "/images/layout/kitchen_5.png",
    value: "",
  },
  {
    image: "/images/layout/kitchen_6.png",
    value: "",
  },
];
