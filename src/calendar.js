goog.provide('p90x3.Calendar');

goog.require('p90x3.Dates');
goog.require('p90x3.Events');
goog.require('p90x3.Html');
goog.require('p90x3.I18n');

/**
 * @constructor
 * @param {!Date} date
 * @param {!function (!Date)=} clickHandler
 */
p90x3.Calendar = function (date, clickHandler) {
	/**
	 * @private
	 * @const
	 * @type {!string}
	 */
	this.CSS_SELECTED_ = 'p90x3-calendar-selected';

	/**
	 * @private
	 * @const
	 * @type {!Array.<!string>}
	 */
	this.DAYS_OF_WEEK_ = [
		p90x3.I18n.SUNDAY,
		p90x3.I18n.MONDAY,
		p90x3.I18n.TUESDAY,
		p90x3.I18n.WEDNESDAY,
		p90x3.I18n.THURSDAY,
		p90x3.I18n.FRIDAY,
		p90x3.I18n.SATURDAY
	];

	/**
	 * @private
	 * @const
	 * @type {!string}
	 */
	this.EVENT_SELECT_ = 'p90x3-calendar-select';

	/**
	 * @private
	 * @const
	 * @type {!number}
	 */
	this.FIVE_WEEKS_IN_DAYS_ = 35;

	/**
	 * @private
	 * @const
	 * @type {!Array.<!string>}
	 */
	this.MONTHS_OF_YEAR_ = [
		p90x3.I18n.JANUARY,
		p90x3.I18n.FEBRUARY,
		p90x3.I18n.MARCH,
		p90x3.I18n.APRIL,
		p90x3.I18n.MAY,
		p90x3.I18n.JUNE,
		p90x3.I18n.JULY,
		p90x3.I18n.AUGUST,
		p90x3.I18n.SEPTEMBER,
		p90x3.I18n.OCTOBER,
		p90x3.I18n.NOVEMBER,
		p90x3.I18n.DECEMBER
	];

	/**
	 * @private
	 * @const
	 * @type {!string}
	 */
	this.TEMPLATE_HEADER_ = '<table>\n' +
' <thead>\n' +
'  <tr>\n' +
'   <th colspan="7">{{month}}</th>\n' +
'  </tr>\n' +
'  <tr>\n' +
'   <th>{{sunday}}</th>\n' +
'   <th>{{monday}}</th>\n' +
'   <th>{{tuesday}}</th>\n' +
'   <th>{{wednesday}}</th>\n' +
'   <th>{{thursday}}</th>\n' +
'   <th>{{friday}}</th>\n' +
'   <th>{{saturday}}</th>\n' +
'  </tr>\n' +
' </thead>\n' +
' <tbody>\n';

	/**
	 * @private
	 * @const
	 * @type {!string}
	 */
	this.TEMPLATE_WEEK_START_ = '  <tr>\n';

	/**
	 * @private
	 * @const
	 * @type {!string}
	 */
	this.TEMPLATE_CELL_ = '   <td>{{date}}</td>\n';

	/**
	 * @private
	 * @const
	 * @type {!string}
	 */
	this.TEMPLATE_CELL_INACTIVE_ = '   <td class="p90x3-calendar-inactive">&nbsp;</td>\n';

	/**
	 * @private
	 * @const
	 * @type {!string}
	 */
	this.TEMPLATE_WEEK_END_ = '  </tr>\n';

	/**
	 * @private
	 * @const
	 * @type {!string}
	 */
	this.TEMPLATE_FOOTER_ = ' </tbody>\n' +
'</table>\n';

	/**
	 * @private
	 * @type {?function (!Date)}
	 */
	this.clickHandler_ = null;
	if (clickHandler) {
		this.clickHandler_ = clickHandler;
	}

	/**
	 * @private
	 * @type {!Array.<!Element>}
	 */
	this.containers_ = [];

	/**
	 * @private
	 * @type {!Date}
	 */
	this.date_ = p90x3.Dates.copy(date);

	/**
	 * @private
	 * @type {!Object.<!string, ?string>}
	 */
	this.selected_ = [];

	(function (c) {
		/**
		 * @return {void}
		 */
		var callback = function () {
			c.render();
		};

		p90x3.Events.receive(c.EVENT_SELECT_, callback);
	}(this));
};

