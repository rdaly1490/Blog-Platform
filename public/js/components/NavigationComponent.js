var React = require('react');

module.exports = React.createClass({
	render: function() {
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
			            	<li className="nav-links"><a href="#submit">Submit Post</a></li>
			            	<li className="nav-links"><a href="#login">Log Out</a></li>
			            </ul>
					</div>
				</div>
			</nav>
		);
	}
});