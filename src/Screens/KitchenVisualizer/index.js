import { useState, useEffect } from "react";
import "./KitchenVisualizer.css";
import Logo from "../../assets/images/logo_footer.png";
import VisualizerForm from "./Components/VisualizerForm";
import ChooseColor from "./Components/ChooseColor";
import { Link, useParams } from "react-router-dom";

const KitchenVisualizer = () => {
  const [currentScreen, setCurrentScreen] = useState("start");
  const [kitchenData, setKitchData] = useState();
  const [currentAmbient, setCurrentAmbient] = useState("one");
  const params = useParams();
  const kitchenArray = [
    {
      name: "Bohemian Flam",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/bohemian_flam.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/bohemian_flam.png)",
    },
    {
      name: "Brass Relish",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/brass_relish.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/brass_relish.png)",
    },
    {
      name: "Cinder Craze",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/cinder_craze.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/cinder_craze.png)",
    },
    {
      name: "Concrete Pulse",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/concrete_pulse.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/concrete_pulse.png)",
    },
    {
      name: "Electric Pearl",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/electric_pearl.png)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/electric_pearl.png)",
    },
    {
      name: "Lime Delight",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/lime_delight.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/lime_delight.png)",
    },
    {
      name: "Perisien Blue",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/perisien_blue.png)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/perisien_blue.jpeg)",
    },
    {
      name: "Romantic Ash",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/romantic_ash.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/romantic_ash.png)",
    },
    {
      name: "Versailles Ivory",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/versailles_ivory.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/versailles_ivory.png)",
    },
    {
      name: "Victorian Silver",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/victorian_silver.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/victorian_silver.png)",
    },
    {
      name: "Bohemian Flam",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/bohemian_flam.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/bohemian_flam.png)",
    },
    {
      name: "Brass Relish",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/brass_relish.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/brass_relish.png)",
    },
    {
      name: "Cinder Craze",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/cinder_craze.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/cinder_craze.png)",
    },
    {
      name: "Concrete Pulse",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/concrete_pulse.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/concrete_pulse.png)",
    },
    {
      name: "Electric Pearl",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/electric_pearl.png)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/electric_pearl.png)",
    },
    {
      name: "Lime Delight",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/lime_delight.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/lime_delight.png)",
    },
    {
      name: "Perisien Blue",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/perisien_blue.png)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/perisien_blue.jpeg)",
    },
    {
      name: "Romantic Ash",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/romantic_ash.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/romantic_ash.png)",
    },
    {
      name: "Versailles Ivory",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/versailles_ivory.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/versailles_ivory.png)",
    },
    {
      name: "Victorian Silver",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/victorian_silver.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/victorian_silver.png)",
    },
    {
      name: "Bohemian Flam",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/bohemian_flam.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/bohemian_flam.png)",
    },
    {
      name: "Brass Relish",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/brass_relish.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/brass_relish.png)",
    },
    {
      name: "Cinder Craze",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/cinder_craze.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/cinder_craze.png)",
    },
    {
      name: "Concrete Pulse",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/concrete_pulse.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/concrete_pulse.png)",
    },
    {
      name: "Electric Pearl",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/electric_pearl.png)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/electric_pearl.png)",
    },
    {
      name: "Lime Delight",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/lime_delight.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/lime_delight.png)",
    },
    {
      name: "Perisien Blue",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/perisien_blue.png)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/perisien_blue.jpeg)",
    },
    {
      name: "Romantic Ash",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/romantic_ash.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/romantic_ash.png)",
    },
    {
      name: "Versailles Ivory",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/versailles_ivory.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/versailles_ivory.png)",
    },
    {
      name: "Victorian Silver",
      image:
        "url(images/color_collections/kitchen_visualizer/stones/victorian_silver.jpg)",
      relatedImage:
        "url(images/color_collections/kitchen_visualizer/victorian_silver.png)",
    },
  ];
  const bathroomArray = [
    {
      name: "Bohemian Flam",
      image:
        "url(images/color_collections/bathroom_visualizer/stones/bohemian_flam.jpg)",
      relatedImage:
        "url(images/color_collections/bathroom_visualizer/bohemian_flam.png)",
    },
    {
      name: "Brass Relish",
      image:
        "url(images/color_collections/bathroom_visualizer/stones/brass_relish.jpg)",
      relatedImage:
        "url(images/color_collections/bathroom_visualizer/brass_relish.png)",
    },
    {
      name: "Cinder Craze",
      image:
        "url(images/color_collections/bathroom_visualizer/stones/cinder_craze.jpg)",
      relatedImage:
        "url(images/color_collections/bathroom_visualizer/cinder_craze.png)",
    },
    {
      name: "Concrete Pulse",
      image:
        "url(images/color_collections/bathroom_visualizer/stones/concrete_pulse.jpg)",
      relatedImage:
        "url(images/color_collections/bathroom_visualizer/concrete_pulse.png)",
    },
    {
      name: "Electric Pearl",
      image:
        "url(images/color_collections/bathroom_visualizer/stones/electric_pearl.png)",
      relatedImage:
        "url(images/color_collections/bathroom_visualizer/electric_pearl.jpg)",
    },
    {
      name: "Lime Delight",
      image:
        "url(images/color_collections/bathroom_visualizer/stones/lime_delight.jpg)",
      relatedImage:
        "url(images/color_collections/bathroom_visualizer/lime_delight.png)",
    },
    {
      name: "Perisien Blue",
      image:
        "url(images/color_collections/bathroom_visualizer/stones/perisien_blue.png)",
      relatedImage:
        "url(images/color_collections/bathroom_visualizer/perisian_blue.jpg)",
    },
    {
      name: "Romantic Ash",
      image:
        "url(images/color_collections/bathroom_visualizer/stones/romantic_ash.jpg)",
      relatedImage:
        "url(images/color_collections/bathroom_visualizer/romantic_ash.png)",
    },
    {
      name: "Versailles Ivory",
      image:
        "url(images/color_collections/bathroom_visualizer/stones/versailles_ivory.jpg)",
      relatedImage:
        "url(images/color_collections/bathroom_visualizer/versailles_ivory.jpg)",
    },
    {
      name: "Victorian Silver",
      image:
        "url(images/color_collections/bathroom_visualizer/stones/victorian_silver.jpg)",
      relatedImage:
        "url(images/color_collections/bathroom_visualizer/victorian_silver.png)",
    },
  ];
  const image = window.location.origin + "/images/color_3.png";
  const kitchenLayout = [
    {
      image: "url(images/layout/kitchen_1.png)",
      value: "Stylish-Kitchen",
    },
    {
      image: "url(images/layout/kitchen_2.png)",
      value: "Modern-Kitchen",
    },
    {
      image: "url(images/layout/kitchen_3.png)",
      value: "",
    },
    {
      image: "url(images/layout/kitchen_4.png)",
      value: "",
    },
    {
      image: "url(images/layout/kitchen_5.png)",
      value: "",
    },
    {
      image: "url(images/layout/kitchen_6.png)",
      value: "",
    },
  ];
  const bathroomLayout = [
    {
      image: "url(images/layout/bathroom_1.png)",
      value: "Stylish-Bathroom-Vanity",
    },
    {
      image: "url(images/layout/bathroom_2.png)",
      value: "Modern-Bathroom-Vanity",
    },
    {
      image: "url(images/layout/bathroom_3.png)",
      value: "",
    },
    {
      image: "url(images/layout/bathroom_4.png)",
      value: "",
    },
    {
      image: "url(images/layout/bathroom_5.png)",
      value: "",
    },
    {
      image: "url(images/layout/bathroom_6.png)",
      value: "",
    },
  ];
  const kitchenChangeLayout = [
    {
      image: window.location.origin + "/images/layout/kitchen_1.png",
      url: "Stylish-Kitchen",
      value: "Stylish Kitchen",
    },
    {
      image: window.location.origin + "/images/layout/kitchen_2.png",
      url: "Modern-Kitchen",
      value: "Modern Kitchen",
    },
    {
      image: window.location.origin + "/images/layout/kitchen_3.png",
      url: "",
      value: "",
    },
    {
      image: window.location.origin + "/images/layout/kitchen_4.png",
      url: "",
      value: "",
    },
    {
      image: window.location.origin + "/images/layout/kitchen_5.png",
      url: "",
      value: "",
    },
    {
      image: window.location.origin + "/images/layout/kitchen_6.png",
      url: "",
      value: "",
    },
  ];
  const bathroomChangeLayout = [
    {
      image: window.location.origin + "/images/layout/bathroom_1.png",
      url: "Stylish-Bathroom-Vanity",
      value: "Stylish Bathroom Vanity",
    },
    {
      image: window.location.origin + "/images/layout/bathroom_2.png",
      url: "Modern-Bathroom-Vanity",
      value: "Modern Bathroom Vanity",
    },
    {
      image: window.location.origin + "/images/layout/bathroom_3.png",
      url: "",
      value: "",
    },
    {
      image: window.location.origin + "/images/layout/bathroom_4.png",
      url: "",
      value: "",
    },
    {
      image: window.location.origin + "/images/layout/bathroom_5.png",
      url: "",
      value: "",
    },
    {
      image: window.location.origin + "/images/layout/bathroom_6.png",
      url: "",
      value: "",
    },
  ];
  useEffect(() => {
    setKitchData(kitchenArray);
    if (params?.color !== "kitchen-visualizer") {
      setCurrentScreen("Pick Kitchen");
    }
  }, []);
  return (
    <>
      {currentScreen === "start" && (
        <div
          className="kitchen-visualizer-container"
          style={{ backgroundImage: "url(images/cover/Visualizer_img.png)" }}
        >
          <div className="kitchen-visualizer-logo">
            <Link to="/">
              <img src={Logo} />
            </Link>

            <div className="release-wrapper">
              <p className="release-text">2024 RELEASE</p>
            </div>
          </div>
          <div className="kitchen-visualizer-startform">
            <div className="kitchen-visualizer-section">
              <span>SHARIFSTONE ONLINE VISUALIZER</span>
              <div>
                Our Kitchen and Bathroom Visualizer allows you to explore
                different colors, materials, and design options, helping you
                envision the perfect look for your space. With just a few
                clicks, you can select from a wide range of cabinets,
                countertops, and backsplashes. Experiment with various color
                schemes, textures, and finishes to create a personalized kitchen
                that reflects your style and taste.
              </div>
            </div>
            <div className="kitchen-visualizer-section">
              <div
                onClick={() => setCurrentScreen("Visualizer Form")}
                className="kitchen-visualizer-startbtn"
              >
                Start
              </div>
            </div>
          </div>
        </div>
      )}

      {currentScreen === "Visualizer Form" && (
        <VisualizerForm
          kitchenLayout={kitchenLayout}
          bathroomLayout={bathroomLayout}
          data={{
            currentScreen,
            setCurrentScreen,
            currentAmbient,
            setCurrentAmbient,
          }}
        />
      )}
      {currentScreen === "Pick Kitchen" && (
        <ChooseColor
          layoutData={kitchenChangeLayout}
          currentScreen={"Kitchen"}
          ambient={{ currentAmbient, setCurrentAmbient }}
          apiData={kitchenArray}
          colorArray={kitchenData}
          updateColorArray={setKitchData}
        />
      )}
      {currentScreen === "Pick Bathroom" && (
        <ChooseColor
          layoutData={bathroomChangeLayout}
          currentScreen={"Bathroom"}
          ambient={{ currentAmbient, setCurrentAmbient }}
          colorArray={bathroomArray}
          updateColorArray={setKitchData}
        />
      )}
    </>
  );
};

export default KitchenVisualizer;