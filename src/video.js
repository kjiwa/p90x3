goog.provide('p90x3.Video');

/**
 * @constructor
 * @param {!string} source
 * @param {!string} type
 */
p90x3.Video = function (source, type) {
	/**
	 * @private
	 * @type {!string}
	 */
	this.source_ = source;

	/**
	 * @private
	 * @type {!string}
	 */
	this.type_ = type;
};

(function () {
	'use strict';

	/**
	 * @return {!string}
	 */
	p90x3.Video.prototype.getSource = function () {
		return this.source_;
	};

	/**
	 * @return {!string}
	 */
	p90x3.Video.prototype.getType = function () {
		return this.type_;
	};
}());
