'use strict';

var request = require('request');

var Slack = function(access_token) {
	this.url = 'https://slack.com/api/';
	this.access_token = access_token;

};

Slack.prototype.authenticate = function(client_id, client_secret, code, callback) {
	this.api('oauth.access',
	{
		client_id: client_id,
		client_secret: client_secret,
		code: code
	},
	callback);

};

Slack.prototype.api = function(method, args, callback) {
	args = args || {};
	args.access_token = this.access_token;
	console.log(args);
	request({
		url: this.url + method,
		method: 'POST',
		formData: args,
	}, callback);

};

module.exports = Slack;
