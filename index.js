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
const express = require('express');
const dbConnect = require('./mongodb');
const app = express();


/* dbConnect().then((res) => {
    res.find().toArray().then((data) => {
        console.log("Finally get data =====>", data)
    })
})
 */

const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn("GET THE DATA:===== ", data)
}

main();

/* 
//const mongoose = require('mongoose');
//const uri = 'mongodb+srv://kumardevsingh:DevAnju@nodedev.igsft.mongodb.net/products?retryWrites=true&w=majority';
mongoose.connect(DB);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (res) => {
    console.log("connection done!!")
    console.log(res);
}) */








/* app.get('/', (req, res) => {

    //res.send('200', "page  load from server");

    res.end()
}) */






app.listen(1000, () => { console.log('app is listing on port no 1000') })


/* ***************************************** */