module.exports = function(app, db) {

  var ObjectID = require('mongodb').ObjectID;

  app.get("/ash", function(req, res, next) {
    db.collection("ash_data", function(err, result){
        result.find({}).sort({_id: -1}).limit(10).toArray(function(err, data){
          res.json(data);
      })
    });
    db.collection("ash_data").count().then((count) => {
        console.log(count);
        if(count > 2000) {
          db.collection("ash_data").remove({})
          console.log("removed")
        }
    });
  });

  app.delete('/ash/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('ash_data').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Media ' + id + ' deleted!');
      } 
    });
  });

  app.post('/ash', (req, res) => {
    console.log(req.body)
    const media_data = { values: req.body.values };

    db.collection('ash_data').insert(media_data, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};