module.exports = {
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif)$': '<rootDir>/mocks/image.js',

      '\\.css$': 'identity-obj-proxy',

      testEnvironment: 'jsdom',
    },
  };
  