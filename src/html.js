goog.provide('p90x3.Html');

/**
 * @constructor
 */
p90x3.Html = function () {
};

(function () {
	'use strict';

	/**
	 * @param {!Element} e
	 * @return {void}
	 */
	p90x3.Html.clear = function (e) {
		while (e.firstChild) {
			e.removeChild(e.firstChild);
		}
	};

	/**
	 * @param {!string} s
	 * @param {!Object.<!string, !string>=} p
	 * @return {!string}
	 */
	p90x3.Html.format = function(s, p) {
		var re = /\{\{(\S+)\}\}/g;
		var f = function (match, name) {
			return (p && name in p) ? p90x3.Html.escape_(p[name]) : match;
		};

		return s.replace(re, f);
	};

	/**
	 * @param {!Array.<!string>} selectors
	 * @return {!Array.<!Element>}
	 */
	p90x3.Html.query = function (selectors) {
		var result = [];
		for (var i = 0, j = selectors.length; i < j; ++i) {
			var e = document.querySelector(selectors[i]);
			if (e) {
				result.push(e);
			}
		}

		return result;
	};

	/**
	 * @private
	 * @param {!string} s
	 * @return {!string}
	 */
	p90x3.Html.escape_ = function (s) {
		var t = '';
		for (var i = 0, j = s.length; i < j; ++i) {
			switch (s.charAt(i)) {
			case '&':
				t += '&amp;';
				break;
			case '>':
				t += '&gt;';
				break;
			case '<':
				t += '&lt;';
				break;
			case ' ':
				t += '&nbsp;';
				break;
			case '"':
				t += '&quot;';
				break;
			case '\'':
				t += '&#39;';
				break;
			default:
				t += s.charAt(i);
			}
		}

		return t;
	};
}());
