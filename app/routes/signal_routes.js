// module.exports = function(app, db) {

//   var ObjectID = require('mongodb').ObjectID;
//   //for turning on and off

//   app.get("/signal", function(req, res, next) {
//     db.collection("onoff2_data", function(err, result){
//     db.collection("onoff_data", function(err, result){
//         result.find({}).sort({_id: -1}).limit(10).toArray(function(err, data){
//           res.json(data);
//       })
//     });
//     db.collection("onoff2_data").count().then((count) => {
//         console.log(count);
//         if(count > 2000) {
//           db.collection("onoff2_data").remove({})
//           console.log("removed")
//         }
//     });
//   });

//   app.delete('/signal/:id', (req, res) => {
//     const id = req.params.id;
//     const details = { '_id': new ObjectID(id) };
//     db.collection('onoff2_data').remove(details, (err, item) => {
//     db.collection('onoff_data').remove(details, (err, item) => {
//       if (err) {
//         res.send({'error':'An error has occurred'});
//       } else {
//         res.send('Signal ' + id + ' deleted!');
//       } 
//     });
//   });

//   app.post('/signal', (req, res) => {
//     console.log(req.body)
//     const signal_data = { values: req.body.values };
//     db.collection('onoff2_data').insert(signal_data, (err, result) => {
//     db.collection('onoff_data').insert(signal_data, (err, result) => {
//       if (err) { 
//         res.send({ 'error': 'An error has occurred' }); 
//       } else {
//         res.send(result.ops[0]);
//       }
//     });
//   });
// };