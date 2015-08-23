var React = require('react');
var _ = require("../../../node_modules/backbone/node_modules/underscore/underscore-min.js");

var BlogPostModel = require("../models/BlogPostModel")

module.exports = React.createClass({
	getInitialState: function() {
		return {
			errors: {}
		}
	},
	render: function() {
		return (
			<div className="container-fluid">
				<div className="col-sm-8 col-sm-offset-2 submit-post welcome">
					<form>
						<label>Blog Title</label><br />
						<input type="text" placeholder="Title" ref="title" />
						<p>{this.state.errors.title}</p>
						<label>Blog Body</label><br />
						<textarea ref="body" placeholder="Body...."></textarea>
						<p>{this.state.errors.body}</p>
						<button onClick={this.submitPost}>Submit Post</button>
					</form>
				</div>
			</div>
		);
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
				id: 1,
				title: postTitle,
				body: postBody,
				userId: 1
			});
			console.log(post)
			var postId = post.id;
			this.props.myRouter.navigate("post/"+postId, {trigger:true});
		}
	}
});



// regex: .*first*.
// . will match every character
// * will 