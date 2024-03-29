import { createContext, useEffect, useState } from 'react';
import { getCollection2 } from '../apiCall/apiCall';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [KitchenData, setKitchenData] = useState([]);
  const [bathroomData, setBathroomData] = useState([]);
  const [collections, setCollections] = useState([]);
  const [varieties, setVarieties] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCollection2();
      setCollections(data);
    };
    fetchData();
  }, []);
  console.log('useauth');
  return (
    <AuthContext.Provider
      value={{
        showDropdown,
        setShowDropdown,
        KitchenData,
        setKitchenData,
        bathroomData,
        setBathroomData,
        collections,
        setCollections,
        varieties,
        setVarieties,
        blogs,
        setBlogs
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
