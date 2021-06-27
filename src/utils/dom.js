/* global module */

/**
 * Getting Node References
 */

const root = document.documentElement;

const nodeResultPrev = document.getElementById("result_previous");
const nodeResultCurr = document.getElementById("result_current");
const nodeResultOpt = document.getElementById("result_operator");

/**
 * DOM Actions
 */

const getValuesInScreen = () => {
  const prev = nodeResultPrev.innerText;
  const current = nodeResultCurr.innerText;
  const operator = nodeResultOpt.innerText;

  return { prev, current, operator };
};

const setValuesInScreen = ({ prev, operator, current }) => {
  if (prev !== undefined) nodeResultPrev.innerText = prev;
  if (operator !== undefined) nodeResultOpt.innerText = operator;
  if (current !== undefined) nodeResultCurr.innerText = current;

  nodeResultCurr.scrollIntoView(true);
};

const setTheme = ({
  primaryColor = {},
  secondaryColor = {},
  fontColor = {},
  keypad = {},
}) => {
  root.style.setProperty("--color-primary", primaryColor.main);
  root.style.setProperty("--color-primary-light", primaryColor.light);
  root.style.setProperty("--color-primary-dark", primaryColor.dark);
  root.style.setProperty("--color-secondary", secondaryColor.main);
  root.style.setProperty("--color-bg-keypad-btn", keypad.bg);
  root.style.setProperty("--font-color-on-primary", fontColor.onPrimary);
  root.style.setProperty(
    "--font-color-on-primary-dark",
    fontColor.onPrimaryDark
  );
  root.style.setProperty("--font-color-on-secondary", fontColor.onSecondary);
};

/**
 * Module Exports
 */

module.exports = {
  getValuesInScreen,
  setValuesInScreen,
  setTheme,
};
