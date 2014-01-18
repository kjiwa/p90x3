goog.provide('p90x3.Dates');

goog.require('p90x3.Strings');

/**
 * @constructor
 */
p90x3.Dates = function () {
};

(function () {
	'use strict';

	/**
	 * @const
	 * @private
	 * @type {!number}
	 */
	p90x3.Dates.MS_PER_DAY_ = 24 * 60 * 60 * 1000;

	/**
	 * @param {!Date} a
	 * @param {!Date} b
	 * @return {!number}
	 */
	p90x3.Dates.compare = function (a, b) {
		return a.getTime() - b.getTime();
	};

	/**
	 * @param {!Date} d
	 * @return {!Date}
	 */
	p90x3.Dates.copy = function (d) {
		return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
	};

	/**
	 * @param {!Date} a
	 * @param {!Date} b
	 * @return {!number}
	 */
	p90x3.Dates.daysBetween = function (a, b) {
		if (a.getTime() > b.getTime()) {
			return -p90x3.Dates.daysBetween(b, a);
		}

		var lhs = p90x3.Dates.copy(a);
		lhs.setHours(0);
		lhs.setMinutes(0);
		lhs.setSeconds(0);
		lhs.setMilliseconds(0);

		var rhs = p90x3.Dates.copy(b);
		rhs.setHours(0);
		rhs.setMinutes(0);
		rhs.setSeconds(0);
		rhs.setMilliseconds(0);

		var days = 0;
		while (lhs.getTime() < rhs.getTime()) {
			lhs.setDate(lhs.getDate() + 1);
			days++;
		}

		return days;
	};

	/**
	 * @param {!string} s
	 * @return {Date}
	 */
	p90x3.Dates.parse = function (s) {
		var parts = s.split(/\W/);
		if (parts.length != 3 && parts.length != 6) {
			return null;
		}

		var y = parseInt(parts[0], 10);
		var m = parseInt(parts[1], 10) - 1;
		var d = parseInt(parts[2], 10);
		var hh = 0;
		var mm = 0;
		var ss = 0;
		if (parts.length == 6) {
			hh = parseInt(parts[3], 10);
			mm = parseInt(parts[4], 10);
			ss = parseInt(parts[5], 10);
		}

		return new Date(y, m, d, hh, mm, ss);
	};

	/**
	 * @param {!Date} date
	 * @return {!string}
	 */
	p90x3.Dates.toString = function (date) {
		var a = [ date.getFullYear(), date.getMonth() + 1, date.getDate() ];
		var b = [ date.getHours(), date.getMinutes(), date.getSeconds() ];
		var i, j;

		var s = '';
		for (i = 0, j = a.length; i < j; ++i) {
			s += p90x3.Strings.pad(a[i], '0', 2);
			if ((i + 1) != j) {
				s += '/';
			}
		}

		s += ' ';
		for (i = 0, j = b.length; i < j; ++i) {
			s += p90x3.Strings.pad(b[i], '0', 2);
			if ((i + 1) != j) {
				s += ':';
			}
		}

		return s;
	};
}());
