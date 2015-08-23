var React = require("react");
var $ = require("jquery");
var api = require("../api/api");

module.exports = React.createClass({
	getInitialState: function() {
		this.getPosts();
		return {
			errors: {},
			blogPosts: [],
			totalPosts: [],
			isLoading: true,
			pageNumber: 1
		}
	},
	render: function() {
		var that = this;
		var toMap = this.state.blogPosts;
		var totalPosts = this.state.totalPosts;
		if(this.state.isLoading){
			var pagination = 
				(
					<div></div>
				);
		}
		else{
			var numberPages = Math.ceil(totalPosts.length/5);
			var paginationToRender = [];

			for(var i=0; i<numberPages; i++){
				var pageNumber = i+1
				paginationToRender.push(<li onClick={this.changePage(pageNumber)}><a href="#home">{pageNumber}</a></li>);
			}
			var pagination =
				(
					<nav className="col-xs-8 col-xs-offset-2">
						<ul className="pagination">
					    	{paginationToRender}
					  	</ul>
					</nav>
				);
		}
		if(this.state.isLoading){
			var loading = <h1 className="loading">Loading...</h1>
		}
		else {
			var loading = <h1></h1>
		}
		var renderPosts = toMap.map(function(model, index){
			if(index < 5){
				return (
					<div className="col-xs-8 col-xs-offset-2 postContainer">
						<div className="titleContainer">
							<h3 className="postTitle">{model.title}</h3>
						</div>
						<p className="postBody">{(model.body).substr(0,150)+"..."}</p>
						<div className="readmore" onClick ={that.soloView(model)}>Read More</div>
					</div>
				);
			}
		});
		return (
			<div className="container-fluid homeContainer">
				<div className="container-fluid heroContainer">
					<div className="col-xs-12 heroImg">
						<h4>Welcome to my blog</h4>
					</div>
				</div>
				<div>
					{loading}
					{renderPosts}
					{pagination}
				</div>
			</div>
		);
	},
	getPosts: function(userId){
		api.getPosts(1)
			.then((res) => {
				this.setState({
					blogPosts: res,
					totalPosts: res,
					isLoading: false
				});
			});
	},
	changePage: function(pageNumber){
		var that = this;
		return function(e){
			e.preventDefault();
			var postsPerPage = 5;
			var pageStart = ((pageNumber*postsPerPage)-postsPerPage);
			var pageEnd = pageNumber*postsPerPage;
			var newArray = that.state.totalPosts.slice(pageStart,pageEnd);
			that.setState({
				blogPosts: newArray
			});
		}
	},
	soloView: function(model){
		var that = this;
		return function(e){
			var postId = model.id;
			that.props.myRouter.navigate("post/"+postId, {trigger:true});
		}
	}
});