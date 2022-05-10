const express = require('express');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000;

const app = express();

dotenv.config({ path: '.env' });

// @desc Middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// @desc Routes
app.use('/users', require('./routes/users.js'));

// @desc PORT
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
