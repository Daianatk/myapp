const express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());

const {
  profileController,
  profileIdController,
  profileFilterController,
  profileSaveController
} = require('./controller');

app.get('/', (req, res) =>{
  res.send('Hello Express')
});

app.get('/profile', [
  profileController
]);

app.get('/profile/:id', [
  profileIdController
]);

app.get('/profile2', [
  profileFilterController
]);

app.post('/profile', [
  profileSaveController
]);

app.listen(process.env.PORT || 3000)
