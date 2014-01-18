goog.provide('p90x3.Workout');

goog.require('p90x3.I18n');
goog.require('p90x3.Video');

/**
 * @constructor
 * @param {!string} name
 * @param {!Array.<!p90x3.Video>} videos
 */
p90x3.Workout = function (name, videos) {
	/**
	 * @private
	 * @type {!string}
	 */
	this.name_ = name;

	/**
	 * @private
	 * @type {!Array.<!p90x3.Video>}
	 */
	this.videos_ = videos;
};

(function () {
	'use strict';

	/**
	 * @return {!string}
	 */
	p90x3.Workout.prototype.getName = function () {
		return this.name_;
	};

	/**
	 * @return {!Array.<!p90x3.Video>}
	 */
	p90x3.Workout.prototype.getVideos = function () {
		return this.videos_;
	};

	/**
	 * @const
	 * @type {!p90x3.Workout}
	 */
	p90x3.Workout.ACCELERATOR = new p90x3.Workout(
		p90x3.I18n.ACCELERATOR,
		[
			new p90x3.Video('.mp4', 'video/mp4'),
			new p90x3.Video('accelerator.ogv', 'video/ogg')
		]
	);

	/**
	 * @const
	 * @type {!p90x3.Workout}
	 */
	p90x3.Workout.AGILITY_X = new p90x3.Workout(
		p90x3.I18n.AGILITY_X,
		[
			new p90x3.Video('agility-x.mp4', 'video/mp4'),
			new p90x3.Video('agility-x.ogv', 'video/ogg')
		]
	);

	/**
	 * @const
	 * @type {!p90x3.Workout}
	 */
	p90x3.Workout.CVX = new p90x3.Workout(
		p90x3.I18n.CVX,
		[
			new p90x3.Video('cvx.mp4', 'video/mp4'),
			new p90x3.Video('cvx.ogv', 'video/ogg')
		]
	);

	/**
	 * @const
	 * @type {!p90x3.Workout}
	 */
	p90x3.Workout.DECELERATOR = new p90x3.Workout(
		p90x3.I18n.DECELERATOR,
		[
			new p90x3.Video('decelerator.mp4', 'video/mp4'),
			new p90x3.Video('decelerator.ogv', 'video/ogg')
		]
	);

	/**
	 * @const
	 * @type {!p90x3.Workout}
	 */
	p90x3.Workout.DYNAMIX = new p90x3.Workout(
		p90x3.I18n.DYNAMIX,
		[
			new p90x3.Video('dynamix.mp4', 'video/mp4'),
			new p90x3.Video('dynamix.ogv', 'video/ogg')
		]
	);

	/**
	 * @const
	 * @type {!p90x3.Workout}
	 */
	p90x3.Workout.ECCENTRIC_LOWER = new p90x3.Workout(
		p90x3.I18n.ECCENTRIC_LOWER,
		[
			new p90x3.Video('eccentric-lower.mp4', 'video/mp4'),
			new p90x3.Video('eccentric-lower.ogv', 'video/ogg')
		]
	);

	/**
	 * @const
	 * @type {!p90x3.Workout}
	 */
	p90x3.Workout.ECCENTRIC_UPPER = new p90x3.Workout(
		p90x3.I18n.ECCENTRIC_UPPER,
		[
			new p90x3.Video('eccentric-upper.mp4', 'video/mp4'),
			new p90x3.Video('eccentric-upper.ogv', 'video/ogg')
		]
	);

	/**
	 * @const
	 * @type {!p90x3.Workout}
	 */
	p90x3.Workout.INCINERATOR = new p90x3.Workout(
		p90x3.I18n.INCINERATOR,
		[
			new p90x3.Video('incinerator.mp4', 'video/mp4'),
			new p90x3.Video('incinerator.ogv', 'video/ogg')
		]
	);

	/**
	 * @const
	 * @type {!p90x3.Workout}
	 */
	p90x3.Workout.ISOMETRIX = new p90x3.Workout(
		p90x3.I18n.ISOMETRIX,
		[
			new p90x3.Video('isometrix.mp4', 'video/mp4'),
			new p90x3.Video('isometrix.ogv', 'video/ogg')
		]
	);

	/**
	 * @const
	 * @type {!p90x3.Workout}
	 */
	p90x3.Workout.MMX = new p90x3.Workout(
		p90x3.I18n.MMX,
		[
			new p90x3.Video('mmx.mp4', 'video/mp4'),
			new p90x3.Video('mmx.ogv', 'video/ogg')
		]
	);

	/**
	 * @const
	 * @type {!p90x3.Workout}
	 */
	p90x3.Workout.PILATES_X = new p90x3.Workout(
		p90x3.I18n.PILATES_X,
		[
			new p90x3.Video('pilates-x.mp4', 'video/mp4'),
			new p90x3.Video('pilates-x.ogv', 'video/ogg')
		]
	);

	/**
	 * @const
	 * @type {!p90x3.Workout}
	 */
	p90x3.Workout.THE_CHALLENGE = new p90x3.Workout(
		p90x3.I18n.THE_CHALLENGE,
		[
			new p90x3.Video('the-challenge.mp4', 'video/mp4'),
			new p90x3.Video('the-challenge.ogv', 'video/ogg')
		]
	);

	/**
	 * @const
	 * @type {!p90x3.Workout}
	 */
	p90x3.Workout.THE_WARRIOR = new p90x3.Workout(
		p90x3.I18n.THE_WARRIOR,
		[
			new p90x3.Video('the-warrior.mp4', 'video/mp4'),
			new p90x3.Video('the-warrior.ogv', 'video/ogg')
		]
	);

	/**
	 * @const
	 * @type {!p90x3.Workout}
	 */
	p90x3.Workout.TOTAL_SYNERGISTICS = new p90x3.Workout(
		p90x3.I18n.TOTAL_SYNERGISTICS,
		[
			new p90x3.Video('total-synergistics.mp4', 'video/mp4'),
			new p90x3.Video('total-synergistics.ogv', 'video/ogg')
		]
	);

	/**
	 * @const
	 * @type {!p90x3.Workout}
	 */
	p90x3.Workout.TRIOMETRICS = new p90x3.Workout(
		p90x3.I18n.TRIOMETRICS,
		[
			new p90x3.Video('triometrics.mp4', 'video/mp4'),
			new p90x3.Video('triometrics.ogv', 'video/ogg')
		]
	);

	/**
	 * @const
	 * @type {!p90x3.Workout}
	 */
	p90x3.Workout.X3_YOGA = new p90x3.Workout(
		p90x3.I18n.X3_YOGA,
		[
			new p90x3.Video('x3-yoga.mp4', 'video/mp4'),
			new p90x3.Video('x3-yoga.ogv', 'video/ogg')
		]
	);

	/**
	 * @const
	 * @type {!Array.<!p90x3.Workout>}
	 */
	p90x3.Workout.WORKOUTS = [
		p90x3.Workout.ACCELERATOR,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.THE_CHALLENGE,
		p90x3.Workout.CVX,
		p90x3.Workout.DECELERATOR,
		p90x3.Workout.DYNAMIX,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.INCINERATOR,
		p90x3.Workout.ISOMETRIX,
		p90x3.Workout.MMX,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.TOTAL_SYNERGISTICS,
		p90x3.Workout.TRIOMETRICS,
		p90x3.Workout.THE_WARRIOR,
		p90x3.Workout.X3_YOGA
	];
}());
