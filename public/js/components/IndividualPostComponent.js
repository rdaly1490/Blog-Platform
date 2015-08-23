var React = require('react');
var api = require("../api/api");

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
					<div className="col-xs-10 col-xs-offset-1 soloContainer">
						<div className="titleContainer">
							<h3 className="postTitle">{thisPost[0].title}</h3>
						</div>
						<p>{thisPost[0].body+thisPost[0].body+thisPost[0].body}</p>
					</div>
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