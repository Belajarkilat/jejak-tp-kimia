/* Sumber kandungan — Kimia KSSM Tingkatan 5, Bab 3 Termokimia.
   SK 11.1 Perubahan haba dalam tindak balas, 11.2 Haba tindak balas (pemendakan, penyesaran,
   peneutralan, pembakaran), 11.3 Aplikasi tindak balas endotermik dan eksotermik dalam kehidupan
   (DSKP KSSM Kimia Tingkatan 4 dan 5, dskp/kimia-en.pdf).
   Pemalar: c air = 4.2 J g⁻¹ °C⁻¹, ketumpatan larutan 1 g cm⁻³.
   ΔH pembakaran (kJ mol⁻¹): metanol −726, etanol −1376, propan-1-ol −2016, butan-1-ol −2676.
   ΔH peneutralan asid kuat + alkali kuat −57 kJ mol⁻¹. */
const { jadual, SPI } = require("./_k");

const C = "(Muatan haba tentu larutan = 4.2 J g⁻¹ °C⁻¹; ketumpatan larutan = 1 g cm⁻³)";

const ARAS = [

{n:1, tempat:"Termometer Makmal", sk:"11.1 Perubahan haba dalam tindak balas", lampiran:"j1",
 kadNama:"Eksotermik", kadEm:"\u{1F525}", kadFakta:"Tindak balas eksotermik membebaskan haba ke persekitaran, jadi suhu campuran naik dan ΔH bernilai negatif.",
 bosKadNama:"Endotermik", bosKadEm:"\u{1F9CA}", bosKadFakta:"Tindak balas endotermik menyerap haba daripada persekitaran, jadi suhu campuran turun dan ΔH bernilai positif.",
 soalan:[
 {j:"pilih",t:"Tindak balas eksotermik ialah tindak balas yang:",p:["Membebaskan haba","Menyerap haba daripada persekitaran","Tidak melibatkan sebarang perubahan haba","Hanya berlaku pada suhu yang sangat tinggi"],b:0,u:"Haba dibebaskan ke persekitaran, jadi persekitaran menjadi lebih panas."},
 {j:"pilih",t:"Tanda ΔH bagi tindak balas endotermik ialah:",p:["Positif","Negatif","Sifar","Bergantung pada warna"],b:0,u:"Kandungan tenaga hasil lebih tinggi daripada bahan, jadi ΔH > 0."},
 {j:"pilih",t:"Berdasarkan Jadual 1, bahan manakah melarut secara eksotermik?",p:["NaOH dan CaCl₂ kontang","NH₄NO₃ dan Na₂S₂O₃","NaOH dan NH₄NO₃","Semua empat bahan"],b:0,u:"Suhu akhir lebih tinggi daripada suhu awal bagi NaOH dan CaCl₂ kontang."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah yang berlaku kepada suhu air apabila ammonium nitrat dilarutkan?",p:["Suhu turun","Suhu naik","Suhu tidak berubah","Suhu naik kemudian turun"],b:0,u:"Suhu turun dari 29 °C ke 21 °C kerana haba diserap daripada air."},
 {j:"pilih",t:"Berdasarkan Jadual 1, berapakah perubahan suhu bagi natrium hidroksida?",p:["Naik 10 °C","Turun 10 °C","Naik 39 °C","Turun 29 °C"],b:0,u:"39 °C − 29 °C = 10 °C, suhu naik."},
 {j:"pilih",t:"Semasa tindak balas kimia, pemecahan ikatan dalam bahan tindak balas:",p:["Menyerap tenaga","Membebaskan tenaga","Tidak melibatkan tenaga","Menghasilkan elektron bebas"],b:0,u:"Tenaga diperlukan untuk memecahkan ikatan; pembentukan ikatan membebaskan tenaga."},
 {j:"pilih",t:"Bikar terasa sejuk apabila disentuh semasa tindak balas berlaku. Tindak balas itu ialah:",p:["Endotermik","Eksotermik","Peneutralan kuat","Pembakaran lengkap"],b:0,u:"Haba diserap daripada persekitaran, termasuk tangan anda."},
 {j:"banyak",t:"Pilih DUA contoh proses eksotermik.",p:["Pembakaran kayu","Respirasi sel","Fotosintesis","Penguraian kalsium karbonat"],b:[0,1],u:"Fotosintesis dan penguraian terma CaCO₃ menyerap haba."}],
 bos:{j:"banyak",t:"Berdasarkan Jadual 1, pilih SEMUA pernyataan yang betul.",p:["Pelarutan Na₂S₂O₃ ialah endotermik","Pelarutan CaCl₂ kontang membebaskan haba","ΔH pelarutan NH₄NO₃ adalah positif","Pelarutan NaOH menyerap haba","Semua bahan menurunkan suhu air"],b:[0,1,2],u:"Suhu turun bagi NH₄NO₃ dan Na₂S₂O₃ (endotermik, ΔH positif); suhu naik bagi NaOH dan CaCl₂ (eksotermik)."}},

{n:2, tempat:"Tangga Aras Tenaga", sk:"11.1 Gambar rajah aras tenaga · haba tindak balas, ΔH", lampiran:"r1",
 kadNama:"Rajah Aras Tenaga", kadEm:"\u{1FA9C}", kadFakta:"Dalam gambar rajah aras tenaga eksotermik, aras bahan lebih tinggi daripada aras hasil. Beza antara dua aras ialah ΔH.",
 bosKadNama:"Haba Tindak Balas", bosKadEm:"\u{1F4CA}", bosKadFakta:"Haba tindak balas, ΔH, ialah perubahan haba apabila bilangan mol bahan yang ditetapkan dalam persamaan termokimia bertindak balas.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, tindak balas ini ialah:",p:["Eksotermik","Endotermik","Tidak berubah tenaga","Tindak balas berbalik"],b:0,u:"Aras tenaga hasil lebih rendah daripada aras bahan; ΔH negatif."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapakah haba yang dibebaskan apabila 1 mol zink bertindak balas dengan ion kuprum(II)?",p:["210 kJ","105 kJ","420 kJ","Tiada haba dibebaskan"],b:0,u:"ΔH = −210 kJ mol⁻¹ bermaksud 210 kJ dibebaskan bagi setiap mol."},
 {j:"pilih",t:"Berdasarkan Rajah 1, jumlah kandungan tenaga hasil berbanding bahan ialah:",p:["Lebih rendah","Lebih tinggi","Sama","Tidak dapat ditentukan"],b:0,u:"Tenaga yang hilang dibebaskan sebagai haba."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah yang diperhatikan pada termometer semasa tindak balas?",p:["Bacaan naik","Bacaan turun","Bacaan tidak berubah","Bacaan turun kemudian kekal"],b:0,u:"Haba dibebaskan ke larutan, jadi suhu larutan naik."},
 {j:"pilih",t:"Dalam tindak balas eksotermik, tenaga yang dibebaskan semasa pembentukan ikatan adalah:",p:["Lebih besar daripada tenaga pemecahan ikatan","Lebih kecil daripada tenaga pemecahan ikatan","Sama dengan tenaga pemecahan ikatan","Sifar kerana tiada ikatan terbentuk"],b:0,u:"Lebihan tenaga dibebaskan sebagai haba, jadi ΔH negatif."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapakah haba yang dibebaskan jika hanya 0.5 mol zink bertindak balas?",p:["105 kJ","210 kJ","420 kJ","52.5 kJ"],b:0,u:"0.5 × 210 = 105 kJ."},
 {j:"pilih",t:"Bagi tindak balas endotermik, aras tenaga hasil dalam gambar rajah dilukis:",p:["Lebih tinggi daripada aras bahan","Lebih rendah daripada aras bahan","Sama tinggi dengan aras bahan","Di bawah paksi tenaga"],b:0,u:"Hasil mempunyai lebih banyak tenaga kerana haba diserap."},
 {j:"pilih",t:"Persamaan termokimia berbeza daripada persamaan kimia biasa kerana ia menunjukkan:",p:["Nilai ΔH","Warna hasil","Jisim bahan","Nama IUPAC"],b:0,u:"Contoh: Zn + Cu²⁺ → Zn²⁺ + Cu, ΔH = −210 kJ mol⁻¹."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, jika semua bahan didarab dua dalam persamaan termokimia (2 mol Zn), nilai ΔH yang ditulis menjadi:",p:["−420 kJ","−210 kJ","−105 kJ","+420 kJ"],b:0,u:"ΔH berkadar terus dengan bilangan mol yang bertindak balas: 2 × (−210) = −420 kJ."}},

{n:3, tempat:"Makmal Pemendakan & Penyesaran", sk:"11.2 Haba pemendakan dan haba penyesaran", lampiran:null,
 kadNama:"Q = mcθ", kadEm:"\u{1F9EE}", kadFakta:"Haba yang dibebaskan atau diserap dikira dengan Q = mcθ, dengan m jisim larutan, c muatan haba tentu dan θ perubahan suhu.",
 bosKadNama:"Haba Penyesaran", bosKadEm:"\u{1F3C3}", bosKadFakta:"Haba penyesaran ialah perubahan haba apabila satu mol logam disesarkan daripada larutan garamnya oleh logam yang lebih elektropositif.",
 soalan:[
 {j:"pilih",t:"Haba pemendakan ialah perubahan haba apabila:",p:["1 mol mendakan terbentuk daripada ionnya","1 mol air terbentuk daripada ion H⁺ dan OH⁻","1 mol bahan api terbakar dalam oksigen berlebihan","1 mol logam disesarkan daripada larutan garamnya"],b:0,u:"Contoh: Ag⁺ + Cl⁻ → AgCl."},
 {j:"nombor",t:"50 cm³ larutan argentum nitrat dicampur dengan 50 cm³ larutan natrium klorida. Suhu naik 3.0 °C. Hitung haba yang dibebaskan dalam J. "+C,b:1260,tol:0.01,suf:"J",u:"m = 100 g; Q = 100 × 4.2 × 3.0 = 1260 J."},
 {j:"nombor",t:"Haba yang dibebaskan apabila 0.02 mol argentum klorida termendak ialah 1260 J. Hitung haba yang dibebaskan bagi 1 mol, dalam kJ.",b:63,tol:0.01,suf:"kJ",u:"1260 ÷ 0.02 = 63 000 J = 63 kJ, jadi ΔH = −63 kJ mol⁻¹."},
 {j:"pilih",t:"Pemendakan magnesium karbonat menyebabkan suhu campuran turun. Tindak balas itu ialah:",p:["Endotermik","Eksotermik","Peneutralan","Pembakaran"],b:0,u:"Haba diserap daripada larutan, jadi ΔH positif."},
 {j:"nombor",t:"Serbuk zink berlebihan ditambah kepada 50 cm³ larutan kuprum(II) sulfat 0.2 mol dm⁻³. Berapakah bilangan mol kuprum yang disesarkan?",b:0.01,tol:0.01,suf:"mol",u:"n = MV/1000 = 0.2 × 50 ÷ 1000 = 0.01 mol."},
 {j:"nombor",t:"Dalam tindak balas yang sama, suhu naik 10.0 °C. Hitung haba yang dibebaskan dalam J. "+C,b:2100,tol:0.01,suf:"J",u:"Q = 50 × 4.2 × 10.0 = 2100 J."},
 {j:"pilih",t:"Mengapakah serbuk zink digunakan BERLEBIHAN dalam eksperimen haba penyesaran?",p:["Supaya semua ion Cu²⁺ disesarkan","Supaya larutan berwarna biru lebih pekat","Supaya suhu awal larutan menurun","Supaya zink tidak bertindak balas langsung"],b:0,u:"Bilangan mol kuprum yang disesarkan bergantung pada ion Cu²⁺ yang habis bertindak balas."},
 {j:"pilih",t:"Antara logam berikut, yang manakah menghasilkan haba penyesaran PALING tinggi apabila menyesarkan kuprum daripada larutan CuSO₄?",p:["Magnesium","Zink","Ferum","Plumbum"],b:0,u:"Semakin jauh jarak logam daripada kuprum dalam siri elektrokimia, semakin tinggi haba penyesaran."}],
 bos:{j:"nombor",t:"Daripada data 0.01 mol kuprum disesarkan dan 2100 J dibebaskan, hitung haba penyesaran (tanpa tanda negatif), dalam kJ mol⁻¹.",b:210,tol:0.01,suf:"kJ mol⁻¹",u:"2100 ÷ 0.01 = 210 000 J mol⁻¹ = 210 kJ mol⁻¹; ΔH = −210 kJ mol⁻¹."}},

{n:4, tempat:"Bilik Peneutralan & Pembakaran", sk:"11.2 Haba peneutralan dan haba pembakaran", lampiran:"j2",
 kadNama:"Haba Peneutralan", kadEm:"\u{2697}\u{FE0F}", kadFakta:"Haba peneutralan asid kuat dengan alkali kuat ialah −57 kJ mol⁻¹. Asid lemah atau alkali lemah memberi nilai lebih kecil kerana sebahagian haba digunakan untuk mengion lengkap.",
 bosKadNama:"Haba Pembakaran", bosKadEm:"\u{1F56F}\u{FE0F}", bosKadFakta:"Haba pembakaran alkohol bertambah kira-kira 650 kJ mol⁻¹ bagi setiap tambahan CH₂ kerana lebih banyak ikatan terbentuk dalam CO₂ dan H₂O.",
 soalan:[
 {j:"pilih",t:"Haba peneutralan ialah perubahan haba apabila:",p:["1 mol air terbentuk","1 mol asid dilarutkan dalam air suling","1 mol garam termendak daripada larutan","1 mol alkali dipanaskan sehingga mendidih"],b:0,u:"H⁺ + OH⁻ → H₂O, ΔH = −57 kJ mol⁻¹ bagi asid kuat dan alkali kuat."},
 {j:"pilih",t:"Mengapakah haba peneutralan asid etanoik dengan natrium hidroksida kurang daripada 57 kJ mol⁻¹?",p:["Sebahagian haba diserap untuk mengion asid lemah","Asid etanoik ialah asid kuat yang mengion lengkap","Natrium hidroksida ialah alkali lemah","Air tidak terbentuk dalam tindak balas ini"],b:0,u:"Asid lemah mengion separa; haba digunakan untuk memecahkan ikatan bagi mengion selebihnya."},
 {j:"pilih",t:"50 cm³ H₂SO₄ 1.0 mol dm⁻³ dineutralkan dengan NaOH berlebihan. Berbanding HCl 1.0 mol dm⁻³ dengan isi padu sama, haba yang dibebaskan ialah:",p:["Dua kali ganda","Separuh","Sama","Empat kali ganda"],b:0,u:"H₂SO₄ ialah asid diprotik; bilangan mol air yang terbentuk dua kali ganda. ΔH per mol air tetap −57 kJ."},
 {j:"nombor",t:"50 cm³ HCl 1.0 mol dm⁻³ dicampur dengan 50 cm³ NaOH 1.0 mol dm⁻³. Suhu naik 6.5 °C. Hitung haba yang dibebaskan dalam J. "+C,b:2730,tol:0.01,suf:"J",u:"Q = 100 × 4.2 × 6.5 = 2730 J."},
 {j:"pilih",t:"Berdasarkan Jadual 2, apakah corak haba pembakaran alkohol?",p:["Bertambah dengan bilangan atom karbon","Berkurang dengan bilangan atom karbon","Sama bagi semua alkohol","Bertambah kemudian berkurang"],b:0,u:"Daripada −726 (metanol) ke −2676 kJ mol⁻¹ (butan-1-ol)."},
 {j:"pilih",t:"Berdasarkan Jadual 2, berapakah perbezaan haba pembakaran antara dua alkohol berturutan?",p:["Kira-kira 650 kJ mol⁻¹","Kira-kira 57 kJ mol⁻¹","Kira-kira 1376 kJ mol⁻¹","Kira-kira 14 kJ mol⁻¹"],b:0,u:"Contoh: 1376 − 726 = 650 kJ mol⁻¹."},
 {j:"pilih",t:"Berdasarkan Jadual 2, ramalkan haba pembakaran pentan-1-ol, C₅H₁₁OH.",p:["Kira-kira −3330 kJ mol⁻¹","Kira-kira −2676 kJ mol⁻¹","Kira-kira −2000 kJ mol⁻¹","Kira-kira −4000 kJ mol⁻¹"],b:0,u:"−2676 − 650 ≈ −3326 kJ mol⁻¹."},
 {j:"pilih",t:"Dalam eksperimen, haba pembakaran etanol yang diperoleh ialah −1008 kJ mol⁻¹, lebih rendah daripada nilai buku teks −1376 kJ mol⁻¹. Sebab utamanya ialah:",p:["Haba hilang ke persekitaran","Etanol mengandungi terlalu banyak karbon","Air dalam bekas kuprum terlalu sejuk","Termometer membaca suhu terlalu tinggi"],b:0,u:"Haba hilang ke udara dan bekas; pembakaran mungkin tidak lengkap."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 2, mengapakah haba pembakaran bertambah apabila bilangan atom karbon bertambah?",p:["Lebih banyak CO₂ dan H₂O terbentuk per mol","Alkohol yang lebih besar mempunyai takat didih rendah","Alkohol yang lebih besar mengandungi kurang hidrogen","Pembakaran alkohol besar sentiasa tidak lengkap"],b:0,u:"Lebih banyak ikatan C=O dan O–H terbentuk, jadi lebih banyak haba dibebaskan."}},

{n:5, tempat:"Penilai Bahan Api", sk:"11.3 Nilai bahan api", lampiran:"j3",
 kadNama:"Nilai Bahan Api", kadEm:"\u{26FD}", kadFakta:"Nilai bahan api ialah jumlah tenaga haba yang dibebaskan apabila 1 g bahan api terbakar lengkap dalam oksigen berlebihan (kJ g⁻¹).",
 bosKadNama:"Bahan Api Bijak", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Pemilihan bahan api mengambil kira nilai bahan api, kos, ketersediaan, keselamatan dan kesan kepada alam sekitar.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 3, bahan api manakah mempunyai nilai bahan api tertinggi?",p:["Hidrogen","Gas asli","Petrol","Arang"],b:0,u:"Hidrogen membebaskan 143 kJ bagi setiap gram."},
 {j:"nombor",t:"Pembakaran lengkap 2 g gas hidrogen membebaskan 286 kJ. Hitung nilai bahan api hidrogen dalam kJ g⁻¹.",b:143,tol:0.01,suf:"kJ g⁻¹",u:"286 ÷ 2 = 143 kJ g⁻¹."},
 {j:"nombor",t:"Haba pembakaran etanol (JMR 46) ialah −1376 kJ mol⁻¹. Hitung nilai bahan api etanol dalam kJ g⁻¹, betul kepada satu tempat perpuluhan.",b:29.9,tol:0.01,suf:"kJ g⁻¹",u:"1376 ÷ 46 = 29.9 kJ g⁻¹."},
 {j:"pilih",t:"Berdasarkan Jadual 3, walaupun hidrogen mempunyai nilai bahan api tertinggi, ia belum digunakan secara meluas di rumah kerana:",p:["Sukar dan mahal disimpan dengan selamat","Hidrogen menghasilkan banyak jelaga","Hidrogen tidak boleh terbakar dalam udara","Hidrogen menghasilkan gas karbon dioksida"],b:0,u:"Hidrogen mudah meletup dan perlu disimpan di bawah tekanan tinggi."},
 {j:"pilih",t:"Untuk menggoreng telur di kawasan perkhemahan, bahan api manakah PALING sesuai?",p:["Gas butana dalam tin","Kayu basah dari hutan","Hidrogen dalam tong","Arang batu yang besar"],b:0,u:"Mudah dibawa, cepat menyala dan nilai bahan apinya tinggi."},
 {j:"pilih",t:"Berdasarkan Jadual 3, berapakah jisim gas asli yang perlu dibakar untuk membebaskan 275 kJ?",p:["5 g","2 g","10 g","55 g"],b:0,u:"275 ÷ 55 = 5 g."},
 {j:"pilih",t:"Pembakaran bahan api fosil secara besar-besaran PALING menyumbang kepada:",p:["Pemanasan global","Penipisan nitrogen udara","Pembentukan oksigen baharu","Penurunan suhu bumi"],b:0,u:"Karbon dioksida ialah gas rumah hijau."},
 {j:"banyak",t:"Pilih DUA faktor yang perlu dinilai ketika memilih bahan api untuk dapur restoran.",p:["Nilai bahan api","Kos dan ketersediaan","Warna bahan api","Bau bekas penyimpanan"],b:[0,1],u:"Bahan api yang baik membekalkan haba tinggi pada kos yang berpatutan dan mudah didapati."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 3, sebuah kilang mahu menukar daripada arang kepada gas asli. Penilaian PALING tepat ialah:",p:["Nilai bahan api tinggi dan pembakaran lebih bersih","Gas asli tidak membebaskan karbon dioksida langsung","Arang lebih bersih dan sentiasa lebih murah","Kedua-duanya sama dari segi tenaga dan kebersihan"],b:0,u:"Gas asli 55 kJ g⁻¹ berbanding arang 33 kJ g⁻¹, dan kurang jelaga; namun CO₂ tetap terhasil."}},

{n:6, tempat:"Studio Pek Haba", sk:"11.3 Aplikasi tindak balas endotermik dan eksotermik", lampiran:null,
 kadNama:"Pek Sejuk", kadEm:"\u{1F9CA}", kadFakta:"Pek sejuk segera mengandungi ammonium nitrat dan air yang diasingkan. Apabila dicampur, pelarutan endotermik menyejukkan pek.",
 bosKadNama:"Pek Panas", bosKadEm:"\u{1F9E4}", bosKadFakta:"Pek panas menggunakan tindak balas eksotermik seperti pelarutan kalsium klorida kontang atau pengoksidaan serbuk besi.",
 soalan:[
 {j:"pilih",t:"Anda mereka pek sejuk untuk kecederaan sukan. Bahan yang PALING sesuai ialah:",p:["Ammonium nitrat dan air","Natrium hidroksida dan air","Kalsium oksida dan air","Asid hidroklorik dan zink"],b:0,u:"Pelarutan NH₄NO₃ adalah endotermik dan selamat dibungkus."},
 {j:"pilih",t:"Tin makanan swapanas menggunakan kalsium oksida dan air. Mengapa?",p:["Tindak balasnya eksotermik","Tindak balasnya endotermik","Ia menghasilkan gas hidrogen","Ia menyejukkan makanan"],b:0,u:"CaO + H₂O → Ca(OH)₂ membebaskan banyak haba."},
 {j:"pilih",t:"Mengapakah natrium hidroksida TIDAK sesuai digunakan dalam pek panas walaupun pelarutannya eksotermik?",p:["Ia bahan mengakis yang berbahaya","Ia tidak larut dalam air","Ia menyerap haba daripada kulit","Ia terlalu mahal untuk dibeli"],b:0,u:"Jika pek bocor, NaOH boleh melecurkan kulit."},
 {j:"pilih",t:"Pek panas boleh guna semula mengandungi larutan natrium etanoat tepu lampau. Haba dibebaskan apabila:",p:["Larutan menghablur","Larutan dipanaskan","Air ditambah","Pek disimpan dalam peti sejuk"],b:0,u:"Penghabluran natrium etanoat adalah eksotermik; pek dipanaskan semula untuk melarutkan hablur."},
 {j:"pilih",t:"Cadangan PALING kreatif menggunakan tindak balas endotermik untuk peniaga minuman di pasar malam ialah:",p:["Pek sejuk segera di bawah bekas minuman","Membakar arang di bawah bekas minuman","Menambah natrium hidroksida ke dalam ais","Membiarkan minuman di bawah matahari"],b:0,u:"Pek sejuk menyerap haba daripada bekas tanpa elektrik."},
 {j:"banyak",t:"Pilih DUA ciri keselamatan bagi reka bentuk pek panas untuk pesakit.",p:["Bahan tidak mengakis","Suhu maksimum terkawal","Pembungkus mudah koyak","Mengandungi asid pekat"],b:[0,1],u:"Pek perlu selamat jika bocor dan tidak melecurkan kulit."},
 {j:"pilih",t:"Untuk menguji pek panas rekaan anda, data PALING penting yang perlu dikumpul ialah:",p:["Suhu dan tempoh haba","Warna bungkusan pek","Jisim kotak pembungkus","Nama jenama pek panas"],b:0,u:"Pek yang baik mencapai suhu sesuai dan kekal panas cukup lama."},
 {j:"pilih",t:"Pek panas besi membebaskan haba apabila serbuk besi dioksidakan oleh udara. Bagaimanakah anda mengawal kadar pembebasan haba?",p:["Laraskan saiz lubang udara","Tambah lebih banyak warna","Gunakan beg yang lebih berat","Simpan dalam kotak kertas"],b:0,u:"Kadar masukan oksigen mengawal kadar pengoksidaan dan kadar haba."}],
 bos:{j:"buka",
  t:"Reka satu produk pek panas ATAU pek sejuk untuk kegunaan harian (contoh: pek sejuk sukan, tin minuman swasejuk, pek panas perkhemahan).",
  arahan:"Nyatakan bahan kimia yang dipilih, sama ada tindak balas eksotermik atau endotermik, persamaan atau proses yang berlaku, lakaran gambar rajah aras tenaga, cara menguji keberkesanan (suhu dan tempoh), langkah keselamatan dan anggaran kos.",
  u:"Jawapan TP6 yang kukuh memilih bahan yang selamat (contoh: NH₄NO₃ untuk pek sejuk atau CaCl₂ kontang untuk pek panas), melukis aras tenaga dengan tanda ΔH yang betul, merancang ujian suhu melawan masa dan menilai kos serta keselamatan pengguna."}}
];

module.exports = {
  id:"k5b3", tingkatan:5, kod:"3.0 Termokimia",
  tajuk:"Aras Tenaga",
  subtajuk:"Kimia Ting. 5 · Bab 3 Termokimia",
  spi:SPI["11"],
  ulasan:{
   1:"{n} dapat mengingat kembali maksud tindak balas eksotermik dan endotermik. Langkah seterusnya ialah mentafsir gambar rajah aras tenaga.",
   2:"{n} dapat menjelaskan gambar rajah aras tenaga dan maksud ΔH. Perlu lebih latihan mengira haba tindak balas menggunakan Q = mcθ.",
   3:"{n} boleh mengaplikasikan Q = mcθ untuk mengira haba pemendakan dan haba penyesaran. Galakkan menganalisis haba peneutralan dan haba pembakaran.",
   4:"{n} mampu menganalisis perbezaan haba peneutralan dan corak haba pembakaran alkohol. Seterusnya latih menilai pilihan bahan api.",
   5:"{n} dapat menilai bahan api berdasarkan nilai bahan api, kos dan kesan alam sekitar. Sudah bersedia mereka cipta produk berasaskan perubahan haba.",
   6:"{n} berjaya mereka cipta produk pek panas atau pek sejuk yang selamat dan berasas. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Termokimia. Cadangan: ulang hentian pertama dan bandingkan perubahan suhu semasa pelarutan bahan eksotermik dan endotermik."
  },
  lampiran:{
   j1:jadual(1, "Suhu air sebelum dan selepas pelarutan bahan",
     ["Bahan", "Suhu awal (°C)", "Suhu akhir (°C)"],
     [["Natrium hidroksida, NaOH","29","39"],["Kalsium klorida kontang, CaCl_2","29","35"],["Ammonium nitrat, NH_4NO_3","29","21"],["Natrium tiosulfat, Na_2S_2O_3","29","25"]]),
   r1:{jenis:"kimia", mod:"tenaga", bahan:"Zn + Cu²⁺", hasil:"Zn²⁺ + Cu", dh:"ΔH = −210 kJ mol⁻¹", eksotermik:true,
     kapsyen:"Rajah 1 · Gambar rajah aras tenaga penyesaran kuprum oleh zink",
     alt:"Gambar rajah aras tenaga: aras Zn tambah ion kuprum di atas, aras ion zink tambah Cu di bawah, anak panah ke bawah berlabel delta H negatif 210 kJ per mol"},
   j2:jadual(2, "Haba pembakaran beberapa alkohol",
     ["Alkohol", "Formula molekul", "ΔH (kJ mol⁻¹)"],
     [["Metanol","CH_3OH","−726"],["Etanol","C_2H_5OH","−1376"],["Propan-1-ol","C_3H_7OH","−2016"],["Butan-1-ol","C_4H_9OH","−2676"]]),
   j3:jadual(3, "Nilai bahan api beberapa bahan api",
     ["Bahan api", "Nilai bahan api (kJ g⁻¹)"],
     [["Hidrogen","143"],["Gas asli (metana)","55"],["Petrol","34"],["Arang","33"],["Etanol","30"]])
  },
  aras:ARAS
};
