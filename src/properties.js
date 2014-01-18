goog.provide('p90x3.Properties');

/**
 * @constructor
 */
p90x3.Properties = function () {
	/**
	 * @private
	 * @type {!Object.<!string, !string>}
	 */
	this.p_ = {
	};
};

(function () {
	'use strict';

	/**
	 * @param {!string} s
	 * @return {!p90x3.Properties}
	 */
	p90x3.Properties.parse = function (s) {
		var p = new p90x3.Properties();

		var a = s.split(';');
		for (var i = 0, j = a.length; i < j; ++i) {
			var b = a[i].split('=');
			p.set(decodeURIComponent(b[0]), decodeURIComponent(b[1]));
		}

		return p;
	};

	/**
	 * @param {!string} key
	 * @return {?string}
	 */
	p90x3.Properties.prototype.get = function (key) {
		if (key in this.p_) {
			return this.p_[key];
		}

		return null;
	};

	/**
	 * @param {!string} key
	 * @return {!boolean}
	 */
	p90x3.Properties.prototype.has = function (key) {
		return key in this.p_;
	};

	/**
	 * @return {!Array.<!string>}
	 */
	p90x3.Properties.prototype.keys = function () {
		return Object.keys(this.p_);
	};

	/**
	 * @param {!string} key
	 * @param {!string} value
	 * @return {void}
	 */
	p90x3.Properties.prototype.set = function (key, value) {
		this.p_[key] = value;
	};

	/**
	 * @return {string}
	 */
	p90x3.Properties.prototype.toString = function () {
		var a = [];
		var keys = Object.keys(this.p_);
		for (var i = 0, j = keys.length; i < j; ++i) {
			var k = keys[i];
			var v = this.p_[k];
			a.push(encodeURIComponent(k) + '=' + encodeURIComponent(v));
		}

		return a.join(';');
	};
}());
