const express = require('express');
const app = express();
const _ = require('lodash');

app.get('/cards/draw', (req, res) => {
  const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  const suits = ['C', 'H', 'D', 'S'];
  const card = _.sample(cards);
  const suit = _.sample(suits);
  res.send({card, suit});
});

app.listen(process.env.PORT, () => {
  console.log("Express is listening");
});
