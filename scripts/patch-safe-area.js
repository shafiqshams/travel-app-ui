const fs = require("fs");
const path = require("path");

// File to patch
const fileToPatch =
  "node_modules/react-native-css-interop/dist/runtime/components.js";

const filePath = path.join(process.cwd(), fileToPatch);

if (!fs.existsSync(filePath)) {
  console.warn(`[SafeArea Patch] File not found: ${fileToPatch}, skipping...`);
} else {
  let content = fs.readFileSync(filePath, "utf8");
  let originalContent = content;

  // Remove any line containing cssInterop(...) with SafeAreaView, ignoring spaces
  const regex =
    /^\s*\(0,\s*api_1\.cssInterop\)\(\s*react_native_1\.SafeAreaView\s*,.*\);\s*$/gm;

  content = content.replace(regex, "");

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(
      `[SafeArea Patch] Removed deprecated SafeAreaView line in ${fileToPatch}`,
    );
  } else {
    console.log(`[SafeArea Patch] Line not found in ${fileToPatch}, skipping.`);
  }
}
