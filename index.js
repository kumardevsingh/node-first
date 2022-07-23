/* WITHOUT USING EXPRESS JS CREATE A SERVER  */

/* const http = require('http');
const data = require('./data');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(data));
    res.end();
}).listen(1000)

 */

/*  **************************************** */



/* USING EXPRESS-JS CREATE A NODE SERVER */
const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://singhkumardev:DevAnju@nodedev.igsft.mongodb.net/directConnection=true&retryWrites=true&w=majority';

const client = new MongoClient(url);
const dataBase = 'products';

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(dataBase);
    return db.collection('users')
    //let collection = db.collection('users')
    //let res = await collection.find({ email: 'abc4@abc.com' }).toArray()
    //console.log("====== DATA BASE collection===== >", res);
}


dbConnect().then((res) => {
    res.find().toArray().then((data) => {
        console.log("Finally get data =====>", data)
    })
})


/* 
//const mongoose = require('mongoose');
//const uri = 'mongodb+srv://kumardevsingh:DevAnju@nodedev.igsft.mongodb.net/products?retryWrites=true&w=majority';
mongoose.connect(DB);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (res) => {
    console.log("connection done!!")
    console.log(res);
}) */




const express = require('express');
const app = express();

app.get('/', (req, res) => {

    //res.send('200', "page  load from server");

    res.end()
})
app.listen(1000, () => { console.log('app is listing on port no 1000') })


/* ***************************************** */