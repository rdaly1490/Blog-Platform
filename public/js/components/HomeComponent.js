var React = require("react");
var $ = require("jquery");
var api = require("../api/api");

module.exports = React.createClass({
	getInitialState: function() {
		this.getPosts();
		return {
			errors: {},
			blogPosts: []
		}
	},
	render: function() {
		console.log(this.state.blogPosts);
		var toMap = this.state.blogPosts;
		var test = toMap.map(function(model){
			console.log(model);
			return (
				<div>
					<h1>{model.title}</h1>
					<p>{model.body}</p>
				</div>
			);
		})
		return (
			<div>
				<div>Hello World</div>
				{test}
			</div>
		);
	},
	getPosts: function(userId){
		console.log("running...");

		api.getPosts(1)
			.then((res) => {
				console.log(res);
				this.setState({
					blogPosts: res
				});
			});
	}
});