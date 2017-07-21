const db = require('./server/utility/dbConnection.js');
const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// USER APIs
require('./server/api/user')(app, db);

// TRAVELS APIs

// ADMIN APIs
 
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

// app.get("/api/food", (req, res) => {
//   const param = req.query.q;

//   if (!param) {
//     res.json({
//       error: "Missing required parameter `q`"
//     });
//     return;
//   }

//   // WARNING: Not for production use! The following statement
//   // is not protected against SQL injections.
//   const r = db.exec(
//     `
//     select ${COLUMNS.join(", ")} from entries
//     where description like '%${param}%'
//     limit 100
//   `
//   );

//   if (r[0]) {
//     res.json(
//       r[0].values.map(entry => {
//         const e = {};
//         COLUMNS.forEach((c, idx) => {
//           // combine fat columns
//           if (c.match(/^fa_/)) {
//             e.fat_g = e.fat_g || 0.0;
//             e.fat_g = (parseFloat(e.fat_g, 10) +
//               parseFloat(entry[idx], 10)).toFixed(2);
//           } else {
//             e[c] = entry[idx];
//           }
//         });
//         return e;
//       })
//     );
//   } else {
//     res.json([]);
//   }
// });

