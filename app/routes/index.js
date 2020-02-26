const mediaRoutes = require('./media_routes');
const signalRoutes = require('./signal_routes');
const ashRoutes = require('./ash_routes');

 // Other route groups could go here, in the future
module.exports = function(app, db) {
  mediaRoutes(app, db);
  signalRoutes(app, db);
  ashRoutes(app, db);
};