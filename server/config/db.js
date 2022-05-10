const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    const connect = mongoose.connect(`${process.env.MONGODB_URI}`);

    console.log();
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
};
