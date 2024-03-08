const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const { roles } = require("../config/roles");
const { toJSON, paginate } = require("./plugins");
const { required } = require("joi");

const userSchema = mongoose.Schema(
  {
    color_name: { 
      type: String, 
      required: true, 
      default: ''
    },
    color_image: { 
      type: String, 
      required: true, 
      default: ''
    },
    ambient_url: { 
      type: String, 
      required: true, 
      default: ''
    },
    room: { 
      type: String, 
      required: true, 
      default: ''
    },
    ambient: { 
      type: String, 
      required: true, 
      default: ''
    },
    ambient_image_url: { 
      type: String, 
      required: true, 
      default: ''
    },
  },
  {
    timestaps: true,
  }
);

userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

/**
 * @typedef User
 */

const Collection = mongoose.model("visualizer", userSchema);
module.exports = Collection;