"use strict";

const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();

const { IndexRouter } = require('./controllers/index.router');


const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use('/api/v0/', IndexRouter);


app.get('/', (req, res) => {
	res.send('/api/v0/')
})


app.listen(PORT, () => {
	console.log(`The AuTJS server is listening on port: ${PORT}`)
});


