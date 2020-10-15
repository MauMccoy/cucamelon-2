var express = require('express');
var app = express();

// set public directory
app.use(express.static('public'));

// Default engine
app.set('view engine', 'ejs');

// ROUTES
app.get('/', function(req, res) {
  res.render('index');
});

// start server
app.listen(process.env.PORT || 3000, function() {
  console.log('server running bby');
});
