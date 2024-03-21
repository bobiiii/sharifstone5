import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../resuable/Button";
import useAuth from "../../hooks/useAuth";
import { getVisualizer } from "../../apiCall/apiCall";

function NewVisualizer() {
  const { KitchenData, setKitchenData, bathroomData, setBathroomData } =
    useAuth();
  const [selectedMode, setSelectedMode] = useState("COLOR");
  const [ambient, setAmbient] = useState("");

  const [mainImage, setMainImage] = useState("");
  const { categoryName } = useParams();

  //     var src = document.getElementById("test")?.style?.backgroundImage;
  //   var url = src?.match(/\((.*?)\)/)[1]?.replace(/('|")/g, "");

  //   var img = new Image();
  //   img.onload = function () {
  //     console.log("image loaded");
  //   };
  //   img.src = url;
  //   if (img.complete) {
  //     img.onload();
  //   }

  useEffect(() => {
    async function fetchData() {
      const visualizers = await getVisualizer();

      const res = Object.entries(visualizers)
        .filter(([key]) => key.includes("Kitchen"))
        .map(([key, value]) => ({ [key]: value }));

      const res2 = Object.entries(visualizers)
        .filter(([key]) => key.includes("Bathroom"))
        .map(([key, value]) => ({ [key]: value }));

        

      setKitchenData(res);
      setBathroomData(res2);
    }

    fetchData();
  }, []);

  const filteredData2 = bathroomData.filter((obj) => {
    return Object.prototype.hasOwnProperty.call(obj, categoryName);
  });

  const sceneData2 = bathroomData.map((bathroom) => {
    return bathroom[`${categoryName}`];
  });

  const filteredData = KitchenData.filter((obj) => {
    return Object.prototype.hasOwnProperty.call(obj, categoryName);
  });

  const sceneData = filteredData.map((kitchen) => {
    return kitchen[`${categoryName}`];
  });

  useEffect(() => {
    setMainImage(sceneData[0][0].ambient_image_url)
  }, [categoryName])
  

  //   console.log(sceneData , "scene ");
  //   console.log(filteredData , "filtred dta");

  const handleModeSelect = (category) => {
    setSelectedMode(category);
  };

  const renderContent2 = () => {
    switch (selectedMode) {
      case "COLOR":
        return <ColorBar value={{ mainImage, setMainImage, sceneData }} />;
      case "AMBIENT":
        return <AmbientBar value={{setMainImage,setSelectedMode, KitchenData, sceneData }} />;
      default:
        return <div>Select a category to see content.</div>;
    }
  };

  return (
    <div className="flex">
      <div className="brr min-w-[30%] h-screen">
        <h3>Sidebar</h3>
        <h1>{categoryName}</h1>
        <div>
          <Button clickFunc={() => handleModeSelect("COLOR")}>COLOR </Button>
          <Button
            className="bg-white border-red-500 border text-red-700"
            clickFunc={() => handleModeSelect("AMBIENT")}
          >
            AMBIENT{" "}
          </Button>
        </div>
        <div className="">{renderContent2()}</div>
      </div>
      <div className="brg w-full">
        
        <img src={mainImage} alt="abcf" className="w-full h-screen" />
      </div>
    </div>
  );
}

export default NewVisualizer;

function ColorBar({ value }) {
  const { mainImage, setMainImage, sceneData } = value;

  return (
    <>
      <h2 className="text-3xl">COLORS</h2>
      <div className=" flex flex-wrap  px-4">
        {sceneData.map((obj, i) => (
          <div key={i} className="  overflow-hidden grid grid-cols-2 gap-4 ">
            {obj.map((item, j) => {
            //   useEffect(() => {
            //     // Set the main image to the ambient image URL of the first item in the array
            //     if (
            //       !mainImage &&
            //       sceneData.length > 0 &&
            //       sceneData[0].length > 0
            //     ) {
            //       setMainImage(sceneData[0][0].ambient_image_url);
            //     }
            //   }, [sceneData, mainImage, setMainImage]);

              return (
                <div
                  key={j}
                  className="flex flex-col"
                  onClick={() => {
                    setMainImage(item.ambient_image_url);
                  }}
                >
                  <img src={item.color_image} />
                  <Button>{item.color_name}</Button>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}

function AmbientBar({ value }) {
  const { KitchenData, setMainImage, setSelectedMode } = value;

  function setImagebyAmbient(kitchen, key) {
    setMainImage(kitchen[key][0].ambient_image_url || "")
    setSelectedMode("COLOR")
  }

  return (
    <>
      {KitchenData.map((kitchen, index) => {
        return Object.keys(kitchen).map((key, i) => {
          
            return (
            <Button key={index + "-" + i}>
              <Link
                to={`/visualizer/${key}`}
                  onClick={() => setImagebyAmbient(kitchen, key)}
                >
                {key}
              </Link>
            </Button>
          );
        });
      })}
    </>
  );
}
