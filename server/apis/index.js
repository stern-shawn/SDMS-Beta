const express = require('express');
const userController = require('../controllers/userController');
const passportService = require('../services/passport');
const passport = require('passport');

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

router.post('/signin', requireSignin, userController.signin);
router.post('/signup', userController.signup);

module.exports = router;
