/* Sumber kandungan — Kimia KSSM Tingkatan 5, Bab 1 Keseimbangan Redoks.
   SK 9.1 Pengoksidaan dan penurunan, 9.2 Keupayaan elektrod piawai, 9.3 Sel kimia (sel volta),
   9.4 Sel elektrolisis, 9.5 Pengekstrakan logam daripada bijihnya, 9.6 Pengaratan
   (DSKP KSSM Kimia Tingkatan 4 dan 5, dskp/kimia-en.pdf).
   E° (V): Mg -2.38, Al -1.66, Zn -0.76, Fe -0.44, Pb -0.13, Cu +0.34, Ag +0.80. */
const { jadual, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Gerbang Redoks", sk:"9.1 Pengoksidaan dan penurunan", lampiran:null,
 kadNama:"OIL RIG", kadEm:"\u{1F504}", kadFakta:"Pengoksidaan ialah kehilangan elektron; penurunan ialah penerimaan elektron. Kedua-duanya berlaku serentak dalam tindak balas redoks.",
 bosKadNama:"Agen Pengoksidaan", bosKadEm:"\u{1F9EA}", bosKadFakta:"Agen pengoksidaan menerima elektron dan dirinya diturunkan. Agen penurunan menderma elektron dan dirinya dioksidakan.",
 soalan:[
 {j:"pilih",t:"Pengoksidaan dari segi pemindahan elektron ialah:",p:["Kehilangan elektron","Penerimaan elektron","Penerimaan proton","Kehilangan neutron"],b:0,u:"Bahan yang kehilangan elektron dioksidakan."},
 {j:"pilih",t:"Penurunan dari segi oksigen ialah:",p:["Kehilangan oksigen","Penerimaan oksigen","Penerimaan hidrogen sahaja","Kehilangan hidrogen"],b:0,u:"Bahan yang kehilangan oksigen diturunkan; bahan yang menerima hidrogen juga diturunkan."},
 {j:"pilih",t:"Dalam tindak balas redoks, nombor pengoksidaan bahan yang dioksidakan:",p:["Bertambah","Berkurang","Tidak berubah","Menjadi sifar"],b:0,u:"Kehilangan elektron menambah nombor pengoksidaan."},
 {j:"pilih",t:"Agen penurunan ialah bahan yang:",p:["Menderma elektron","Menerima elektron dan diturunkan","Tidak terlibat dalam pemindahan elektron","Menerima oksigen daripada udara"],b:0,u:"Agen penurunan menderma elektron, jadi dirinya dioksidakan."},
 {j:"pilih",t:"Apakah nombor pengoksidaan mangan dalam KMnO₄?",p:["+7","+2","+4","−7"],b:0,u:"K (+1) + Mn + 4(−2) = 0, jadi Mn = +7."},
 {j:"pilih",t:"Apakah nombor pengoksidaan kromium dalam K₂Cr₂O₇?",p:["+6","+3","+7","+12"],b:0,u:"2(+1) + 2Cr + 7(−2) = 0, 2Cr = +12, Cr = +6."},
 {j:"pilih",t:"Nama IUPAC bagi FeSO₄ ialah:",p:["Ferum(II) sulfat","Ferum(III) sulfat","Ferum sulfit","Ferum(II) sulfida"],b:0,u:"SO₄²⁻ bercas −2, jadi Fe = +2."},
 {j:"pilih",t:"Larutan ferum(II) sulfat bertukar daripada hijau kepada perang apabila air bromin ditambah. Ion Fe²⁺ telah:",p:["Dioksidakan kepada Fe³⁺","Diturunkan kepada Fe","Diturunkan kepada Fe³⁺","Kekal sebagai Fe²⁺"],b:0,u:"Fe²⁺ → Fe³⁺ + e⁻; bromin bertindak sebagai agen pengoksidaan."}],
 bos:{j:"banyak",t:"Zn + CuSO₄ → ZnSO₄ + Cu. Pilih SEMUA pernyataan yang betul.",p:["Zink dioksidakan","Ion Cu²⁺ diturunkan","Zink ialah agen penurunan","Ion Cu²⁺ ialah agen penurunan","Nombor pengoksidaan zink berkurang"],b:[0,1,2],u:"Zn → Zn²⁺ + 2e⁻ (pengoksidaan, 0 → +2). Cu²⁺ menerima elektron, jadi Cu²⁺ ialah agen pengoksidaan."}},

