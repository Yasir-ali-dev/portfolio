const mongoose = require("mongoose");

const connect_db = (URI) => {
  mongoose
    .connect(URI)
    .then()
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connect_db;
