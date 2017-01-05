var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var port = 1337;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function (req, res) {
  res.render(path.join(__dirname, 'views', 'index.pug'));
});

app.listen(port, function () {
  console.log('Listening on ' + port);
});
