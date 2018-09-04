var express = require('express');
var app = express();
var path = require("path");
const favicon = require('serve-favicon');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname)));
app.use(favicon(path.join(__dirname, '/assets/images/t.ico')));


app.get('/',function(req,res){
     res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(process.env.PORT || 5000);