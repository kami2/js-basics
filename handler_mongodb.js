const { MongoClient } = require('mongodb');

const client = MongoClient.connect(process.env.MONGODB_URI);

await client.connect();