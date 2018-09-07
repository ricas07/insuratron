const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const path = require('path');
const sendMail = require('./src/mail');

const app = express();
const upload = multer(); // for parsing multipart/form-data

app.use(express.static('public')); // serving static files from /public
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.sendFile(path.join(`${__dirname}/public/index.html`)));
app.post('/submit-form', upload.array(), (req, res) => {
    console.log(req.body);
    sendMail(req.body);
    res.sendStatus(200);
});
app.listen(3000, () => console.log('This app is the shit!')); // eslint-disable-line no-console
