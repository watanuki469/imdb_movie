

const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/movies', async (req: any, res: any) => {
    try {
        // Fetch data from MongoDB
        // Return data as JSON response
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const { MongoClient } = require('mongodb');

// MongoDB Connection URL
const uri = 'mongodb://localhost:27017/Vasiliev-movie';
const client = new MongoClient(uri);

// Connect to MongoDB
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();

app.get('/movies', async (req: any, res: any) => {
    try {
        // Access MongoDB collection
        const db = client.db('Vasiliev-movie');
        const collection = db.collection('movie-user');

        // Fetch data from MongoDB
        const movies = await collection.find({}).toArray();

        // Return data as JSON response
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
export { }; 