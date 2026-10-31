/* Sumber kandungan — Kimia KSSM Tingkatan 4, Bab 3 Konsep Mol, Formula dan Persamaan Kimia.
   SK 3.1 Jisim atom relatif dan jisim molekul relatif, 3.2 Konsep mol, 3.3 Formula kimia,
   3.4 Persamaan kimia (DSKP KSSM Kimia Tingkatan 4 dan 5, dskp/kimia-en.pdf).
   Jisim atom relatif: H 1, C 12, N 14, O 16, Na 23, Mg 24, Al 27, S 32, Cl 35.5, K 39, Ca 40, Fe 56, Cu 64, Zn 65.
   Isi padu molar gas: 24 dm³ mol⁻¹ pada keadaan bilik, 22.4 dm³ mol⁻¹ pada STP. Pemalar Avogadro 6.02 × 10²³ mol⁻¹. */
const { jadual, SPI } = require("./_k");

const JAR = "Jisim atom relatif: H = 1, C = 12, O = 16, Na = 23, Mg = 24, S = 32, Cl = 35.5, Ca = 40, Cu = 64.";

const ARAS = [

{n:1, tempat:"Timbang Atom", sk:"3.1 Jisim atom relatif · 3.2 Konsep mol · 3.3 Formula kimia", lampiran:null,
 kadNama:"Mol", kadEm:"\u{1F9EE}", kadFakta:"Satu mol bahan mengandungi 6.02 × 10²³ zarah. Nombor ini ialah pemalar Avogadro.",
 bosKadNama:"Formula Ion", bosKadEm:"\u{1F524}", bosKadFakta:"Formula sebatian ion ditulis supaya jumlah cas positif sama dengan jumlah cas negatif, contohnya Al₂O₃.",
 soalan:[
 {j:"pilih",t:"Jisim atom relatif dibandingkan dengan 1/12 daripada jisim satu atom:",p:["Karbon-12","Hidrogen-1","Oksigen-16","Klorin-35"],b:0,u:"Piawai antarabangsa ialah 1/12 jisim atom karbon-12."},
 {j:"pilih",t:"Bilangan zarah dalam satu mol bahan ialah:",p:["6.02 × 10²³","6.02 × 10²²","1.00 × 10²³","12.0 × 10²³"],b:0,u:"Pemalar Avogadro, Nₐ = 6.02 × 10²³ mol⁻¹."},
 {j:"pilih",t:"Isi padu satu mol sebarang gas pada keadaan bilik ialah:",p:["24 dm³","22.4 dm³","1 000 dm³","12.0 dm³"],b:0,u:"Isi padu molar gas ialah 24 dm³ mol⁻¹ pada keadaan bilik dan 22.4 dm³ mol⁻¹ pada STP."},
 {j:"pilih",t:"Unit bagi jisim molar ialah:",p:["g mol⁻¹","mol g⁻¹","dm³ mol⁻¹","Tiada unit"],b:0,u:"Jisim molar ialah jisim satu mol bahan dalam gram, iaitu g mol⁻¹."},
 {j:"pilih",t:"Formula bagi ion sulfat ialah:",p:["SO₄²⁻","SO₃²⁻","S²⁻","SO₄⁻"],b:0,u:"Ion sulfat ialah SO₄²⁻. SO₃²⁻ ialah ion sulfit dan S²⁻ ialah ion sulfida."},
 {j:"pilih",t:"Formula bagi ion ammonium ialah:",p:["NH₄⁺","NH₃","NO₃⁻","NH₄²⁺"],b:0,u:"Ion ammonium bercas +1: NH₄⁺. NH₃ ialah molekul ammonia yang neutral."},
 {j:"pilih",t:"Formula yang menunjukkan nisbah teringkas bilangan atom setiap unsur dalam sebatian ialah formula:",p:["Empirik","Molekul","Struktur","Ion"],b:0,u:"Contoh: formula molekul glukosa C₆H₁₂O₆, formula empiriknya CH₂O."},
 {j:"pilih",t:"Nama bagi sebatian CuSO₄ ialah:",p:["Kuprum(II) sulfat","Kuprum(I) sulfida","Kalsium sulfat","Kuprum(II) sulfit"],b:0,u:"Cu²⁺ ialah ion kuprum(II) dan SO₄²⁻ ialah ion sulfat."}],
 bos:{j:"banyak",t:"Pilih SEMUA formula kimia yang betul.",p:["MgO","Al₂O₃","NaCl","CaCl","Na₂Cl"],b:[0,1,2],u:"Ca²⁺ memerlukan dua Cl⁻, jadi CaCl₂. Na⁺ dan Cl⁻ bergabung dalam nisbah 1:1, jadi NaCl."}},

{n:2, tempat:"Kaunter Mol", sk:"3.1 Jisim molekul relatif · 3.2 Hubungan mol, jisim, zarah dan isi padu gas", lampiran:null,
 kadNama:"Jisim Molar", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Bilangan mol = jisim (g) ÷ jisim molar (g mol⁻¹). Jisim molar sama nilainya dengan JMR atau JFR.",
 bosKadNama:"Isi Padu Molar", bosKadEm:"\u{1F388}", bosKadFakta:"Bilangan mol gas = isi padu gas ÷ isi padu molar (24 dm³ mol⁻¹ pada keadaan bilik).",
 soalan:[
 {j:"nombor",t:"Hitung jisim molekul relatif air, H₂O. "+JAR,b:18,tol:0.01,u:"2(1) + 16 = 18."},
 {j:"nombor",t:"Hitung jisim molekul relatif karbon dioksida, CO₂. "+JAR,b:44,tol:0.01,u:"12 + 2(16) = 44."},
 {j:"nombor",t:"Hitung jisim formula relatif kalsium karbonat, CaCO₃. "+JAR,b:100,tol:0.01,u:"40 + 12 + 3(16) = 100."},
 {j:"nombor",t:"Hitung jisim formula relatif natrium klorida, NaCl. "+JAR,b:58.5,tol:0.01,u:"23 + 35.5 = 58.5."},
 {j:"nombor",t:"Berapakah bilangan mol dalam 36 g air? (Jisim molar H₂O = 18 g mol⁻¹)",b:2,tol:0.01,suf:"mol",u:"36 ÷ 18 = 2 mol."},
 {j:"nombor",t:"Berapakah jisim 0.5 mol kalsium karbonat? (Jisim molar CaCO₃ = 100 g mol⁻¹)",b:50,tol:0.01,suf:"g",u:"0.5 × 100 = 50 g."},
 {j:"nombor",t:"Berapakah isi padu 2 mol gas oksigen pada keadaan bilik? (Isi padu molar = 24 dm³ mol⁻¹)",b:48,tol:0.01,suf:"dm³",u:"2 × 24 = 48 dm³."},
 {j:"pilih",t:"Berapakah bilangan molekul dalam 0.5 mol karbon dioksida?",p:["3.01 × 10²³","6.02 × 10²³","1.20 × 10²⁴","3.01 × 10²²"],b:0,u:"0.5 × 6.02 × 10²³ = 3.01 × 10²³ molekul."}],
 bos:{j:"nombor",t:"Berapakah bilangan mol gas karbon dioksida dalam 6 dm³ gas itu pada keadaan bilik? (Isi padu molar = 24 dm³ mol⁻¹)",b:0.25,tol:0.01,suf:"mol",u:"6 ÷ 24 = 0.25 mol."}},

{n:3, tempat:"Bengkel Persamaan", sk:"3.4 Persamaan kimia · 3.3 Mengaplikasikan formula kimia", lampiran:null,
 kadNama:"Persamaan Seimbang", kadEm:"\u{1F4DD}", kadFakta:"Persamaan kimia seimbang mempunyai bilangan atom setiap unsur yang sama di sebelah bahan tindak balas dan hasil tindak balas.",
 bosKadNama:"Pekali", bosKadEm:"\u{1F522}", bosKadFakta:"Pekali dalam persamaan seimbang memberi nisbah mol bahan dan hasil tindak balas.",
 soalan:[
 {j:"pilih",t:"Persamaan manakah seimbang?",p:["2H₂ + O₂ → 2H₂O","H₂ + O₂ → H₂O","H₂ + O₂ → 2H₂O","2H₂ + 2O₂ → H₂O"],b:0,u:"Kiri: 4 H, 2 O. Kanan: 4 H, 2 O."},
 {j:"pilih",t:"Lengkapkan persamaan: Mg + 2HCl → MgCl₂ + ___",p:["H₂","2H","Cl₂","H₂O"],b:0,u:"Magnesium bertindak balas dengan asid hidroklorik menghasilkan garam dan gas hidrogen, H₂."},
 {j:"pilih",t:"Dalam persamaan 2Na + Cl₂ → 2NaCl, berapakah mol natrium klorida terhasil daripada 4 mol natrium?",p:["4 mol","2 mol","1 mol","8 mol"],b:0,u:"Nisbah Na : NaCl = 2 : 2 = 1 : 1, jadi 4 mol Na menghasilkan 4 mol NaCl."},
 {j:"pilih",t:"Apakah formula sebatian ion yang terbentuk antara Al³⁺ dan Cl⁻?",p:["AlCl₃","Al₃Cl","AlCl","Al₂Cl₃"],b:0,u:"Satu Al³⁺ memerlukan tiga Cl⁻ untuk meneutralkan cas."},
 {j:"pilih",t:"Apakah formula kalium oksida? (K⁺ dan O²⁻)",p:["K₂O","KO","KO₂","K₂O₃"],b:0,u:"Dua K⁺ (+2) diperlukan untuk meneutralkan satu O²⁻ (−2)."},
 {j:"pilih",t:"Simbol keadaan (ak) dalam persamaan kimia bermaksud:",p:["Larutan akueus","Pepejal","Gas","Cecair tulen"],b:0,u:"(ak) menunjukkan bahan terlarut dalam air."},
 {j:"susun",t:"Susun langkah menulis persamaan kimia seimbang.",p:["Tulis persamaan perkataan","Tulis formula bahan dan hasil","Imbangkan bilangan atom dengan pekali","Tambah simbol keadaan"],b:[0,1,2,3],u:"Mula dengan perkataan, tukar kepada formula, imbangkan dengan pekali (bukan mengubah formula), kemudian tambah simbol keadaan."},
 {j:"nombor",t:"CaCO₃ → CaO + CO₂. Berapakah mol CO₂ terhasil apabila 3 mol CaCO₃ terurai sepenuhnya?",b:3,tol:0.01,suf:"mol",u:"Nisbah CaCO₃ : CO₂ = 1 : 1."}],
 bos:{j:"pilih",t:"Imbangkan: __Fe + __O₂ → __Fe₂O₃. Apakah pekali yang betul mengikut urutan?",p:["4, 3, 2","2, 3, 1","4, 3, 1","3, 2, 1"],b:0,u:"4Fe + 3O₂ → 2Fe₂O₃: kiri 4 Fe, 6 O; kanan 4 Fe, 6 O."}},

{n:4, tempat:"Makmal Formula Empirik", sk:"3.3 Menganalisis data untuk menentukan formula empirik", lampiran:"j1",
 kadNama:"Formula Empirik", kadEm:"\u{1F50E}", kadFakta:"Formula empirik ditentukan dengan menukar jisim setiap unsur kepada bilangan mol, kemudian mencari nisbah teringkas.",
 bosKadNama:"Pemanasan Berulang", bosKadEm:"\u{1F501}", bosKadFakta:"Pemanasan, penyejukan dan penimbangan diulang sehingga jisim tetap untuk memastikan tindak balas lengkap.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah jisim magnesium yang digunakan?",b:2.4,tol:0.01,suf:"g",u:"Jisim mangkuk + penutup + magnesium tolak jisim mangkuk + penutup: 27.4 − 25.0 = 2.4 g."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah jisim oksigen yang bergabung dengan magnesium?",b:1.6,tol:0.01,suf:"g",u:"29.0 − 27.4 = 1.6 g oksigen."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah bilangan mol atom magnesium? (JAR Mg = 24)",b:0.1,tol:0.01,suf:"mol",u:"2.4 ÷ 24 = 0.1 mol."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah bilangan mol atom oksigen? (JAR O = 16)",b:0.1,tol:0.01,suf:"mol",u:"1.6 ÷ 16 = 0.1 mol."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah formula empirik magnesium oksida?",p:["MgO","Mg₂O","MgO₂","Mg₂O₃"],b:0,u:"Nisbah mol Mg : O = 0.1 : 0.1 = 1 : 1."},
 {j:"pilih",t:"Dalam eksperimen Jadual 1, mengapakah penutup mangkuk pijar dibuka sekali-sekala?",p:["Membenarkan oksigen masuk","Membebaskan wap air yang terbentuk","Menyejukkan magnesium dengan cepat","Mengeluarkan asap putih magnesium oksida"],b:0,u:"Magnesium memerlukan oksigen untuk terbakar; penutup dibuka sekejap supaya udara masuk tanpa membenarkan asap MgO terlepas."},
 {j:"pilih",t:"Jika sedikit asap putih terlepas semasa eksperimen dalam Jadual 1, nisbah mol O : Mg yang dihitung akan:",p:["Kurang daripada nilai sebenar","Lebih daripada nilai sebenar","Kekal sama dengan nilai sebenar","Menjadi sifar sepenuhnya"],b:0,u:"Jisim akhir menjadi kurang, jadi jisim oksigen yang dikira kurang daripada sebenar."},
 {j:"pilih",t:"Sebatian X mengandungi 0.2 mol karbon dan 0.4 mol hidrogen. Jisim molekul relatif X ialah 28. Apakah formula molekul X?",p:["C₂H₄","CH₂","C₄H₈","C₂H₆"],b:0,u:"Formula empirik CH₂ (JMR 14). 28 ÷ 14 = 2, jadi C₂H₄."}],
 bos:{j:"pilih",t:"Formula empirik kuprum oksida TIDAK boleh ditentukan dengan membakar kuprum dalam udara seperti dalam Jadual 1. Kaedah yang sesuai ialah:",p:["Turunkan kuprum(II) oksida dengan gas hidrogen","Bakar kuprum dalam mangkuk pijar terbuka","Larutkan kuprum dalam air suling panas","Panaskan kuprum dengan magnesium oksida"],b:0,u:"Kuprum kurang reaktif daripada hidrogen, jadi hidrogen menurunkan kuprum oksida kepada kuprum. Jisim oksigen = jisim yang hilang."}},

