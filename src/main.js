/* global require */

/**
 * Module Imports
 */

const R = require("ramda");
const H = require("./utils/handlers");

/**
 * Adding Handlers To The DOM
 */

// Btns Handlers

const getBtnHandler = R.cond([
  [R.equals("calculator_number_btn"), R.always(H.handleCalculatorNumber)],
  [R.equals("calculator_action_btn"), R.always(H.handleCalculatorAction)],
  [R.equals("calculator_operator_btn"), R.always(H.handleCalculatorOperator)],
  [R.equals("calculator_equal_btn"), R.always(H.handleCalculatorEqual)],
  [R.T, R.always(() => undefined)],
]);

document.body.addEventListener("click", (e) =>
  getBtnHandler(e.target.id)(e.target.value)
);

// Checkbock Handler

document
  .getElementById("theme_checkbox")
  .addEventListener(
    "change",
    R.pipe(R.path(["target", "checked"]), H.handleChangeTheme)
  );
