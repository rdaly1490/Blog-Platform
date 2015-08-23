var React = require('react');
var Backbone = require("backbone");
Backbone.$ = require("jquery");

var NavigationComponent = require("./components/NavigationComponent");
var LoginComponent = require("./components/LoginComponent");
var RegisterComponent = require("./components/RegisterComponent");
var HomeComponent = require("./components/HomeComponent");

var UserCollection = require("./collections/UserCollection");

var regUsers = new UserCollection([
	{
		createdAt: Date.now(),
		updatedAt: null,
		userId: 1,
		username:"Admin",
		password:"Admin1",
		email:"Admin@gmail.com"
	},
	{
		createdAt: Date.now(),
		updatedAt: null,
		userId: 2,
		username:"Reader",
		password:"Reader1",
		email:"Reader@gmail.com"
	}
]);

console.log(regUsers);
React.render(<NavigationComponent myRouter={myRouter} />, document.getElementById("navigation"));

var App = Backbone.Router.extend({
	routes: {
		"": "login",
		"login":"login",
		"register":"register",
		"home": "home",
		"submit": "submitPost",
		"post/:postId": "postSubmitted"
	},
	login: function() {
		React.render(
			<div>
				<LoginComponent myRouter={myRouter} regUser={regUsers} />
			</div>,
			document.getElementById("container")
		);
	},
	register: function() {
		React.render(
			<div>
				<RegisterComponent myRouter={myRouter} />
			</div>,
			document.getElementById("container")
		);
	},
	home: function() {
		React.render(
			<div>
				<HomeComponent myRouter={myRouter} />
			</div>,
			document.getElementById("container")
		);
	},
	submitPost: function() {
		React.render(
			<div>
				<h1>Submit Post Page</h1>
			</div>,
			document.getElementById("container")
		);
	},
	postSubmitted: function(postId) {
		React.render(
			<div>
				<h1>Individual Post Page</h1>
			</div>,
			document.getElementById("container")
		);
	}

});

var myRouter = new App();
Backbone.history.start();