(function () {
	'use strict';

	/**
	 * @return {!Date}
	 */
	p90x3.Calendar.prototype.getDate = function () {
		return this.date_;
	};

	/**
	 * @param {!Element=} e
	 * @return {void}
	 */
	p90x3.Calendar.prototype.render = function (e) {
		if (e) {
			this.containers_.push(e);
			this.bindClickHandler_(e);
		}

		var html = this.renderHeader_() + this.renderBody_() + this.renderFooter_();
		for (var i = 0, j = this.containers_.length; i < j; ++i) {
			this.containers_[i].innerHTML = html;
		}

		this.highlightSelected_();
	};

	/**
	 * @param {!Date} date
	 * @param {!string=} cssClass
	 * @return {void}
	 */
	p90x3.Calendar.prototype.select = function (date, cssClass) {
		if (date.getMonth() != this.date_.getMonth() || date.getFullYear() != this.date_.getFullYear()) {
			return;
		}

		this.selected_['' + date.getDate()] = cssClass ? cssClass : null;
		p90x3.Events.send(this.EVENT_SELECT_);
	};

	/**
	 * @private
	 * @param {!Element} e
	 * @return {void}
	 */
	p90x3.Calendar.prototype.bindClickHandler_ = function (e) {
		if (!this.clickHandler_) {
			return;
		}

		(function (calendar) {
			/**
			 * @param {Event} event
			 * @return {void}
			 */
			var callback = function (event) {
				if (!event) {
					return;
				}

				var dom = parseInt(event.target.textContent, 10);
				if (isNaN(dom)) {
					return;
				}

				var date = p90x3.Dates.copy(calendar.date_);
				date.setDate(dom);
				calendar.clickHandler_(date);
			};

			e.addEventListener('click', callback, false);
		}(this));
	};

	/**
	 * @private
	 * @return {void}
	 */
	p90x3.Calendar.prototype.highlightSelected_ = function () {
		for (var i = 0, j = this.containers_.length; i < j; ++i) {
			var tds = this.containers_[i].querySelectorAll('td');
			for (var k = 0, l = tds.length; k < l; ++k) {
				var d = tds[k].textContent;
				if (d in this.selected_) {
					if (this.selected_[d]) {
						tds[k].classList.add(this.selected_[d]);
					} else {
						tds[k].classList.add(this.CSS_SELECTED_);
					}
				}
			}
		}
	};

	/**
	 * @private
	 * @return {!string}
	 */
	p90x3.Calendar.prototype.renderHeader_ = function () {
		var args = {
			'month': this.MONTHS_OF_YEAR_[this.date_.getMonth()],
			'sunday': this.DAYS_OF_WEEK_[0].substr(0, 1),
			'monday': this.DAYS_OF_WEEK_[1].substr(0, 1),
			'tuesday': this.DAYS_OF_WEEK_[2].substr(0, 1),
			'wednesday': this.DAYS_OF_WEEK_[3].substr(0, 1),
			'thursday': this.DAYS_OF_WEEK_[4].substr(0, 1),
			'friday': this.DAYS_OF_WEEK_[5].substr(0, 1),
			'saturday': this.DAYS_OF_WEEK_[6].substr(0, 1)
		};

		return p90x3.Html.format(this.TEMPLATE_HEADER_, args);
	};

	/**
	 * @private
	 * @return {!string}
	 */
	p90x3.Calendar.prototype.renderBody_ = function () {
		var first = new Date(this.date_.getFullYear(), this.date_.getMonth(), 1, 0, 0, 0);

		var end = p90x3.Dates.copy(first);
		end.setMonth(end.getMonth() + 1);
		end.setDate(0);

		var cur = p90x3.Dates.copy(first);
		while (cur.getDay() !== 0) {
			cur.setDate(cur.getDate() - 1);
		}

		var last = p90x3.Dates.copy(cur);
		last.setDate(last.getDate() + this.FIVE_WEEKS_IN_DAYS_);

		var html = '';
		for (; cur.getDay() > 0 || p90x3.Dates.compare(cur, last) <= 0; cur.setDate(cur.getDate() + 1)) {
			html += this.renderCell_(cur, first, end);
		}

		return html;
	};

	/**
	 * @private
	 * @param {!Date} date
	 * @param {!Date} first
	 * @param {!Date} last
	 * @return {!string}
	 */
	p90x3.Calendar.prototype.renderCell_ = function (date, first, last) {
		var html = '';
		if (date.getDay() === 0) {
			html += p90x3.Html.format(this.TEMPLATE_WEEK_START_);
		}

		if (p90x3.Dates.compare(first, date) <= 0 && p90x3.Dates.compare(date, last) <= 0) {
			html += p90x3.Html.format(this.TEMPLATE_CELL_, { 'date': '' + date.getDate() });
		} else {
			html += p90x3.Html.format(this.TEMPLATE_CELL_INACTIVE_);
		}

		if (date.getDay() == 6) {
			html += p90x3.Html.format(this.TEMPLATE_WEEK_END_);
		}

		return html;
	};

	/**
	 * @private
	 * @return {!string}
	 */
	p90x3.Calendar.prototype.renderFooter_ = function () {
		return p90x3.Html.format(this.TEMPLATE_FOOTER_);
	};
}());
