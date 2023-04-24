module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.js?$": "babel-jest",
    "^.+\\.css$": '<rootDir>/config/jest/cssTransform.js',
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
};
