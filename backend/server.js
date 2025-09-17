const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const os = require('os');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Middleware to log container serving the request
app.use((req, res, next) => {
  const containerId = os.hostname();
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} served by container: ${containerId}`);
  res.setHeader('X-Container-ID', containerId); // optional: return container ID in response header
  next();
});

// Sample API endpoint
app.get('/api/v1/articles/featured', (req, res) => {
    res.json([
        { id: 1, title: "First Article", featured: true },
        { id: 2, title: "Second Article", featured: true },
    ]);
});

// Health check endpoint
app.get('/api/v1/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'API Server is running',
        container: os.hostname(),
        timestamp: new Date().toISOString()
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.send(`Hello from container: ${os.hostname()}`);
});

app.listen(PORT, () => {
    console.log(`Backend server running on port http://localhost:${PORT}`);
});