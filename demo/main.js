const { Minomax } = require("@cresteem/minomax");

new Minomax()
  .minomax({
    imageWorkerParams: { targetFormat: "jpg" },
    videoWorkerParams: { codecType: "mx265", encodeLevel: 1 },
    destinationBasePath: "dist",
    ignorePatterns: ["dist/**", "*.config.js"],
    webDocFilesPatterns: ["./webdoc_sources/**/*.html"],
  })
  .catch(console.error);
