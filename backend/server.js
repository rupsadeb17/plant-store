const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const plantRoutes = require('./routes/plants');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
.then(() => console.log('MongoDB Atlas connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/plants', plantRoutes);

// Basic route to test if server is working
app.get('/', (req, res) => {
  res.json({ message: 'Plant Store API is working!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});