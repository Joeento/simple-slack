'use strict';

var request = require('request');

var SlackObject = function(access_token) {
	this.url = 'https://slack.com/api/';

	this.access_token = access_token;

};

SlackObject.prototype.test = function(name) {
	return 'Tests ' + this.access_token;
};

SlackObject.prototype.api = function(method, args, callback) {
	request({
		url: this.url + method,
		method: 'POST',
		json: args,
	}, callback);

};


module.exports = SlackObject;