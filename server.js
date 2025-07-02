const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/users'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/books', require('./routes/books'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Admin backend running on port ${PORT}`));
