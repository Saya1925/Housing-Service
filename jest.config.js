module.exports = {

  testEnvironment: 'jsdom',

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/mocks/image.js',
    '\\.css$': 'identity-obj-proxy',    
  },
  
};
