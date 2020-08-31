const express = require('express');
const { encrypt } = require('../pkg/base64_lib.js');

const app = express();
const port = 8080;
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.redirect("/index.html"));

app.post('/encode', function (req, res) {
  var cleartext = (req.body.cleartext);
  res.send(ec(cleartext))
})

app.post('/decode', function (req, res) {
  var cleartext = (req.body.base64text);
  res.send(dc(cleartext))
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))

