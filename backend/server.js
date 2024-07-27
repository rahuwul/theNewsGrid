const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

const uri = "mongodb://localhost:27017/SavedNews"; // Ensure you use the correct URI with the database name

app.use(cors()); // Enable CORS
app.use(express.json());

const newsSchema = new mongoose.Schema({
  source: {
    id: String,
    name: String
  },
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: Date
});

const News = mongoose.model('News', newsSchema);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB using Mongoose');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB using Mongoose', err);
  });

app.get('/api/data', async (req, res) => {
  try {
    const data = await News.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/data', async (req, res) => {
  const newsData = req.body;
  try {
    const newNews = new News(newsData);
    const savedNews = await newNews.save();
    res.status(201).json(savedNews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

process.on('SIGINT', async () => {
  console.log('SIGINT received, closing MongoDB connections');
  await mongoose.connection.close();
  process.exit(0);
});

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Node.js!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});