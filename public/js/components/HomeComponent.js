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
					<nav>
						<ul className="pagination">
					    	<li>
					      		<a href="#" aria-label="Previous">
					       			<span aria-hidden="true">&laquo;</span>
					      		</a>
					    	</li>
					    	{paginationToRender}
						    <li>
					      		<a href="#" aria-label="Next">
					        		<span aria-hidden="true">&raquo;</span>
					     		</a>
					    	</li>
					  	</ul>
					</nav>
				);
		}
		if(this.state.isLoading){
			var loading = <h1>Loading...</h1>
		}
		else {
			var loading = <h1></h1>
		}
		var renderPosts = toMap.map(function(model, index){
			if(index < 5){
				return (
					<div>
						<h3>{model.title}</h3>
						<p>{model.body}</p>
						<p>{model.body}</p>
						<div onClick ={that.soloView(model)}>Click Meeee</div>
					</div>
				);
			}
		});
		return (
			<div>
				<div>
					{loading}
					{renderPosts}
				</div>
				{pagination}
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