var $ = require("jquery");

var api = {
	getPosts(userId){
		var url = 'http://jsonplaceholder.typicode.com/posts?userId='+userId;

		return fetch(url)
				.then((res) => res.json())

	},
	getIndividualPost(userId, postId){
		var url = 'http://jsonplaceholder.typicode.com/posts?userId='+userId+'&id='+postId;

		return fetch(url)
				.then((res) => res.json())
	}
}

module.exports = api;