var React = require('react');

module.exports = React.createClass({
	render: function() {
		var links = [];
		if(window.signed_in){
			if(window.signed_in.attributes.admin === 1){
				links.push(<li className="nav-links"><a href="#home">Home</a></li>)
				links.push(<li className="nav-links"><a href="#submit">Submit Post</a></li>)
				links.push(<li onClick={this.logOut} className="nav-links"><a href="#login">Log Out</a></li>)
			}
			else {
				links.push(<li className="nav-links"><a href="#home">Home</a></li>)
				links.push(<li onClick={this.logOut} className="nav-links"><a href="#login">Log Out</a></li>)
			}
		}
		else {
			links.push(<li></li>)
		}
		return (
			<nav className="navbar navbar-default nav-margin">
				<div className="container-fluid nav-color">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">BlogTime</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			            <ul className="nav navbar-nav">
			            	{links}
			            </ul>
					</div>
				</div>
			</nav>
		);
	},
	logOut: function(e){
		window.signed_in = {};
	}
});