goog.provide('p90x3.Plan');

goog.require('p90x3.Arrays');
goog.require('p90x3.I18n');
goog.require('p90x3.Workout');

/**
 * @constructor
 * @param {!string} name
 * @param {!Array.<!p90x3.Workout>} workouts
 */
p90x3.Plan = function (name, workouts) {
	/**
	 * @private
	 * @type {!string}
	 */
	this.name_ = name;

	/**
	 * @private
	 * @type {!Array.<!p90x3.Workout>}
	 */
	this.workouts_ = p90x3.Arrays.copy(workouts);
};

(function () {
	'use strict';

	/**
	 * @return {!string}
	 */
	p90x3.Plan.prototype.getName = function () {
		return this.name_;
	};

	/**
	 * @return {!Array.<!p90x3.Workout>}
	 */
	p90x3.Plan.prototype.getWorkouts = function () {
		return this.workouts_;
	};

	/**
	 * @const
	 * @type {!p90x3.Plan}
	 */
	p90x3.Plan.CLASSIC = new p90x3.Plan(p90x3.I18n.CLASSIC, [
		// block 1
		p90x3.Workout.TOTAL_SYNERGISTICS,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.THE_CHALLENGE,
		p90x3.Workout.CVX,
		p90x3.Workout.THE_WARRIOR,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.TOTAL_SYNERGISTICS,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.THE_CHALLENGE,
		p90x3.Workout.CVX,
		p90x3.Workout.THE_WARRIOR,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.TOTAL_SYNERGISTICS,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.THE_CHALLENGE,
		p90x3.Workout.CVX,
		p90x3.Workout.THE_WARRIOR,
		p90x3.Workout.DYNAMIX,

		// transition
		p90x3.Workout.ISOMETRIX,
		p90x3.Workout.DYNAMIX,
		p90x3.Workout.ACCELERATOR,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.CVX,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.DYNAMIX,

		// block 2
		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.TRIOMETRICS,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.INCINERATOR,
		p90x3.Workout.MMX,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.TRIOMETRICS,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.INCINERATOR,
		p90x3.Workout.MMX,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.TRIOMETRICS,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.INCINERATOR,
		p90x3.Workout.MMX,
		p90x3.Workout.DYNAMIX,

		// transition
		p90x3.Workout.ISOMETRIX,
		p90x3.Workout.DYNAMIX,
		p90x3.Workout.ACCELERATOR,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.CVX,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.DYNAMIX,

		// block 3
		p90x3.Workout.DECELERATOR,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.THE_CHALLENGE,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.TRIOMETRICS,
		p90x3.Workout.TOTAL_SYNERGISTICS,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.DECELERATOR,
		p90x3.Workout.MMX,
		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.TRIOMETRICS,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.DECELERATOR,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.THE_CHALLENGE,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.TRIOMETRICS,
		p90x3.Workout.TOTAL_SYNERGISTICS,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.DECELERATOR,
		p90x3.Workout.MMX,
		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.TRIOMETRICS,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.DYNAMIX,

		// victory
		p90x3.Workout.ISOMETRIX,
		p90x3.Workout.ACCELERATOR,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.DYNAMIX,
		p90x3.Workout.DYNAMIX
	]);

	/**
	 * @const
	 * @type {!p90x3.Plan}
	 */
	p90x3.Plan.LEAN = new p90x3.Plan(p90x3.I18n.LEAN, [
		// block 1
		p90x3.Workout.ACCELERATOR,
		p90x3.Workout.THE_WARRIOR,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.CVX,
		p90x3.Workout.ISOMETRIX,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.ACCELERATOR,
		p90x3.Workout.THE_WARRIOR,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.CVX,
		p90x3.Workout.ISOMETRIX,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.ACCELERATOR,
		p90x3.Workout.THE_WARRIOR,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.CVX,
		p90x3.Workout.ISOMETRIX,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.DYNAMIX,

		// transition
		p90x3.Workout.ISOMETRIX,
		p90x3.Workout.DYNAMIX,
		p90x3.Workout.ACCELERATOR,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.DYNAMIX,

		// block 2
		p90x3.Workout.TRIOMETRICS,
		p90x3.Workout.THE_WARRIOR,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.MMX,
		p90x3.Workout.INCINERATOR,
		p90x3.Workout.CVX,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.TRIOMETRICS,
		p90x3.Workout.THE_WARRIOR,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.MMX,
		p90x3.Workout.INCINERATOR,
		p90x3.Workout.CVX,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.TRIOMETRICS,
		p90x3.Workout.THE_WARRIOR,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.MMX,
		p90x3.Workout.INCINERATOR,
		p90x3.Workout.CVX,
		p90x3.Workout.DYNAMIX,

		// transition
		p90x3.Workout.ISOMETRIX,
		p90x3.Workout.DYNAMIX,
		p90x3.Workout.ACCELERATOR,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.DYNAMIX,

		// block 3
		p90x3.Workout.DECELERATOR,
		p90x3.Workout.MMX,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.TRIOMETRICS,
		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.MMX,
		p90x3.Workout.DECELERATOR,
		p90x3.Workout.TRIOMETRICS,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.DECELERATOR,
		p90x3.Workout.CVX,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.DECELERATOR,
		p90x3.Workout.MMX,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.TRIOMETRICS,
		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.MMX,
		p90x3.Workout.DECELERATOR,
		p90x3.Workout.TRIOMETRICS,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.DECELERATOR,
		p90x3.Workout.CVX,
		p90x3.Workout.DYNAMIX,

		// victory
		p90x3.Workout.ISOMETRIX,
		p90x3.Workout.ACCELERATOR,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.DYNAMIX,
		p90x3.Workout.DYNAMIX
	]);

	/**
	 * @const
	 * @type {!p90x3.Plan}
	 */
	p90x3.Plan.MASS = new p90x3.Plan(p90x3.I18n.MASS, [
		// block 1
		p90x3.Workout.TOTAL_SYNERGISTICS,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.THE_CHALLENGE,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.INCINERATOR,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.TOTAL_SYNERGISTICS,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.THE_CHALLENGE,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.INCINERATOR,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.TOTAL_SYNERGISTICS,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.THE_CHALLENGE,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.INCINERATOR,
		p90x3.Workout.DYNAMIX,

		// transition
		p90x3.Workout.ISOMETRIX,
		p90x3.Workout.DYNAMIX,
		p90x3.Workout.THE_WARRIOR,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.DYNAMIX,

		// block 2
		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.MMX,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.MMX,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.MMX,
		p90x3.Workout.DYNAMIX,

		// transition
		p90x3.Workout.ISOMETRIX,
		p90x3.Workout.DYNAMIX,
		p90x3.Workout.THE_WARRIOR,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.DYNAMIX,

		// block 3
		p90x3.Workout.TOTAL_SYNERGISTICS,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.THE_CHALLENGE,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.INCINERATOR,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.MMX,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.TOTAL_SYNERGISTICS,
		p90x3.Workout.AGILITY_X,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.THE_CHALLENGE,
		p90x3.Workout.PILATES_X,
		p90x3.Workout.INCINERATOR,
		p90x3.Workout.DYNAMIX,

		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.MMX,
		p90x3.Workout.DYNAMIX,

		// victory
		p90x3.Workout.ISOMETRIX,
		p90x3.Workout.X3_YOGA,
		p90x3.Workout.DECELERATOR,
		p90x3.Workout.ECCENTRIC_UPPER,
		p90x3.Workout.ECCENTRIC_LOWER,
		p90x3.Workout.DYNAMIX
	]);

	/**
	 * @const
	 * @type {!Array.<!p90x3.Plan>}
	 */
	p90x3.Plan.PLANS = [ p90x3.Plan.CLASSIC, p90x3.Plan.LEAN, p90x3.Plan.MASS ];
}());
