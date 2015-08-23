var React = require('react');
var _ = require("../../../node_modules/backbone/node_modules/underscore/underscore-min.js");

var BlogPostModel = require("../models/BlogPostModel")

module.exports = React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			successfulSubmit: false,
			content: {}
		}
	},
	render: function() {
		if(!this.state.successfulSubmit){
			return (
				<div className="container-fluid">
					<div className="col-xs-10 col-xs-offset-1 submit-post welcome">
						<h3>Submit Post</h3>
						<form>
							<label>Blog Title</label><br />
							<input type="text" placeholder="Title" ref="title" />
							<p className="error">{this.state.errors.title}</p>
							<label>Blog Body</label><br />
							<textarea ref="body" placeholder="Body...."></textarea>
							<p className="error">{this.state.errors.body}</p>
							<button onClick={this.submitPost}>Submit Post</button>
						</form>
					</div>
				</div>
			);
		}
		else {
			return (
				<div>
					<div className="col-xs-10 col-xs-offset-1 soloContainer">
						<div className="titleContainer">
							<h1>{this.state.content.attributes.title}</h1>
						</div>
						<p>{this.state.content.attributes.body}</p>
					</div>
				</div>
			);
		}
	},
	submitPost: function(e) {
		e.preventDefault();

		var err = {};

		var postTitle = this.refs.title.getDOMNode().value;
		var postBody = this.refs.body.getDOMNode().value;
		
		if(!postTitle) {
			err.title = "Title cannot be left blank"
		}
		if(!postBody) {
			err.body = "Body cannot be left blank"
		}

		this.setState({errors:err});

		if(_.isEmpty(err)) {
			var post = new BlogPostModel ({
				id: 12,
				title: postTitle,
				body: postBody,
				userId: 1
			});
			window.scrollTo(0, 0);
			this.setState({
				successfulSubmit: true,
				content: post
			});
		}
	}
});



// regex: .*first*.
// . will match every character
// * will 