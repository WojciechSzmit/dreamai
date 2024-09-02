const axios = require('axios');

exports.callModelAPI = async (inputData) => {

    if (!process.env.FAL_KEY) {
        throw new Error('API key is not defined');
    }

    console.log(`Using API Key: ${process.env.FAL_KEY}`);

    try {
        const response = await axios.post('https://fal.run/fal-ai/flux/dev', inputData, {
            headers: {
                'Authorization': `Key ${process.env.FAL_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Successfully called the model API');
        console.log('Response data:', response.data);


        return response.data;
    } catch (error) {
        console.error('Original error:', error.message); 
        console.error('Error details:', error.response ? error.response.data : error.message);
        throw new Error('Failed to call the model API');
        
    }
};
