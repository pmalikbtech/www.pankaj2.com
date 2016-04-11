/**
 * Created by pankaj on 21/5/15.
 */
var express = require('express');
var app= module.exports = express();
var bodyParser = require('body-parser');
var http=require('http');
/*var mongoClient=require('mongodb').MongoClient;
 var url= 'mongodb://localhost:27017/learning';
 mongoClient.connect(url,function(err,db){
 if(err) throw err;
 console.log("connected to server now");
 });*/

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());


require('./sendemail.js')(app);

var port = process.env.PORT ||5000;

app.use(express.static(__dirname));
//require('./controllers/router')(app); // pass our application into our routes
// start app ===============================================
app.use('/',function(req, res) {
    console.log(">>>>>>>>>>>.appp use calleddd");
    res.sendFile(__dirname+'index.html',req, function () {
        console.log("sending layout");
    });
});
console.log(">>>>>>>>>>.index js run");
app.listen(port);
