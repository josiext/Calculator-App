"use strict";

/* global require */

/**
 * Module Imports
 */

const R = require("ramda");
const H = require("./utils/handlers");
const { Storage } = require("./utils/business");

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

const checkBoxTheme = document.getElementById("theme_checkbox");

checkBoxTheme.addEventListener(
  "change",
  R.pipe(R.path(["target", "checked"]), H.handleChangeTheme)
);

checkBoxTheme.checked = Storage.theme.get() === "light" ? true : false;
checkBoxTheme.dispatchEvent(new Event("change"));
