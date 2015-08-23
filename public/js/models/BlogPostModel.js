var Backbone = require("backbone");

module.exports = Backbone.Model.extend({
	defaults: {
		createdAt: Date.now(),
		updatedAt: null,
		id: null,
		userId: null,
		title:"",
		body:""
	}
});