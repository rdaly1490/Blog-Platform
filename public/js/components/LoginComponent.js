var React = require("react");
var $ = require("jquery");
var _ = require("../../../node_modules/backbone/node_modules/underscore/underscore-min.js");
var Cookies = require('js-cookie');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			errors: {}
		}
	},
	render: function() {
		// $("#navigation").hide();
		return (
			<div className="container-fluid">
				<div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 login well">
					<h1>Login Page</h1>
					<form onSubmit={this.loginUser}>
						<label>Username</label> <br />
						<input ref="username" type="text" placeholder="username" />
						<p className="error">{this.state.errors.username}</p>
						<label>Password</label> <br />
						<input ref="password" type="password" placeholder="password" />
						<p className="error">{this.state.errors.password}</p>
						<button>Login</button>
						<p className="error">{this.state.errors.incorrect}</p>
					</form>
				</div>
			</div>
		);
	},
	loginUser: function(e) {
		var that = this;
		e.preventDefault();

		var err = {};

		var userValue = (this.refs.username.getDOMNode().value).toLowerCase();
		var pw = this.refs.password.getDOMNode().value
		
		if(!userValue) {
			err.username = "Username cannot be left blank";
		}
		if(!pw) {
			err.password = "Password cannot be left blank";
		}

		this.props.regUsers.forEach(function(user){
			if(user.attributes.username === userValue && user.attributes.password === pw){
				window.scrollTo(0, 0);
				window.signed_in = user;
				console.log(window.signed_in.attributes);

				that.props.myRouter.navigate("home", {trigger: true});
			}
			else {
				err.incorrect = "Incorrect Username and Password Combination";
			}
		});
		this.setState({errors:err});
	}
});