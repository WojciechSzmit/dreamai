const axios = require('axios');

exports.callModelAPI = async (inputData) => {
    try {
        const response = await axios.post('https://fal.ai/api/endpoint', inputData, {
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to call the model API');
    }
};
