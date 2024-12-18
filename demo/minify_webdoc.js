const { Minomax } = require("@cresteem/minomax");

const pathPatterns = [
  "samples/**/*.css",
  "samples/**/*.js",
  "samples/**/*.html",
];
const destinationBasePath = "./results/webdoc";
const fileSearchBasePath = "./";
const ignorePatterns = ["./dist/**", "*.config.*"];

new Minomax()
  .minifyWebdoc({
    pathPatterns,
    destinationBasePath,
    fileSearchBasePath,
    ignorePatterns,
  })
  .catch(console.log);
