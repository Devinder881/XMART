const Mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const ConnectDb = async () => {
  try {
    await Mongoose.connect(process.env.MONGO_URI);
    console.log(`Database is Connected`);
  } catch (error) {
    console.error(`ERROR : ${error.message}`);
    process.exit(1);
  }
};

module.exports = ConnectDb;