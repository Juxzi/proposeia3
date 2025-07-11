const express = require('express');
const app = express();
const routes = require('./app');


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
