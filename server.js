require('node-jsx').install({ extension: '.jsx' });

var express = require('express'),
    path = require('path'),
    React = require('react');
var Router = require('react-router');    

var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

var Html = React.createFactory(require('./app/index.jsx'));

app.get('/', function(req,res) {
  var agent = req.headers['user-agent'];
  console.log("agent", agent);
  if (agent.search("Chrome") > 0) {
  	console.log("I am traditional");
  	res.sendFile(path.resolve('index.html'));
  }
  else {
  	console.log("I am isomorphic");
  	res.send('<!DOCTYPE HTML>' + React.renderToStaticMarkup(Html()));
  }
  
});




app.listen(1337, function() {
  console.log('App running at http://localhost:1337');
});