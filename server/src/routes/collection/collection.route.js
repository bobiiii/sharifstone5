const express = require("express");
const { collectionController } = require("../../controllers");
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");
const authValidation = require("../../validations/auth.validation");
const upload = require("../../middlewares/upload");
const router = express.Router();

router
  .route("/")
  .post(collectionController.createCollection)
  .get(collectionController.getAllCollection);

router
  .route("/:id")
  .delete(collectionController.deleteCollection)
  .put(collectionController.updateCollection);

router
  .route("/filter")
  .get(collectionController.filterCollection);

module.exports = router;
