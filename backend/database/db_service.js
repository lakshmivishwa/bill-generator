import { MongoClient } from "mongodb";
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbConnect = async () => {
    let connection = await client.connect();
    let db = connection.db('billing_db')
    console.log("connection successful");
    return db;
}

export default dbConnect;

