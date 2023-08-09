const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const UserController = {
  // middleware to CREATE A USER
  createUser: async (req, res, next) => {
    try {
      const { name, password, username, email } = req.body;

      // Check if the username already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        res.send('This username already exists.');
        return next();
      }

      // Hashes the password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        name,
        password: hashedPassword, // Set the hashed password
        username,
        email,
      });

      // Saves the new user to the database
      const savedUser = await newUser.save();
      res.locals.user = savedUser;

      return next();
    } catch (error) {
      return next(error);
    }
  },

  verifyUser: (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return next(
        'Error - both username and password should be provided for login.'
      );
    }
    User.findOne({ username })
      .then((user) => {
        // If username is not found:
        if (!user) {
          return next('Username or password is not found.');
          // If the username is found:
        } else {
          // Uses bcrypt compare to compare passwords
          bcrypt.compare(password, user.password).then((result) => {
            // If stored passwords do not match, return error
            if (!result) {
              return next('Username or password is not found.');
            } else {
              res.locals.user = user;
              if (user.urls) res.locals.URLS = user.urls[0];
              return next();
            }
          });
        }
      })
      .catch((err) => {
        return next({
          log: `userController.verifyUser ERROR: ${err}`,
          status: 500, // Internal server error code
          message: {
            error: 'Error in finding the username or password',
          },
        });
      });
  },
  addUrls: (req, res, next) => {
    if (res.locals.generatedDash === false) {
      return next();
    }
    const userID = res.locals.user.id;
    User.findOneAndUpdate({ _id: userID }, { $push: { urls: res.locals.URLS } })
      .then((user) => {
        return next();
      })
      .catch((err) => {
        next({
          log: 'error!',
          status: 500,
          message: { err: 'An error occured while adding URLs' },
        });
      });
  },
};

module.exports = UserController;
