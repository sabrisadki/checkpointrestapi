const express = require('express');
const router = express.Router();
const { postMessage } = require('../controllers/contactus');

router.post('/api/contactus', postMessage);

module.exports = router;
