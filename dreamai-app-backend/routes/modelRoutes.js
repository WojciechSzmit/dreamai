const express = require('express');
const { getModelPrediction } = require('../controllers/modelController');
const router = express.Router();

router.post('/completion', getModelPrediction);

module.exports = router;
