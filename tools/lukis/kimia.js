/* Rajah Kimia (31 Okt 2026).

   Mod:
     atom - susunan elektron satu atau dua atom/ion bersebelahan.
            {jenis:"kimia", mod:"atom", atom:[{simbol:"Na", susunan:[2,8,1], cas:"+", nukleus:"11p 12n"}],
             kapsyen, alt}
            Elektron dilukis sebagai titik pada petala. Bilangan titik dikira daripada
            `susunan`, jadi rajah tidak boleh bercanggah dengan nombor dalam soalan.
     sel  - sel elektrolisis (satu bikar + bateri) atau sel kimia/volta (dua bikar,
            titian garam, voltmeter).
            {jenis:"kimia", mod:"sel", jenis2:"elektrolisis"|"volta",
             kiri:{elektrod:"Karbon", label:"Elektrod P"}, kanan:{...},
             elektrolit:"Larutan kuprum(II) sulfat" (elektrolisis) atau
             kiri.elektrolit / kanan.elektrolit (volta), kapsyen, alt}
   Warna logik sahaja (asas.js) supaya tema gelap selamat. */
const A = require("./asas");
const LEBAR = 260;

function pastiPanjang(t, maks, apa){
  if(String(t).length > maks) throw new Error(`${apa} "${t}" terlalu panjang (maksimum ${maks} aksara)`);
}

function satuAtom(cx, cy, at, rMaks){
  const s = at.susunan || [];
  if(!s.length || s.length > 4) throw new Error("susunan elektron perlu 1 hingga 4 petala");
  const had = [2, 8, 18, 32];
  s.forEach((n, i) => { if(n < 0 || n > had[i]) throw new Error(`petala ${i+1} tidak boleh ada ${n} elektron`); });
  let isi = "";
  const rN = 15;
  const langkah = (rMaks - rN - 4) / s.length;
  s.forEach((n, i) => {
    const r = rN + 4 + langkah * (i + 1);
    isi += A.bulatan(cx, cy, r, { garis: "garis2", tebal: 1.1 });
    for(let k = 0; k < n; k++){
      /* Elektron berpasangan seperti buku teks: titik diagih sekata bermula dari atas. */
      const sudut = -Math.PI / 2 + (2 * Math.PI * k) / Math.max(n, 1);
      isi += A.bulatan(cx + r * Math.cos(sudut), cy + r * Math.sin(sudut), 2.6, { isi: "merah", garis: "merah", tebal: 1 });
    }
  });
  isi += A.bulatan(cx, cy, rN, { isi: "kuningLembut", garis: "kuning", tebal: 1.4 });
  pastiPanjang(at.simbol, 3, "simbol");
  isi += A.teks(cx, cy + 4.5, at.simbol, { saiz: 13, tengah: true, tebal: true, warna: "tinta" });
  const rLuar = rN + 4 + langkah * s.length;
  if(at.cas){
    /* Kurungan segi empat ion seperti buku teks. */
    const k = rLuar + 6;
    isi += A.laluan(`M${A.bulat(cx - k + 6)} ${A.bulat(cy - k)} L${A.bulat(cx - k)} ${A.bulat(cy - k)} L${A.bulat(cx - k)} ${A.bulat(cy + k)} L${A.bulat(cx - k + 6)} ${A.bulat(cy + k)}`, { warna: "tinta2", tebal: 1.4 });
    isi += A.laluan(`M${A.bulat(cx + k - 6)} ${A.bulat(cy - k)} L${A.bulat(cx + k)} ${A.bulat(cy - k)} L${A.bulat(cx + k)} ${A.bulat(cy + k)} L${A.bulat(cx + k - 6)} ${A.bulat(cy + k)}`, { warna: "tinta2", tebal: 1.4 });
    isi += A.teks(cx + k + 3, cy - k + 9, at.cas, { saiz: 13, tebal: true, warna: "tinta" });
  }
  const bawah = cy + rLuar + (at.cas ? 24 : 18);
  const lab = at.label || s.join(".");
  pastiPanjang(lab, 18, "label atom");
  isi += A.teks(cx, bawah, lab, { saiz: 12, tengah: true, warna: "tinta2" });
  return { isi, bawah };
}

function atom(spec){
  const senarai = spec.atom || [];
  if(senarai.length < 1 || senarai.length > 2) throw new Error("rajah atom perlu satu atau dua atom");
  const dua = senarai.length === 2;
  const rMaks = dua ? 44 : 66;
  const cy = rMaks + 14;
  let isi = "", bawah = 0;
  senarai.forEach((at, i) => {
    const cx = dua ? (i === 0 ? 60 : 194) : LEBAR / 2;
    const h = satuAtom(cx, cy, at, rMaks);
    isi += h.isi; bawah = Math.max(bawah, h.bawah);
  });
  return { isi, tinggi: bawah + 10 };
}

/* ---------- sel ---------- */
function bikar(x, y, l, t){
  /* bikar terbuka: tiga sisi */
  return A.laluan(`M${x} ${y} L${x} ${y + t} L${x + l} ${y + t} L${x + l} ${y}`, { warna: "tinta2", tebal: 1.8 });
}
function cecair(x, y, l, t){
  return A.kotak(x + 1, y, l - 2, t - 1, { isi: "hijauLembut", garis: "hijauLembut", bulat: 0, tebal: 0.5 });
}
function elektrod(x, yAtas, yBawah){
  return A.kotak(x - 4, yAtas, 8, yBawah - yAtas, { isi: "kertas2", garis: "tinta2", bulat: 1, tebal: 1.3 });
}

