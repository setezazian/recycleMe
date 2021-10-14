const express = require('express');
const path = require('path');
const db = require('../database');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + '/../client/dist')));

app.get('/items', (req, res) => {
  console.log("req.body", req.query)
  db.getItem(req.query.city, req.query.item, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500);
      res.send("There was an error")
    } else {
      res.status(200);
      console.log("successfully got the items")
      res.send(result);
    }
  });
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
