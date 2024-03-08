const Joi = require("joi-oid");
const { password, objectId } = require("./custom.validation");

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required(),
    brand: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.string().required(),
    km_driven: Joi.string().required(),
    exterior_color: Joi.string().required(),
    interior_color: Joi.string().required(),
    total_seats: Joi.string().required(),
    phone: Joi.string().required().required(),
    profile_pic: Joi.string(),
    password: Joi.string().required(),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    username: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    id: Joi.objectId().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    isActive: Joi.boolean(),
    userType: Joi.objectId(),
    shopId: Joi.objectId(),
    bio: Joi.string(),
    followers: Joi.array(),
    following: Joi.array(),
    userName: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    role: Joi.string(),
    profilePicture: Joi.string(),
    addressDetail: Joi.objectId(),
    paymentDetail: Joi.objectId(),
    website: Joi.string(),
    phoneNumber: Joi.string(),
    address: Joi.string(),
  }),
};
module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
};
