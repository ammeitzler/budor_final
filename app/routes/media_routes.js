module.exports = function(app, db) {

  var ObjectID = require('mongodb').ObjectID;

  app.get("/media", function(req, res, next) {
    db.collection("rasp_data", function(err, result){
        result.find({}).sort({_id: -1}).limit(10).toArray(function(err, data){
          res.json(data);
      })
    });
  });

  app.delete('/media/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('rasp_data').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Media ' + id + ' deleted!');
      } 
    });
  });

  app.post('/media', (req, res) => {
    console.log(req.body)
    const media_data = { values: req.body.values };

    db.collection('rasp_data').insert(media_data, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};