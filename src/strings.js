goog.provide('p90x3.Strings');

/**
 * @constructor
 */
p90x3.Strings = function () {
};

(function () {
	'use strict';

	/**
	 * @param {!string} a
	 * @param {!string} b
	 * @return {!number}
	 */
	p90x3.Strings.compare = function (a, b) {
		if (a > b) {
			return 1;
		} else if (b == a) {
			return 0;
		}

		return -1;
	};

	/**
	 * @param {!*} s
	 * @param {!string} p
	 * @param {!number} l
	 * @return {!string}
	 */
	p90x3.Strings.pad = function (s, p, l) {
		if (p.length === 0) {
			return '' + s;
		}

		var t = '' + s;
		while (t.length < l) {
			t = p + t;
		}

		return t;
	};
}());
