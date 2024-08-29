const { callModelAPI } = require('../services/modelService');

exports.getModelPrediction = async (req, res) => {
    try {
       const inputData = req.body;
      //  const {prompt} = req.body;

        const response = await callModelAPI(inputData);
       // const response = await callModelAPI({prompt});


        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(`Error occurred: ${error.message}`)
    }
};
