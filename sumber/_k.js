/* Pembantu untuk sumber bab Kimia. Fail berawalan _ diabaikan oleh bina.js.

   jadual(n, tajuk, kepala, baris, nota): jadual data sebagai <figure> berkapsyen
   "Jadual n". App hanya memaparkannya pada soalan yang menyebut "Jadual"
   (lampiranUntuk dalam index.html), dan bina.js gagal jika tiada soalan dalam
   hentian itu yang menyebutnya.

   SPI: Standard Prestasi KSSM Kimia Tingkatan 4 dan 5 (Bahagian Pembangunan
   Kurikulum, 2018; dskp/kimia-en.pdf). Setiap bidang pembelajaran memakai
   pernyataan TP1-TP6 yang sama strukturnya; versi Bahasa Melayu di bawah
   mengikut susunan kata DSKP Sains KSSM (Mengingat kembali / Memahami ...
   serta dapat menjelaskan / Mengaplikasikan / Menganalisis / Menilai /
   Mereka cipta). MESTI disemak dengan DSKP Kimia versi Bahasa Melayu. */
const esc = t => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* Sel jadual boleh membawa subskrip/superskrip ringkas: H_2O -> H<sub>2</sub>O, Na^+ -> Na<sup>+</sup>. */
function kimiaHtml(t){
  return esc(t)
    .replace(/_\{([^}]+)\}/g, "<sub>$1</sub>").replace(/_(\d+)/g, "<sub>$1</sub>")
    .replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>").replace(/\^([0-9]*[+\-−])/g, "<sup>$1</sup>");
}

function jadual(n, tajuk, kepala, baris, nota){
  const th = "<tr>" + kepala.map(k => "<th>" + kimiaHtml(k) + "</th>").join("") + "</tr>";
  const tb = baris.map(r => "<tr>" + r.map(c => "<td>" + kimiaHtml(c) + "</td>").join("") + "</tr>").join("");
  return '<figure class="figure jadual-kimia"><div class="tbl-wrap"><table class="tbl">' +
    "<thead>" + th + "</thead><tbody>" + tb + "</tbody></table></div>" +
    (nota ? '<p class="note">' + kimiaHtml(nota) + "</p>" : "") +
    "<figcaption>Jadual " + n + " · " + esc(tajuk) + "</figcaption></figure>";
}

function tp(topik, topik2){
  const t2 = topik2 || topik;
  return [
    "Mengingat kembali pengetahuan dan kemahiran asas mengenai " + topik + ".",
    "Memahami " + t2 + " serta dapat menjelaskan kefahaman tersebut.",
    "Mengaplikasikan pengetahuan mengenai " + t2 + " untuk menerangkan kejadian atau fenomena alam dan dapat melaksanakan tugasan mudah.",
    "Menganalisis pengetahuan mengenai " + t2 + " dalam konteks penyelesaian masalah mengenai kejadian atau fenomena alam.",
    "Menilai pengetahuan mengenai " + t2 + " dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan sesuatu tugasan.",
    "Mereka cipta menggunakan pengetahuan mengenai " + t2 + " dalam konteks penyelesaian masalah dan membuat keputusan atau dalam melaksanakan aktiviti/tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat.",
  ];
}

const SPI = {
  /* Tingkatan 4 */
  "1": tp("kimia, penyiasatan saintifik, penggunaan, pengurusan dan pengendalian radas serta bahan",
          "kepentingan kimia, penyiasatan saintifik, penggunaan, pengurusan dan pengendalian radas serta bahan"),
  "2": tp("jirim dan struktur atom"),
  "3": tp("konsep mol, formula dan persamaan kimia"),
  "4": tp("Jadual Berkala Unsur"),
  "5": tp("ikatan kimia"),
  "6": tp("asid, bes dan garam"),
  "7": tp("kadar tindak balas"),
  "8": tp("bahan buatan dalam industri"),
  /* Tingkatan 5 */
  "9": tp("keseimbangan redoks"),
  "10": tp("sebatian karbon"),
  "11": tp("perubahan haba", "termokimia"),
  "12": tp("kimia polimer"),
  "13": tp("kimia konsumer dan industri"),
};

module.exports = { jadual, SPI, kimiaHtml };
