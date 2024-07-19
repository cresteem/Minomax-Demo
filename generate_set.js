const { generateImageSets } = require("@cresteem/minomax");

const htmlPathPatterns = ["samples/**/*.html"];
const destinationBasePath = "./imageset_results";
const ignorePatterns = ["./dist/**"];

generateImageSets(htmlPathPatterns, destinationBasePath, ignorePatterns).catch(
  console.log
);