{n:2, tempat:"Siri Keupayaan", sk:"9.2 Keupayaan elektrod piawai · 9.1 Penyesaran logam", lampiran:"j1",
 kadNama:"Keupayaan Elektrod Piawai", kadEm:"\u{1F4CF}", kadFakta:"Semakin negatif nilai E°, semakin mudah logam menderma elektron dan semakin kuat agen penurunan.",
 bosKadNama:"Penyesaran Logam", bosKadEm:"\u{1F3C3}", bosKadFakta:"Logam dengan E° lebih negatif dapat menyesarkan logam dengan E° lebih positif daripada larutan garamnya.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, logam manakah agen penurunan paling kuat?",p:["Magnesium","Argentum","Kuprum","Zink"],b:0,u:"Mg mempunyai E° paling negatif (−2.38 V)."},
 {j:"pilih",t:"Berdasarkan Jadual 1, ion manakah agen pengoksidaan paling kuat?",p:["Ag⁺","Mg²⁺","Zn²⁺","Fe²⁺"],b:0,u:"Ag⁺ mempunyai E° paling positif (+0.80 V), jadi paling mudah menerima elektron."},
 {j:"pilih",t:"Berdasarkan Jadual 1, logam manakah dapat menyesarkan kuprum daripada larutan kuprum(II) sulfat?",p:["Zink","Argentum","Emas","Tiada"],b:0,u:"E° zink (−0.76 V) lebih negatif daripada kuprum (+0.34 V)."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah yang berlaku jika kepingan kuprum dimasukkan ke dalam larutan magnesium sulfat?",p:["Tiada tindak balas","Kuprum menyesarkan magnesium","Gas hidrogen terbebas","Larutan menjadi biru tua"],b:0,u:"Kuprum agen penurunan yang lebih lemah daripada magnesium."},
 {j:"pilih",t:"Berdasarkan Jadual 1, pemerhatian apabila zink dimasukkan ke dalam larutan argentum nitrat ialah:",p:["Pepejal kelabu terenap","Gas perang terbebas","Larutan menjadi biru","Tiada perubahan"],b:0,u:"Zn + 2Ag⁺ → Zn²⁺ + 2Ag; argentum terenap pada permukaan zink."},
 {j:"pilih",t:"Berdasarkan Jadual 1, persamaan setengah bagi pengoksidaan zink ialah:",p:["Zn → Zn²⁺ + 2e⁻","Zn²⁺ + 2e⁻ → Zn","Zn + 2e⁻ → Zn²⁺","Zn²⁺ → Zn + 2e⁻"],b:0,u:"Pengoksidaan ialah kehilangan elektron."},
 {j:"pilih",t:"Berdasarkan Jadual 1, susun logam mengikut kekuatan agen penurunan secara MENURUN.",p:["Mg, Zn, Fe, Cu, Ag","Ag, Cu, Fe, Zn, Mg","Zn, Mg, Cu, Fe, Ag","Fe, Mg, Zn, Ag, Cu"],b:0,u:"E° dari paling negatif ke paling positif."},
 {j:"pilih",t:"Klorin menyesarkan bromin daripada larutan kalium bromida. Ini menunjukkan klorin ialah:",p:["Agen pengoksidaan lebih kuat","Agen penurunan lebih kuat","Kurang reaktif daripada bromin","Bukan halogen"],b:0,u:"Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂; klorin lebih mudah menerima elektron."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, pasangan manakah TIDAK akan bertindak balas?",p:["Kuprum dan larutan zink sulfat","Magnesium dan larutan kuprum(II) sulfat","Ferum dan larutan argentum nitrat","Zink dan larutan plumbum(II) nitrat"],b:0,u:"Kuprum (E° +0.34 V) tidak dapat menurunkan Zn²⁺ (−0.76 V)."}},

{n:3, tempat:"Bilik Sel Kimia", sk:"9.3 Sel kimia (sel volta)", lampiran:"r1",
 kadNama:"Sel Volta", kadEm:"\u{1F50B}", kadFakta:"Sel volta menukar tenaga kimia kepada tenaga elektrik. Elektron mengalir dari terminal negatif (anod) ke terminal positif (katod) melalui wayar.",
 bosKadNama:"Voltan Sel", bosKadEm:"\u{26A1}", bosKadFakta:"Voltan sel = E° katod − E° anod. Sel Daniell zink-kuprum menghasilkan 1.10 V.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, elektrod manakah terminal negatif?",p:["Zink","Kuprum","Titian garam","Voltmeter"],b:0,u:"Zink lebih mudah menderma elektron (E° lebih negatif)."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah tindak balas di elektrod kuprum?",p:["Cu²⁺ + 2e⁻ → Cu","Cu → Cu²⁺ + 2e⁻","Zn → Zn²⁺ + 2e⁻","2H⁺ + 2e⁻ → H₂"],b:0,u:"Ion Cu²⁺ menerima elektron dan kuprum terenap pada elektrod."},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung voltan sel. (E°: Zn²⁺/Zn = −0.76 V; Cu²⁺/Cu = +0.34 V)",b:1.1,tol:0.005,suf:"V",u:"+0.34 − (−0.76) = 1.10 V."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah fungsi titian garam?",p:["Melengkapkan litar","Membekalkan elektron","Menyimpan tenaga","Menukar warna larutan"],b:0,u:"Titian garam membenarkan ion bergerak untuk mengimbangi cas dalam setiap larutan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah perubahan warna larutan kuprum(II) sulfat selepas beberapa lama?",p:["Biru menjadi pudar","Biru menjadi lebih pekat","Tidak berwarna menjadi biru","Biru menjadi hijau"],b:0,u:"Ion Cu²⁺ berkurang kerana diturunkan kepada kuprum."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah yang berlaku kepada jisim elektrod zink?",p:["Berkurang","Bertambah","Tidak berubah","Bertambah kemudian berkurang"],b:0,u:"Atom zink dioksidakan menjadi ion Zn²⁺ yang larut ke dalam larutan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, arah aliran elektron dalam litar luar ialah:",p:["Zink ke kuprum melalui wayar","Kuprum ke zink melalui wayar","Melalui titian garam ke zink","Tiada aliran elektron"],b:0,u:"Elektron mengalir dari terminal negatif ke terminal positif."},
 {j:"pilih",t:"Jika zink dalam Rajah 1 digantikan dengan magnesium, voltan sel akan:",p:["Bertambah","Berkurang","Tidak berubah","Menjadi sifar"],b:0,u:"Jarak antara E° magnesium (−2.38 V) dan kuprum lebih besar: 2.72 V."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, tulis persamaan ion keseluruhan bagi sel itu.",p:["Zn + Cu²⁺ → Zn²⁺ + Cu","Cu + Zn²⁺ → Cu²⁺ + Zn","Zn + Cu → Zn²⁺ + Cu²⁺","Zn²⁺ + Cu²⁺ → Zn + Cu"],b:0,u:"Gabungkan setengah persamaan pengoksidaan zink dan penurunan ion kuprum(II)."}},

{n:4, tempat:"Makmal Elektrolisis", sk:"9.4 Menganalisis sel elektrolisis", lampiran:"r2",
 kadNama:"Anod dan Katod", kadEm:"\u{1F50C}", kadFakta:"Dalam sel elektrolisis, anod disambung ke terminal positif (pengoksidaan) dan katod ke terminal negatif (penurunan).",
 bosKadNama:"Faktor Nyahcas", bosKadEm:"\u{1F9EE}", bosKadFakta:"Ion yang dinyahcas dalam larutan akueus bergantung pada nilai E°, kepekatan ion dan jenis elektrod.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 2, apakah hasil di katod?",p:["Kuprum terenap","Gas oksigen","Gas hidrogen","Gas sulfur dioksida"],b:0,u:"Cu²⁺ (E° +0.34 V) lebih mudah diturunkan daripada H⁺."},
 {j:"pilih",t:"Berdasarkan Rajah 2, apakah hasil di anod karbon?",p:["Gas oksigen","Gas hidrogen","Kuprum terenap","Gas sulfur trioksida"],b:0,u:"OH⁻ dinyahcas: 4OH⁻ → O₂ + 2H₂O + 4e⁻. Ion SO₄²⁻ tidak dinyahcas."},
 {j:"pilih",t:"Berdasarkan Rajah 2, apakah perubahan warna larutan selepas elektrolisis lama?",p:["Biru pudar","Biru lebih pekat","Menjadi perang","Kekal sama"],b:0,u:"Ion Cu²⁺ dikeluarkan daripada larutan sebagai kuprum."},
 {j:"pilih",t:"Berdasarkan Rajah 2, larutan menjadi semakin berasid kerana:",p:["Ion H⁺ dan SO₄²⁻ berkumpul","Ion OH⁻ bertambah dalam larutan","Kuprum melarut di anod","Gas hidrogen terhasil di katod"],b:0,u:"OH⁻ dikeluarkan di anod, meninggalkan H⁺ dan SO₄²⁻ (asid sulfurik)."},
 {j:"pilih",t:"Jika anod karbon dalam Rajah 2 diganti dengan kuprum, apakah yang berlaku di anod?",p:["Kuprum melarut menjadi Cu²⁺","Gas oksigen terbebas","Kuprum terenap","Gas hidrogen terbebas"],b:0,u:"Anod kuprum aktif: Cu → Cu²⁺ + 2e⁻."},
 {j:"pilih",t:"Dalam elektrolisis leburan plumbum(II) bromida, hasil di katod ialah:",p:["Plumbum","Bromin","Hidrogen","Oksigen"],b:0,u:"Dalam leburan hanya ada Pb²⁺ dan Br⁻; Pb²⁺ diturunkan di katod."},
 {j:"pilih",t:"Dalam elektrolisis larutan natrium klorida PEKAT dengan elektrod karbon, hasil di anod ialah:",p:["Gas klorin","Gas oksigen","Gas hidrogen","Natrium"],b:0,u:"Kepekatan Cl⁻ tinggi, jadi Cl⁻ dinyahcas walaupun OH⁻ mempunyai E° lebih rendah."},
 {j:"pilih",t:"Untuk menyadur sudu besi dengan argentum, sudu itu dijadikan:",p:["Katod","Anod","Titian garam","Elektrolit"],b:0,u:"Ion Ag⁺ diturunkan dan terenap pada katod (sudu)."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, jika kedua-dua elektrod karbon digantikan dengan kuprum, apakah perubahan jisim katod dan anod?",p:["Katod bertambah, anod berkurang","Kedua-duanya bertambah","Kedua-duanya berkurang","Tiada perubahan"],b:0,u:"Kuprum melarut di anod dan terenap di katod: prinsip penulenan kuprum."}},

{n:5, tempat:"Lombong dan Jambatan", sk:"9.5 Pengekstrakan logam · 9.6 Pengaratan", lampiran:null,
 kadNama:"Relau Bagas", kadEm:"\u{1F3ED}", kadFakta:"Dalam relau bagas, karbon monoksida menurunkan bijih besi (Fe₂O₃) kepada besi lebur. Batu kapur menyingkirkan bendasing sebagai sanga.",
 bosKadNama:"Perlindungan Korban", bosKadEm:"\u{1F6E1}\u{FE0F}", bosKadFakta:"Logam yang lebih elektropositif (seperti zink atau magnesium) dioksidakan dahulu, jadi besi terlindung daripada berkarat.",
 soalan:[
 {j:"pilih",t:"Aluminium diekstrak melalui elektrolisis, bukan penurunan oleh karbon. Penjelasan terbaik ialah:",p:["Aluminium lebih reaktif daripada karbon","Karbon terlalu mahal untuk digunakan","Aluminium oksida tidak wujud di alam","Elektrolisis lebih murah dalam semua kes"],b:0,u:"Karbon tidak dapat menurunkan oksida logam yang lebih reaktif daripadanya."},
 {j:"pilih",t:"Kriolit ditambah dalam pengekstrakan aluminium untuk:",p:["Merendahkan takat lebur aluminium oksida","Menambah takat lebur aluminium oksida","Menyadur aluminium dengan kuprum","Menghalang aluminium berkarat"],b:0,u:"Ini menjimatkan tenaga elektrik dan kos operasi."},
 {j:"pilih",t:"Pagar besi di tepi pantai cepat berkarat kerana:",p:["Air masin ialah elektrolit yang baik","Udara pantai tidak mengandungi oksigen","Garam bertindak sebagai salutan pelindung","Suhu pantai sangat rendah"],b:0,u:"Ion dalam air masin mempercepat pemindahan elektron dalam pengaratan."},
 {j:"pilih",t:"Kapal dilekatkan blok magnesium atau zink pada badan besinya. Nilaikan kaedah ini.",p:["Berkesan; blok itu dioksidakan menggantikan besi","Tidak berkesan kerana zink lebih lemah","Berkesan kerana zink menambah berat kapal","Tidak berkesan kerana magnesium menarik karat"],b:0,u:"Perlindungan korban: logam yang lebih elektropositif menderma elektron dahulu."},
 {j:"pilih",t:"Tin minuman diperbuat daripada besi bersalut stanum. Jika salutan tercalar, besi akan berkarat lebih cepat kerana:",p:["Besi lebih elektropositif daripada stanum","Stanum lebih reaktif daripada besi","Stanum melindungi besi secara korban","Besi tidak bereaksi dengan oksigen"],b:0,u:"Besi menjadi anod dan dioksidakan lebih cepat apabila bersentuhan dengan stanum."},
 {j:"pilih",t:"Antara kaedah berikut, yang manakah PALING wajar untuk melindungi paip besi bawah tanah yang sukar dicapai?",p:["Sambung kepada blok magnesium","Cat sekali sahaja","Salut dengan stanum","Biarkan tanpa perlindungan"],b:0,u:"Blok magnesium boleh diganti tanpa menggali seluruh paip, dan melindungi walaupun paip tercalar."},
 {j:"banyak",t:"Pilih DUA syarat yang diperlukan untuk besi berkarat.",p:["Oksigen","Air","Gas nitrogen","Gas argon"],b:[0,1],u:"Pengaratan memerlukan oksigen dan air."},
 {j:"pilih",t:"Setengah persamaan di kawasan katod semasa pengaratan besi ialah:",p:["O₂ + 2H₂O + 4e⁻ → 4OH⁻","Fe → Fe²⁺ + 2e⁻","Fe³⁺ + 3e⁻ → Fe","2H₂O → O₂ + 4H⁺ + 4e⁻"],b:0,u:"Oksigen diturunkan di pinggir titisan air yang kaya oksigen."}],
 bos:{j:"pilih",t:"Sebuah syarikat memilih antara penggalvanian (salutan zink) dan salutan stanum untuk bumbung besi. Pilihan PALING wajar dan sebabnya ialah:",p:["Penggalvanian; zink melindungi walaupun tercalar","Stanum; melindungi walaupun tercalar","Stanum; lebih reaktif daripada besi","Kedua-duanya sama sahaja"],b:0,u:"Zink lebih elektropositif daripada besi dan terus memberikan perlindungan korban."}},

{n:6, tempat:"Studio Sel Hijau", sk:"9.1 hingga 9.6 Mereka cipta menggunakan pengetahuan redoks", lampiran:null,
 kadNama:"Sel Buah", kadEm:"\u{1F34B}", kadFakta:"Dua logam berbeza yang dicucuk ke dalam buah limau membentuk sel ringkas kerana jus limau bertindak sebagai elektrolit.",
 bosKadNama:"Tenaga Lestari", bosKadEm:"\u{1F33F}", bosKadFakta:"Sel kimia yang baik menghasilkan voltan berguna, menggunakan bahan murah dan selamat, serta boleh dikitar semula.",
 soalan:[
 {j:"pilih",t:"Anda mahu menghasilkan voltan paling tinggi dalam sel buah limau. Pasangan elektrod terbaik ialah:",p:["Magnesium dan kuprum","Kuprum dan kuprum","Zink dan zink","Karbon dan karbon"],b:0,u:"Jarak E° paling besar menghasilkan voltan paling tinggi."},
 {j:"pilih",t:"Bagaimanakah anda menambah voltan sel buah untuk menyalakan LED?",p:["Sambung beberapa sel secara bersiri","Guna limau yang lebih besar","Guna dua elektrod kuprum","Celup sel dalam air paip"],b:0,u:"Sel bersiri menjumlahkan voltan setiap sel."},
 {j:"pilih",t:"Idea manakah PALING kreatif untuk mengajar penyaduran kepada murid?",p:["Saduran kuprum pada kunci lama","Membaca nota penyaduran","Melukis bateri di kertas","Menonton jam di dinding"],b:0,u:"Penyaduran kunci menunjukkan hasil yang jelas dan berguna."},
 {j:"pilih",t:"Anda mereka cara melindungi rangka basikal besi untuk penduduk di tepi pantai. Cadangan terbaik ialah:",p:["Salut dengan cat dan lapik minyak","Biarkan basikal di bawah hujan","Rendam basikal dalam air masin","Gosok basikal dengan garam"],b:0,u:"Cat dan minyak menghalang oksigen dan air daripada sampai ke besi."},
 {j:"banyak",t:"Pilih DUA pertimbangan semasa mereka bateri kitar semula untuk sekolah.",p:["Logam berat dikumpul","Elektrolit tidak bocor","Bateri dibuang ke sungai berhampiran","Bateri dibakar secara terbuka"],b:[0,1],u:"Keselamatan bahan dan pelupusan yang betul melindungi alam sekitar."},
 {j:"pilih",t:"Bagaimanakah anda menguji sama ada kaedah anti karat anda berkesan?",p:["Banding paku bersalut dengan paku biasa","Timbang satu paku sekali sahaja di makmal","Lihat warna salutan selepas dicat","Bau paku selepas seminggu"],b:0,u:"Ujian kawalan menunjukkan perbezaan kadar pengaratan."},
 {j:"pilih",t:"Mengapakah penulenan kuprum melalui elektrolisis penting kepada industri elektrik?",p:["Kuprum tulen konduktor lebih baik","Kuprum tidak tulen lebih murah","Elektrolisis menghasilkan emas","Kuprum tulen lebih rapuh"],b:0,u:"Bendasing meningkatkan rintangan wayar."},
 {j:"pilih",t:"Pengusaha kecil mahu menyadur cenderamata piuter dengan argentum. Langkah yang BETUL ialah:",p:["Cenderamata sebagai katod, argentum sebagai anod","Cenderamata sebagai anod, argentum sebagai katod","Guna larutan gula sebagai elektrolit","Guna arus yang sangat tinggi"],b:0,u:"Elektrolit perlu mengandungi ion Ag⁺ dan arus kecil menghasilkan salutan yang licin."}],
 bos:{j:"buka",
  t:"Reka satu sel kimia ringkas ATAU kaedah mencegah pengaratan untuk kegunaan di rumah atau sekolah.",
  arahan:"Nyatakan bahan, susunan radas atau lakaran, setengah persamaan di anod dan katod (atau di kawasan anod dan katod bagi pengaratan), anggaran voltan atau keberkesanan, cara menguji, serta pertimbangan keselamatan, kos dan alam sekitar.",
  u:"Jawapan TP6 yang kukuh memilih pasangan logam berdasarkan E° (contoh: Mg dan Cu dalam jus limau), menulis setengah persamaan yang betul, menganggar voltan menggunakan E° katod − E° anod, merancang ujian adil, dan menimbang keselamatan serta pelupusan."}}
];

module.exports = {
  id:"k5b1", tingkatan:5, kod:"1.0 Keseimbangan Redoks",
  tajuk:"Aliran Elektron",
  subtajuk:"Kimia Ting. 5 · Bab 1 Keseimbangan Redoks",
  spi:SPI["9"],
  ulasan:{
   1:"{n} dapat mengingat kembali maksud pengoksidaan, penurunan dan nombor pengoksidaan. Langkah seterusnya ialah menjelaskan keupayaan elektrod piawai.",
   2:"{n} dapat menjelaskan siri keupayaan elektrod piawai dan tindak balas penyesaran logam. Perlu lebih latihan mengaplikasikan sel kimia.",
   3:"{n} boleh mengaplikasikan pengetahuan redoks untuk menerangkan sel volta dan mengira voltan sel. Galakkan menganalisis sel elektrolisis.",
   4:"{n} mampu menganalisis hasil elektrolisis berdasarkan nilai E°, kepekatan dan jenis elektrod. Seterusnya latih menilai pengekstrakan logam dan pencegahan karat.",
   5:"{n} dapat menilai kaedah pengekstrakan logam dan pencegahan pengaratan untuk membuat keputusan yang wajar. Sudah bersedia mereka cipta penyelesaian redoks.",
   6:"{n} berjaya mereka cipta sel kimia atau kaedah pencegahan karat yang kreatif dan berasas. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Keseimbangan Redoks. Cadangan: ulang hentian pertama dan berlatih menentukan nombor pengoksidaan dalam sebatian biasa."
  },
  lampiran:{
   j1:jadual(1, "Keupayaan elektrod piawai, E°, pada 25 °C",
     ["Setengah persamaan", "E° (V)"],
     [["Mg^{2+} + 2e^− ⇌ Mg","−2.38"],["Zn^{2+} + 2e^− ⇌ Zn","−0.76"],["Fe^{2+} + 2e^− ⇌ Fe","−0.44"],["Pb^{2+} + 2e^− ⇌ Pb","−0.13"],["Cu^{2+} + 2e^− ⇌ Cu","+0.34"],["Ag^+ + e^− ⇌ Ag","+0.80"]]),
   r1:{jenis:"kimia", mod:"sel", jenis2:"volta",
     kiri:{label:"Zink", elektrolit:"ZnSO₄(ak)"}, kanan:{label:"Kuprum", elektrolit:"CuSO₄(ak)"},
     kapsyen:"Rajah 1 · Sel Daniell zink-kuprum",
     alt:"Sel volta dengan elektrod zink dalam larutan zink sulfat dan elektrod kuprum dalam larutan kuprum(II) sulfat, disambung oleh titian garam dan voltmeter"},
   r2:{jenis:"kimia", mod:"sel", jenis2:"elektrolisis",
     kiri:{label:"Anod", elektrod:"Karbon"}, kanan:{label:"Katod", elektrod:"Karbon"},
     elektrolit:"CuSO₄(ak) 1.0 mol dm⁻³",
     kapsyen:"Rajah 2 · Elektrolisis larutan kuprum(II) sulfat",
     alt:"Sel elektrolisis dengan dua elektrod karbon dalam larutan kuprum(II) sulfat; anod disambung ke terminal positif dan katod ke terminal negatif"}
  },
  aras:ARAS
};
