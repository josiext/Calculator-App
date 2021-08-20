/* global module */
/* global require */

/**
 * Module Imports
 */

const R = require("ramda");

const { getValuesInScreen, setValuesInScreen, setTheme } = require("./dom");
const { doOperation } = require("./business");
const { CONFIGS, THEMES } = require("./constants");

/**
 * Handlers
 */

const handleCalculatorAction = (newAction) => {
  const current = R.prop("current", getValuesInScreen());

  console.log(newAction);

  if (newAction === "clear-all")
    setValuesInScreen({ prev: "", operator: "", current: "0" });

  if (newAction === "del" && current !== "0")
    setValuesInScreen({ current: current.slice(0, -1) || "0" });
};

const handleCalculatorNumber = (number) => {
  const current = R.prop("current", getValuesInScreen());

  if (current.length >= CONFIGS.LENGTH_LIMIT) return;

  if (Number(number) || number === "0") {
    if (current === "0") setValuesInScreen({ current: number });
    else setValuesInScreen({ current: current + number });
  }

  if (number === ".") {
    const newCurrent = current.replace(".", "") + ".";
    setValuesInScreen({ current: newCurrent });
  }
};

const handleCalculatorOperator = (newOperator) => {
  let { current, prev, operator } = getValuesInScreen();

  console.log(newOperator);

  if (prev !== "" && current !== "") {
    prev = doOperation({ nr2: current, nr1: prev, operator });
    current = "0";
  }

  if (prev === "" && current !== "") {
    prev = current;
    current = "0";
  }

  setValuesInScreen({ prev, current, operator: newOperator });
};

const handleCalculatorEqual = () => {
  let { current, prev, operator } = getValuesInScreen();

  if (current !== "" && prev !== "" && operator !== "") {
    const newCurrent = doOperation({ nr1: prev, nr2: current, operator });
    setValuesInScreen({ prev: "", current: newCurrent, operator: "" });
  }
};

const handleChangeTheme = (flag) => {
  if (flag === true) setTheme(THEMES.LIGHT);
  if (flag === false) setTheme(THEMES.DARK);

  localStorage.setItem("theme", flag ? "light" : "dark");
};

/**
 * Module Exports
 */

module.exports = {
  handleCalculatorAction,
  handleCalculatorNumber,
  handleCalculatorOperator,
  handleCalculatorEqual,
  handleChangeTheme,
};
