var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require("path");
const favicon = require('serve-favicon');
var http = require("http");
var url = require("url");


app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'public')));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',function(req,res){
     res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(process.env.PORT || 5000);