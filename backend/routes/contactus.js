const express = require('express');
const router = express.Router();
const { postMessage } = require('../controllers/message');

// Handle POST request to /api/contactus
router.post('/', postMessage);

module.exports = router;
