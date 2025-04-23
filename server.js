const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/getHello', (req, res) => {
  res.send('hello world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});