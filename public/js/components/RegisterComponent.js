var React = require('react');
var _ = require("../../../node_modules/backbone/node_modules/underscore/underscore-min.js")
var validator = require("validator");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			errors: {}
		}
	},
	render: function() {
		return (
			<div className="container-fluid">
				<div className="col-sm-8 col-sm-offset-2 register well">
					<h1>Registration Page</h1>
					<form onSubmit={this.registerUser}>
						<label>Enter a Username</label><br />
						<input type="text" ref="username" placeholder="username" />
						<p>{this.state.errors.username}</p>
						<label>Enter a Password</label><br />
						<input type="text" ref="password" placeholder="password" />
						<p>{this.state.errors.password}</p>
						<label>Enter your Email</label><br />
						<input type="text" ref="email" placeholder="email" />
						<p>{this.state.errors.email}</p>
						<button>Register</button>
					</form>
					<button onClick={this.goToLogin}>Return To Login</button>
				</div>
			</div>
		);
	},
	goToLogin:function(e) {
		e.preventDefault();
		this.props.myRouter.navigate("login", {trigger:true});
	},
	registerUser: function(e) {
		var that = this;
		e.preventDefault();
		
		var userInfo = {
			username: (this.refs.username.getDOMNode().value).toLowerCase(),
			password: this.refs.password.getDOMNode().value,
			email: this.refs.email.getDOMNode().value
		};

		var err = {};

		if(!register.username) {
          	err.username = "Username cannot be left blank";
        } 
        else if (!validator.isAlphanumeric(register.username)) {
        	err.username = "Username must be alpha-numeric";
        }
        if(!register.password) {
			err.password = "Password cannot be left blank";
        } 
        else if (!((register.password).length >= 6)) {
        	err.password = "Password must be at least 6 characters";
        }
        if(!register.email) {
            err.email = "Email cannot be left blank";
        } 
        else if(!validator.isEmail(register.email)) {
        	err.email = "Email must contain @ symbol and be valid";
        }

        this.setState({errors: err});

        if(_.isEmpty(err)) {
			this.props.myRouter.navigate("home", {trigger: true});
		}
	}
});