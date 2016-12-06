const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', (req, res) => {
  res.send('Hey');
});

app.listen(port, (err) => {
  console.log(`App is listening at port ${port}`);
});
