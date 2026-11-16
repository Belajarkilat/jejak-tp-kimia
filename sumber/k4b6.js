/* Sumber kandungan — Kimia KSSM Tingkatan 4, Bab 6 Asid, Bes dan Garam.
   SK 6.1 Peranan air dalam menunjukkan sifat keasidan dan kealkalian, 6.2 Nilai pH, 6.3 Kekuatan asid
   dan alkali, 6.4 Sifat kimia asid dan alkali, 6.5 Kepekatan larutan akueus, 6.6 Larutan piawai,
   6.7 Peneutralan, 6.8 Garam, hablur dan kegunaan, 6.9 Penyediaan garam, 6.10 Tindakan haba ke atas
   garam, 6.11 Analisis kualitatif (DSKP KSSM Kimia Tingkatan 4 dan 5, dskp/kimia-en.pdf). */
const { jadual, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Pasar Rasa", sk:"6.1 Peranan air · 6.2 Nilai pH · 6.3 Kekuatan asid dan alkali", lampiran:null,
 kadNama:"Ion Hidrogen", kadEm:"\u{1F34B}", kadFakta:"Asid ialah bahan yang mengion dalam air menghasilkan ion hidrogen, H⁺. Tanpa air, asid tidak menunjukkan sifat keasidan.",
 bosKadNama:"Kuat dan Lemah", bosKadEm:"\u{1F4AA}", bosKadFakta:"Asid kuat mengion lengkap dalam air (contoh HCl); asid lemah mengion separa (contoh asid etanoik).",
 soalan:[
 {j:"pilih",t:"Asid ialah bahan kimia yang mengion dalam air untuk menghasilkan:",p:["Ion H⁺","Ion OH⁻","Molekul H₂","Ion Na⁺"],b:0,u:"Ion hidrogen (atau ion hidroksonium, H₃O⁺) memberi sifat asid."},
 {j:"pilih",t:"Alkali ialah bes yang larut dalam air dan menghasilkan:",p:["Ion OH⁻","Ion H⁺","Ion Cl⁻","Molekul O₂"],b:0,u:"Contoh: NaOH → Na⁺ + OH⁻."},
 {j:"pilih",t:"Larutan dengan nilai pH 7 pada suhu bilik bersifat:",p:["Neutral","Berasid kuat","Beralkali kuat","Berasid lemah"],b:0,u:"pH 7 ialah neutral; kurang daripada 7 berasid, lebih daripada 7 beralkali."},
 {j:"pilih",t:"Asid etanoik ialah asid lemah kerana ia:",p:["Mengion separa dalam air","Mengion lengkap menghasilkan banyak ion H⁺","Tidak larut langsung di dalam air","Menghasilkan ion OH⁻ dalam air"],b:0,u:"Kebanyakan molekul asid etanoik kekal tidak mengion."},
 {j:"pilih",t:"Asid sulfurik, H₂SO₄, ialah asid diprotik kerana satu molekulnya menghasilkan:",p:["Dua ion H⁺","Satu ion H⁺","Dua ion OH⁻","Empat ion O²⁻"],b:0,u:"H₂SO₄ → 2H⁺ + SO₄²⁻."},
 {j:"pilih",t:"Kertas litmus biru kering dimasukkan ke dalam hidrogen klorida dalam metilbenzena. Pemerhatian ialah:",p:["Tiada perubahan","Bertukar merah dengan cepat","Bertukar hijau kemudian kuning","Dilunturkan menjadi putih"],b:0,u:"Tanpa air, HCl tidak mengion, jadi tiada ion H⁺ untuk mengubah warna litmus."},
 {j:"pilih",t:"Antara berikut, yang manakah alkali kuat?",p:["Natrium hidroksida","Larutan ammonia akueus","Asid etanoik cair","Air suling tulen"],b:0,u:"NaOH mengion lengkap; ammonia akueus ialah alkali lemah."},
 {j:"pilih",t:"Larutan asid hidroklorik 0.1 mol dm⁻³ mempunyai pH:",p:["1","7","13","0.1"],b:0,u:"[H⁺] = 0.1 mol dm⁻³, pH = −log(0.1) = 1."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang betul.",p:["Asid hidroklorik ialah asid kuat","Ammonia akueus ialah alkali lemah","pH larutan NaOH lebih daripada 7","Asid etanoik mengion lengkap","Asid tanpa air menukar litmus biru kepada merah"],b:[0,1,2],u:"Asid etanoik mengion separa; asid tanpa air tidak menunjukkan sifat asid."}},

{n:2, tempat:"Bilik Kepekatan", sk:"6.5 Kepekatan larutan akueus · 6.6 Larutan piawai · 6.4 Sifat kimia asid", lampiran:null,
 kadNama:"Kemolaran", kadEm:"\u{1F9EA}", kadFakta:"Kemolaran (mol dm⁻³) = bilangan mol zat terlarut ÷ isi padu larutan (dm³).",
 bosKadNama:"Pencairan", bosKadEm:"\u{1F4A7}", bosKadFakta:"Semasa pencairan, bilangan mol zat terlarut tidak berubah: M₁V₁ = M₂V₂.",
 soalan:[
 {j:"nombor",t:"0.5 mol natrium hidroksida dilarutkan dalam air untuk menghasilkan 1 dm³ larutan. Berapakah kemolarannya?",b:0.5,tol:0.01,suf:"mol dm⁻³",u:"0.5 mol ÷ 1 dm³ = 0.5 mol dm⁻³."},
 {j:"nombor",t:"Berapakah bilangan mol HCl dalam 250 cm³ asid hidroklorik 2.0 mol dm⁻³?",b:0.5,tol:0.01,suf:"mol",u:"2.0 × 250/1000 = 0.5 mol."},
 {j:"nombor",t:"Berapakah jisim NaOH diperlukan untuk menyediakan 250 cm³ larutan piawai 0.1 mol dm⁻³? (Jisim molar NaOH = 40 g mol⁻¹)",b:1,tol:0.01,suf:"g",u:"0.1 × 0.25 = 0.025 mol; 0.025 × 40 = 1.0 g."},
 {j:"nombor",t:"50 cm³ asid 2.0 mol dm⁻³ dicairkan menjadi 0.5 mol dm⁻³. Berapakah isi padu akhir larutan?",b:200,tol:0.01,suf:"cm³",u:"M₁V₁ = M₂V₂: 2.0 × 50 = 0.5 × V₂, V₂ = 200 cm³."},
 {j:"pilih",t:"Radas yang PALING sesuai untuk menyediakan larutan piawai dengan isi padu tepat ialah:",p:["Kelalang volumetrik","Bikar 250 cm³","Silinder penyukat","Kelalang kon"],b:0,u:"Kelalang volumetrik mempunyai tanda senggatan tunggal yang sangat tepat."},
 {j:"pilih",t:"Asid hidroklorik bertindak balas dengan zink. Hasilnya ialah:",p:["Zink klorida dan gas hidrogen","Zink oksida dan air","Zink klorida, air dan CO₂","Zink hidroksida dan klorin"],b:0,u:"Asid + logam reaktif → garam + hidrogen."},
 {j:"pilih",t:"Asid nitrik bertindak balas dengan kalsium karbonat. Gas yang terbebas ialah:",p:["Karbon dioksida","Hidrogen","Oksigen","Ammonia"],b:0,u:"Asid + karbonat → garam + air + karbon dioksida."},
 {j:"pilih",t:"Larutan natrium hidroksida dipanaskan bersama ammonium klorida. Gas yang terbebas menukarkan litmus merah lembap kepada biru. Gas itu ialah:",p:["Ammonia","Klorin","Hidrogen","Oksigen"],b:0,u:"Alkali + garam ammonium → garam + air + ammonia."}],
 bos:{j:"nombor",t:"Kepekatan larutan kalium hidroksida ialah 0.2 mol dm⁻³. Tukarkan kepada g dm⁻³. (Jisim molar KOH = 56 g mol⁻¹)",b:11.2,tol:0.01,suf:"g dm⁻³",u:"0.2 × 56 = 11.2 g dm⁻³."}},

{n:3, tempat:"Stesen Pentitratan", sk:"6.7 Peneutralan dan pentitratan", lampiran:"j1",
 kadNama:"Takat Akhir", kadEm:"\u{1F3AF}", kadFakta:"Takat akhir pentitratan ialah apabila penunjuk berubah warna, menunjukkan asid dan alkali telah meneutralkan satu sama lain dengan tepat.",
 bosKadNama:"Formula Pentitratan", bosKadEm:"\u{1F4D0}", bosKadFakta:"MₐVₐ / MₙVₙ = a / b, dengan a dan b ialah pekali asid dan alkali dalam persamaan seimbang.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah isi padu asid yang digunakan dalam pentitratan II?",b:19.9,tol:0.01,suf:"cm³",u:"40.00 − 20.10 = 19.90 cm³."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah purata isi padu asid hidroklorik yang digunakan?",b:20,tol:0.01,suf:"cm³",u:"(20.10 + 19.90 + 20.00) ÷ 3 = 20.00 cm³."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung kepekatan asid hidroklorik. (HCl + NaOH → NaCl + H₂O)",b:0.125,tol:0.001,suf:"mol dm⁻³",u:"Mₐ = (0.10 × 25.0) ÷ 20.00 = 0.125 mol dm⁻³."},
 {j:"pilih",t:"Dalam eksperimen Jadual 1, fenolftalein ditambah kepada NaOH. Apakah perubahan warna pada takat akhir?",p:["Merah jambu kepada tidak berwarna","Tidak berwarna kepada merah jambu","Kuning kepada merah","Biru kepada hijau"],b:0,u:"Fenolftalein merah jambu dalam alkali dan tidak berwarna dalam larutan neutral atau berasid."},
 {j:"pilih",t:"Dalam eksperimen Jadual 1, radas yang digunakan untuk menyukat 25.0 cm³ NaOH dengan tepat ialah:",p:["Pipet","Bikar","Silinder penyukat","Tabung uji"],b:0,u:"Pipet 25.0 cm³ menyukat isi padu tetap dengan tepat."},
 {j:"pilih",t:"Mengapakah kelalang kon digoncang sepanjang pentitratan dalam Jadual 1?",p:["Asid dan alkali bercampur sekata","Mempercepat penyejatan air","Menukar warna penunjuk lebih cepat","Menambah kepekatan asid hidroklorik"],b:0,u:"Pencampuran sekata memastikan takat akhir dikesan dengan tepat."},
 {j:"pilih",t:"Jika asid sulfurik 0.125 mol dm⁻³ digunakan menggantikan HCl dalam Jadual 1, isi padu asid yang diperlukan ialah:",p:["10.00 cm³","20.00 cm³","40.00 cm³","25.00 cm³"],b:0,u:"H₂SO₄ diprotik: H₂SO₄ + 2NaOH. Mol NaOH = 0.0025, mol asid = 0.00125; isi padu = 0.00125 ÷ 0.125 = 0.010 dm³ = 10.00 cm³."},
 {j:"pilih",t:"Persamaan ion bagi peneutralan ialah:",p:["H⁺ + OH⁻ → H₂O","Na⁺ + Cl⁻ → NaCl","H₂ + O₂ → H₂O","OH⁻ + Cl⁻ → HOCl"],b:0,u:"Ion H⁺ daripada asid bergabung dengan ion OH⁻ daripada alkali membentuk air."}],
 bos:{j:"pilih",t:"Murid dalam Jadual 1 tidak membilas buret dengan asid hidroklorik sebelum diisi (buret masih basah dengan air suling). Kesannya ialah:",p:["Kepekatan dikira lebih rendah","Kepekatan asid dikira lebih tinggi daripada sebenar","Tiada kesan langsung kepada keputusan akhir","Takat akhir tidak dapat dikesan langsung"],b:0,u:"Air mencairkan asid, jadi isi padu asid yang digunakan lebih besar. Oleh sebab Mₐ = MₙVₙ ÷ Vₐ, nilai Vₐ yang besar menjadikan kepekatan dikira lebih rendah daripada sebenar."}},

{n:4, tempat:"Bengkel Garam", sk:"6.8 Garam, hablur dan kegunaannya · 6.9 Penyediaan garam", lampiran:"j2",
 kadNama:"Garam", kadEm:"\u{1F9C2}", kadFakta:"Garam ialah sebatian ion yang terbentuk apabila ion H⁺ dalam asid digantikan oleh ion logam atau ion ammonium.",
 bosKadNama:"Tindak Balas Penguraian Ganda Dua", bosKadEm:"\u{1F504}", bosKadFakta:"Garam tidak terlarutkan disediakan melalui tindak balas penguraian ganda dua (pemendakan): dua larutan garam terlarutkan dicampur.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 2, garam manakah TIDAK larut dalam air?",p:["Plumbum(II) sulfat","Natrium sulfat","Kuprum(II) sulfat","Magnesium sulfat"],b:0,u:"Sulfat larut kecuali BaSO₄, PbSO₄ dan CaSO₄ (sedikit larut)."},
 {j:"pilih",t:"Berdasarkan Jadual 2, kaedah manakah sesuai untuk menyediakan plumbum(II) klorida?",p:["Pemendakan","Asid dengan alkali","Asid dengan logam","Pemanasan garam"],b:0,u:"PbCl₂ tidak larut, jadi disediakan dengan mencampur larutan Pb(NO₃)₂ dan NaCl."},
 {j:"pilih",t:"Berdasarkan Jadual 2, pasangan larutan manakah menghasilkan mendakan barium sulfat?",p:["BaCl₂ dan Na₂SO₄","BaCl₂ dan NaNO₃","Ba(NO₃)₂ dan KCl","NaCl dan K₂SO₄"],b:0,u:"Ba²⁺ + SO₄²⁻ → BaSO₄ (mendakan putih)."},
 {j:"pilih",t:"Berdasarkan Jadual 2, garam karbonat manakah larut dalam air?",p:["Kalium karbonat","Kalsium karbonat","Zink karbonat","Kuprum(II) karbonat"],b:0,u:"Karbonat tidak larut kecuali garam Na⁺, K⁺ dan NH₄⁺."},
 {j:"pilih",t:"Garam kuprum(II) sulfat disediakan daripada kuprum(II) oksida dan asid sulfurik. Mengapakah CuO ditambah secara berlebihan?",p:["Memastikan semua asid bertindak balas","Menambah warna biru larutan","Mempercepat penyejatan air","Menghasilkan lebih banyak asid"],b:0,u:"Lebihan CuO yang tidak larut mudah dituras, jadi larutan garam tidak mengandungi asid berbaki."},
 {j:"susun",t:"Susun langkah menyediakan hablur kuprum(II) sulfat daripada CuO dan asid sulfurik.",p:["Tambah CuO berlebihan ke dalam asid panas","Turas lebihan CuO","Panaskan hasil turasan sehingga tepu","Sejukkan supaya hablur terbentuk","Turas dan keringkan hablur"],b:[0,1,2,3,4],u:"Larutan tepu disejukkan supaya hablur terbentuk; hablur dikeringkan antara kertas turas."},
 {j:"pilih",t:"Natrium klorida disediakan melalui tindak balas asid hidroklorik dengan natrium hidroksida. Kaedah yang digunakan ialah:",p:["Pentitratan","Pemendakan","Penyesaran logam","Penguraian haba"],b:0,u:"Kedua-dua bahan larut, jadi isi padu tepat ditentukan melalui pentitratan."},
 {j:"pilih",t:"Hablur garam mempunyai bentuk geometri tetap kerana:",p:["Ion tersusun teratur","Air mengisi ruang dalam hablur","Garam ialah sebatian kovalen","Hablur garam bercas positif"],b:0,u:"Ion dalam kekisi tersusun dalam corak berulang yang tetap."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 2, bahan manakah perlu dicampur untuk menyediakan argentum klorida?",p:["Argentum nitrat dan natrium klorida","Argentum dan asid hidroklorik","Argentum oksida dan klorin","Argentum nitrat dan natrium nitrat"],b:0,u:"Ag⁺ + Cl⁻ → AgCl (mendakan putih). Argentum tidak bertindak balas dengan HCl."}},

{n:5, tempat:"Makmal Analisis", sk:"6.10 Tindakan haba ke atas garam · 6.11 Analisis kualitatif", lampiran:"j3",
 kadNama:"Ujian Gas", kadEm:"\u{1F50E}", kadFakta:"CO₂ mengeruhkan air kapur; O₂ menyalakan kayu uji berbara; H₂ menghasilkan bunyi 'pop'; NH₃ menukarkan litmus merah lembap kepada biru.",
 bosKadNama:"Ujian Kation", bosKadEm:"\u{1F9EA}", bosKadFakta:"Warna mendakan dengan NaOH dan NH₃ akueus serta keterlarutannya dalam bahan berlebihan membantu mengenal pasti kation.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 3, kation manakah dalam larutan X?",p:["Cu²⁺","Zn²⁺","Fe³⁺","Pb²⁺"],b:0,u:"Mendakan biru dengan NaOH dan larutan biru tua dengan NH₃ berlebihan menunjukkan Cu²⁺."},
 {j:"pilih",t:"Berdasarkan Jadual 3, kation manakah dalam larutan Y?",p:["Zn²⁺","Pb²⁺","Al³⁺","Mg²⁺"],b:0,u:"Mendakan putih larut dalam NaOH berlebihan DAN NH₃ berlebihan hanya bagi Zn²⁺."},
 {j:"pilih",t:"Berdasarkan Jadual 3, kation manakah dalam larutan Z?",p:["Fe³⁺","Fe²⁺","Cu²⁺","Zn²⁺"],b:0,u:"Mendakan perang yang tidak larut menunjukkan Fe³⁺; Fe²⁺ menghasilkan mendakan hijau."},
 {j:"pilih",t:"Larutan W ditambah asid nitrik cair diikuti argentum nitrat. Mendakan putih terbentuk. Anion dalam W ialah:",p:["Cl⁻","SO₄²⁻","NO₃⁻","CO₃²⁻"],b:0,u:"Ag⁺ + Cl⁻ → AgCl, mendakan putih."},
 {j:"pilih",t:"Pepejal hijau dipanaskan. Baki hitam terhasil dan gas yang terbebas mengeruhkan air kapur. Pepejal itu ialah:",p:["Kuprum(II) karbonat","Zink karbonat","Plumbum(II) nitrat","Natrium karbonat"],b:0,u:"CuCO₃ → CuO (hitam) + CO₂."},
 {j:"pilih",t:"Zink karbonat dipanaskan. Warna baki ketika panas dan selepas sejuk ialah:",p:["Kuning ketika panas, putih apabila sejuk","Putih ketika panas, kuning apabila sejuk","Hitam ketika panas dan sejuk","Perang ketika panas, kuning apabila sejuk"],b:0,u:"ZnO kuning ketika panas dan putih apabila sejuk. PbO perang ketika panas, kuning apabila sejuk."},
 {j:"pilih",t:"Pemanasan kuprum(II) nitrat membebaskan gas perang. Gas itu ialah:",p:["Nitrogen dioksida","Karbon dioksida","Oksigen","Ammonia"],b:0,u:"2Cu(NO₃)₂ → 2CuO + 4NO₂ + O₂. NO₂ berwarna perang."},
 {j:"pilih",t:"Garam karbonat manakah TIDAK terurai apabila dipanaskan dengan penunu Bunsen?",p:["Natrium karbonat","Kalsium karbonat","Kuprum(II) karbonat","Zink karbonat"],b:0,u:"Karbonat logam Kumpulan 1 (kecuali litium) stabil terhadap haba di makmal."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 3, mengapakah ammonia akueus berlebihan diperlukan untuk membezakan Zn²⁺ dan Pb²⁺?",p:["Mendakan zink larut, mendakan plumbum tidak","Kedua-dua mendakan berwarna biru tua","Plumbum membebaskan gas perang","Zink tidak membentuk sebarang mendakan"],b:0,u:"Kedua-duanya membentuk mendakan putih yang larut dalam NaOH berlebihan; hanya Zn(OH)₂ larut dalam NH₃ berlebihan."}},

{n:6, tempat:"Studio Asid-Bes", sk:"6.1 hingga 6.11 Mereka cipta penyelesaian asid, bes dan garam", lampiran:null,
 kadNama:"Penunjuk Semula Jadi", kadEm:"\u{1F33A}", kadFakta:"Ekstrak kubis ungu dan bunga telang berubah warna mengikut pH, jadi boleh dijadikan penunjuk asid-bes yang murah.",
 bosKadNama:"Rawatan Tanah", bosKadEm:"\u{1F33E}", bosKadFakta:"Tanah berasid dirawat dengan kapur (kalsium hidroksida atau kalsium karbonat) melalui peneutralan supaya pH sesuai untuk tanaman.",
 soalan:[
 {j:"pilih",t:"Anda mahu menghasilkan penunjuk pH murah untuk sekolah luar bandar. Bahan PALING sesuai ialah:",p:["Ekstrak bunga telang","Air paip tanpa campuran","Garam biasa yang dilarutkan","Minyak masak terpakai"],b:0,u:"Pigmen antosianin dalam bunga telang berubah warna mengikut pH."},
 {j:"pilih",t:"Petani mendapati tanah sawahnya berasid (pH 4). Cadangan rawatan PALING wajar ialah:",p:["Tabur kapur pertanian mengikut sukatan","Tambah asid sulfurik ke dalam tanah","Siram tanah dengan cuka setiap hari","Biarkan tanah tanpa sebarang rawatan"],b:0,u:"Kapur meneutralkan keasidan tanah. Sukatan penting supaya tanah tidak terlalu beralkali."},
 {j:"pilih",t:"Anda mereka ubat gigi untuk mengurangkan reput gigi akibat asid daripada bakteria. Bahan aktif yang sesuai ialah:",p:["Bes lemah seperti kalsium karbonat","Asid hidroklorik cair yang kuat","Natrium hidroksida pekat","Asid sitrik yang banyak"],b:0,u:"Bes lemah meneutralkan asid di mulut tanpa merosakkan gusi."},
 {j:"pilih",t:"Idea manakah PALING kreatif untuk menunjukkan peneutralan kepada murid sekolah rendah?",p:["Lukisan ajaib dengan cuka, soda dan penunjuk kubis ungu","Membaca definisi peneutralan dengan kuat","Menyalin jadual nilai pH daripada buku","Mencampurkan asid pekat tanpa pengawasan"],b:0,u:"Perubahan warna yang dapat dilihat menjadikan konsep pH menarik dan selamat."},
 {j:"banyak",t:"Pilih DUA langkah keselamatan semasa murid membuat penunjuk dan menguji bahan rumah.",p:["Guna bahan cair dan isi padu kecil","Pakai gogal dan cuci tangan","Rasa larutan untuk menguji pH","Campur peluntur dengan cuka"],b:[0,1],u:"Peluntur dan cuka membebaskan klorin; ujian rasa tidak selamat."},
 {j:"pilih",t:"Sebuah kilang perlu merawat sisa berasid sebelum dibuang ke sungai. Kaedah PALING wajar ialah:",p:["Neutralkan dengan kapur dan pantau pH","Cairkan dengan air sungai yang banyak","Buang pada waktu malam supaya tidak dilihat","Simpan sisa dalam tangki terbuka"],b:0,u:"Peneutralan dan pemantauan pH melindungi hidupan akuatik."},
 {j:"pilih",t:"Anda mahu menyediakan garam magnesium sulfat (garam Epsom) untuk projek. Pasangan bahan yang PALING sesuai ialah:",p:["Magnesium oksida dan asid sulfurik","Magnesium dan air suling","Magnesium klorida dan natrium nitrat","Sulfur dan air paip"],b:0,u:"Bes + asid → garam + air. MgO berlebihan mudah dituras."},
 {j:"pilih",t:"Bagaimanakah anda boleh menguji keberkesanan penunjuk semula jadi buatan anda?",p:["Uji pada larutan pH yang diketahui dan bandingkan warna","Uji pada satu larutan sahaja tanpa rekod","Bandingkan bau penunjuk dengan cuka","Tengok warna penunjuk dalam gelap"],b:0,u:"Ujian dengan larutan pH diketahui membina carta warna yang boleh dipercayai."}],
 bos:{j:"buka",
  t:"Reka satu kit ujian pH murah menggunakan penunjuk semula jadi untuk menguji bahan di rumah atau kualiti tanah kebun sekolah.",
  arahan:"Nyatakan bahan penunjuk, cara menyediakannya, carta warna anggaran pH, SEKURANG-KURANGNYA TIGA bahan untuk diuji, satu cadangan rawatan jika tanah terlalu berasid (dengan persamaan peneutralan) dan langkah keselamatan.",
  u:"Jawapan TP6 yang kukuh memilih penunjuk yang sesuai (contoh: kubis ungu, bunga telang), membina carta warna dengan larutan pH diketahui, menulis persamaan peneutralan yang betul (contoh: Ca(OH)₂ + 2H⁺ → Ca²⁺ + 2H₂O), dan mengambil kira kos, keselamatan serta alam sekitar."}}
];

module.exports = {
  id:"k4b6", tingkatan:4, kod:"6.0 Asid, Bes dan Garam",
  tajuk:"Rasa Kimia",
  subtajuk:"Kimia Ting. 4 · Bab 6 Asid, Bes dan Garam",
  spi:SPI["6"],
  ulasan:{
   1:"{n} dapat mengingat kembali peranan air, nilai pH dan kekuatan asid serta alkali. Langkah seterusnya ialah menjelaskan kepekatan dan sifat kimia asid.",
   2:"{n} dapat menjelaskan dan mengira kepekatan larutan, larutan piawai serta sifat kimia asid. Perlu lebih latihan mengaplikasikan pentitratan.",
   3:"{n} boleh mengaplikasikan peneutralan dan data pentitratan untuk mengira kepekatan. Galakkan menganalisis kaedah penyediaan garam.",
   4:"{n} mampu menganalisis keterlarutan garam untuk memilih kaedah penyediaan yang betul. Seterusnya latih menilai keputusan analisis kualitatif.",
   5:"{n} dapat menilai data tindakan haba dan analisis kualitatif untuk mengenal pasti ion dalam garam. Sudah bersedia mereka cipta penyelesaian asid-bes.",
   6:"{n} berjaya mereka cipta penyelesaian kreatif menggunakan konsep asid, bes dan garam. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Asid, Bes dan Garam. Cadangan: ulang hentian pertama dan uji pH bahan rumah dengan penunjuk kubis ungu."
  },
  lampiran:{
   j1:jadual(1, "Pentitratan 25.0 cm³ NaOH 0.10 mol dm⁻³ dengan asid hidroklorik",
     ["Pentitratan", "I", "II", "III"],
     [["Bacaan akhir buret (cm³)","20.10","40.00","20.50"],["Bacaan awal buret (cm³)","0.00","20.10","0.50"]],
     "Penunjuk: fenolftalein."),
   j2:jadual(2, "Keterlarutan garam dalam air",
     ["Jenis garam", "Larut", "Tidak larut"],
     [["Garam Na⁺, K⁺, NH_4^+","Semua","—"],["Nitrat","Semua","—"],["Klorida","Kebanyakan","PbCl_2, AgCl"],["Sulfat","Kebanyakan","BaSO_4, PbSO_4, CaSO_4 (sedikit larut)"],["Karbonat","Na_2CO_3, K_2CO_3, (NH_4)_2CO_3","Selain itu"]]),
   j3:jadual(3, "Keputusan ujian kation bagi larutan X, Y dan Z",
     ["Larutan", "NaOH(ak) sedikit", "NaOH(ak) berlebihan", "NH_3(ak) berlebihan"],
     [["X","Mendakan biru","Tidak larut","Larut, larutan biru tua"],["Y","Mendakan putih","Larut","Larut"],["Z","Mendakan perang","Tidak larut","Tidak larut"]])
  },
  aras:ARAS
};
