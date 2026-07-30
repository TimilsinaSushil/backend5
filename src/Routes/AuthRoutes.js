const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const AuthController = require('../Controller/AuthController');
require('dotenv').config();
const frontend_url = process.env.FRONTEND_URL;

// Register route
router.post('/register', AuthController.registerUser);

// Login route
router.post('/login', AuthController.loginUser);



module.exports = router;