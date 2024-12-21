/* generate image set and update HTML to save on destination dir  */

const { Minomax } = require("@cresteem/minomax");

const htmlPathPatterns = ["samples/**/*.html"];
const destinationBasePath = "./results/imageset";
const ignorePatterns = [
  "./dist/**",
  "./reports/**",
  "./samples/webdocs/excess/**",
];

new Minomax()
  .generateImageSets({
    pathPatterns: htmlPathPatterns,
    destinationBasePath: destinationBasePath,
    ignorePatterns: ignorePatterns,
  })
  .catch(console.log);
