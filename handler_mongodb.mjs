import { MongoClient } from 'mongodb';

console.log(process.env.MONGODB_URI);
const client = new MongoClient(process.env.MONGODB_URI);

await client.connect();