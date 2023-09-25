const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  const customError = {
    message: err.message || "Internal server Error, Please try again!",
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };

  res.status(customError.statusCode).json({ message: customError.message });
};
module.exports = errorHandlerMiddleware;
