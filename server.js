const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// var urlDB = 'mongodb://pioneer:pio159@ds117834.mlab.com:17834/dubor';

//connect to db
MongoClient.connect(db.url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error: ', err);
  } else {
    console.log('Connection established to ', db.url);
  }
  require('./app/routes')(app, db.url);
});


// var sqlite3 = require('sqlite3').verbose();
// var path = require('path');
// var dbPath = path.resolve(__dirname, 'mydb.db')
// var db = new sqlite3.Database(dbPath);

// db.serialize(function() {
//     db.run("CREATE TABLE IF NOT EXISTS rasp2_data (value INTEGER)");
//     db.run("CREATE TABLE IF NOT EXISTS onoff2_data (value INTEGER)");
//     // db.run("INSERT INTO onoff2_data (key, value) VALUES (?, ?)", "counter", 0);
//    	require('./app/routes')(app, db);

// });

app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendfile('index.html', {root: __dirname })
});
const server = app.listen(process.env.PORT || 8000);