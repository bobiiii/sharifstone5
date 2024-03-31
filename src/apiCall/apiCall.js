import axios from "axios";
import { useContext } from "react";
import APIContext from "../Store/contextStore";
// const apiEndpoint = "https://sharifstone-backend.vercel.app/api";
const apiEndpoint = "http://localhost:5000/api";



const getCollection2 = async () => {
  return await axios
    .get(`${apiEndpoint}/collection`)
    .then((response) => {
      return response?.data?.data
    })
    .catch((err) => alert(err.response));
};

const getKitchens = async () => {
  return await axios
    .get(`${apiEndpoint}/visualizer/kitchens`)
    .then((response) => {
      
      return response?.data?.data
    })
    .catch((err) => alert(err.response));
};


// const getCollection = async () => {
//   // const {store, setStore} = useContext(APIContext)
//   return await axios
//     .get(`${apiEndpoint}collection`)
//     .then((response) => {
//       return response?.data?.result;
//     })
//     .catch((err) => alert(err.response.data.message));
// };

// const getVisualizer = async () => {
//   // const {store, setStore} = useContext(APIContext)
//   return await axios
//     .get(`${apiEndpoint}visualizer`)
//     .then((response) => {
//       return response?.data?.result;
//     })
//     .catch((err) => alert(err.response.data.message));
// };


// const getCollectionByParam = async (collection) => {
//   return await axios
//     .get(`${apiEndpoint}collection/filter?collection_url=${collection}`)
//     .then(async (response) => {
//       return await response?.data?.results;
//     })
//     .catch((err) => alert(err.response.data.message));
// };

// const getColorByParam = async (color) => {
//   return await axios
//     .get(`${apiEndpoint}collection/filter?color_url=${color}`)
//     .then(async (response) => {
//       return await response?.data?.results;
//     })
//     .catch((err) => alert(err.response.data.message));
// };

export {getKitchens,getCollection2 };
// export {getKitchens,getCollection2, getCollection, getCollectionByParam, getColorByParam, getVisualizer };
