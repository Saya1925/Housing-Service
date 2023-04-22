module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.js?$": "babel-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
};
