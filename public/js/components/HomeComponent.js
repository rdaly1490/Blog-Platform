var React = require("react");
var $ = require("jquery");
var api = require("../api/api");

module.exports = React.createClass({
	getInitialState: function() {
		this.getPosts();
		return {
			errors: {},
			blogPosts: [],
			isLoading: true
		}
	},
	render: function() {
		var toMap = this.state.blogPosts;
		if(this.state.isLoading){
			var pagination = 
				(
					<div></div>
				);
		}
		else{
			var numberPages = Math.ceil(toMap.length/5);
			var paginationToRender = [];

			for(var i=0; i<numberPages; i++){
				paginationToRender.push(<li><a href="#">{i+1}</a></li>);
			}
			console.log(paginationToRender)
			var pagination =
				(
					<nav>
						<ul className="pagination">
					    	<li id="start">
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
						<h1>{model.title}</h1>
						<p>{model.body}</p>
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
					isLoading: false
				});
			});
	}
});