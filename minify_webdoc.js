const { minifyWebdoc } = require("@cresteem/minomax");

const pathPatterns = [
  "samples/**/*.css",
  "samples/**/*.js",
  "samples/**/*.html",
];
const destinationBasePath = "./webdoc_results";
const fileSearchBasePath = "./";
const ignorePatterns = ["./dist/**"];

minifyWebdoc(
  pathPatterns,
  destinationBasePath,
  fileSearchBasePath,
  ignorePatterns
).catch(console.log);
