var User = require('../../app/models/user');
var Story = require('../../app/models/story');

var config = require('../../config');

var secretKey = config.secretKey;

var jsonwebtoken = require('jsonwebtoken');

function createToken(user){
	var token = jsonwebtoken.sign({
		id: user.id,
		name: user.name,
		username: user.username
	}, secretKey, {
		 expiresIn : 60*60*24
	});

	return token;
}

module.exports = function(app, express){
	var api = express.Router();

	//Before medalware

	api.post('/signup', function(req, res){

		var user = new User({

			name: req.body.name,
			username: req.body.username,
			password: req.body.password

		});
		var token = createToken(user);
		user.save(function(err){
			if(err){
				res.send(err);
				return;
			}else{
				res.json({
					success: true,
					message: "User has been created!",
					token: token
				});
			}

		})
	});

	api.get('/users', function(req, res){

		User.find({}, function(err, result){
			if(err){
				console.log(err);
			}else{
				res.json(result);
			}
		});

	});

	api.get('/user/:id', function(req, res){
		User.findOne({ _id: req.params.id}, function(err, user){
			if(err){
				console.log(err);
			}else{
				res.json(user);
			}
		});
	});

	api.post('/login', function(req, res){


		User.findOne({username: req.body.username}).select("name username password")
		.exec(function(err, user){

			if(err) throw err;

			if(!user){

				res.json({'message': 'User does not exist!'});

			}else if(user){

				var validatPassword = user.comparePassword(req.body.password);

				if(!validatPassword){

					res.send("Invalid password!");
				}else{

					var token = createToken(user);
					res.send({

						success: true,
						message: "Successfully login!",
						token: token
					});
				}
			}
		});
	});


	// Medelware

	api.use(function(req, res, next){

		console.log("Some one came to the secured area!");

		var token = req.body.token || req.params.token || req.headers['x-access-token'];

		if(token){

			jsonwebtoken.verify(token, secretKey, function(err, decoded){

				if(err){

					res.status(403).send({

							success: false,
							message: "Authentication faild!"
					});
				}else{

					req.decoded = decoded;
					next();
				}
			})
		}else{

			res.status(403).send({success: false, message: "No token provided!"})
		}
	});

	// After medelware
	api.route('/')

		.post(function(req, res){

			var story = new Story({

				creator: req.decoded.id,
				content: req.body.content,
			});

			story.save(function(err){

				if(err){

					res.send(err);
					return;
				}else{

					res.json({message: "New story created!"});
				}
			});
		})

		.get(function(req, res){

			Story.find({creator: req.decoded.id}, function(err, stories){

				if(err){

					res.send(err);
				}else{

					res.json(stories);
				}
			})

		});

	api.get('/me', function(req, res){
		console.log('commning to  me');
		res.json(req.decoded);
	});

	return api;

}
