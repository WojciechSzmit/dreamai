const express = require('express');
const { getModelPrediction } = require('../controllers/modelController');
const router = express.Router();

router.post('/predict', getModelPrediction);

module.exports = router;
