const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// Sample API endpoint
app.get('/api/v1/articles/featured', (req, res) => {
    res.json([
        { id: 1, title: "First Article", featured: true },
        { id: 2, title: "Second Article", featured: true },
    ]);
});

// Catch-all route for testing
app.get('/api/v1/health', (req, res) => {
    res.json({ 
    status: 'OK', 
    message: 'API 1 Server is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
    console.log(`Backend server running on port http://localhost:${PORT}`);
});