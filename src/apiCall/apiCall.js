import axios from "axios";
const apiEndpoint = "https://sharifstone-backend.vercel.app/api";
// const apiEndpoint = "http://localhost:5000/api";



const getCollection2 = async () => {
  return await axios
    .get(`${apiEndpoint}/collection`)
    .then((response) => {
      return response?.data?.data
    })
    .catch((err) => alert("Something went wrong"));
};

const getKitchens = async () => {
  return await axios
    .get(`${apiEndpoint}/visualizer/kitchens`)
    .then((response) => {
      
      return response?.data?.data
    })
    .catch((err) => alert("Something went wrong"));
};
const getBathrooms = async () => {
  return await axios
    .get(`${apiEndpoint}/visualizer/bathrooms`)
    .then((response) => {
      
      return response?.data?.data
    })
    .catch((err) => alert("Something went wrong"));
};
const addNewsletter = async (email) => {
  return await axios
    .post(`${apiEndpoint}/newsletter/add-newsletter`, {email})
    .then((response) => {
      
      
      return response
    })
    .catch((err) => alert("Something went wrong"));
};

export {getKitchens,getCollection2, getBathrooms ,addNewsletter};
