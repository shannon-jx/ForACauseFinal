const express = require('express');
const router = express.Router();

const catchAsync = require('../utilities/catchAsync.js');
const passport = require('passport');

const users = require('../controllers/users.js');

router.route('/register')
    .get(users.renderRegisterForm)
    .post(catchAsync(users.registerUser));

router.route('/login')
    .get(users.renderLoginForm)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.loginUser);

router.get('/logout', users.logoutUser);

module.exports = router;