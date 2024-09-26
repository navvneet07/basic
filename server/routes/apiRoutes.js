const express = require('express');
const router = express.Router();
const { getMessage } = require('../controllers/messageController');

// Define your routes
router.get('/message', getMessage);

module.exports = router;
