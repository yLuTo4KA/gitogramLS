// jest.config.js
module.exports = {
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest'
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/(*.)+(spec|test).[jt]s?(x)"
  ]
};
