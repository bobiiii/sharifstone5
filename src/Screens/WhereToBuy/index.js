import React, { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import where from './images/where.png';
import Heading from '../resuable/Heading';
import { IoLocationSharp } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import useAuth from '../../hooks/useAuth';
function WhereToBuy() {
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [nearestStore, setNearestStore] = useState('');
  const [showNearestStore, setShowNearestStore] = useState(false);
  const [notFound, setNotFound] = useState(false);


  const [showLiveLocation, setShowLiveLocation] = useState(false);


  const stores = [
    { name: 'Orlando', address: 'Orlando', latitude: 28.5756900, longitude: -81.4113746 },
    { name: 'Tampa', address: 'Tampa', latitude: 27.9523, longitude: -82.38075 },
    { name: 'Islamabad', address: 'Islamabad', latitude: 33.6844, longitude: 73.0479 },
    { name: 'Quetta', address: 'Quetta', latitude: 30.1798, longitude: 66.9750 }
  ];

  const getLiveLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    const userLatitude = position.coords.latitude;
    const userLongitude = position.coords.longitude;
    setLatitude(userLatitude);
    setLongitude(userLongitude);
    setShowLiveLocation(false);

    // Find nearest store
    let minDistance = Number.MAX_VALUE;
    let nearestStore = '';

    stores.forEach(store => {
      const distance = calculateDistance(userLatitude, userLongitude, store.latitude, store.longitude);
      if (distance < 150) { // Check if distance is less than 150 km
        minDistance = distance;
        nearestStore = store;
      }
    });

    if (nearestStore) {
      setNearestStore(nearestStore);
      setShowNearestStore(true);
    } else {
      setNearestStore(false); // Setting nearestStore to null when no nearby stores are found
      setShowNearestStore(false);
      setNotFound(true)
    }
  };


  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };




  const findNearestStore = () => {
    console.log("find btn clkcd")
    const userAddress = address.toLowerCase();

    let matchingStores = stores.filter(store =>
      userAddress.includes(store.address.toLowerCase())
    );

    if (matchingStores.length > 0) {
      let nearestStore = '';
      let minDistance = Number.MAX_VALUE;

      matchingStores.forEach(store => {
        if (store.address.toLowerCase().includes(userAddress)) {
          nearestStore = store;
          minDistance = 0; // User address matches store address, so distance is 0
        }
      });

      if (nearestStore) {

        setNearestStore(nearestStore);
        setShowNearestStore(true);
        setNotFound(false)
      } else {
        setNearestStore(false); // Setting nearestStore to null when no nearby stores are found
        setShowNearestStore(false);
        setNotFound(true)
      }
    } else {
      setNearestStore(false); // Setting nearestStore to null when no nearby stores are found
      setShowNearestStore(false);
      setNotFound(true)
    }
  };
  const { setShowDropdown} = useAuth()

  return (
    <MaxWidthWrapper className='md:mt-10 mt-4'  >
      <div className="flex lg:flex-row flex-col gap-3 w-full " onMouseEnter={() => setShowDropdown(false)}>
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
            <div className=" lg:w-[85%] w-full lg:items-center items-start  flex lg:justify-center justify-start text-start flex-col lg:my-10 my-6 mx-auto">
              <Heading className='text-start w-full'>
                Enter Your Location
              </Heading>
              <div className="w-full relative">
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Search by city or store name"
                  type="text"
                  className="outline-none my-3 border sm:text-base text-sm  rounded-3xl py-2.5  w-full pl-4 relative h-12"
                />
                <RiSearchLine onClick={findNearestStore} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" size={20} />
              </div>
              <div onClick={getLiveLocation} className="w-full flex items-center  justify-start gap-1  cursor-pointer  py-2" >
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
          <div>
          </div>

        </div>

        <div className="lg:w-1/2 w-full flex flex-col items-center ">
          {showNearestStore && nearestStore.name === "Tampa" && (
            <iframe

              title="Google Map"
              width="100%"
              className=' sm:h-[600px] h-[400px]'
              // height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sharifstone%20Tampa%208524%20E%20Adamo%20Dr,%20Tampa,%20FL%2033619,%20USA+(Sharif%20Stone%20Tampa1)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen
            ></iframe>
          )}

          {
            notFound && nearestStore.name !== "Tampa" && nearestStore.name !== "Orlando" &&
            <iframe
              title="Google Map"
              width="100%"
              className=' sm:h-[600px] h-[400px]'
              // height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=orlando+(Sharif%20Stone%20Tampa1)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>

          }


          {showNearestStore && nearestStore.name === "Orlando" && (
            <iframe
              title="Google Map"
              width="100%"
              className=' sm:h-[600px] h-[400px]'
              // height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20sharifstone%202440%20Dinneen%20Ave,%20Orlando,%20FL%2032804,%20United%20States+(Sharif%20Stone%20Orlando)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen
            ></iframe>
          )}


          {!notFound && !showNearestStore && !showLiveLocation && <iframe
            title="Google Map"
            width="100%"
            className=' sm:h-[600px] h-[400px]'
            // height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=orlando+(Sharif%20Stone%20Tampa1)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>}



          {showLiveLocation && (
            <iframe
              title="Google Map"
              width="100%"
              className=' sm:h-[600px] h-[400px]'
              // height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={`https://maps.google.com/maps?q=${nearestStore.latitude},${nearestStore.longitude}&markers=${nearestStore.latitude},${longitude}&output=embed`}
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default WhereToBuy;



