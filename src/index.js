import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import { RouterProvider } from "react-router-dom";
import { router } from "./Navigation";
import Context from "./Store/contextStore";
import APIContext from "./Store/apiContext";
import { getCollection, getVisualizer } from "./apiCall/apiCall";
import AuthContextProvider from './hooks/AuthContext';


const RunFuncion = () => {
  const [store, setStore] = useState({});
  const [apiStore, setAPIStore] = useState({});

  useEffect(async () => {
    const collections = await getCollection();
    const visualizers = await getVisualizer();
    const newObj = {
      ...apiStore,
      collections,
      visualizers,
    };
    setAPIStore(newObj);
  }, []);
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
