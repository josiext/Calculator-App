/* global module */

/**
 * Constants
 */

const CONFIGS = {
  // the number of decimal places the calculator works with for results
  DECIMALS: 5,
  //the maximum length of the number entered by the user
  LENGTH_LIMIT: 10,
};

const OPERATORS = {
  ADD: "+",
  SUBTRACT: "-",
  DIVISION: "/",
  MULTIPLICATION: "x",
  EQUAL: "=",
};

const THEMES = {
  LIGHT: {
    primaryColor: {
      main: "hsl(0, 0%, 90%)",
      dark: "hsl(0, 5%, 81%)",
    },
    secondaryColor: {
      main: "hsl(25, 98%, 40%)",
    },
    fontColor: {
      onPrimary: "hsl(0, 0%, 0%)",
      onPrimaryDark: "hsl(0, 0%, 0%)",
      onSecondary: "hsl(0, 0%, 0%)",
    },
    keypad: {
      bg: "hsl(0, 0%, 95%)",
    },
  },
  DARK: {
    primaryColor: {
      main: "hsl(222, 26%, 31%)",
      dark: "hsl(224, 36%, 15%)",
      light: "hsl(223, 31%, 20%)",
    },
    secondaryColor: {
      main: "hsl(6, 63%, 50%)",
    },
    fontColor: {
      onPrimary: "hsl(0, 0%, 100%)",
      onPrimaryDark: "hsl(0, 0%, 100%)",
      onSecondary: "hsl(0, 0%, 100%)",
    },
    keypad: {
      bg: "hsl(0, 0%, 100%)",
    },
  },
};

/**
 * Module Exports
 */

module.exports = {
  CONFIGS,
  OPERATORS,
  THEMES,
};
