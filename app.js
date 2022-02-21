const express = require('express');
const app = express();
let router = require('./router');

app.use('/',router);
  
app.listen(9000);