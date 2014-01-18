goog.provide('p90x3.Events');

/**
 * @constructor
 */
p90x3.Events = function () {
};

(function () {
	'use strict';


	/**
	 * private
	 * @type {!Object.<!string, !Array.<!function ()>>}
	 */
	p90x3.Events.bindings_ = {
	};

	/**
	 * @param {!string} e
	 * @param {!function ()} f
	 * @return {void}
	 */
	p90x3.Events.receive = function (e, f) {
		if (!(e in p90x3.Events.bindings_)) {
			p90x3.Events.bindings_[e] = [];
		}

		p90x3.Events.bindings_[e].push(f);
	};

	/**
	 * @param {!string} e
	 * @return {void}
	 */
	p90x3.Events.send = function (e) {
		if (!(e in p90x3.Events.bindings_)) {
			return;
		}

		for (var i = 0, j = p90x3.Events.bindings_[e].length; i < j; ++i) {
			setTimeout(p90x3.Events.bindings_[e][i], 0);
		}
	};
}());
