var React = require('react');
var api = require("../api/api");

var BlogPostModel = require("../models/BlogPostModel");

module.exports = React.createClass({
	getInitialState: function() {
		this.pullSpecificPost();
		return {
			errors: {},
			soloPost: [],
			isLoading: true
		}
	},
	render: function() {
		if(this.state.isLoading){
			return (
				<h1>Loading...</h1>
			);
		}
		else {
			var thisPost = this.state.soloPost;
			return (
				<div>
					<h1>{thisPost[0].title}</h1>
					<p>{thisPost[0].body}</p>
					<p>{thisPost[0].body}</p>
				</div>
			);
		}
	},
	pullSpecificPost: function(userId, postId){
		api.getIndividualPost(1, this.props.postId)
			.then((res) => {
				this.setState({
					soloPost: res,
					isLoading: false
				});
			});
	}
});