{n:5, tempat:"Bilik Pengiraan Kilang", sk:"3.2 hingga 3.4 Menilai pengiraan stoikiometri", lampiran:null,
 kadNama:"Stoikiometri", kadEm:"\u{1F3ED}", kadFakta:"Stoikiometri menggunakan nisbah mol dalam persamaan seimbang untuk meramal jisim bahan atau hasil tindak balas.",
 bosKadNama:"Bahan Berlebihan", bosKadEm:"\u{1F4E6}", bosKadFakta:"Bahan tindak balas yang habis dahulu menentukan jumlah hasil. Bahan yang lain berbaki dan dikatakan berlebihan.",
 soalan:[
 {j:"nombor",t:"Mg + 2HCl → MgCl₂ + H₂. Berapakah isi padu gas hidrogen pada keadaan bilik apabila 0.1 mol magnesium bertindak balas sepenuhnya? (Isi padu molar = 24 dm³ mol⁻¹)",b:2.4,tol:0.01,suf:"dm³",u:"Nisbah Mg : H₂ = 1 : 1, jadi 0.1 mol H₂ = 0.1 × 24 = 2.4 dm³."},
 {j:"nombor",t:"CaCO₃ → CaO + CO₂. Kilang memanaskan 200 g CaCO₃. Berapakah jisim CaO yang terhasil? (Jisim molar: CaCO₃ = 100, CaO = 56 g mol⁻¹)",b:112,tol:0.01,suf:"g",u:"200 ÷ 100 = 2 mol CaCO₃ → 2 mol CaO = 2 × 56 = 112 g."},
 {j:"pilih",t:"Seorang murid menulis Mg + O₂ → MgO₂ untuk mengimbangkan persamaan. Nilaikan kaedahnya.",p:["Salah; formula tidak boleh diubah, gunakan pekali","Betul kerana atom oksigen sudah seimbang","Betul kerana formula boleh disesuaikan","Salah kerana magnesium tidak bertindak balas"],b:0,u:"Formula MgO adalah tetap. Persamaan betul ialah 2Mg + O₂ → 2MgO."},
 {j:"pilih",t:"Dua murid mengira jisim CO₂ daripada 10 g CaCO₃. A dapat 4.4 g dan B dapat 44 g. Jawapan siapakah munasabah? (Jisim molar CaCO₃ = 100, CO₂ = 44)",p:["A, kerana 0.1 mol menghasilkan 4.4 g","B, kerana jisim CO₂ ialah 44","A dan B kedua-duanya betul","Tiada; CO₂ tidak terhasil"],b:0,u:"10 g ÷ 100 = 0.1 mol CaCO₃ → 0.1 mol CO₂ = 4.4 g. Hasil tidak mungkin lebih berat daripada bahan asal."},
 {j:"pilih",t:"2H₂ + O₂ → 2H₂O. Jika 4 mol H₂ dicampur dengan 4 mol O₂, bahan manakah berlebihan?",p:["Oksigen, berbaki 2 mol","Hidrogen, berbaki 2 mol","Tiada bahan yang berbaki","Oksigen, berbaki 4 mol gas"],b:0,u:"4 mol H₂ hanya memerlukan 2 mol O₂, jadi 2 mol O₂ berbaki."},
 {j:"pilih",t:"Sebuah kilang memerlukan 48 dm³ gas oksigen pada keadaan bilik. Tong A mengandungi 1 mol O₂ dan tong B 3 mol O₂. Tong manakah mencukupi dengan pembaziran paling sedikit?",p:["Tong B","Tong A sahaja","Kedua-dua tong diperlukan","Tiada tong yang mencukupi"],b:0,u:"48 ÷ 24 = 2 mol diperlukan. Tong A (1 mol) tidak cukup; tong B (3 mol) mencukupi."},
 {j:"banyak",t:"Pilih DUA sebab hasil sebenar eksperimen sering kurang daripada hasil teori.",p:["Sebahagian hasil hilang semasa dipindahkan","Tindak balas tidak lengkap","Jisim atom berubah semasa tindak balas","Mol bahan bertambah dengan sendiri"],b:[0,1],u:"Kehilangan semasa memindah dan tindak balas yang tidak lengkap mengurangkan hasil sebenar."},
 {j:"pilih",t:"Pengiraan manakah PALING sesuai untuk menentukan isi padu gas CO₂ dari 0.2 mol CaCO₃ pada STP?",p:["0.2 × 22.4 dm³","0.2 × 24 dm³","0.2 ÷ 22.4 dm³","0.2 × 100 dm³"],b:0,u:"Pada STP isi padu molar ialah 22.4 dm³ mol⁻¹, dan 0.2 mol CaCO₃ menghasilkan 0.2 mol CO₂."}],
 bos:{j:"pilih",t:"Sebuah syarikat mahu menghasilkan 64 g kuprum melalui CuO + H₂ → Cu + H₂O. Berapakah jisim CuO minimum yang perlu dibeli? (Jisim molar: Cu = 64, CuO = 80 g mol⁻¹)",p:["80 g","64 g","160 g","40 g"],b:0,u:"64 g Cu = 1 mol, memerlukan 1 mol CuO = 80 g."}},

