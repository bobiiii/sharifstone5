import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "./Navigation";
import AuthContextProvider from './hooks/AuthContext';


const RunFuncion = () => {


  const [store, setStore] = useState({});
  const [apiStore, setAPIStore] = useState({});

  return (
    <AuthContextProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthContextProvider>);
};
ReactDOM.createRoot(document.getElementById("root")).render(<RunFuncion />);

reportWebVitals();
