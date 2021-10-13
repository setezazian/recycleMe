const express = require('express');
const path = require('path');
const db = require('../database-mysql');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + '/../client/dist')));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
