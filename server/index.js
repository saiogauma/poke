const express = require('express');
const app = express();

app.use(express.static('../client/src'));

app.get('/id', (req, res) => {
  res.send({
    id: 1,
    name: 'tomoya',
    age: 21
  });
});

app.listen(8000, () => {
  console.log('サーバー起動中...');
});