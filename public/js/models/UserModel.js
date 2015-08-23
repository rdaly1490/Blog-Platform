var Backbone = require("backbone");

module.exports = Backbone.Model.extend({
	defaults: {
		createdAt: Date.now(),
		updatedAt: null,
		username:"",
		password:"",
		email:""
	}
});