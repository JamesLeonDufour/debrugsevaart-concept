// Checks that every data-i18n key in index.html has an English and French translation.
// Usage: node scripts/check-i18n.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const src = fs.readFileSync(path.join(root, 'assets/js/i18n.js'), 'utf8');

// Run i18n.js against a stub DOM to get at its dictionary.
let dict;
const stubDoc = { querySelectorAll: () => [], querySelector: () => null, documentElement: {}, dispatchEvent() {} };
const sandbox = { window: {}, document: stubDoc, location: { search: '' }, navigator: {}, URLSearchParams, CustomEvent: function () {}, localStorage: null };
vm.runInNewContext(src.replace('var SUPPORTED', 'window.__dict = dict; var SUPPORTED'), sandbox);
dict = sandbox.window.__dict;

const domKeys = new Set();
for (const m of html.matchAll(/data-i18n="([^"]+)"/g)) domKeys.add(m[1]);
for (const m of html.matchAll(/data-i18n-attr="([^"]+)"/g)) {
  m[1].split(';').forEach((pair) => domKeys.add(pair.split(':')[1].trim()));
}
const jsOnlyKeys = Object.keys(dict.nl);
const required = [...new Set([...domKeys, ...jsOnlyKeys])];

let failed = false;
for (const lang of ['en', 'fr']) {
  const missing = required.filter((k) => !(k in dict[lang]));
  const unused = Object.keys(dict[lang]).filter((k) => !required.includes(k));
  if (missing.length) { failed = true; console.log(`${lang}: missing ${missing.join(', ')}`); }
  if (unused.length) console.log(`${lang}: unused ${unused.join(', ')}`);
}
console.log(failed ? 'FAIL' : `OK: ${domKeys.size} page keys + ${jsOnlyKeys.length} script keys translated in EN and FR`);
process.exit(failed ? 1 : 0);
