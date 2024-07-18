const { minifyWebdoc } = require("@cresteem/minomax");

const pathPatterns = ["**/*.css", "**/*.js", "**/*.html"];
const destinationBasePath = "./dest";
const fileSearchBasePath = "./app";
const ignorePatterns = [];

await minifyWebdoc(
  pathPatterns,
  destinationBasePath,
  fileSearchBasePath,
  ignorePatterns
);
