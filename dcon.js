const {MongoClient} = require('mongodb');
const uri = 'mongodb://0.0.0.0:27017';
const database = 'mydb';
const client = new MongoClient(uri);

async function dbconnect(){
    let result = await client.connect();
    db = result.db(database);
    return db.collection('Employee');
}

module.exports = dbconnect;