'use strict';

/**
 * Module dependencies.
 */

const mocha = require('mocha');
const Base = mocha.reporters.Base;
const inherits = mocha.utils.inherits;

/**
 * Expose `NeatPorter`.
 */

exports = module.exports = NeatPorter;

/**
 * Initialize a new `NeatPorter` test reporter.
 *
 * @api public
 * @param {Runner} runner
 */
function NeatPorter(runner) {
  Base.call(this, runner);

  let self = this;

  runner.on('end', self.epilogue.bind(self));
}

/**
 * Inherit from `Base.prototype`.
 */
inherits(NeatPorter, Base);
