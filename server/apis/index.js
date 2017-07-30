// Library dependencies
const express = require('express');
const passport = require('passport');
// Controllers
const userController = require('../controllers/userController');
const validationController = require('../controllers/validationController');
// Router services
const passportService = require('../services/passport');

// Middleware to authenticate using jwt, and DON'T create a cookie session (since we're doing jwt anyway)
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

const router = express.Router();

// router.post('/api/', userController.tbd);
// router.put('/api/', userController.tbd);
// router.delete('/api/', userController.tbd);
router.get('/', (req, res) => {
  res.json({ greeting: 'Hello lifter 1' });
});

router.get('/protected', requireAuth, (req, res) => {
  res.send({ message: 'Super Secret code is LIGHTWEIGHT BABY!' });
});

router.post('/signin', requireSignin, userController.signin);
router.post('/signup', validationController.validateSignup, userController.signup);

module.exports = router;