{n:6, tempat:"Studio Kimia Dapur", sk:"3.1 hingga 3.4 Mereka cipta penyelesaian menggunakan konsep mol", lampiran:null,
 kadNama:"Resipi Kimia", kadEm:"\u{1F9C1}", kadFakta:"Persamaan seimbang ialah 'resipi' kimia: ia memberitahu nisbah bahan yang tepat supaya tiada pembaziran.",
 bosKadNama:"Reka Cipta Mol", bosKadEm:"\u{1F4A1}", bosKadFakta:"Reka cipta berasaskan mol menggunakan pengiraan untuk menentukan kuantiti bahan yang selamat, jimat dan berkesan.",
 soalan:[
 {j:"pilih",t:"Anda mereka bekas pemadam api mudah: NaHCO₃ dengan asid menghasilkan CO₂. Pengiraan manakah PALING membantu menentukan jisim NaHCO₃?",p:["Isi padu CO₂ diperlukan ÷ isi padu molar","Warna NaHCO₃ yang digunakan","Saiz bekas yang paling cantik","Harga NaHCO₃ di pasar raya"],b:0,u:"Bilangan mol CO₂ diperlukan menentukan bilangan mol dan jisim NaHCO₃."},
 {j:"pilih",t:"Anda mahu menerangkan konsep mol kepada adik. Analogi manakah PALING tepat?",p:["Dozen sentiasa 12; mol sentiasa 6.02 × 10²³ zarah","Satu mol sama dengan jisim satu kilogram sebarang bahan","Satu mol bermaksud satu sudu besar bahan kimia","Mol ialah sejenis haiwan kecil"],b:0,u:"Mol ialah unit kiraan seperti dozen, tetapi untuk zarah yang sangat kecil."},
 {j:"pilih",t:"Kumpulan anda mereka permainan kad untuk mengimbangkan persamaan. Peraturan manakah WAJIB ada?",p:["Hanya pekali boleh diubah, bukan subskrip","Subskrip boleh ditukar sesuka hati","Atom boleh hilang semasa tindak balas","Bilangan atom tidak perlu seimbang"],b:0,u:"Hukum keabadian jisim: atom tidak dicipta atau dimusnahkan, dan formula tidak boleh diubah."},
 {j:"pilih",t:"Pengusaha kecil mahu mengurangkan pembaziran bahan semasa membuat sabun. Cadangan manakah berasaskan konsep mol?",p:["Kira nisbah mol minyak dan alkali sebelum mencampur","Tambah alkali sebanyak mungkin supaya cepat siap","Teka kuantiti bahan berdasarkan pengalaman","Campurkan semua bahan yang ada di stor"],b:0,u:"Nisbah mol yang tepat mengelakkan alkali berlebihan (merengsa kulit) dan pembaziran minyak."},
 {j:"banyak",t:"Pilih DUA ciri aplikasi kalkulator mol yang berguna kepada murid.",p:["Menunjukkan langkah pengiraan","Menyemak unit setiap nilai","Memberi jawapan tanpa langkah","Menyembunyikan formula"],b:[0,1],u:"Langkah dan unit membantu murid belajar, bukan sekadar mendapat jawapan."},
 {j:"pilih",t:"Anda mahu menghasilkan 2.4 dm³ gas H₂ pada keadaan bilik untuk mengisi belon eksperimen. Berapakah mol Mg diperlukan? (Mg + 2HCl → MgCl₂ + H₂)",p:["0.1 mol","0.2 mol","1.0 mol","2.4 mol"],b:0,u:"2.4 ÷ 24 = 0.1 mol H₂ → 0.1 mol Mg."},
 {j:"pilih",t:"Mengapakah ubat perlu disukat dalam kuantiti tepat berdasarkan jisim molar bahan aktif?",p:["Dos berlebihan boleh memudaratkan pesakit","Supaya ubat kelihatan lebih banyak","Jisim molar menentukan warna ubat","Kuantiti ubat tidak penting langsung"],b:0,u:"Dos yang tepat memastikan ubat berkesan dan selamat."},
 {j:"pilih",t:"Idea manakah PALING kreatif untuk menunjukkan hukum keabadian jisim di kelas?",p:["Tindak balas cuka dan soda dalam botol tertutup di atas penimbang","Membakar kertas di atas meja tanpa penimbang","Melukis atom pada papan putih sahaja","Menimbang botol kosong beberapa kali"],b:0,u:"Dalam sistem tertutup, jisim kekal walaupun gas terhasil; penimbang membuktikannya."}],
 bos:{j:"buka",
  t:"Reka satu 'resipi kimia' untuk aktiviti sekolah yang menghasilkan gas karbon dioksida (contoh: belon atau gunung berapi mini) dengan pembaziran minimum.",
  arahan:"Tulis persamaan seimbang, tentukan isi padu gas yang dikehendaki, kira bilangan mol dan jisim setiap bahan (tunjukkan langkah), nyatakan langkah keselamatan dan SATU cara mengurangkan pembaziran.",
  u:"Jawapan TP6 yang kukuh menulis persamaan seimbang yang betul (contoh: NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂), menggunakan isi padu molar dan jisim molar dengan unit yang betul, menunjukkan nisbah mol, dan mengambil kira keselamatan serta kos."}}
];

