/* Tangkap skrin fail/URL: NODE_PATH=../jejaktpmath/node_modules node tools/syot.js <url> <keluar.png> [lebar] [gelap] */
const { chromium } = require("playwright");
(async () => {
  const [url, out, lebar, gelap] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +(lebar || 700), height: 900 }, colorScheme: gelap ? "dark" : "light" });
  await p.goto(url, { waitUntil: "networkidle" });
  await p.screenshot({ path: out, fullPage: true });
  await b.close();
})();
