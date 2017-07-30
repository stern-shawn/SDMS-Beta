const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// router.post('/api/', userController.tbd);
// router.put('/api/', userController.tbd);
// router.delete('/api/', userController.tbd);
router.get('/', (req, res) => {
  res.json({ greeting: 'Hello lifter 1' });
});

router.post('/signup', userController.signup);

module.exports = router;
