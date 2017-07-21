const USER_LIST_COLUMNS = require('../model/userModel.js');

module.exports = function (app, db) {
  app.get('/api/users', (req, res) => {
    const r = db.exec(
      `
    select ${USER_LIST_COLUMNS.join(', ')} from USERS
  `);

    if (r[0]) {
      res.json(r[0].values);
    }
  });
};

