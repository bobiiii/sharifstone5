import React, { useState, useEffect } from "react";
import "./wheretobuy.css";
import { IoLocationSharp } from "react-icons/io5";
import GoogleMapReact from "google-map-react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Heading from "../resuable/Heading";
import where from "./images/where.png";
import { IoMdArrowDropdown } from "react-icons/io";
const WhereToBuy = () => {
  const [mapState, setMapState] = useState({
    zoom: 4,
    center: {
      lat: 28.57636777558448,
      lng: -81.41119743863068,
    },
  });

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    const { latitude, longitude } = position.coords;
    setMapState({ zoom: 3, center: { lat: latitude, lng: longitude } });
  };

  const points = [
    {
      id: 1,
      title: "Orlando",
      lat: 28.57636777558448,
      lng: -81.41119743863068,
    },
    {
      id: 2,
      title: "Tampa",
      lat: 27.951137735514855,
      lng: -82.36121631928435,
    },
  ];

  const defaultCenter = {
    lat: 28.57636777558448,
    lng: -81.41119743863068,
  };

  const renderMarkers = (map, maps) => {
    points.forEach((point) => {
      const marker = new maps.Marker({
        position: { lat: point.lat, lng: point.lng },
        map,
        title: point.title,
      });

      marker.addListener("click", () => {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
      });
    });
  };

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    const location = points.find((point) => point.title === selectedLocation);
    if (location) {
      setMapState({
        zoom: 10,
        center: { lat: location.lat, lng: location.lng },
      });
    }
  };

  return (
    <MaxWidthWrapper className='md:mt-10 mt-4'>
      <div className="flex lg:flex-row flex-col gap-3 w-full ">
        <div className="lg:w-1/2 w-full h-full flex flex-col items-center">
          <div
            className="w-full  h-[310px] rounded-[10px] bg-cover bg-center     bg-no-repeat  flex justify-center items-center  font-serif"
            style={{ backgroundImage: `url(${where})` }}
          >
            <div className="flex flex-col gap-2">
              <Heading className=' lg:text-5xl  sm:text3xl xs:text-3xl text-3xl tracking-[1px]   font-gelasio text-white font-semibold' >
                WHERE
              </Heading>
              <Heading className=' lg:text-5xl  sm:text3xl xs:text-3xl text-3xl  tracking-[1px] font-gelasio text-white font-semibold'>
                TO BUY
              </Heading>
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <div className=" lg:w-[85%] w-full lg:items-center items-start  flex lg:justify-center justify-start text-start flex-col my-10 mx-auto">
              <Heading className='text-start w-full'>
                Select Branch
              </Heading>
              <div className="w-full relative">
                <select
                  className="w-full rounded-[30px] my-4 py-4 h-14 border-2 sm:pl-4 pl-2 appearance-none"
                  onChange={handleLocationChange}
                  components={{
                    dropdownindicator: () => null,
                    indicatorseparator: () => null,
                  }}
                >
                  <option className="text-base" value="" >
                    Select Location
                  </option>
                  {points.map((point) => (
                    <option className="text-base" key={point.id} value={point.title}>
                      {point.title}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center sm:mr-2 mr-1   pointer-events-none">
                  <IoMdArrowDropdown color="#000" size={20} />
                </div>

              </div>
              <div className="w-full flex items-center  justify-start gap-1  cursor-pointer  " onClick={getLocation}>
                <IoLocationSharp color="#EE2A2" size={20} className="text-[#EE2A2E]" />
                <p className="font-semibold text-[13px]  text-[#EE2A2E]">
                  Use my current location
                </p>
              </div>
              <div className="sm:text-base text-sm font-medium font-albert mt-2" >
                Explore our extensive collection of top-quality stones in person!
                Enter your location now to uncover the nearest Sharifstone
                warehouse, where our top-quality stones await your personal
                exploration.
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col items-center  md:mt-4 mt-2">
          {mapState.center.lat !== undefined && (
            <div
              className="map-div sm:h-[600px] h-[400px] "
              style={{ width: "100%" }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyBMGnG8DmtiCc7yCgwTyS35iRyLV89qrtY",
                }}
                defaultCenter={defaultCenter}
                center={mapState.center}
                zoom={mapState.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
              />

            </div>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default WhereToBuy;
