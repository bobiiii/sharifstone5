import React, { useState } from 'react';

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


  return (
    <div>
      <h1>Location Finder</h1>
      <div className='brr flex '>
        <div className='brg w-1/2'>
      <div>
        <input className='brr px-2 mx-2' type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Your City" />
        <button className='brg px-2 mx-2' onClick={findNearestStore}>Find Nearest Store</button>
        <button className='brg px-2 mx-2' onClick={getLiveLocation}>Get Live Location</button>
      </div>
      <div>
  {/* {showNearestStore === false && <p className='brr'>No Stores Found</p>} */}
  {showNearestStore && nearestStore && <p className='brr'>Nearest Store: {nearestStore.name}</p>}
  {!showLiveLocation && !showNearestStore && !notFound && <h3 className='brr'>Get Your nearest SharifStone Store Now!</h3>}
  {notFound &&  <h3 className='brr'>No Stores Found</h3>}
</div>

</div>

      <div className='brb w-1/2'>
          {showNearestStore && nearestStore.name === "Tampa" && (
            <iframe
              title="Google Map"
              width="100%"
              height="400"
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
    height="400"
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
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20sharifstone%202440%20Dinneen%20Ave,%20Orlando,%20FL%2032804,%20United%20States+(Sharif%20Stone%20Orlando)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen
            ></iframe>
          )}


{!notFound && !showNearestStore && !showLiveLocation &&   <iframe
    title="Google Map"
    width="100%"
    height="400"
    frameBorder="0"
    scrolling="no"
    marginHeight="0"
    marginWidth="0"
    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=orlando+(Sharif%20Stone%20Tampa1)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
  ></iframe> }



          {showLiveLocation && (
            <iframe
              title="Google Map"
              width="100%"
              height="400"
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
    </div>
  );
}

export default WhereToBuy;






// import React, { useState } from "react";

// const WhereToBuy = () => {
//   const [userLocation, setUserLocation] = useState(null);
//   const [nearestStore, setNearestStore] = useState(null);
//   const [iframeSrc, setIframeSrc] = useState("");

//   const [addressInput, setAddressInput] = useState("");


//   const storeLocations = [
//     { name: "Karachi Store", latitude: 24.8808, longitude: 67.0011 },
//     { name: "Lahore Store", latitude: 31.5497, longitude: 74.3436 },
//     { name: "Islamabad Store", latitude: 33.6844, longitude: 73.0479 },
//   ];

//   const handleLiveLocationClick = async () => {
//     if (navigator.geolocation) {
//       try {
//         const permission = await navigator.permissions.query({ name: 'geolocation' });
//         if (permission.state === 'granted') {
//           navigator.geolocation.getCurrentPosition(
//             (position) => {
//               const location = {
//                 latitude: position.coords.latitude,
//                 longitude: position.coords.longitude,
//               };
//               setUserLocation(location);
//               findNearestStoreWithLocation(location.latitude, location.longitude);
//             },
//             (error) => {
//               console.error('Error getting geolocation:', error);
//               alert('Failed to access your location. Please enter your address manually.');
//             }
//           );
//         } else if (permission.state === 'prompt') {
//           alert('Geolocation permission is required to find your nearest store. Please allow access.');
//         } else {
//           alert('Geolocation is not allowed for this website.');
//         }
//       } catch (error) {
//         console.error('Error checking geolocation permission:', error);
//       }
//     } else {
//       alert('Geolocation is not supported by this browser.');
//     }
//   };
//   const handleFindStoreByAddress = ()=>{
//     console.log("handleFindStoreByAddress")
//   }

//   const findNearestStoreWithLocation = (latitude, longitude) => {
//     let nearestStore = null;
//     let minDistance = Infinity;

//     storeLocations.forEach((store) => {
//       const distance = getDistance(latitude, longitude, store.latitude, store.longitude);

//       if (nearestStore === null || distance < minDistance) {
//         nearestStore = store;
//         minDistance = distance;
//       }
//     });

//     if (nearestStore) {
//       setNearestStore(nearestStore);
//  const mapUrl = `https://www.openstreetmap.org/search?q=${nearestStore.latitude},${nearestStore.longitude}#map=15/${nearestStore.latitude},${nearestStore.longitude}`;
//       setIframeSrc(mapUrl);
//     } else {
//       alert('No store found.');
//     }
//   };

//   const getDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371; // Radius of the Earth in km
//     const dLat = deg2rad(lat2 - lat1);
//     const dLon = deg2rad(lon2 - lon1);
//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c; // Distance in km
//     return distance;
//   };

//   const deg2rad = (deg) => {
//     return deg * (Math.PI / 180);
//   };

//   // ... component rendering logic

//   return (
//     <div>
//       <h2>Find Your Nearest Store</h2>

//       <input type="text" value={addressInput} onChange={(e) => setAddressInput(e.target.value)} placeholder="Enter your address" />
//       <button onClick={handleFindStoreByAddress}>Find  Store</button>
     


//       {/* Address input field (optional) */}
//       <button onClick={handleLiveLocationClick}>Use My Current Location</button>
//       {nearestStore && (
//         <div>
//           <p>Nearest Store: {nearestStore.name}</p>
//           {/* Display address if available */}
//           <iframe src="https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed" width="360" height="270" frameborder="0" ></iframe></div>
//       )}
//     </div>
//   );
// };

// export default WhereToBuy;
