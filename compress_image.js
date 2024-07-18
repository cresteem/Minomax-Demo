const { compressImages } = require("@cresteem/minomax");

const pathPatterns = ["**/*.jpeg", "**/*.webp", "**/*.png"];
const targetFormat = "webp"; //"jpg" | "avif" | "webp" | "svg"
const destinationBasePath = "./dest";
const ignorePatterns = [];

await compressImages(
  pathPatterns,
  targetFormat,
  destinationBasePath,
  ignorePatterns
);
