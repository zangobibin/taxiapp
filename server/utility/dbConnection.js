const fs = require('fs');
const sqlite = require('sql.js');

const filebuffer = fs.readFileSync('db/taxi4you.sqlite3');
const db = new sqlite.Database(filebuffer);

module.exports = db;
