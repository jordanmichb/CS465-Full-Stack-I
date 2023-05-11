const express = require('express');
const router = express.Router();
const controller = require('../controllers/main');

/* GET the home page. */
router.get('/', controller.index);

module.exports = router;
