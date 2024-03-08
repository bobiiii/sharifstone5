const { Collection } = require("../models");

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const createCollection = async (body) => {
  const response = await Collection.create(body)
  return response
};

const getCollectionById = async (id) => {
  return Collection.findById(id);
};

const deleteCollectionById = async (id) => {
  const collection = await getCollectionById(id);
  if (!collection) {
    throw new ApiError(httpStatus.NOT_FOUND, "Collection not found.");
  }
  await collection.remove();
  return collection;
}
const updateCollection = async (id, update) => {
  const collection = await getCollectionById(id);
  if (!collection) {
    throw new ApiError(httpStatus.NOT_FOUND, "Collection not found.");
  }
  Object.assign(collection, update);
  await collection.save();
  return collection;
};

const queryCollections = async (
  filter,
  options,
  populateFirst = null,
  populateSecond = null
) => {
  const products = Collection.paginate(
    filter,
    options,
    populateFirst,
    populateSecond
  );
  return products;
};

const getAllCollection = async (body) => {
  const response = await Collection.distinct("collection_name")
  var object = {}
  response.forEach(async(value) => {
    const collectionArray = await Collection.find({collection_name: value})
    object[value] = collectionArray
  })
  return sleep(2000).then(() => { return object });
};

module.exports = {
  createCollection,
  getAllCollection,
  queryCollections,
  updateCollection,
  deleteCollectionById,
};
