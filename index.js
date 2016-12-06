var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

var books = [];

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response, next){
  response.status(200).send('send');
});

app.get('/books', function(req, res, next) {
  res.status(200).send(books);
})

app.post('/books', function(req, res, next) {
  books.push(req.body);
  res.status(200).send(books);
})

app.put('/books', function(req, res, next) {
  for(var i = 0; i < books.length; i++) {
    console.log(books[i])
    if (books[i].name === req.body.name) {
      books[i] = req.body;
      res.status(200).send(books)
    }
  }
})

app.delete('/books', function(req, res, next) {
  for(var i = 0; i < books.length; i++) {
    console.log(books[i])
    if (books[i].name === req.body.name) {
      books.splice(i, 1);
      res.status(200).send(books)
    }
  }
})

app.post('/firstPage', function(request, response, next) {
  console.log(request);
  console.log('empty:', names)
  names.push(request.body.name)
  console.log('has name', names);
  var sendBack = 'Request saved' + names;
  response.status(200).send(sendBack);
});

app.get('/', function(req, res, next) {
  response.status(200).send('home page stuff')
})


app.listen(port, function() {
  console.log('Listening on port', port);
});
