
const {MongoClient} = require('mongodb');
const uri = 'mongodb://0.0.0.0:27017';
const database = 'mydb';
const client = new MongoClient(uri);


async function getdata(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('Employee');

    // collection.insertMany([{Name: "Ankit", class: "5th" },{Name:"Sujeet", Class:"8th"}]);

    let response = await collection.find({}).toArray();
    console.log(response);
    console.log("Show Data");
}
getdata();


