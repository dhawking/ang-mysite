var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan') // previously logger
var app = express();

app.use(morgan('combined'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);