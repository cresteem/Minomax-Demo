const { Minomax } = require("@cresteem/minomax");

new Minomax()
  .minomax({
    imageWorkerParams: { targetFormat: "webp" },
    videoWorkerParams: { codecType: "mx265", encodeLevel: 1 },
    destinationBasePath: "./results",
    ignorePatterns: ["dist/**", "demo/**", "reports/**"],
    webDocFilesPatterns: ["samples/webdocs/**"],
  })
  .catch(console.error);
