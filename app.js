const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(3000, () => {
  console.log('Example app listening on port 3000!'); /* eslint-disable-line no-console */
});

module.exports = app;
