var React = require('react');
var api = require("../api/api");

module.exports = React.createClass({
	getInitialState: function() {
		var id = 0;
		var postId = this.props.postId;
		(window.signed_in) ? id=window.signed_in.attributes.userId : id=2;
		this.pullSpecificPost(id, postId);
		return {
			errors: {},
			soloPost: [],
			isLoading: true
		}
	},
	render: function() {
		if(window.signed_in){
			if(window.signed_in.attributes.admin === 1){
				var editContent = <button onClick={this.editPost}>Click here to edit content</button>
			}
			else {
				var editContent = <div></div>
			}
		}
		else{
			var editContent = <div></div>
		}
		if(this.state.isLoading){
			return (
				<h1 className="loading">Loading...</h1>
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
						<p className="postBody">{thisPost[0].body+thisPost[0].body+thisPost[0].body}</p>
						{editContent}
					</div>
					<div className="col-xs-10 col-xs-offset-1 editContent">
						<div className="col-xs-10 col-xs-offset-1 editable">
							<label>New Title</label>
							<input ref="newTitle" placeholder="title" />
							<label>New Body</label>
							<textarea ref="newBody"></textarea>
							<button onClick={this.updatePage}>Update Post</button>
						</div>
					</div>
				</div>
			);
		}
	},
	pullSpecificPost: function(userId, postId){
		api.getIndividualPost(userId, postId)
			.then((res) => {
				this.setState({
					soloPost: res,
					isLoading: false
				});
			});
	},
	editPost: function(e){
		e.preventDefault();
		$(".editContent").toggle();
	},
	updatePage: function(e){
		e.preventDefault();
		$(".postTitle").html(this.refs.newTitle.getDOMNode().value);
		$(".postBody").html(this.refs.newBody.getDOMNode().value);
		$(".editContent").toggle();
	}
});




