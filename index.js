/**
 * node-mpg123
 * Javascript mpg123 wrapper for Node.js
 *
 * @author Maciej Sopyło (killah)
 * Copyright 2012 Maciej Sopyło @ KILLAHFORGE.
 *
 * MIT License
 */
 
var	spawn = require('child_process').spawn,
	events = require('events'),
	util = require('util');
 
module.exports = function Sound(filename) {
	events.EventEmitter.call(this);
	this.filename = filename;
};

util.inherits(module.exports, events.EventEmitter);

module.exports.prototype.play = function () {
	this.stopped = false;
	this.process = spawn('mpg123', [ this.filename ]);
	this.process.on('exit', function (code, sig) {
		if (code !== null && sig === null) {
			this.emit('completed');
		}
	});
};
module.exports.prototype.stop = function () {
	this.stopped = true;
	this.process.kill('SIGTERM');
	this.emit('stop');
};
module.exports.prototype.pause = function () {
	if (this.stopped) return;
	this.process.kill('SIGSTOP');
	this.emit('pause');
};
module.exports.prototype.resume = function () {
	if (this.stopped) return this.play();
	this.process.kill('SIGCONT');
	this.emit('resume');
};
