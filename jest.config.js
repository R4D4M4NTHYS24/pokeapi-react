module.exports = {
  transform: {
    "\\.css$": "jest-css-modules",
  },
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
module.exports = {
  testEnvironment: "jsdom",
};
