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
    console.log('Data retrieved'); // Log retrieved data
    res.json(data);
  } catch (error) {
    console.error('Error retrieving data:', error); // Log error details
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/data', async (req, res) => {
  const newsData = req.body;
  try {
    const newNews = new News(newsData);
    const savedNews = await newNews.save();
    console.log('Data saved'); 
    res.status(201).json(savedNews);
  } catch (err) {
    console.error('Error saving data:', err); // Log error details
    res.status(500).json({ error: err.message });
  }
});
app.delete('/api/data/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedNews = await News.findByIdAndDelete(id);
    if (!deletedNews) {
      return res.status(404).json({ error: 'News not found' });
    }
    console.log('Data deleted');
    res.status(200).json(deletedNews);
  } catch (err) {
    console.error('Error deleting data:', err); // Log error details
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
