const express = require('express');
const router = express.Router();
const {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
  registerUser,
  loginUser,
  userProfile,
} = require('../controllers/users.js');

// @desc this is for the administrator
// @desc Extremely Private
router.get('/', getUsers);
router.post('/', postUsers);
router.put('/:ID', putUsers);
router.delete('/:ID', deleteUsers);

// @desc this is for the users  only.
// @desc Private for user
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/profile', userProfile);
