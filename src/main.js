"use strict";

/* global require */

/**
 * Module Imports
 */

const R = require("ramda");
const Handler = require("./utils/handlers");
const { Storage } = require("./utils/business");

/**
 * Adding Handlers To The DOM
 */

// Button Handlers

const getBtnHandler = R.cond([
  [R.test(/calculator-btn-action/), R.always(Handler.handleCalculatorAction)],
  [R.test(/calculator-btn-number/), R.always(Handler.handleCalculatorNumber)],
  [
    R.test(/calculator-btn-operation/),
    R.always(Handler.handleCalculatorOperator),
  ],
  [R.equals("calculator-btn-equal"), R.always(Handler.handleCalculatorEqual)],
  [R.T, R.always(() => undefined)],
]);

document.body.addEventListener("click", (e) =>
  getBtnHandler(e.target.id)(e.target.value)
);

// Checkbock Handler

const checkBoxTheme = document.getElementById("theme_checkbox");

checkBoxTheme.addEventListener(
  "change",
  R.pipe(R.path(["target", "checked"]), Handler.handleChangeTheme)
);

checkBoxTheme.checked = R.ifElse(
  R.equals("light"),
  R.always(true),
  R.always(false)
)(Storage.theme.get());

checkBoxTheme.dispatchEvent(new Event("change"));
