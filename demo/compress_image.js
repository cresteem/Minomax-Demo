const { Minomax } = require("@cresteem/minomax");

const pathPatterns = ["**/*.jpeg", "**/*.jpg", "**/*.webp", "**/*.png"];
const targetFormat = "webp"; //"jpg" | "avif" | "webp" | "svg"
const destinationBasePath = "./results/image";
const ignorePatterns = ["./dist/**", "./reports/**"];

new Minomax()
  .compressImages({
    pathPatterns,
    targetFormat,
    destinationBasePath,
    ignorePatterns,
  })
  .catch(console.log);
