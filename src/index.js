import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "./Navigation";
import Context from "./Store/contextStore";
import APIContext from "./Store/apiContext";
import AuthContextProvider from './hooks/AuthContext';


const RunFuncion = () => {


  const [store, setStore] = useState({});
  const [apiStore, setAPIStore] = useState({});

  return (
    <APIContext.Provider value={{ apiStore, setAPIStore }}>
      <Context.Provider value={{ store, setStore }}>
        <AuthContextProvider>
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </AuthContextProvider>      </Context.Provider>
    </APIContext.Provider>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<RunFuncion />);

reportWebVitals();
