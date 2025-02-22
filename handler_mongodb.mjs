import { MongoClient } from 'mongodb';

const client = MongoClient.connect(process.env.MONGODB_URI);

await client.connect()