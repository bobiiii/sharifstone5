import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [KitchenData, setKitchenData] = useState([]);
  const [bathroomData, setBathroomData] = useState([]);


  

    return(

        <AuthContext.Provider
        value={{
          showDropdown, setShowDropdown, KitchenData, setKitchenData, bathroomData, setBathroomData
        }}
      >
        {children}
      </AuthContext.Provider>
    )
}

export default AuthContextProvider;