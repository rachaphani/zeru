const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
connectDB();
app.use(express.json());

app.use('/restakers', require('./routes/restakers'));
app.use('/validators', require('./routes/validators'));
app.use('/rewards', require('./routes/rewards'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
