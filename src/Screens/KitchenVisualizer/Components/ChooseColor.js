import { useState, useEffect, useContext } from "react";
import "./ChooseColor.css";
import Logo from "../../../assets/images/logo_footer.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import APIContext from "../../../Store/apiContext";
import FloorColor from "../../../assets/images/lime_delight.jpg";
import { IoMdArrowBack } from "react-icons/io";
import { Audio } from "react-loader-spinner";
const ChooseColor = ({ colorArray, layoutData, ambient, setCurrentScreen }) => {
  const [selectedColor, setSelectedColor] = useState(colorArray[0]);
  const [oldImage, setOldImage] = useState(null);
  const [inputText, setInputText] = useState("");
  const [currentSide, setCurrentSide] = useState(false);
  const [selectedPicker, setSelectedPicker] = useState("Countertop");
  const [activeFloor, setActiveFloor] = useState(
    "url(images/color_collections/kitchen_visualizer/stones/lime_delight.jpg)"
  );
  const [activcounterTop, setActiveCounterTop] = useState();
  const { apiStore, setAPIStore } = useContext(APIContext);
  const [selectedAPIStore, setSelectedAPIStore] = useState();
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const params = useParams();
  const { currentAmbient, setCurrentAmbient } = ambient;
  // const { currentScreen, setCurrentScreen } = currentScreen;
  var src = document.getElementById("test")?.style?.backgroundImage;
  var url = src?.match(/\((.*?)\)/)[1]?.replace(/('|")/g, "");

  var img = new Image();
  img.onload = function () {
    console.log("image loaded");
  };
  img.src = url;
  if (img.complete) {
    img.onload();
  }

  const onColorSelect = (value) => {
    setLoader(true);
    const newImage = new Image();
    newImage.src = value.ambient_image_url;

    newImage.onload = () => {

      if (selectedPicker === "Floor") {
        setActiveFloor(value.ambient_image_url);
        setActiveFloor(value);
      } else {
        setActiveCounterTop(value.color_image);
        setActiveCounterTop(value);
      }

      setSelectedColor(value);
      setOldImage(`url(${value.ambient_image_url})`);

      navigate(`/kitchen-visualizer/${params?.color}?color=${value.color_name.replace(" ", "-")}`, { replace: false });

      setTimeout(() => setLoader(false), 1000);
    };
  };


  const selectAmbient = ({ value, url, }) => {
    const currentVisualizer =
      apiStore?.visualizers[value?.replaceAll(" ", "-")];
    console.log("New...", currentVisualizer[0]?.ambient_image_url);
    setOldImage(`url(${currentVisualizer[0]?.ambient_image_url})`);
    setCurrentAmbient(value);
    setCurrentSide(false);
    setActiveCounterTop(currentVisualizer[0]);
    setSelectedColor(currentVisualizer[0]);
    if (!!url) {
      const color = window.location.href.split("?")[1];
      navigate(`/kitchen-visualizer/${url}?${color}`, { replace: false });
    }
  };

  const loaderJSX = () => (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="gray"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  );

  useEffect(() => {
    console.log("inputText:", inputText);
    const newArray =
      apiStore?.visualizers &&
      apiStore?.visualizers[params?.color]?.filter(
        (v, i) => v?.color_name.toLowerCase().includes(inputText.toLowerCase())
      );
    console.log("newArray:", newArray);
    if (newArray?.length >= 1) {
      setSelectedAPIStore(newArray);
    }
  }, [inputText]);


  useEffect(() => {
    if (apiStore?.visualizers) {
      setOldImage(
        `url(${apiStore?.visualizers[params?.color][0]?.ambient_image_url})`
      );
      setActiveCounterTop(apiStore?.visualizers[params?.color][0]);
      setSelectedColor(apiStore?.visualizers[params?.color][0]);
      setLoader(false);
      if (params?.color !== "kitchen-visualizer") {
        const color = window.location.href.split("?color=")[1];
        const selectedColor = apiStore?.visualizers[params?.color]?.find(
          (value) => value?.color_name === color?.replace("-", " ")
        );
        if (!!selectedColor) {
          setActiveCounterTop(selectedColor);
          setSelectedColor(selectedColor);
        }
        setSelectedAPIStore(apiStore?.visualizers[params?.color]);
      }
    }
  }, [apiStore]);

  useEffect(() => {
    if (apiStore?.visualizers) {
      if (params?.color === "kitchen-visualizer") {
        navigate(
          `/kitchen-visualizer/${apiStore?.visualizers[params?.color][0]?.ambient_url
          }`,
          {
            replace: true,
          }
        );
      }
    }
  }, []);

  return (
    <div className="choosecolor-container">
      {loader && <div className="choosecolor-loader">{loaderJSX()}</div>}
      <div className="choosecolor-innercontainer">
        <span className="choosecolor-cover ">
          <Link to="/kitchen-visualizer">
            <img src={Logo} />
          </Link>
          <div className="mt-4">
            <Link  to={"/kitchen-visualizer"} onClick={() => setCurrentScreen('Visualizer Form')}  >
              <IoMdArrowBack size={25}/>
            </Link>
          </div>
          {/* <button onClick={() => setCurrentScreen('Visualizer Form')}>
            back
          </button> */}
          <div className="choosecolor-bgncontainer">

            <div
              onClick={() => setCurrentSide(false)}
              className={
                currentSide ? "choosecolor-btn" : "choosecolor-btn-active"
              }
            >
              Colors
            </div>
            <div
              onClick={() => setCurrentSide(true)}
              className={
                !currentSide ? "choosecolor-btn" : "choosecolor-btn-active"
              }
            >
              Ambients
            </div>
          </div>

          {currentSide ? (
            <div>
              <div className="choosecolor-amb-container">
                {layoutData?.map((v, i) => (
                  <div className="choosecolor-newcontainer">
                    <img
                      onClick={() => selectAmbient(v)}
                      className="choosecolor-ambients-container"
                      src={v?.image}
                      alt="ALT"
                    />
                    {!v.url && (
                      <h3 className="choosecolor-comingsoon">Coming Soon</h3>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="choosecolor-topcontainer">
                <div className="choosecolor-palate-top">
                  <b>Floor</b>
                  <div
                    className="choosecolor-palete-container"
                    // onClick={() => setSelectedPicker("Floor")}
                    style={{
                      backgroundImage: `url(${FloorColor})`,
                      border:
                        selectedPicker === "Floor"
                          ? "3px solid #EE2A2E"
                          : "none",
                    }}
                  ></div>
                  <b>Tk05 Sabbia</b>
                </div>
                <div className="choosecolor-palate-top">
                  <b>Countertop</b>
                  <div
                    className="choosecolor-palete-container"
                    onClick={() => setSelectedPicker("Countertop")}
                    style={{
                      backgroundImage: `url(${activcounterTop?.color_image})`,
                      border:
                        selectedPicker === "Countertop"
                          ? "3px solid #EE2A2E"
                          : "none",
                    }}
                  ></div>
                  <b>{activcounterTop?.color_name}</b>
                </div>
              </div>
              <div className="choosecolor-sel-container">
                <div className="choosecolor-selectcontainer">
                  <div>Select Color</div>
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Search"
                  />
                </div>

                {inputText !== "" ? (
                  <>
                    {selectedAPIStore?.map((v, i) => (
                      <div
                        className="choosecolor-palate"
                        onClick={() => {
                          onColorSelect(v);
                          setOldImage(`url(${v[`ambient_image_url`]})`);
                          setLoader(true);
                          setTimeout(() => setLoader(false), 2000);
                        }}
                      >
                        <div
                          className="choosecolor-palete-container"
                          style={{
                            backgroundImage: `url(${v?.color_image})`,
                          }}
                        >
                          {activcounterTop?.color_name === v?.color_name && (
                            <FaCheck
                              color="#fff"
                              style={{ width: 30, height: 30 }}
                            />
                          )}
                        </div>
                        <div className="choosecolor-palate-b">
                          {v?.color_name}
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {apiStore?.visualizers &&
                      apiStore?.visualizers[params?.color]?.map((v, i) => (
                        <div
                          className="choosecolor-palate"
                          onClick={() => {
                            onColorSelect(v);
                          }}
                        >
                          <div
                            className="choosecolor-palete-container"
                            style={{
                              backgroundImage: `url(${v?.color_image})`,
                            }}
                          >
                            {activcounterTop?.color_name === v?.color_name && (
                              <FaCheck
                                color="#fff"
                                style={{ width: 30, height: 30 }}
                              />
                            )}
                          </div>
                          <div className="choosecolor-palate-b">
                            {v?.color_name}
                          </div>
                        </div>
                      ))}
                  </>
                )}
              </div>
            </div>
          )}
        </span>
      </div>
      <div
        id={"test"}
        style={{
          backgroundImage: `url(${selectedColor[`ambient_image_url`]})`,
          visibility: loader ? "none" : "visible",
        }}
        className="choosecolor-innercontainer2"
      ></div>
      {oldImage && (
        <div
          id={"test"}
          style={{
            backgroundImage: oldImage,
          }}
          className="choosecolor-innercontainer3"
        ></div>
      )}
    </div>
  );
};

export default ChooseColor;
