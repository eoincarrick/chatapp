const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/users');

//////////////////////////////////////////////
///////////////USER///////////////////////////
//////////////////////////////////////////////

// @desc Post user data
// @route Method: POST ('/users')
// @access Private && User
const registerUser = (request, response) => {
  try {
  } catch (error) {
    console.error(error);
    console.error(error.message);
  }
};

// @desc Post user data
// @route Method: POST ('/users/login')
// @access Private && User
const loginUser = (request, response) => {
  try {
  } catch (error) {
    console.error(error);
    console.error(error.message);
  }
};

// @desc Get user data
// @route Method: GET ('/users/profile')
// @access Private && User
const userProfile = (request, response) => {
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

const getUsers = (request, response) => {
  try {
  } catch (error) {
    console.error(error);
    console.error(error.message);
  }
};

// @desc Post user data
// @route Method: POST ('/users')
// @access Private && Admin
const postUsers = (request, response) => {
  try {
  } catch (error) {
    console.error(error);
    console.error(error.message);
  }
};

// @desc Put user data
// @route Method: PUT ('/users/:ID')
// @access Private && Admin
const putUsers = (request, response) => {
  try {
  } catch (error) {
    console.error(error);
    console.error(error.message);
  }
};

// @desc Delete user data
// @route Method: DELETE ('/users/:ID')
// @access Private && Admin
const deleteUsers = (request, response) => {
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
