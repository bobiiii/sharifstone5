import React, { useState, useEffect } from "react";
import "./wheretobuy.css";
import { IoLocationSharp } from "react-icons/io5";
import GoogleMapReact from "google-map-react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Heading from "../resuable/Heading";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

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
      // eslint-disable-next-line no-console
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

      // Add click event listener to the marker
      marker.addListener("click", () => {
        map.setZoom(8); // Adjust the zoom level as desired
        map.setCenter(marker.getPosition()); // Center the map on the clicked marker
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
    <MaxWidthWrapper>
      {/* where-container */}
      <div className="flex lg:flex-row flex-col gap-3 w-full ">
        <div className="lg:w-1/2 w-full flex flex-col items-center">
          <div
            style={{ backgroundImage: "url(/images/cover/wheretobuy.png)" }}
            // where-innercontainer  "
            className="w-full h-[300px] rounded-[20px] text-white font-semibold bg-center object-fill bg-no-repeat  flex justify-center items-center font-serif"
          >
            <div className="flex flex-col gap-2">
              <Heading className='text-white'>
                WHERE
              </Heading>
              <Heading className='text-white'>
                TO BUY
              </Heading>
            </div>
          </div>
          {/* where-container-new */}
          <div className="flex flex-row-reverse">
            <div className="where-seperator"></div>
            <div className="where-seperator2">
              {/* <div className="where-heading"></div> */}
              <Heading>
                Select Branch
              </Heading>
              <select
              // where-search-field
                className="w-full rounded-[30px] my-4 py-4 border-2 px-4"
                onChange={handleLocationChange}
                components={{
                  dropdownindicator: () => null,
                  indicatorseparator: () => null,
                }}
              >
                <option className="text" value="">
                  Select Location
                </option>
                {points.map((point) => (
                  <option className="text" key={point.id} value={point.title}>
                    {point.title}
                  </option>
                ))}
              </select>
              <div className="current-location " onClick={getLocation}>
                <IoLocationSharp color="#EE2A2" size={20} className="" />
                Use my current location
              </div>
              {/* current-desc */}
              <div className="sm:text-lg text-sm font-medium font-albert mt-2" >
                Explore our extensive collection of top-quality stones in person!
                Enter your location now to uncover the nearest Sharifstone
                warehouse, where our top-quality stones await your personal
                exploration.
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col items-center  mt-4">
          {mapState.center.lat !== undefined && (
            <div
              className="map-div "
              style={{ height: "600px", width: "97%", borderRadius: 20 }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyBMGnG8DmtiCc7yCgwTyS35iRyLV89qrtY",
                }}
                defaultCenter={defaultCenter}
                center={mapState.center}
                zoom={mapState.zoom}
                yesIWantToUseGoogleMapApiInternals // Add this line if you're using GoogleMapReact v2.1+
                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
              />
              {/* <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyBMGnG8DmtiCc7yCgwTyS35iRyLV89qrtY",
              }}
              defaultCenter={defaultCenter}
              defaultZoom={1}
              center={center}
              onGoogleApiLoaded={() => {
                return (
                  <>
                    <Marker
                      lat={28.57636777558448}
                      lng={-81.41119743863068}
                      text="Marker 1"
                    />
                    <Marker
                      lat={27.951137735514855}
                      lng={-82.36121631928435}
                      text="Marker 2"
                    />
                  </>
                );
              }}
            >
              <Marker
                lat={28.57636777558448}
                lng={-81.41119743863068}
                text="Marker 1"
              />
              <Marker
                lat={27.951137735514855}
                lng={-82.36121631928435}
                text="Marker 2"
              />
            </GoogleMapReact> */}
            </div>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default WhereToBuy;
