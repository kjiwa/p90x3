goog.provide('p90x3.Arrays');

/**
 * @constructor
 */
p90x3.Arrays = function () {
};

(function () {
	'use strict';

	/**
	 * @param {!Array.<*>} a
	 * @return {!Array.<*>}
	 */
	p90x3.Arrays.copy = function (a) {
		return a.slice(0);
	};
}());
