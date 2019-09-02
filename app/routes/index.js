const mediaRoutes = require('./media_routes');
const signalRoutes = require('./signal_routes');

module.exports = function(app, db) {
  mediaRoutes(app, db);
  signalRoutes(app, db);
  // Other route groups could go here, in the future
};

// const signalRoutes = require('./signal_routes');
// module.exports = function(app, db) {
//   signalRoutes(app, db);
//   // Other route groups could go here, in the future
// };