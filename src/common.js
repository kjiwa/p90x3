(function () {
	'use strict';

	if (!window.goog) {
		/**
		 * @type {!Object}
		 */
		window.goog = {
		};

		/**
		 * @param {!string} s
		 * @return {void}
		 */
		window.goog.provide = function (s) {
		};

		/**
		 * @param {!string} s
		 * @return {void}
		 */
		window.goog.require = function (s) {
		};

		/**
		 * @param {!Object} C
		 * @param {!Object} B
		 */
		window.goog.inherits = function (C, B) {
			C.prototype = new B();
			C.prototype.constructor = C;
		};
	}

	/**
	 * @type {!Object}
	 */
	window.p90x3 = {
	};
}());
