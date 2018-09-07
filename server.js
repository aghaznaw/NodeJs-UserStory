var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var config = require('./config');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.connect(config.database, {useNewUrlParser: true}, function(err){
	if(err){
		console.log(err);
	}else{
		console.log('Database is connected!');
	}
})

app.use(express.static(__dirname + '/public'));

var api = require('./app/router/api')(app, express);

app.use('/api', api);


app.use('*', function(req, res){

	res.sendFile(__dirname + '/public/app/views/index.html');
})


app.listen(config.port, function(err){
	if(err){
		console.log(err);
	}else{
		console.log("App is running on localhost listining on port " + config.port);
	}
});