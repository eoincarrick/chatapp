const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.MONGODB_URI}`);

    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(error);
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = { connectDatabase };
