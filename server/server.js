var express = require('express');
var app = express();
app.use(express.static(__dirname, 'build'));
app.get('/', (req, res) => {
  res.sendFile(__dirname, 'build', 'index.html');
});

let port = process.env.PORT;
if (port == null || port === "") {
  port = 8000;
}
app.listen(port);