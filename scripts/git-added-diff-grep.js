const fs = require("fs");
const os = require("os");

const BLOCK_SEPARATOR = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";

const args = process.argv;
const filename = args[2];
const word = args[3];
let LINES_SPREAD = args[4] || 5;

if (typeof LINES_SPREAD !== "number") {
  LINES_SPREAD = parseInt(LINES_SPREAD);
}

const content = fs.readFileSync(filename).toString();
const files = content.split("diff --git");
const reg = new RegExp("\\+.*" + word, "g");
let out = "";

files.forEach(file => {
  const lines = file.split(os.EOL);
  const fileName = lines[0];
  const matchingSlices = [];

  lines.slice(1).forEach((line, lineIndex) => {
    if (reg.exec(line)) {
      if (!LINES_SPREAD) {
        matchingSlices.push(line+os.EOL);
      } else {
        matchingSlices.push(
          lines.slice(lineIndex -LINES_SPREAD, lineIndex+LINES_SPREAD).join(os.EOL) + os.EOL
        );
      }
    }
  });
  if (matchingSlices.length) {
    out += fileName + os.EOL;
    out += matchingSlices.flat();
    out += os.EOL + BLOCK_SEPARATOR + os.EOL;
  }
});

console.log(out);







