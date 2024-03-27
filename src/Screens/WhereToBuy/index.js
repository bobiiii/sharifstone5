import React, { useState } from "react";

const WhereToBuy = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearestStore, setNearestStore] = useState(null);
  const [iframeSrc, setIframeSrc] = useState("");

  const [addressInput, setAddressInput] = useState("");


  const storeLocations = [
    { name: "Karachi Store", latitude: 24.8808, longitude: 67.0011 },
    { name: "Lahore Store", latitude: 31.5497, longitude: 74.3436 },
    { name: "Islamabad Store", latitude: 33.6844, longitude: 73.0479 },
  ];

  const handleLiveLocationClick = async () => {
    if (navigator.geolocation) {
      try {
        const permission = await navigator.permissions.query({ name: 'geolocation' });
        if (permission.state === 'granted') {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              };
              setUserLocation(location);
              findNearestStoreWithLocation(location.latitude, location.longitude);
            },
            (error) => {
              console.error('Error getting geolocation:', error);
              alert('Failed to access your location. Please enter your address manually.');
            }
          );
        } else if (permission.state === 'prompt') {
          alert('Geolocation permission is required to find your nearest store. Please allow access.');
        } else {
          alert('Geolocation is not allowed for this website.');
        }
      } catch (error) {
        console.error('Error checking geolocation permission:', error);
      }
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const findNearestStoreWithLocation = (latitude, longitude) => {
    let nearestStore = null;
    let minDistance = Infinity;

    storeLocations.forEach((store) => {
      const distance = getDistance(latitude, longitude, store.latitude, store.longitude);

      if (nearestStore === null || distance < minDistance) {
        nearestStore = store;
        minDistance = distance;
      }
    });

    if (nearestStore) {
      setNearestStore(nearestStore);
 const mapUrl = `https://www.openstreetmap.org/search?q=${nearestStore.latitude},${nearestStore.longitude}#map=15/${nearestStore.latitude},${nearestStore.longitude}`;
      setIframeSrc(mapUrl);
    } else {
      alert('No store found.');
    }
  };

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  // ... component rendering logic

  return (
    <div>
      <h2>Find Your Nearest Store</h2>

      <input type="text" value={addressInput} onChange={(e) => setAddressInput(e.target.value)} placeholder="Enter your address" />
      <button onClick={handleFindStoreByAddress}>Find  Store</button>
     


      {/* Address input field (optional) */}
      <button onClick={handleLiveLocationClick}>Use My Current Location</button>
      {nearestStore && (
        <div>
          <p>Nearest Store: {nearestStore.name}</p>
          {/* Display address if available */}
          <iframe src="https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed" width="360" height="270" frameborder="0" ></iframe></div>
      )}
    </div>
  );
};

export default WhereToBuy;
