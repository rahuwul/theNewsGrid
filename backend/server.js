const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3001;

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors()); // Enable CORS
app.use(express.json());

let database;
client.connect()
  .then(() => {
    console.log('Connected to MongoDB');
    database = client.db("SavedNews");
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

app.get('/api/data', async (req, res) => {
  try {
    const collection = database.collection("news");
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

process.on('SIGINT', async () => {
  console.log('SIGINT received, closing MongoDB connection');
  await client.close();
  process.exit(0);
});
