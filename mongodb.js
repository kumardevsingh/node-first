const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://singhkumardev:DevAnju@nodedev.igsft.mongodb.net/directConnection=true&retryWrites=true&w=majority';

const client = new MongoClient(url);
const dataBase = 'products';

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(dataBase);
    return db.collection('users');
}

module.exports = dbConnect;