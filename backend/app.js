require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { default: mongoose } = require("mongoose");
const connect_db = require("./db/connect_db");
const notFoundMiddleware = require("./middelware/not-found");
const errorHandlerMiddleware = require("./middelware/error-handler");
const app = express();
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.ClOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const fileUploadRouter = require("./routes/uploads-route");

// package middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// routes
app.get("/", (req, res) => {
  res.send("<h3>Portfolio</h3>");
});

//  middlewares
app.use("/api/v1/", fileUploadRouter);
app.use("/api/v1/products/", fileUploadRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//connection
const port = process.env.PORT || 4001;
const start = async () => {
  try {
    await connect_db(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app is listening to the port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.on("error", (error) => {
    console.log(
      `unable to connect the database ${process.env.MONGO_URI}, error:${error}`
    );
  });
};
start();
