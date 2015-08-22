var React = require('react');
var Backbone = require("backbone");
Backbone.$ = require("jquery");

var App = Backbone.Router.extend({
	routes: {
		"": "login",
		"login":"login",
		"register":"register",
		"home": "home"
	},
	login: function() {
		React.render(
			<div>
				<h1>Login Page</h1>
			</div>,
			document.getElementById("container")
		);
	},
	register: function() {
		React.render(
			<div>
				<h1>Register Page</h1>
			</div>,
			document.getElementById("container")
		);
	},
	home: function() {
		React.render(
			<div>
				<h1>Home Page</h1>
			</div>,
			document.getElementById("container")
		);
	}

});

var myRouter = new App();
Backbone.history.start();