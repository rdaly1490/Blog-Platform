var Backbone = require("backbone");

module.exports = Backbone.Model.extend({
	defaults: {
		createdAt: Date.now(),
		updatedAt: null,
		userId: null,
		username:"",
		password:"",
		email:"",
		admin: null
	}
});