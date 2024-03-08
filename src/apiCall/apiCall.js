import axios from "axios";
import { useContext } from "react";
import APIContext from "../Store/contextStore";
const apiEndpoint = "https://sharifstone-server.vercel.app/api/";
// const apiEndpoint = "http://localhost:3005/api/";

const getCollection = async () => {
  // const {store, setStore} = useContext(APIContext)
  return await axios
    .get(`${apiEndpoint}collection`)
    .then((response) => {
      // console.log('RESPONSE .... ',response?.data?.result)
      return response?.data?.result;
    })
    .catch((err) => alert(err.response.data.message));
};

const getVisualizer = async () => {
  // const {store, setStore} = useContext(APIContext)
  return await axios
    .get(`${apiEndpoint}visualizer`)
    .then((response) => {
      // console.log('RESPONSE .... ',response?.data?.result)
      return response?.data?.result;
    })
    .catch((err) => alert(err.response.data.message));
};


const getCollectionByParam = async (collection) => {
  return await axios
    .get(`${apiEndpoint}collection/filter?collection_url=${collection}`)
    .then(async (response) => {
      return await response?.data?.results;
    })
    .catch((err) => alert(err.response.data.message));
};

const getColorByParam = async (color) => {
  return await axios
    .get(`${apiEndpoint}collection/filter?color_url=${color}`)
    .then(async (response) => {
      return await response?.data?.results;
    })
    .catch((err) => alert(err.response.data.message));
};

export { getCollection, getCollectionByParam, getColorByParam, getVisualizer };
