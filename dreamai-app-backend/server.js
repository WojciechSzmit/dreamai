const express = require('express');
const dotenv = require('dotenv');
const modelRoutes = require('./routes/modelRoutes');
const cors = require('cors');
const path = require('path');



dotenv.config();

const PORT = 5000;

const app = express();
//const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use('/api', modelRoutes);


app.use(express.static(path.join(__dirname, 'dreamai-app-frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dreamai-app-frontend/src', 'index.js'));
});


app.listen(PORT, () => {
    console.log(`sever is running on port ${PORT}`)
})
