var React = require("react");
var _ = require("../../../node_modules/backbone/node_modules/underscore/underscore-min.js");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			errors: {}
		}
	},
	render: function() {
		return (
			<div className="container-fluid">
				<div className="col-sm-8 col-sm-offset-2 login well">
					<h1>Login Page</h1>
					<form onSubmit={this.loginUser}>
						<label>Username</label> <br />
						<input ref="username" type="text" placeholder="username" />
						<p>{this.state.errors.username}</p>
						<label>Password</label> <br />
						<input ref="password" type="password" placeholder="password" />
						<p>{this.state.errors.password}</p>
						<button>Login</button>
						<p>{this.state.errors.incorrect}</p>
					</form>
					<button onClick={this.goToRegister}>Register</button>
				</div>
			</div>
		);
	},
	goToRegister: function(e) {
		e.preventDefault();
		this.props.myRouter.navigate("register", {trigger: true});
	},
	loginUser: function(e) {
		var that = this;
		e.preventDefault();

		var err = {};

		var userValue = (this.refs.username.getDOMNode().value).toLowerCase();
		var pw = this.refs.password.getDOMNode().value
		
		if(!userValue) {
			err.username = "Username cannot be left blank"
		}
		if(!pw) {
			err.password = "Password cannot be left blank"
		}

		this.setState({errors:err});

		if(_.isEmpty(err)) {
			this.props.myRouter.navigate("home", {trigger: true});
		}
	}
});