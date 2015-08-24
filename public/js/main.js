var React = require('react');
var Backbone = require("backbone");
Backbone.$ = require("jquery");

var NavigationComponent = require("./components/NavigationComponent");
var LoginComponent = require("./components/LoginComponent");
var RegisterComponent = require("./components/RegisterComponent");
var HomeComponent = require("./components/HomeComponent");
var SubmitPostComponent = require("./components/SubmitPostComponent");
var IndividualPostComponent = require("./components/IndividualPostComponent");
var FooterComponent = require("./components/FooterComponent");

var UserCollection = require("./collections/UserCollection");

var regUsers = new UserCollection([
	{
		createdAt: Date.now(),
		updatedAt: null,
		userId: 1,
		username:"admin",
		password:"admin1",
		email:"admin@gmail.com",
		admin: 1
	},
	{
		createdAt: Date.now(),
		updatedAt: null,
		userId: 2,
		username:"reader",
		password:"reader1",
		email:"reader@gmail.com",
		admin: 0
	}
]);

React.render(<NavigationComponent myRouter={myRouter} />, document.getElementById("navigation"));
React.render(<FooterComponent />, document.getElementById("footer"));

var App = Backbone.Router.extend({
	routes: {
		"": "login",
		"login":"login",
		"register":"register",
		"home": "home",
		"submit": "submitPost",
		"post/:postId": "individualView"
	},
	login: function() {
		React.render(
			<div>
				<LoginComponent myRouter={myRouter} regUsers={regUsers} />
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
				<SubmitPostComponent myRouter={myRouter} />
			</div>,
			document.getElementById("container")
		);
	},
	individualView: function(postId) {
		React.render(
			<div>
				<IndividualPostComponent myRouter={myRouter} postId={postId} />
			</div>,
			document.getElementById("container")
		);
	}

});

var myRouter = new App();
Backbone.history.start();