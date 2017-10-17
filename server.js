const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const tvShowRouter = require('./tvShow/tvShowRouter');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(morgan('dev')); 

//Exercise #2
app.use('/tvshow', tvShowRouter);

//Exercise #1
app.get('/', (request, response) => response.send('Hello World'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Note the `` backticks is NOT the same as single quotes ''
});
