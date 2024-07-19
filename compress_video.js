const { compressVideos } = require("@cresteem/minomax");

const pathPatterns = ["**/*.mp4", "**/*.mkv", "**/*.webm"];
const codecType = "wav1"; // "wav1" | "mav1" | "mx265"
const encodeLevel = 3; //1 | 2 | 3,
const destinationBasePath = "./video_results";
const ignorePatterns = ["./dist/**"];

compressVideos(
  pathPatterns,
  codecType,
  encodeLevel,
  destinationBasePath,
  ignorePatterns
).catch(console.log);
