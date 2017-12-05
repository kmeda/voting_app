const express = require('express');
const path = require('path');

var favicon = require('serve-favicon');

const app = express();
app.use(favicon(path.join(__dirname + '/favicon.ico')));

// Server routes...

app.use(express.static('dist'));
app.get('*', function(req, res) {
  res.sendFile('./dist/index.html');
});

app.listen(process.env.PORT || 3050, function() {
  console.log('Listening')
});

