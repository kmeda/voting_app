const express = require('express');
const path = require('path');

var favicon = require('serve-favicon');

const app = express();
app.use(favicon(path.join(__dirname + '/favicon.ico')));

// Server routes...
app.get('/hello', (req, res) => res.send({ hi: 'there' }));

app.use(express.static('dist'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || 3050, () => console.log('Listening'));
