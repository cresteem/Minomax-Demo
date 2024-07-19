const { compressImages } = require("@cresteem/minomax");

const pathPatterns = ["**/*.jpeg", "**/*.jpg", "**/*.webp", "**/*.png"];
const targetFormat = "avif"; //"jpg" | "avif" | "webp" | "svg"
const destinationBasePath = "./image_results";
const ignorePatterns = ["./dist/**"];

compressImages(
  pathPatterns,
  targetFormat,
  destinationBasePath,
  ignorePatterns
).catch(console.log);
