const { Visualizer } = require("../models");

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getVisualizerById = async (id) => {
  return Visualizer.findById(id);
};

const createVisualizer = async (body) => {
  const response = await Visualizer.create(body)
  return response
};

const getAllVisualizer = async () => {
  const response = await Visualizer.distinct("ambient_url")
  var object = {}
  response.forEach(async(value) => {
    const collectionArray = await Visualizer.find({ambient_url: value})
    object[value] = collectionArray
    console.log('NEW DATA ... ',collectionArray);
  })
  return sleep(2000).then(() => { return object });
};

const deleteVisualizerById = async (id) => {
  const collection = await getVisualizerById(id);
  if (!collection) {
    throw new ApiError(httpStatus.NOT_FOUND, "Collection not found.");
  }
  await collection.remove();
  return collection;
}
const updateVisualizer = async (id, update) => {
  const collection = await getVisualizerById(id);
  if (!collection) {
    throw new ApiError(httpStatus.NOT_FOUND, "Collection not found.");
  }
  Object.assign(collection, update);
  await collection.save();
  return collection;
};

module.exports = {
  createVisualizer,
  getAllVisualizer,
  updateVisualizer,
  deleteVisualizerById,
};
