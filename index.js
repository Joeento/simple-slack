'use strict';

var Slack = function(client_id, client_secret, code) {
	var url = 'https://slack.com/api/';
};

Slack.prototype.test = function(name) {
	return 'Test ' + name;
};

module.exports = Slack;