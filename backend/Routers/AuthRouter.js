const express = require('express');
const { signup, login, googleLogin,githubLogin } = require('../Controllers/AuthController');
const { signupValidation, loginValidation, authMiddleware } = require('../Middlewares/AuthValidation');
const router = express.Router();

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);
router.post('/google-login', googleLogin);
router.post('/Github-login', githubLogin);
//router.get('/me', authMiddleware, getProfile); // Use the authMiddleware here

module.exports = router;
