const { Router } = require("express");
const { visualizerController } = require("../../controllers");
const upload = require("../../middlewares/upload");

const router = Router();

router
  .route("/")
  .post(visualizerController.createVisualizer)
  .get(visualizerController.getAllVisualizer);

  router
  .route("/:id")
  .delete(visualizerController.deleteVisualizer)
  .put(visualizerController.updateVisualizer);

module.exports = router;
