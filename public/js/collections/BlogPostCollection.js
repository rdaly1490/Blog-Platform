var Backbone = require('backbone');
var BlogPostModel = require('../models/BlogPostModel');

module.exports = Backbone.Collection.extend({
	model: BlogPostModel
});