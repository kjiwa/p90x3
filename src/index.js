goog.provide('p90x3.Index');

goog.require('p90x3.Arrays');
goog.require('p90x3.Calendar');
goog.require('p90x3.Dates');
goog.require('p90x3.Plan');
goog.require('p90x3.Properties');
goog.require('p90x3.Strings');
goog.require('p90x3.Workout');

/**
 * @constructor
 */
p90x3.Index = function () {
	/**
	 * @const
	 * @private
	 * @type {!Array.<!Element>}
	 */
	this.CONTAINERS_ALL_ = p90x3.Html.query([
		'.program_caption',
		'.program_countdown_days',
		'.program_today_name',
		'.program_tomorrow_name',
		'.program_video',
		'.schedule_calendars'
	]);

	/**
	 * @const
	 * @private
	 * @type {!Array.<!Element>}
	 */
	this.CONTAINERS_VIDEO_ = p90x3.Html.query([
		'.program_video',
		'.program_caption'
	]);

	/**
	 * @const
	 * @private
	 * @type {!string}
	 */
	this.CSS_HIDDEN_ = 'p90x3-index-hidden';

	/**
	 * @const
	 * @private
	 * @type {!string}
	 */
	this.CSS_START_END_ = 'p90x3-index-selected';

	/**
	 * @const
	 * @private
	 * @type {!number}
	 */
	this.VIDEO_HEIGHT_ = 360;

	/**
	 * @const
	 * @private
	 * @type {!number}
	 */
	this.VIDEO_WIDTH_ = 640;

	/**
	 * @private
	 * @type {!Array.<!p90x3.Calendar>}
	 */
	this.calendars_ = [];

	/**
	 * @private
	 * @type {!p90x3.Properties}
	 */
	this.properties_ = p90x3.Properties.parse(window.location.hash.substr(1));

	this.initOptions_();
	this.initScheduleNavigation_();

	this.renderWorkoutList_();
	this.refresh_();
};

