import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

// 1. Standard GET API
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Backend is working.'
  });
});

// 2. GET API with a URL parameter (:name)
app.get('/api/greet/:name', (req, res) => {
  const userName = req.params.name;

  res.json({
    success: true,
    message: `Hello, ${userName}! Welcome to the API.`
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
