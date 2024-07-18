const { minomax } = require("@cresteem/minomax");

minomax(
  { targetFormat: "jpg" },
  { codecType: "mx265", encodeLevel: 1 },
  "dist"
).catch(console.error);
