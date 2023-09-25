const CustomAPIError = require("./custom-api");
const NotFoundError = require("./not-found");
const BadRequestError = require("./bad-request");
const UnAuthenticatedError = require("./un-authenticated");

module.exports = {
  CustomAPIError,
  NotFoundError,
  BadRequestError,
  UnAuthenticatedError,
};
