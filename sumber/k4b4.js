/* Sumber kandungan — Kimia KSSM Tingkatan 4, Bab 4 Jadual Berkala Unsur.
   SK 4.1 Perkembangan Jadual Berkala Unsur, 4.2 Susunan unsur, 4.3 Kumpulan 18,
   4.4 Kumpulan 1, 4.5 Kumpulan 17, 4.6 Unsur dalam Kala 3, 4.7 Unsur peralihan
   (DSKP KSSM Kimia Tingkatan 4 dan 5, dskp/kimia-en.pdf). */
const { jadual, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Galeri Saintis", sk:"4.1 Perkembangan Jadual Berkala · 4.2 Susunan unsur", lampiran:null,
 kadNama:"Mendeleev", kadEm:"\u{1F4DC}", kadFakta:"Mendeleev menyusun unsur mengikut jisim atom dan meninggalkan ruang kosong untuk unsur yang belum ditemui.",
 bosKadNama:"Kumpulan dan Kala", bosKadEm:"\u{1F5C2}\u{FE0F}", bosKadFakta:"Lajur menegak ialah kumpulan (1 hingga 18) dan baris mendatar ialah kala (1 hingga 7).",
 soalan:[
 {j:"pilih",t:"Unsur dalam Jadual Berkala moden disusun mengikut pertambahan:",p:["Nombor proton","Jisim atom","Takat lebur","Ketumpatan"],b:0,u:"Moseley menunjukkan susunan mengikut nombor proton lebih tepat daripada jisim atom."},
 {j:"pilih",t:"Saintis yang meninggalkan ruang kosong untuk unsur yang belum ditemui ialah:",p:["Mendeleev","Newlands","Dobereiner","Lavoisier"],b:0,u:"Ramalan Mendeleev terbukti apabila galium dan germanium ditemui."},
 {j:"pilih",t:"Dobereiner mengelaskan unsur kepada kumpulan tiga yang dikenali sebagai:",p:["Triad","Oktaf","Kala","Siri"],b:0,u:"Dalam triad, jisim atom unsur tengah hampir purata dua unsur yang lain."},
 {j:"pilih",t:"Hukum Oktaf yang menyatakan sifat berulang setiap unsur kelapan dicadangkan oleh:",p:["Newlands","Moseley","Meyer","Mendeleev"],b:0,u:"John Newlands memerhatikan sifat unsur berulang setiap lapan unsur."},
 {j:"pilih",t:"Unsur dengan susunan elektron 2.8.3 terletak dalam:",p:["Kumpulan 13, Kala 3","Kumpulan 3, Kala 13","Kumpulan 3, Kala 3","Kumpulan 13, Kala 2"],b:0,u:"3 elektron valens → Kumpulan 13; 3 petala berisi → Kala 3. Unsur ini ialah aluminium."},
 {j:"pilih",t:"Nombor kala sesuatu unsur sama dengan bilangan:",p:["Petala berisi elektron","Elektron valens","Proton dalam nukleus","Neutron dalam nukleus"],b:0,u:"Contoh: natrium 2.8.1 mempunyai 3 petala, jadi dalam Kala 3."},
 {j:"pilih",t:"Unsur Kumpulan 18 juga dikenali sebagai:",p:["Gas adi","Logam alkali","Halogen","Logam peralihan"],b:0,u:"Gas adi (helium, neon, argon dan lain-lain) sangat stabil dan lengai."},
 {j:"pilih",t:"Unsur Kumpulan 1 dikenali sebagai:",p:["Logam alkali","Logam alkali bumi","Halogen","Gas adi"],b:0,u:"Litium, natrium dan kalium ialah logam alkali; hidroksidanya bersifat alkali."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan unsur dan kedudukannya yang betul.",p:["Natrium 2.8.1: Kumpulan 1, Kala 3","Klorin 2.8.7: Kumpulan 17, Kala 3","Neon 2.8: Kumpulan 18, Kala 2","Magnesium 2.8.2: Kumpulan 2, Kala 2","Oksigen 2.6: Kumpulan 6, Kala 2"],b:[0,1,2],u:"Magnesium berada dalam Kala 3 (3 petala). Oksigen dengan 6 elektron valens berada dalam Kumpulan 16."}},

{n:2, tempat:"Kolam Logam Alkali", sk:"4.3 Kumpulan 18 · 4.4 Unsur Kumpulan 1", lampiran:"r1",
 kadNama:"Gas Adi", kadEm:"\u{1F388}", kadFakta:"Gas adi mempunyai susunan elektron duplet (helium) atau oktet yang stabil, jadi tidak perlu menerima, menderma atau berkongsi elektron.",
 bosKadNama:"Kereaktifan Kumpulan 1", bosKadEm:"\u{1F4A5}", bosKadFakta:"Kereaktifan logam alkali bertambah menuruni kumpulan kerana elektron valens semakin jauh dari nukleus dan lebih mudah didermakan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, berapakah elektron valens bagi kedua-dua atom?",p:["1","2","3","8"],b:0,u:"Litium 2.1 dan natrium 2.8.1 masing-masing mempunyai 1 elektron valens."},
 {j:"pilih",t:"Berdasarkan Rajah 1, atom manakah lebih reaktif dan mengapa?",p:["Natrium; elektron valensnya lebih jauh dari nukleus","Litium; atomnya mempunyai lebih sedikit petala","Natrium; nukleusnya menarik elektron lebih kuat","Kedua-duanya sama kerana elektron valens sama"],b:0,u:"Daya tarikan nukleus terhadap elektron valens natrium lebih lemah, jadi elektron itu lebih mudah didermakan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah ion yang terbentuk apabila atom natrium bertindak balas?",p:["Na⁺","Na⁻","Na²⁺","Na²⁻"],b:0,u:"Natrium menderma 1 elektron untuk mencapai susunan oktet 2.8, membentuk Na⁺."},
 {j:"pilih",t:"Mengapakah logam alkali disimpan dalam minyak parafin?",p:["Untuk mengelakkan tindak balas dengan udara dan air","Supaya logam itu tidak menjadi terlalu keras","Supaya logam itu kekal berkilat dan tidak berubah selama-lamanya","Kerana minyak menambah kereaktifan logam"],b:0,u:"Logam alkali sangat reaktif dengan oksigen dan wap air di udara."},
 {j:"pilih",t:"Apakah hasil tindak balas natrium dengan air?",p:["Natrium hidroksida dan gas hidrogen","Natrium oksida dan gas oksigen","Natrium klorida dan air","Natrium karbonat dan gas karbon dioksida"],b:0,u:"2Na + 2H₂O → 2NaOH + H₂. Larutan yang terhasil bersifat alkali."},
 {j:"pilih",t:"Mengapakah argon diisi ke dalam mentol lampu berfilamen?",p:["Argon lengai; filamen tidak teroksida","Argon menyala dengan warna kuning terang","Argon menambah haba di dalam mentol","Argon menyejukkan mentol dengan cepat"],b:0,u:"Gas lengai menghalang filamen tungsten panas daripada teroksida."},
 {j:"pilih",t:"Apakah perubahan takat lebur logam alkali menuruni Kumpulan 1?",p:["Berkurang","Bertambah","Tidak berubah","Bertambah kemudian berkurang"],b:0,u:"Ikatan logam semakin lemah apabila saiz atom bertambah, jadi takat lebur berkurang."},
 {j:"pilih",t:"Kalium dimasukkan ke dalam air yang mengandungi fenolftalein. Pemerhatian yang dijangka ialah:",p:["Bergerak laju, nyalaan ungu, larutan merah jambu","Kalium tenggelam ke dasar bekas dan tiada perubahan berlaku pada air","Kalium larut perlahan dan larutan menjadi biru tua","Kalium terapung tanpa sebarang tindak balas"],b:0,u:"Kalium sangat reaktif; KOH yang terhasil bersifat alkali dan menukarkan fenolftalein kepada merah jambu."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, ramalkan kereaktifan rubidium (Kumpulan 1, Kala 5) dengan air.",p:["Lebih reaktif daripada natrium","Kurang reaktif daripada litium","Tidak bertindak balas dengan air","Sama seperti gas adi"],b:0,u:"Rubidium berada lebih bawah, jadi elektron valensnya paling mudah didermakan."}},

{n:3, tempat:"Menara Halogen", sk:"4.5 Unsur Kumpulan 17", lampiran:"j1",
 kadNama:"Halogen", kadEm:"\u{1F7E2}", kadFakta:"Halogen wujud sebagai molekul dwiatom (Cl₂, Br₂, I₂). Setiap atom menerima satu elektron untuk membentuk ion bercas −1.",
 bosKadNama:"Kereaktifan Halogen", bosKadEm:"\u{1F4C9}", bosKadFakta:"Kereaktifan halogen berkurang menuruni kumpulan kerana daya tarikan nukleus terhadap elektron yang diterima semakin lemah.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah keadaan fizik bromin pada suhu bilik?",p:["Cecair","Gas berwarna","Pepejal hablur","Plasma panas"],b:0,u:"Bromin ialah cecair perang kemerahan pada suhu bilik."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah corak takat didih halogen menuruni kumpulan?",p:["Bertambah","Berkurang","Tidak berubah","Turun kemudian naik"],b:0,u:"Takat didih naik dari −34 °C (klorin) ke 184 °C (iodin) kerana saiz molekul bertambah."},
 {j:"pilih",t:"Berdasarkan Jadual 1, halogen manakah paling reaktif?",p:["Klorin","Bromin","Iodin","Semua sama"],b:0,u:"Kereaktifan berkurang menuruni kumpulan, jadi klorin paling reaktif dalam jadual ini."},
 {j:"pilih",t:"Berdasarkan Jadual 1, ramalkan keadaan fizik astatin yang berada di bawah iodin.",p:["Pepejal","Gas","Cecair","Wap tidak berwarna"],b:0,u:"Takat didih terus bertambah, jadi astatin dijangka pepejal pada suhu bilik."},
 {j:"pilih",t:"Gas klorin dilarutkan dalam air. Hasilnya ialah:",p:["Asid hidroklorik dan asid hipoklorus","Natrium klorida dan air","Gas hidrogen dan gas oksigen yang tidak berwarna","Asid sulfurik dan air"],b:0,u:"Cl₂ + H₂O → HCl + HOCl. Asid hipoklorus bertindak sebagai agen peluntur."},
 {j:"pilih",t:"Kertas litmus biru dimasukkan ke dalam air klorin. Pemerhatian ialah:",p:["Bertukar merah kemudian dilunturkan","Kekal biru tanpa perubahan","Bertukar hijau kemudian hitam","Bertukar ungu kemudian kuning"],b:0,u:"Larutan berasid menukar litmus kepada merah, kemudian HOCl melunturkannya."},
 {j:"pilih",t:"Apakah hasil tindak balas klorin dengan larutan natrium hidroksida?",p:["NaCl, NaOCl dan air","NaCl dan H₂ sahaja","Na₂O dan HCl","NaOH dan HOCl"],b:0,u:"Cl₂ + 2NaOH → NaCl + NaOCl + H₂O. NaOCl ialah bahan aktif dalam peluntur."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah takat didih iodin paling tinggi?",p:["Molekul terbesar, daya antara molekul terkuat","Iodin mempunyai ikatan ion antara atomnya","Iodin mempunyai bilangan elektron valens paling banyak","Iodin paling reaktif dalam Kumpulan 17"],b:0,u:"Semakin besar molekul, semakin kuat daya Van der Waals, jadi lebih banyak haba diperlukan."}],
 bos:{j:"pilih",t:"Gas klorin dialirkan melalui wul besi panas. Pemerhatian dan hasil yang betul ialah:",p:["Wul besi berbara; pepejal perang terbentuk","Wul besi menjadi hitam; gas hidrogen terbebas","Tiada perubahan kerana besi tidak reaktif","Wul besi cair; cecair biru terbentuk"],b:0,u:"2Fe + 3Cl₂ → 2FeCl₃. Klorin cukup reaktif untuk bertindak balas cergas dengan besi panas."}},

{n:4, tempat:"Lorong Kala 3", sk:"4.6 Menganalisis unsur dalam Kala 3", lampiran:"j2",
 kadNama:"Jejari Atom", kadEm:"\u{1F4CF}", kadFakta:"Merentasi Kala 3, bilangan proton bertambah tetapi bilangan petala sama, jadi tarikan nukleus bertambah dan jejari atom berkurang.",
 bosKadNama:"Oksida Amfoterik", bosKadEm:"\u{1F504}", bosKadFakta:"Aluminium oksida bersifat amfoterik: ia bertindak balas dengan asid dan juga dengan alkali.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 2, apakah corak jejari atom dari natrium ke klorin?",p:["Berkurang","Bertambah","Tidak berubah","Bertambah kemudian berkurang"],b:0,u:"Jejari berkurang dari 186 pm ke 99 pm."},
 {j:"pilih",t:"Berdasarkan Jadual 2, mengapakah jejari atom berkurang merentasi kala?",p:["Cas nukleus bertambah, tarikan lebih kuat","Bilangan petala bertambah merentasi kala tersebut","Bilangan neutron berkurang merentasi kala","Elektron valens hilang merentasi kala"],b:0,u:"Bilangan petala tetap tiga, tetapi proton bertambah, jadi elektron ditarik lebih dekat."},
 {j:"pilih",t:"Berdasarkan Jadual 2, apakah corak keelektronegatifan merentasi kala?",p:["Bertambah","Berkurang","Tidak berubah","Sifar bagi semua unsur"],b:0,u:"Keelektronegatifan naik dari 0.9 (Na) ke 3.2 (Cl)."},
 {j:"pilih",t:"Berdasarkan Jadual 2, oksida unsur manakah bersifat amfoterik?",p:["Aluminium","Natrium dan magnesium","Sulfur dan fosforus","Silikon dan klorin"],b:0,u:"Al₂O₃ bertindak balas dengan asid dan alkali."},
 {j:"pilih",t:"Berdasarkan Jadual 2, bagaimanakah sifat oksida berubah merentasi Kala 3?",p:["Bes → amfoterik → berasid","Berasid → amfoterik → bes","Bes sepanjang kala tanpa berubah","Berasid sepanjang kala tanpa berubah"],b:0,u:"Na₂O dan MgO bes, Al₂O₃ amfoterik, SiO₂, P₄O₁₀, SO₂ dan Cl₂O₇ berasid."},
 {j:"pilih",t:"Berdasarkan Jadual 2, unsur manakah ialah separuh logam yang digunakan dalam cip komputer?",p:["Silikon","Aluminium","Fosforus","Klorin"],b:0,u:"Silikon ialah separuh logam (metaloid) dan semikonduktor."},
 {j:"pilih",t:"Berdasarkan Jadual 2, larutan oksida unsur manakah menukarkan kertas litmus merah kepada biru?",p:["Natrium","Sulfur","Fosforus","Silikon"],b:0,u:"Na₂O larut dalam air membentuk NaOH, iaitu alkali."},
 {j:"pilih",t:"Berdasarkan Jadual 2, mengapakah argon tidak mempunyai nilai keelektronegatifan?",p:["Argon tidak membentuk ikatan dengan unsur lain","Argon terlalu besar dan berat untuk diukur dengan tepat","Argon ialah logam","Argon tiada elektron valens"],b:0,u:"Argon mempunyai oktet stabil dan lengai, jadi tidak menarik elektron dalam ikatan."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 2, mengapakah natrium lebih mudah menderma elektron berbanding magnesium?",p:["Jejari natrium lebih besar dan tarikan nukleus lebih lemah","Natrium mempunyai lebih banyak petala daripada magnesium","Natrium mempunyai lebih banyak proton","Natrium ialah bukan logam"],b:0,u:"Kedua-duanya ada 3 petala, tetapi natrium hanya 11 proton, jadi elektron valensnya kurang kuat ditarik."}},

{n:5, tempat:"Bengkel Unsur Peralihan", sk:"4.7 Unsur peralihan · 4.3 hingga 4.6 Menilai kegunaan unsur", lampiran:null,
 kadNama:"Unsur Peralihan", kadEm:"\u{1F9F2}", kadFakta:"Unsur peralihan (Kumpulan 3 hingga 12) mempunyai nombor pengoksidaan berbeza, membentuk ion berwarna dan bertindak sebagai mangkin.",
 bosKadNama:"Mangkin Industri", bosKadEm:"\u{2699}\u{FE0F}", bosKadFakta:"Besi ialah mangkin proses Haber, vanadium(V) oksida untuk proses Sentuh, dan nikel untuk penghidrogenan minyak.",
 soalan:[
 {j:"pilih",t:"Larutan kuprum(II) sulfat berwarna biru. Ini menunjukkan ciri unsur peralihan iaitu:",p:["Membentuk ion berwarna","Tidak mengalirkan elektrik","Berketumpatan sangat rendah","Wujud sebagai gas adi"],b:0,u:"Ion Cu²⁺ memberikan warna biru."},
 {j:"pilih",t:"Sebuah kilang marjerin perlu mempercepat penghidrogenan minyak sayuran. Mangkin manakah dipilih?",p:["Nikel","Natrium","Argon","Klorin"],b:0,u:"Nikel ialah mangkin bagi penghidrogenan ikatan ganda dua dalam minyak sayuran."},
 {j:"pilih",t:"Pengurus mencadangkan helium dan bukan hidrogen untuk mengisi belon kanak-kanak. Nilaikan.",p:["Wajar kerana helium lengai dan tidak mudah terbakar","Tidak wajar kerana helium lebih berat daripada udara","Tidak wajar kerana helium sangat beracun","Wajar kerana helium menghasilkan cahaya"],b:0,u:"Hidrogen mudah meletup; helium ringan dan lengai, jadi lebih selamat."},
 {j:"pilih",t:"Seorang murid mahu menguji natrium dengan air di dalam bikar besar di hadapan kelas. Keputusan PALING selamat ialah:",p:["Ketulan sebesar beras dan skrin keselamatan","Guna ketulan natrium sebesar ibu jari orang dewasa","Pegang natrium dengan tangan semasa ujian","Lakukan ujian tanpa pengawasan guru"],b:0,u:"Kuantiti kecil, skrin keselamatan dan penyepit mengurangkan risiko letupan dan percikan."},
 {j:"pilih",t:"Klorin digunakan untuk merawat air minuman. Penilaian manakah PALING seimbang?",p:["Berkesan membunuh kuman, tetapi kepekatan mesti dikawal","Selamat dalam sebarang kepekatan","Tidak berguna kerana klorin lengai","Berbahaya maka mesti diharamkan sepenuhnya di seluruh negara"],b:0,u:"Klorin membunuh bakteria, tetapi kepekatan tinggi berbahaya kepada kesihatan."},
 {j:"pilih",t:"Neon digunakan dalam lampu iklan. Sebab utama ialah:",p:["Neon memancarkan cahaya apabila elektrik dialirkan","Neon sangat reaktif dengan udara di dalam lampu","Neon menjadi cecair pada suhu bilik","Neon bertindak sebagai mangkin dalam lampu"],b:0,u:"Gas adi memancarkan cahaya berwarna apabila arus elektrik melaluinya."},
 {j:"banyak",t:"Pilih DUA sebab unsur peralihan sesuai dijadikan mangkin industri.",p:["Mempunyai nombor pengoksidaan berbeza","Menyediakan permukaan untuk tindak balas","Tidak mempunyai elektron valens","Sangat mudah terbakar dalam udara"],b:[0,1],u:"Nombor pengoksidaan berbeza dan permukaan aktif membolehkan unsur peralihan merendahkan tenaga pengaktifan."},
 {j:"pilih",t:"Iodin digunakan sebagai antiseptik luka. Mengapakah larutan iodin lebih wajar daripada klorin cair?",p:["Iodin kurang reaktif dan lebih selamat pada kulit","Iodin jauh lebih reaktif daripada klorin dan bromin","Iodin ialah gas pada suhu bilik","Iodin tidak membunuh kuman"],b:0,u:"Iodin kurang reaktif, jadi kurang merengsa kulit tetapi masih membunuh kuman."}],
 bos:{j:"pilih",t:"Sebuah syarikat memilih bahan untuk tiang bendera di tepi pantai. Pilihan manakah PALING wajar?",p:["Keluli tahan karat yang mengandungi kromium dan nikel","Kalium tulen kerana sangat ringan","Natrium kerana mudah dibentuk","Iodin pepejal kerana berwarna ungu yang sangat menarik"],b:0,u:"Kromium dan nikel (unsur peralihan) menjadikan keluli tahan karat dalam udara masin."}},

{n:6, tempat:"Studio Jadual Berkala", sk:"4.1 hingga 4.7 Mereka cipta menggunakan pengetahuan Jadual Berkala", lampiran:null,
 kadNama:"Ramalan Sifat", kadEm:"\u{1F52E}", kadFakta:"Kedudukan unsur dalam Jadual Berkala membolehkan kita meramal sifatnya tanpa menguji setiap unsur.",
 bosKadNama:"Inovasi Unsur", bosKadEm:"\u{1F4A1}", bosKadFakta:"Inovasi yang baik memilih unsur berdasarkan sifatnya, mengambil kira keselamatan, kos dan kesan kepada alam sekitar.",
 soalan:[
 {j:"pilih",t:"Anda mereka permainan kad Jadual Berkala untuk murid. Maklumat manakah PALING penting pada setiap kad?",p:["Nombor proton, susunan elektron dan kumpulan","Harga unsur di pasaran dunia","Nama saintis yang menemuinya sahaja","Gambar kartun tanpa sebarang data"],b:0,u:"Data ini membolehkan pemain meramal kedudukan dan sifat unsur."},
 {j:"pilih",t:"Anda mahu mereka lampu hiasan berwarna yang selamat untuk perayaan. Pilihan gas terbaik ialah:",p:["Gas neon","Gas klorin","Gas hidrogen","Wap bromin"],b:0,u:"Gas adi lengai dan memancarkan cahaya berwarna; klorin dan bromin beracun, hidrogen mudah meletup."},
 {j:"pilih",t:"Idea manakah PALING kreatif untuk menunjukkan kereaktifan Kumpulan 1 tanpa logam sebenar?",p:["Simulasi video dengan perbandingan Li, Na dan K","Memasukkan ketulan kalium yang besar ke dalam kolam sekolah","Menyimpan natrium dalam air paip","Membaca senarai unsur dengan kuat"],b:0,u:"Simulasi atau video selamat dan masih menunjukkan corak kereaktifan."},
 {j:"pilih",t:"Pasukan anda mereka penapis air luar bandar. Unsur manakah boleh digunakan untuk membunuh kuman dalam dos terkawal?",p:["Klorin","Natrium","Gas neon","Logam litium"],b:0,u:"Klorin dalam dos terkawal membunuh bakteria dalam air."},
 {j:"banyak",t:"Pilih DUA pertimbangan semasa mereka bateri baharu berasaskan litium.",p:["Litium reaktif dengan air, jadi bateri mesti kedap","Kitar semula bateri terpakai","Litium ialah gas adi yang lengai","Bateri boleh dibuang ke dalam sungai"],b:[0,1],u:"Keselamatan dan kitar semula penting kerana litium reaktif dan sumbernya terhad."},
 {j:"pilih",t:"Bagaimanakah anda menguji ramalan bahawa bromin lebih reaktif daripada iodin?",p:["Campur air bromin dengan larutan KI; perhati warna","Bandingkan warna botol bromin dan iodin di dalam stor makmal","Timbang botol bromin dan iodin","Hidu kedua-dua bahan secara terus"],b:0,u:"Bromin menyesarkan iodin: larutan bertukar perang kerana iodin terbebas."},
 {j:"pilih",t:"Anda mencadangkan unsur baharu ditemui dalam Kumpulan 18. Ciri manakah PALING munasabah?",p:["Sangat tidak reaktif","Bertindak balas cergas dengan air","Membentuk ion bercas +1","Wujud sebagai logam berkilat"],b:0,u:"Unsur Kumpulan 18 mempunyai oktet stabil, jadi sangat tidak reaktif."},
 {j:"pilih",t:"Mengapakah peta minda Jadual Berkala yang baik perlu menunjukkan corak, bukan sekadar senarai fakta?",p:["Corak membolehkan ramalan sifat unsur lain","Corak menjadikan peta lebih panjang","Fakta tidak penting dalam kimia","Senarai fakta lebih sukar dilukis"],b:0,u:"Corak seperti kereaktifan dan jejari atom membantu meramal sifat unsur yang belum dikaji."}],
 bos:{j:"buka",
  t:"Reka satu poster, infografik atau permainan yang menerangkan corak sifat SATU kumpulan atau kala dalam Jadual Berkala dan kaitkannya dengan kegunaan harian.",
  arahan:"Pilih Kumpulan 1, Kumpulan 17, Kumpulan 18 atau Kala 3. Nyatakan sekurang-kurangnya DUA corak sifat (contoh: kereaktifan, takat lebur, jejari atom), terangkan sebabnya berdasarkan susunan elektron, berikan DUA kegunaan dan SATU langkah keselamatan.",
  u:"Jawapan TP6 yang kukuh menerangkan corak dengan betul (contoh: kereaktifan logam alkali bertambah menuruni kumpulan kerana elektron valens lebih jauh dari nukleus), mengaitkan sifat dengan kegunaan sebenar, dan menyatakan langkah keselamatan yang sesuai."}}
];

module.exports = {
  id:"k4b4", tingkatan:4, kod:"4.0 Jadual Berkala Unsur",
  tajuk:"Peta Unsur",
  subtajuk:"Kimia Ting. 4 · Bab 4 Jadual Berkala Unsur",
  spi:SPI["4"],
  ulasan:{
   1:"{n} dapat mengingat kembali perkembangan dan susunan Jadual Berkala Unsur. Langkah seterusnya ialah menjelaskan sifat Kumpulan 1 dan 18.",
   2:"{n} dapat menjelaskan sifat gas adi dan logam alkali berdasarkan susunan elektron. Perlu lebih latihan mengaplikasikan sifat halogen.",
   3:"{n} boleh mengaplikasikan pengetahuan tentang Kumpulan 17 untuk meramal sifat fizik dan tindak balas halogen. Galakkan menganalisis corak dalam Kala 3.",
   4:"{n} mampu menganalisis corak jejari atom, keelektronegatifan dan sifat oksida merentasi Kala 3. Seterusnya latih menilai kegunaan unsur.",
   5:"{n} dapat menilai kegunaan unsur dan unsur peralihan untuk membuat keputusan yang selamat dan wajar. Sudah bersedia mereka cipta bahan berasaskan Jadual Berkala.",
   6:"{n} berjaya mereka cipta bahan atau penyelesaian kreatif menggunakan corak dalam Jadual Berkala. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Jadual Berkala Unsur. Cadangan: ulang hentian pertama dan tentukan kumpulan serta kala 20 unsur pertama daripada susunan elektronnya."
  },
  lampiran:{
   r1:{jenis:"kimia", mod:"atom", atom:[{simbol:"Li", susunan:[2,1]},{simbol:"Na", susunan:[2,8,1]}],
     kapsyen:"Rajah 1 · Susunan elektron atom litium dan atom natrium",
     alt:"Dua rajah atom: litium dengan susunan elektron 2.1 dan natrium dengan susunan elektron 2.8.1"},
   j1:jadual(1, "Sifat fizik halogen",
     ["Halogen", "Warna dan keadaan pada suhu bilik", "Takat didih (°C)"],
     [["Klorin, Cl_2","Gas kuning kehijauan","−34"],["Bromin, Br_2","Cecair perang kemerahan","59"],["Iodin, I_2","Pepejal ungu kehitaman","184"]]),
   j2:jadual(2, "Sifat unsur Kala 3",
     ["Unsur", "Jejari atom (pm)", "Keelektronegatifan", "Sifat oksida"],
     [["Na","186","0.9","Bes"],["Mg","160","1.2","Bes"],["Al","143","1.5","Amfoterik"],["Si","118","1.8","Berasid"],["P","110","2.1","Berasid"],["S","104","2.5","Berasid"],["Cl","99","3.2","Berasid"],["Ar","71","—","Tiada oksida"]])
  },
  aras:ARAS
};
