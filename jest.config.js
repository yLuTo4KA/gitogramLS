module.exports = {
  moduleFileExtensions: ["js", "json", "ts", "vue"],
  preset: "@vue/cli-plugin-unit-jest/presets/typescript",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
  },
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/(*.)+(spec|test).[jt]s?(x)"],
};