(function () {
	'use strict';

	/**
	 * @private
	 * @return {void}
	 */
	p90x3.Index.prototype.refresh_ = function () {
		var plan = this.getPlan_();
		if (!plan) {
			return;
		}

		var start = this.getStart_();
		if (!start) {
			return;
		}

		var end = p90x3.Dates.copy(start);
		end.setDate(end.getDate() + plan.getWorkouts().length - 1);

		var today = new Date();

		this.clearContainers_(this.CONTAINERS_ALL_);
		this.saveOptions_(plan, start);
		this.renderSchedule_(plan, start, end, today);
		this.renderProgramSummary_(plan, start, end, today);

		var i = p90x3.Dates.daysBetween(start, today);
		if (i >= 0 && i < plan.getWorkouts().length) {
			this.renderProgramVideo_(plan.getWorkouts()[i]);
		}
	};

	/**
	 * @private
	 * @param {!p90x3.Workout} workout
	 * @return {void}
	 */
	p90x3.Index.prototype.refreshVideo_ = function (workout) {
		this.clearContainers_(this.CONTAINERS_VIDEO_);
		this.renderProgramVideo_(workout);
	};

	/**
	 * @private
	 * @param {!Array.<!Element>} containers
	 * @return {void}
	 */
	p90x3.Index.prototype.clearContainers_ = function (containers) {
		for (var i = 0, j = containers.length; i < j; ++i) {
			p90x3.Html.clear(containers[i]);
		}
	};

	/**
	 * @private
	 * @return {Date}
	 */
	p90x3.Index.prototype.getStart_ = function () {
		var s = document.querySelector('input[name=start]');
		if (!s) {
			return null;
		}

		return p90x3.Dates.parse(s.value);
	};

	/**
	 * @private
	 * @return {p90x3.Plan}
	 */
	p90x3.Index.prototype.getPlan_ = function () {
		var s = document.querySelector('select[name=plan]');
		if (!s) {
			return null;
		}

		for (var i = 0, j = p90x3.Plan.PLANS.length; i < j; ++i) {
			var p = p90x3.Plan.PLANS[i];
			if (s.value == this.getPlanValue_(p)) {
				return p;
			}
		}

		return null;
	};

	/**
	 * @private
	 * @param {!p90x3.Plan} plan
	 * @return {!string}
	 */
	p90x3.Index.prototype.getPlanValue_ = function (plan) {
		return plan.getName().toLowerCase().replace(/\s+/g, '-');
	};

	/**
	 * @private
	 * @return {void}
	 */
	p90x3.Index.prototype.initOptions_ = function () {
		this.initOptionsPlans_();
		this.initOptionsStart_();
	};

	/**
	 * @private
	 * @return {void}
	 */
	p90x3.Index.prototype.initOptionsPlans_ = function () {
		var select = document.querySelector('select[name=plan]');
		if (!select) {
			return;
		}

		for (var i = 0, j = p90x3.Plan.PLANS.length; i < j; ++i) {
			var txt = document.createTextNode(p90x3.Plan.PLANS[i].getName());
			var value = this.getPlanValue_(p90x3.Plan.PLANS[i]);
			var option = document.createElement('option');
			option.appendChild(txt);
			option.setAttribute('value', value);
			select.appendChild(option);

			if (this.properties_.has('plan') && this.properties_.get('plan') == p90x3.Plan.PLANS[i].getName()) {
				option.setAttribute('selected', true);
			}
		}

		(function (index) {
			/**
			 * @param {Event} e
			 * @return {void}
			 */
			var callback = function (e) {
				index.refresh_();
			};

			select.addEventListener('change', callback, false);
		}(this));
	};

	/**
	 * @private
	 * @return {void}
	 */
	p90x3.Index.prototype.initOptionsStart_ = function () {
		var date = null;
		if (this.properties_.has('start')) {
			var start = this.properties_.get('start');
			if (start) {
				date = p90x3.Dates.parse(start);
			}
		}

		if (!date) {
			date = new Date();
		}

		this.setStart_(date);
	};

	/**
	 * @private
	 * @return {void}
	 */
	p90x3.Index.prototype.initScheduleNavigation_ = function () {
		var prev = document.querySelector('.schedule_prev');
		if (!prev) {
			return;
		}

		var next = document.querySelector('.schedule_next');
		if (!next) {
			return;
		}

		(function (index) {
			/**
			 * @param {Event} e
			 * @return {void}
			 */
			var prevCallback = function (e) {
				var date = index.getStart_();
				date.setMonth(date.getMonth() - 1);
				index.setStart_(date);
				index.refresh_();
			};

			/**
			 * @param {Event} e
			 * @return {void}
			 */
			var nextCallback = function (e) {
				var date = index.getStart_();
				date.setMonth(date.getMonth() + 1);
				index.setStart_(date);
				index.refresh_();
			};

			prev.addEventListener('click', prevCallback, false);
			next.addEventListener('click', nextCallback, false);
		}(this));
	};

	/**
	 * @private
	 * @param {!p90x3.Plan} plan
	 * @param {!Date} start
	 * @param {!Date} end
	 * @param {!Date} today
	 * @return {void}
	 */
	p90x3.Index.prototype.renderProgramSummary_ = function (plan, start, end, today) {
		var tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);

		this.renderProgramSummaryCountdownOrVictory_(plan, start, end, today);
		this.renderProgramSummaryComponent_('.program_today_name', plan, start, today);
		this.renderProgramSummaryComponent_('.program_tomorrow_name', plan, start, tomorrow);
	};

	/**
	 * @private
	 * @param {!string} cssClass
	 * @param {!p90x3.Plan} plan
	 * @param {!Date} start
	 * @param {!Date} date
	 * @return {void}
	 */
	p90x3.Index.prototype.renderProgramSummaryComponent_ = function (cssClass, plan, start, date) {
		var e = document.querySelector(cssClass);
		if (!e) {
			return;
		}

		var index = p90x3.Dates.daysBetween(start, date);
		if (index < 0 || index >= plan.getWorkouts().length) {
			e.parentNode.classList.add(this.CSS_HIDDEN_);
			return;
		}

		e.parentNode.classList.remove(this.CSS_HIDDEN_);

		var workout = plan.getWorkouts()[index];
		var txt = document.createTextNode(workout.getName());
		e.appendChild(txt);

		(function (index) {
			/**
			 * @param {Event} e
			 * @return {void}
			 */
			var callback = function (e) {
				index.refreshVideo_(workout);
			};

			e.addEventListener('click', callback, false);
		}(this));
	};

	/**
	 * @private
	 * @param {!p90x3.Plan} plan
	 * @param {!Date} start
	 * @param {!Date} end
	 * @param {!Date} today
	 */
	p90x3.Index.prototype.renderProgramSummaryCountdownOrVictory_ = function (plan, start, end, today) {
		var countdown = document.querySelector('.program_countdown');
		if (!countdown) {
			return;
		}

		var victory = document.querySelector('.program_victory');
		if (!victory) {
			return;
		}

		countdown.classList.add(this.CSS_HIDDEN_);
		victory.classList.add(this.CSS_HIDDEN_);

		if (p90x3.Dates.compare(today, start) < 0) {
			var days = countdown.querySelector('.program_countdown_days');
			if (!days) {
				return;
			}

			var txt = document.createTextNode(p90x3.Dates.daysBetween(today, start));
			days.appendChild(txt);

			countdown.classList.remove(this.CSS_HIDDEN_);
		} else if (p90x3.Dates.daysBetween(end, today) > 0) {
			victory.classList.remove(this.CSS_HIDDEN_);
		}
	};

	/**
	 * @private
	 * @param {!p90x3.Workout} workout
	 * @return {void}
	 */
	p90x3.Index.prototype.renderProgramVideo_ = function (workout) {
		var e = document.querySelector('.program_video');
		if (!e) {
			return;
		}

		var video = document.createElement('video');
		video.setAttribute('controls', true);
		video.setAttribute('height', this.VIDEO_HEIGHT_);
		video.setAttribute('width', this.VIDEO_WIDTH_);
		e.appendChild(video);

		var videos = workout.getVideos();
		for (var i = 0, j = videos.length; i < j; ++i) {
			var source = document.createElement('source');
			source.setAttribute('src', videos[i].getSource());
			source.setAttribute('type', videos[i].getType());
			video.appendChild(source);
		}

		this.renderProgramVideoCaption_(workout);
	};

	/**
	 * @private
	 * @param {!p90x3.Workout} workout
	 * @return {void}
	 */
	p90x3.Index.prototype.renderProgramVideoCaption_ = function (workout) {
		var e = document.querySelector('.program_caption');
		if (!e) {
			return;
		}

		var txt = document.createTextNode(workout.getName());
		e.appendChild(txt);
	};

	/**
	 * @private
	 * @param {!p90x3.Plan} plan
	 * @param {!Date} start
	 * @param {!Date} end
	 * @param {!Date} today
	 * @return {void}
	 */
	p90x3.Index.prototype.renderSchedule_ = function (plan, start, end, today) {
		this.renderScheduleCalendars_(plan, start, end);
		this.renderScheduleCalendarsProgress_(start, end, today);

		var container = document.querySelector('.schedule_calendars');
		if (!container) {
			return;
		}

		for (var i = 0, j = this.calendars_.length; i < j; ++i) {
			var e = document.createElement('div');
			container.appendChild(e);
			this.calendars_[i].render(e);
		}
	};

	/**
	 * @private
	 * @param {!p90x3.Plan} plan
	 * @param {!Date} start
	 * @param {!Date} end
	 * @return {void}
	 */
	p90x3.Index.prototype.renderScheduleCalendars_ = function (plan, start, end) {
		this.calendars_ = [];

		var cur = p90x3.Dates.copy(start);
		cur.setDate(1);

		(function (index) {
			/**
			 * @param {!Date} date
			 * @return {void}
			 */
			var callback = function (date) {
				index.setStart_(date);
				index.refresh_();
			};

			while (p90x3.Dates.compare(cur, end) < 0) {
				index.calendars_.push(new p90x3.Calendar(cur, callback));
				cur.setMonth(cur.getMonth() + 1);
			}
		}(this));
	};

	/**
	 * @private
	 * @param {!Date} start
	 * @param {!Date} end
	 * @return {void}
	 */
	p90x3.Index.prototype.renderScheduleCalendarsProgress_ = function (start, end, today) {
		for (var i = 0, j = this.calendars_.length; i < j; ++i) {
			var cal = this.calendars_[i];
			var cur = p90x3.Dates.copy(cal.getDate());
			cur.setDate(1);

			while (cur.getMonth() == cal.getDate().getMonth()) {
				if (p90x3.Dates.compare(start, cur) === 0 || p90x3.Dates.compare(cur, end) === 0) {
					cal.select(cur, this.CSS_START_END_);
				} else if (p90x3.Dates.compare(start, cur) < 0 && p90x3.Dates.compare(cur, today) < 0 && p90x3.Dates.compare(cur, end) < 0) {
					cal.select(cur);
				}

				cur.setDate(cur.getDate() + 1);
			}
		}
	};

	/**
	 * @private
	 * @return {void}
	 */
	p90x3.Index.prototype.renderWorkoutList_ = function () {
		var ul = document.querySelector('.workouts ul');
		if (!ul) {
			return;
		}

		(function (index) {
			/**
			 * @param {Event} e
			 * @return {void}
			 */
			var callback = function (e) {
				var txt = e.target.textContent;
				for (var i = 0, j = p90x3.Workout.WORKOUTS.length; i < j; ++i) {
					if (txt == p90x3.Workout.WORKOUTS[i].getName()) {
						index.refreshVideo_(p90x3.Workout.WORKOUTS[i]);
					}
				}
			};

			ul.addEventListener('click', callback, false);
		}(this));

		var workouts = p90x3.Workout.WORKOUTS;
		for (var i = 0, j = workouts.length; i < j; ++i) {
			var txt = document.createTextNode(p90x3.Workout.WORKOUTS[i].getName());
			var li = document.createElement('li');
			li.appendChild(txt);
			ul.appendChild(li);
		}
	};

	/**
	 * private
	 * @param {!p90x3.Plan} plan
	 * @param {!Date} start
	 * @return {void}
	 */
	p90x3.Index.prototype.saveOptions_ = function (plan, start) {
		var p = new p90x3.Properties();
		p.set('plan', plan.getName());
		p.set('start', p90x3.Dates.toString(start));

		window.location.hash = p.toString();
	};

	/**
	 * @private
	 * @param {!Date} date
	 * @return {void}
	 */
	p90x3.Index.prototype.setStart_ = function (date) {
		var input = document.querySelector('input[name=start]');
		if (!input) {
			return;
		}

		var y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate();
		var value = [ y, p90x3.Strings.pad(m, '0', 2), p90x3.Strings.pad(d, '0', 2) ].join('-');
		input.setAttribute('value', value);
	};

	new p90x3.Index();
}());
