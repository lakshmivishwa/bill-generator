const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbConnect = async () => {
    let connection = await client.connect();
    let db = connection.db('billing')
    console.log("connection successful");
    return db;
}

module.exports = dbConnect;
