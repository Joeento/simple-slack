'use strict';

var request = require('request');

var Slack = function(client_id, client_secret, code) {
	this.url = 'https://slack.com/api/';
	
	this.client_id = client_id;
	this.client_secret = client_secret;
	this.code = code;

	this.access_token = '';

};

Slack.prototype.test = function(name) {
	return 'Test ' + this.url;
};

Slack.prototype.authenticate = function() {

	this.apiCall('oauth.access',
	{
		client_id: this.client_id,
		client_secret: this.client_secret,
		code: this.code
	},
	function(error, response, body) {
		console.log(body);
	});


};

Slack.prototype.apiCall = function(method, args, callback) {
	request({
		url: this.url + method,
		method: 'POST',
		json: args,
	}, callback);

};

module.exports = Slack;