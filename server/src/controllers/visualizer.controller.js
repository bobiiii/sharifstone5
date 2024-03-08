const httpStatus = require("http-status");
const {
  visualizerService,
} = require("../services");
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/APIError");
const pick = require("../utils/pick");

const createVisualizer = catchAsync(async (req, res, next) => {
    console.log(req.body);
    const result = await visualizerService.createVisualizer(req.body);
    res.send({
      status: httpStatus.CREATED,
      result
    }).status(httpStatus.CREATED);
});

// const getCollections = catchAsync(async (req, res) => {
//   const filters = pick(req.query, [
//     "vendor",
//     "isAvailable",
//     "category",
//     "size",
//     "colour",
//   ]);
//   const options = pick(req.query, ["sortBy", "limit", "page"]);
//   const result = await collectionService.queryProductCondition(
//     filters,
//     options
//   );
//   res.status(httpStatus.ACCEPTED).send({
//     status: httpStatus.ACCEPTED,
//     result
//   });
// });

const getAllVisualizer = catchAsync(async (req, res) => {
  const result = await visualizerService.getAllVisualizer();
  res.status(httpStatus.ACCEPTED).send({
    status: httpStatus.ACCEPTED,
    result
  });
});

const updateVisualizer = catchAsync(async (req, res) => {
  const result = await visualizerService.updateVisualizer(req.params.id, req.body);
  res.send(result);
});

const deleteVisualizer = catchAsync(async (req, res) => {
  const product = await visualizerService.deleteVisualizerById(req.params.id);
  res.send(product);
});

module.exports = {
  createVisualizer,
  getAllVisualizer,
  updateVisualizer,
  deleteVisualizer
};
