'use strict';

var express = require('express');
//var bodyParser = require('body-parser');
var app = express();
//app.use(bodyParser.json());
var port = parseInt(process.env.PORT || '3000');

app.use(logRequest);
app.use(express.static('public'));

/*app.route('/*').get(function (req, res) {
    res.sendFile(path.resolve(__dirname + '../public/index.html'));
  });
*/
app.listen(port, function () {
  console.log('Listening on port 3000...');
});

function logRequest(req, res, next) {
  var parts = [new Date(), req.method, req.originalUrl];
  console.log(parts.join(' '));
  next();
}