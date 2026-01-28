const fs = require("fs");
const path = require("path");

const projectRoot = process.cwd();
const folderName = path.basename(projectRoot);

// ---------- 1️⃣ Update package.json ----------
const packageJsonPath = path.join(projectRoot, "package.json");
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// package name: lowercase, replace spaces/underscores with hyphens, remove invalid chars
const packageName = folderName
  .toLowerCase()
  .replace(/[\s_]+/g, "-") // spaces/underscores → hyphen
  .replace(/[^a-z0-9-]/g, ""); // remove invalid chars

pkg.name = packageName;

fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2));
console.log(`✅ package.json name set to: ${pkg.name}`);

// ---------- 2️⃣ Update app.json ----------
const appJsonPath = path.join(projectRoot, "app.json");

if (fs.existsSync(appJsonPath)) {
  const appJson = JSON.parse(fs.readFileSync(appJsonPath, "utf8"));

  if (!appJson.expo) appJson.expo = {};

  // Expo display name: replace -, _, multiple spaces with single space, capitalize words
  const displayName = folderName
    .replace(/[-_]+/g, " ") // replace dash/underscore with space
    .replace(/\s+/g, " ") // collapse multiple spaces
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize first letter of each word

  // Expo slug: lowercase, hyphen-separated, safe for builds
  const slug = folderName
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  appJson.expo.name = displayName;
  appJson.expo.slug = slug;

  fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2));
  console.log(`✅ Expo app name set to: ${displayName}`);
  console.log(`✅ Expo slug set to: ${slug}`);
} else {
  console.warn("⚠️ app.json not found, skipping Expo name/slug update");
}
