const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/users');

//////////////////////////////////////////////
///////////////USER///////////////////////////
//////////////////////////////////////////////

// @desc Post user data
// @route Method: POST ('/users')
// @access Private && User
const registerUser = async (request, response) => {
  const { name, email, password } = request.body;

  if (!name || !email || !password) {
    response.status(400).json({
      message: 'Fill the form',
    });
  }

  // @desc **Checking if the user is/has already registered** //
  // @desc validation for already existing users
  const isRegistered = await User.findOne({ email });

  if (isRegistered) {
    response.status(400).json({
      message: 'already registered',
    });
  }

  try {
  } catch (error) {
    console.error(error);
    console.error(error.message);
  }
};

// @desc Post user data
// @route Method: POST ('/users/login')
// @access Private && User
const loginUser = async (request, response) => {
  try {
  } catch (error) {
    console.error(error);
    console.error(error.message);
  }
};

// @desc Get user data
// @route Method: GET ('/users/profile')
// @access Private && User
const userProfile = async (request, response) => {
  try {
  } catch (error) {
    console.error(error);
    console.error(error.message);
  }
};

//////////////////////////////////////////////
///////////////ADMINISTRATOR//////////////////
//////////////////////////////////////////////

// @desc Get user data
// @route Method: GET ('/users')
// @access Private && Admin

const getUsers = async (request, response) => {
  try {
  } catch (error) {
    console.error(error);
    console.error(error.message);
  }
};

// @desc Post user data
// @route Method: POST ('/users')
// @access Private && Admin
const postUsers = async (request, response) => {
  try {
  } catch (error) {
    console.error(error);
    console.error(error.message);
  }
};

// @desc Put user data
// @route Method: PUT ('/users/:ID')
// @access Private && Admin
const putUsers = async (request, response) => {
  try {
  } catch (error) {
    console.error(error);
    console.error(error.message);
  }
};

// @desc Delete user data
// @route Method: DELETE ('/users/:ID')
// @access Private && Admin
const deleteUsers = async (request, response) => {
  try {
  } catch (error) {
    console.error(error);
    console.error(error.message);
  }
};

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
  registerUser,
  loginUser,
  userProfile,
};
