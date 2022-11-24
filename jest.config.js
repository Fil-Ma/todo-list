module.exports = {
  // path of setup tests file
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
  // environment jsdom for browser testing (default is node)
  testEnvironment: "jsdom",
  // path of test modules
  modulePaths: ['<rootDir>/src/__tests__'],
  // test files extensions
  moduleFileExtensions: ['js', 'jsx'],
  // ignore images and css files 
  moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less)$': 'identity-obj-proxy',
  },
};