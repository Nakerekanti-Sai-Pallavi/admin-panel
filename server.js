const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/users', require('./routes/users'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/books', require('./routes/books'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve admin dashboard on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Admin backend running on port ${PORT}`));
