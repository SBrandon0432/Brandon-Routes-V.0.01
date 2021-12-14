const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.resolve("Client", "dist")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.get('/login', (req, res) => {



});





app.listen(port, ()=> {
  console.log(`https://localHost${port}`)
});