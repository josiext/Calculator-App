/* global module */
/* global require */

/**
 * Module Imports
 */

const R = require("ramda");
const { CONFIGS, OPERATORS } = require("./constants");

/**
 * Business Functions
 */

const round = (nr) =>
  Math.round((nr + Number.EPSILON) * 10 ** CONFIGS.DECIMALS) /
  10 ** CONFIGS.DECIMALS;

const doOperation = ({ operator, nr1, nr2 }) => {
  const getResult = R.cond([
    [R.equals(OPERATORS.ADD), R.always(String(round(R.add(nr1, nr2))))],
    [
      R.equals(OPERATORS.SUBTRACT),
      R.always(String(round(R.subtract(nr1, nr2)))),
    ],
    [R.equals(OPERATORS.DIVISION), R.always(String(round(R.divide(nr1, nr2))))],
    [
      R.equals(OPERATORS.MULTIPLICATION),
      R.always(String(round(R.multiply(nr1, nr2)))),
    ],
    [R.T, R.always("")],
  ]);

  return getResult(operator);
};

/**
 * Module Exports
 */

module.exports = { doOperation };
