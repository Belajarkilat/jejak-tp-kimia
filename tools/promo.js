/* Tangkapan skrin promo landing (780x1688, sama seperti Sejarah).
     node tools/promo.js [bab]   -> promo-soalan-kimia.png + promo-guru-kimia.png
   Perlu pelayan 8833. Murid: main bab percuma sehingga soalan pertama yang ada "Jadual". */
const { chromium } = require("playwright");
const bab = process.argv[2] || "k4b1";
(async () => {
  const sorok = pg => pg.addStyleTag({ content: ".konfeti{display:none!important} #barDaftar{display:none!important}" });
  const b = await chromium.launch();
  const baru = async () => b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, serviceWorkers: "block", colorScheme: "light" });

  /* Guru: kelas contoh */
  const cg = await baru(); const g = await cg.newPage();
  g.on("pageerror", e => console.log("pageerror guru: " + e.message));
  await g.goto("http://localhost:8833/index.html?demo=cikgu", { waitUntil: "domcontentloaded" });
  await g.waitForTimeout(2500); await sorok(g); await g.waitForTimeout(200);
  await g.screenshot({ path: "promo-guru-kimia.png" });
  await cg.close();

  /* Murid: soalan dengan jadual */
  const cm = await baru();
  await cm.addInitScript(id => { try { localStorage.setItem("jm-bab", id); } catch (e) {} }, bab);
  const p = await cm.newPage();
  p.on("pageerror", e => console.log("pageerror murid: " + e.message));
  await p.goto("http://localhost:8833/index.html?demo=murid", { waitUntil: "domcontentloaded" });
  await p.waitForTimeout(1500);
  await p.fill("#namaBebas", "Aina"); await p.evaluate(t => { const x = document.querySelector(`[data-ting="${t}"]`); if (x) x.click(); }, bab[1]);
  await p.click("text=Mula main"); await p.waitForTimeout(900);
  let lg = 1, dapat = false;
  await p.click('[data-f="stop-1"]').catch(() => {}); await p.waitForTimeout(500);
  for (let l = 0; l < 200 && !dapat; l++) {
    const soalan = await p.$(".qtext"), aksi = await p.$('[data-f="aksi"]');
    if (!soalan) {
      if (aksi) { await aksi.click().catch(() => {}); await p.waitForTimeout(350); continue; }
      lg++; const st = await p.$(`[data-f="stop-${lg}"]`); if (!st) break;
      await st.click().catch(() => {}); await p.waitForTimeout(500); continue;
    }
    const tq = (await soalan.innerText()).replace(/\s+/g, " ").trim();
    const q = await p.evaluate(({ id, tq }) => { const s = h => String(h).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
      for (const a of window.BANK[id].aras) for (const q of a.soalan.concat([a.bos])) if (s(q.t) === tq) return q; return null; }, { id: bab, tq });
    if (!q) { console.log("tak jumpa: " + tq); break; }
    if (/Jadual \d/.test(q.t) && q.j === "pilih") {
      await p.evaluate(() => window.scrollTo(0, 0)); await sorok(p); await p.waitForTimeout(2200);
      await p.screenshot({ path: "promo-soalan-kimia.png" }); dapat = true; break;
    }
    const opt = await p.$$eval('[data-f^="opt-"]', els => els.map(e => ({ f: e.getAttribute("data-f"), t: e.querySelector("span:last-child").innerText.replace(/\s+/g, " ").trim() })));
    const ke = t => (opt.find(o => o.t === String(t).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()) || {}).f;
    if (q.j === "pilih") await p.click(`[data-f="${ke(q.p[q.b])}"]`);
    else if (q.j === "banyak" || q.j === "susun") for (const i of q.b) await p.click(`[data-f="${ke(q.p[i])}"]`);
    else if (q.j === "isi") await p.fill('[data-f="isi"]', q.b[0]);
    else if (q.j === "nombor") await p.fill('[data-f="num"]', String(q.b));
    else if (q.j === "buka") await p.fill('[data-f="buka"]', "Jawapan contoh. ".repeat(12));
    await p.waitForTimeout(100);
    await p.click('[data-f="aksi"]').catch(() => {}); await p.waitForTimeout(450);
    await p.click('[data-f="aksi"]').catch(() => {}); await p.waitForTimeout(380);
  }
  console.log(dapat ? "promo-soalan-kimia.png siap" : "TIADA soalan berjadual ditemui");
  await b.close();
})();
