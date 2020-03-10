const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const config = require('./config/db');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname })
});

const port = process.env.PORT || 8000;

MongoClient.connect(config.database.url, { promiseLibrary: Promise })
	.catch(err => console.error(err.stack))
	.then(db => {
    	app.locals.db = db;
    	app.listen(port, () => {
      		console.log(`Node.js app is listening at http://localhost:${port}`);
    	});
    	console.log(config.database.url)
    	require('./app/routes')(app, config.database.url);
	});