module.exports = {
  id:"k4b3", tingkatan:4, kod:"3.0 Konsep Mol, Formula dan Persamaan Kimia",
  tajuk:"Kira Zarah",
  subtajuk:"Kimia Ting. 4 · Bab 3 Konsep Mol, Formula dan Persamaan Kimia",
  spi:SPI["3"],
  ulasan:{
   1:"{n} dapat mengingat kembali jisim atom relatif, pemalar Avogadro dan formula ion. Langkah seterusnya ialah menjelaskan hubungan mol dengan jisim dan isi padu gas.",
   2:"{n} dapat menjelaskan dan mengira hubungan mol, jisim, bilangan zarah dan isi padu gas. Perlu lebih latihan menulis persamaan kimia seimbang.",
   3:"{n} boleh mengaplikasikan formula kimia untuk menulis dan mengimbangkan persamaan kimia. Galakkan menganalisis data untuk menentukan formula empirik.",
   4:"{n} mampu menganalisis data eksperimen untuk menentukan formula empirik dan formula molekul. Seterusnya latih menilai pengiraan stoikiometri.",
   5:"{n} dapat menilai pengiraan stoikiometri, termasuk bahan berlebihan, untuk membuat keputusan yang wajar. Sudah bersedia mereka cipta penyelesaian berasaskan mol.",
   6:"{n} berjaya mereka cipta penyelesaian kreatif menggunakan konsep mol dan persamaan seimbang. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Konsep Mol, Formula dan Persamaan Kimia. Cadangan: ulang hentian pertama dan berlatih menulis formula ion menggunakan kad cas."
  },
  lampiran:{
   j1:jadual(1, "Penentuan formula empirik magnesium oksida",
     ["Penimbangan", "Jisim (g)"],
     [["Mangkuk pijar + penutup","25.0"],["Mangkuk pijar + penutup + magnesium","27.4"],["Mangkuk pijar + penutup + magnesium oksida","29.0"]],
     "Pita magnesium dipanaskan dalam mangkuk pijar sehingga jisim tetap.")
  },
  aras:ARAS
};
