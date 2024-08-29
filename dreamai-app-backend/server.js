const express = require('express');
const dotenv = require('dotenv');
const modelRoutes = require('./routes/modelRoutes');
const cors = require('cors');



dotenv.config();

const PORT = 5000;

const app = express();
//const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use('/api', modelRoutes);




app.listen(PORT, () => {
    console.log(`sever is running on port ${PORT}`)
})
