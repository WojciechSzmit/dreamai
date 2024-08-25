const { callModelAPI } = require('../services/modelService');

exports.getModelPrediction = async (req, res) => {
    try {
        const inputData = req.body;
        const response = await callModelAPI(inputData);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
