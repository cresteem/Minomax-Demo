const { generateImageSets } = require("@cresteem/minomax");

const htmlPathPatterns = ["**/*.html"];
const destinationBasePath = "./dest";
const ignorePatterns = [];

await generateImageSets(htmlPathPatterns, destinationBasePath, ignorePatterns);
