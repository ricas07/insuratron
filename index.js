const express = require('express');

const app = express();

app.get('/', (req, res) => res.send("What's Cracking?!"));

app.listen(3000, () => console.log('This app is the shit!'));