function sel(spec){
  const j = spec.jenis2 || "elektrolisis";
  const kiri = spec.kiri || {}, kanan = spec.kanan || {};
  let isi = "";
  if(j === "elektrolisis"){
    const bx = 60, by = 70, bl = 140, bt = 90;
    isi += cecair(bx, by + 18, bl, bt - 18) + bikar(bx, by, bl, bt);
    const xa = bx + 40, xb = bx + bl - 40;
    isi += elektrod(xa, by - 20, by + 70) + elektrod(xb, by - 20, by + 70);
    /* wayar ke bateri */
    isi += A.garis(xa, by - 20, xa, 22, { warna: "tinta2" }) + A.garis(xb, by - 20, xb, 22, { warna: "tinta2" });
    isi += A.garis(xa, 22, 118, 22, { warna: "tinta2" }) + A.garis(142, 22, xb, 22, { warna: "tinta2" });
    /* simbol bateri: garis panjang (+) kiri, garis pendek (-) kanan */
    isi += A.garis(124, 10, 124, 34, { warna: "tinta", tebal: 2 }) + A.garis(136, 15, 136, 29, { warna: "tinta", tebal: 3 });
    isi += A.garis(118, 22, 124, 22, { warna: "tinta2" }) + A.garis(136, 22, 142, 22, { warna: "tinta2" });
    isi += A.teks(116, 14, "+", { saiz: 12, kanan: true, warna: "tinta" }) + A.teks(146, 14, "−", { saiz: 12, warna: "tinta" });
    pastiPanjang(kiri.label || "", 14, "label kiri"); pastiPanjang(kanan.label || "", 14, "label kanan");
    if(kiri.label) isi += A.teks(xa - 11, by - 2, kiri.label, { saiz: 11.5, kanan: true, warna: "tinta2" });
    if(kanan.label) isi += A.teks(xb + 11, by - 2, kanan.label, { saiz: 11.5, warna: "tinta2" });
    if(kiri.elektrod) isi += A.teks(xa - 11, by + 12, kiri.elektrod, { saiz: 11, kanan: true, warna: "tinta3" });
    if(kanan.elektrod) isi += A.teks(xb + 11, by + 12, kanan.elektrod, { saiz: 11, warna: "tinta3" });
    pastiPanjang(spec.elektrolit || "", 40, "elektrolit");
    if(spec.elektrolit) isi += A.teks(LEBAR / 2, by + bt + 18, spec.elektrolit, { saiz: 11.5, tengah: true, warna: "tinta2" });
    return { isi, tinggi: by + bt + 28 };
  }
  if(j === "volta"){
    const by = 80, bl = 92, bt = 80;
    const b1 = 14, b2 = LEBAR - 14 - bl;
    isi += cecair(b1, by + 16, bl, bt - 16) + bikar(b1, by, bl, bt);
    isi += cecair(b2, by + 16, bl, bt - 16) + bikar(b2, by, bl, bt);
    const xa = b1 + 30, xb = b2 + bl - 30;
    isi += elektrod(xa, by - 18, by + 62) + elektrod(xb, by - 18, by + 62);
    /* titian garam: U terbalik */
    isi += A.laluan(`M${b1 + bl - 18} ${by + 50} L${b1 + bl - 18} ${by - 4} L${b2 + 18} ${by - 4} L${b2 + 18} ${by + 50}`, { warna: "kuning", tebal: 7 });
    isi += A.teks(LEBAR / 2, by - 12, "Titian garam", { saiz: 11, tengah: true, warna: "tinta3" });
    /* wayar + voltmeter */
    isi += A.garis(xa, by - 18, xa, 24, { warna: "tinta2" }) + A.garis(xb, by - 18, xb, 24, { warna: "tinta2" });
    isi += A.garis(xa, 24, LEBAR / 2 - 13, 24, { warna: "tinta2" }) + A.garis(LEBAR / 2 + 13, 24, xb, 24, { warna: "tinta2" });
    isi += A.bulatan(LEBAR / 2, 24, 13, { isi: "kertas", garis: "tinta", tebal: 1.5 });
    isi += A.teks(LEBAR / 2, 28.5, "V", { saiz: 13, tengah: true, tebal: true, warna: "tinta" });
    [[kiri, xa, b1], [kanan, xb, b2]].forEach(([s, x, b]) => {
      pastiPanjang(s.label || "", 16, "label"); pastiPanjang(s.elektrolit || "", 20, "elektrolit");
      if(s.label) isi += A.teks(b + bl / 2, by + bt + 16, s.label, { saiz: 11.5, tengah: true, warna: "tinta2" });
      if(s.elektrolit) isi += A.teks(b + bl / 2, by + bt + 31, s.elektrolit, { saiz: 11, tengah: true, warna: "tinta3" });
    });
    return { isi, tinggi: by + bt + 40 };
  }
  throw new Error(`jenis sel "${j}" tidak dikenali`);
}

function lukis(spec){
  const mod = spec.mod || "atom";
  const h = mod === "atom" ? atom(spec) : mod === "sel" ? sel(spec)
    : (() => { throw new Error(`mod kimia "${mod}" tidak dikenali`); })();
  return A.figura({ lebar: LEBAR, tinggi: h.tinggi, isi: h.isi, alt: spec.alt, kapsyen: spec.kapsyen });
}

module.exports = { lukis, LEBAR };
