const { readFileSync, writeFileSync } = require("fs");

function indexOfUnicode(s, u) {
  let i = -1;
  for (i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) === u) {
      break;
    }
  }
  return i;
}

const filepath = "static/js/main.js";
const content = readFileSync(filepath, "utf8");
const i = indexOfUnicode(content, 0x2029);
if (i !== -1) {
  const intermediate =
    content.substring(0, i) +
    "_PARAGRAPH_SEPARATOR_" +
    content.substring(i + 1);
  const replaced = intermediate.replace(
    /"_PARAGRAPH_SEPARATOR_":"u2029",?/,
    ""
  );
  writeFileSync(filepath, replaced, "utf8");
}
