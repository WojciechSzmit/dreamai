const express = require('express');
const dotenv = require('dotenv');
const modelRoutes = require('/routes/modelRoutes');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/model', modelRoutes);

app.listen(PORT, () => {
    console.log(`sever is running on port ${PORT}`)
})
