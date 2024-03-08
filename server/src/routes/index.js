const express = require("express");
const collectionRoute = require("./collection/collection.route");
const visualizerRoute = require("./visualizer/visualizer.route");

const router = express.Router();

router.use("/collection", collectionRoute);
router.use("/visualizer", visualizerRoute);

// router.use("affiliation");

module.exports = router;
