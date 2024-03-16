import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);

    return(

        <AuthContext.Provider
        value={{
          showDropdown, setShowDropdown
        }}
      >
        {children}
      </AuthContext.Provider>
    )
}

export default AuthContextProvider;