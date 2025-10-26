// Vercel serverless function entry point
const express = require('express');
const path = require('path');

// Import the built server
const app = express();

// This is a simplified version for Vercel
// The actual implementation will be loaded from the built files
app.get('/', (req, res) => {
  res.send('Wedding website loading...');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Export for Vercel (no app.listen())
module.exports = app;
