const { Scheme, model } = require('mongoose');

const userScheme = Scheme(
  {
    name: {
      type: String,
      require: [true, 'Please provide a name'],
    },
    email: {
      type: String,
      unique: true,
      require: [true, 'Please provide an email address'],
    },
    password: {
      type: String,
      unique: true,
      require: [true, 'Please provide a password'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', userScheme0);
