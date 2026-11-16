/* Sumber kandungan — Kimia KSSM Tingkatan 5, Bab 4 Polimer.
   SK 12.1 Polimer, 12.2 Getah asli, 12.3 Getah sintetik
   (DSKP KSSM Kimia Tingkatan 4 dan 5, dskp/kimia-en.pdf).
   Monomer getah asli: 2-metilbuta-1,3-diena (isoprena). Neoprena: 2-klorobuta-1,3-diena. */
const { jadual, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Gudang Polimer", sk:"12.1 Polimer: monomer, polimer dan pengelasan", lampiran:"j1",
 kadNama:"Monomer", kadEm:"\u{1F517}", kadFakta:"Polimer ialah molekul berantai panjang yang terbina daripada banyak unit kecil berulang yang dipanggil monomer.",
 bosKadNama:"Polimer Asli", bosKadEm:"\u{1F33F}", bosKadFakta:"Polimer asli terdapat dalam alam: kanji, selulosa, protein dan getah asli. Polimer sintetik dibuat manusia, contohnya polietena dan PVC.",
 soalan:[
 {j:"pilih",t:"Apakah yang dimaksudkan dengan polimer?",p:["Molekul rantai panjang daripada monomer berulang","Atom tunggal yang sangat besar dan berat","Campuran logam yang dileburkan bersama","Sebatian ion yang larut dalam air"],b:0,u:"Contoh: polietena dibina daripada ribuan unit etena."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah monomer bagi polietena?",p:["Etena","Etana","Etanol","Propena"],b:0,u:"Pempolimeran penambahan etena menghasilkan polietena."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah monomer bagi kanji?",p:["Glukosa","Asid amino","Isoprena","Stirena"],b:0,u:"Kanji ialah polimer asli daripada glukosa."},
 {j:"pilih",t:"Berdasarkan Jadual 1, polimer manakah ialah polimer asli?",p:["Protein","Polistirena","PVC","Polipropena"],b:0,u:"Protein dibina daripada asid amino dalam hidupan."},
 {j:"pilih",t:"Berdasarkan Jadual 1, nama IUPAC bagi monomer PVC ialah:",p:["Kloroetena","Kloroetana","Etena","Dikloroetana"],b:0,u:"PVC = polivinil klorida = poli(kloroetena)."},
 {j:"pilih",t:"Plastik yang melembut apabila dipanaskan dan boleh dibentuk semula dikelaskan sebagai:",p:["Termoplastik","Termoset","Elastomer","Polimer asli"],b:0,u:"Contoh: polietena dan PVC."},
 {j:"pilih",t:"Pemegang kuali diperbuat daripada plastik yang tidak melembut apabila dipanaskan. Plastik ini ialah:",p:["Termoset","Termoplastik","Elastomer","Polietena"],b:0,u:"Termoset seperti bakelit mempunyai rangkai silang kuat dan tidak melembut."},
 {j:"banyak",t:"Pilih DUA polimer sintetik.",p:["Polipropena","Polistirena","Selulosa","Getah asli"],b:[0,1],u:"Selulosa dan getah asli ialah polimer asli."}],
 bos:{j:"banyak",t:"Berdasarkan Jadual 1, pilih SEMUA padanan polimer dan monomer yang betul.",p:["Getah asli: isoprena","Polipropena: propena","Selulosa: glukosa","Protein: etena","Polistirena: kloroetena"],b:[0,1,2],u:"Protein daripada asid amino; polistirena daripada stirena."}},

{n:2, tempat:"Kilang Pempolimeran", sk:"12.1 Tindak balas pempolimeran penambahan dan kondensasi", lampiran:null,
 kadNama:"Pempolimeran Penambahan", kadEm:"\u{2795}", kadFakta:"Dalam pempolimeran penambahan, monomer dengan ikatan ganda dua C=C bergabung tanpa kehilangan sebarang molekul.",
 bosKadNama:"Pempolimeran Kondensasi", bosKadEm:"\u{1F9F5}", bosKadFakta:"Dalam pempolimeran kondensasi, monomer dengan dua kumpulan berfungsi bergabung dan membebaskan molekul kecil seperti H₂O atau HCl.",
 soalan:[
 {j:"pilih",t:"Monomer bagi pempolimeran penambahan mesti mempunyai:",p:["Ikatan ganda dua C=C","Kumpulan karboksil –COOH","Ion logam dalam strukturnya","Ikatan tunggal C–C"],b:0,u:"Ikatan C=C terbuka supaya monomer bersambung."},
 {j:"pilih",t:"Semasa pempolimeran penambahan etena, ikatan ganda dua:",p:["Terbuka menjadi ikatan tunggal","Bertukar menjadi ikatan ganda tiga","Kekal dalam rantai polimer","Membebaskan molekul air"],b:0,u:"n CH₂=CH₂ → –(CH₂–CH₂)ₙ–."},
 {j:"pilih",t:"Nilon dihasilkan melalui tindak balas 1,6-heksanadiamina dengan dekanadioil diklorida. Jenis pempolimeran ialah:",p:["Kondensasi","Penambahan","Penapaian","Penyesaran"],b:0,u:"Molekul kecil HCl dibebaskan."},
 {j:"pilih",t:"Molekul kecil yang dibebaskan semasa penghasilan nilon dalam aktiviti makmal ialah:",p:["HCl","CO₂","O₂","NH₃"],b:0,u:"Kumpulan –NH₂ bertindak balas dengan –COCl dan membebaskan HCl."},
 {j:"pilih",t:"Jisim molekul relatif polietena sangat tinggi kerana:",p:["Ribuan unit etena bergabung dalam satu rantai","Setiap atom karbon mempunyai jisim yang besar","Polietena mengandungi atom logam berat","Polietena ialah sebatian ion yang besar"],b:0,u:"Bilangan n dalam –(CH₂–CH₂)ₙ– boleh mencapai ribuan."},
 {j:"pilih",t:"Apakah perbezaan utama antara pempolimeran penambahan dan kondensasi?",p:["Kondensasi membebaskan molekul kecil","Penambahan membebaskan molekul air","Kondensasi memerlukan ikatan C=C","Tiada perbezaan antara keduanya"],b:0,u:"Penambahan tidak kehilangan sebarang atom; kondensasi membebaskan H₂O atau HCl."},
 {j:"pilih",t:"Unit berulang bagi polipropena ialah:",p:["–CH₂–CH(CH₃)–","–CH₂–CH₂–","–CH₂–CHCl–","–CH₂–CH(C₆H₅)–"],b:0,u:"Propena CH₂=CHCH₃ membuka ikatan ganda dua."},
 {j:"pilih",t:"Getah asli terbentuk melalui pempolimeran:",p:["Penambahan isoprena","Kondensasi glukosa","Kondensasi asid amino","Penambahan etena"],b:0,u:"Isoprena (2-metilbuta-1,3-diena) mempunyai ikatan C=C."}],
 bos:{j:"susun",t:"Susun langkah aktiviti menghasilkan nilon di makmal.",p:["Tuang larutan 1,6-heksanadiamina ke dalam bikar","Tuang perlahan larutan dekanadioil diklorida di atasnya","Lapisan nilon terbentuk di antara dua cecair","Tarik lapisan nilon perlahan-lahan dengan forsep","Gulung benang nilon pada rod kaca"],b:[0,1,2,3,4],u:"Nilon terbentuk di sempadan dua cecair tak bercampur dan boleh ditarik sebagai benang."}},

{n:3, tempat:"Ladang Getah", sk:"12.2 Getah asli dan penggumpalan lateks", lampiran:null,
 kadNama:"Penggumpalan Lateks", kadEm:"\u{1F95B}", kadFakta:"Ion H⁺ daripada asid meneutralkan cas negatif pada membran protein zarah getah. Zarah berlanggar, membran pecah dan polimer getah bergumpal.",
 bosKadNama:"Larutan Ammonia", bosKadEm:"\u{1F6E1}\u{FE0F}", bosKadFakta:"Ion OH⁻ daripada larutan ammonia meneutralkan asid yang dihasilkan bakteria, jadi zarah getah kekal bercas negatif dan lateks tidak menggumpal.",
 soalan:[
 {j:"pilih",t:"Nama IUPAC monomer getah asli ialah:",p:["2-metilbuta-1,3-diena","2-klorobuta-1,3-diena","Buta-1,3-diena","2-metilpropena"],b:0,u:"Dikenali juga sebagai isoprena."},
 {j:"pilih",t:"Zarah getah dalam lateks tidak bergumpal kerana:",p:["Membran proteinnya bercas negatif","Zarah getah bercas positif","Zarah getah larut dalam air","Lateks sentiasa berasid"],b:0,u:"Cas sama saling menolak, jadi zarah tidak berlanggar."},
 {j:"pilih",t:"Penoreh menambah asid metanoik ke dalam lateks. Apakah yang diperhatikan?",p:["Lateks menggumpal","Lateks menjadi lebih cair","Lateks bertukar biru","Tiada perubahan"],b:0,u:"Ion H⁺ meneutralkan cas negatif pada zarah getah."},
 {j:"pilih",t:"Lateks yang dibiarkan semalaman menggumpal dengan sendirinya kerana:",p:["Bakteria menghasilkan asid laktik","Air dalam lateks membeku","Oksigen bertindak balas dengan getah","Cahaya matahari memecahkan polimer"],b:0,u:"Penggumpalan semula jadi berlaku akibat asid daripada tindakan bakteria."},
 {j:"pilih",t:"Bahan manakah ditambah untuk MENGHALANG lateks daripada menggumpal?",p:["Larutan ammonia","Asid etanoik","Asid metanoik","Larutan garam"],b:0,u:"Ammonia ialah alkali; OH⁻ meneutralkan H⁺."},
 {j:"pilih",t:"Getah asli tidak tahan haba kerana:",p:["Ia melembut dan melekit apabila panas","Ia mengandungi ikatan ion yang lemah","Ia mudah larut dalam air panas","Ia ialah polimer termoset"],b:0,u:"Rantai polimer tidak berangkai silang dan mudah menggelongsor apabila dipanaskan."},
 {j:"pilih",t:"Getah asli lama-kelamaan menjadi rapuh dan retak apabila terdedah kepada udara kerana:",p:["Ikatan ganda dua dioksidakan","Getah menyerap terlalu banyak air","Monomer isoprena bertukar menjadi etena","Getah bertindak balas dengan nitrogen"],b:0,u:"Oksigen dan ozon menyerang ikatan C=C dalam rantai."},
 {j:"banyak",t:"Pilih DUA sifat getah asli.",p:["Kenyal","Penebat elektrik","Tahan haba tinggi","Tahan pengoksidaan"],b:[0,1],u:"Getah asli kenyal dan menebat elektrik, tetapi tidak tahan haba dan mudah teroksida."}],
 bos:{j:"susun",t:"Susun proses penggumpalan lateks oleh asid.",p:["Asid ditambah kepada lateks","Ion H⁺ meneutralkan cas negatif membran protein","Zarah getah neutral berlanggar antara satu sama lain","Membran protein pecah","Polimer getah bergabung dan lateks menggumpal"],b:[0,1,2,3,4],u:"Peneutralan cas membolehkan perlanggaran dan penggumpalan."}},

{n:4, tempat:"Makmal Pemvulkanan", sk:"12.2 Pemvulkanan dan kekenyalan getah", lampiran:"j2",
 kadNama:"Pemvulkanan", kadEm:"\u{1F6DE}", kadFakta:"Pemvulkanan menggunakan sulfur untuk membentuk rangkai silang antara rantai polimer getah, jadi getah lebih kenyal, kuat dan tahan haba.",
 bosKadNama:"Rangkai Silang", bosKadEm:"\u{1F578}\u{FE0F}", bosKadFakta:"Rangkai silang sulfur menarik rantai polimer kembali ke kedudukan asal selepas diregang, dan mengurangkan bilangan ikatan C=C yang boleh dioksidakan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 2, getah manakah kembali ke panjang asal selepas pemberat dialihkan?",p:["Getah tervulkan","Getah tak tervulkan","Kedua-duanya","Tiada"],b:0,u:"Getah tervulkan kembali kepada 5.0 cm."},
 {j:"pilih",t:"Berdasarkan Jadual 2, getah manakah lebih mudah diregangkan?",p:["Getah tak tervulkan","Getah tervulkan","Kedua-duanya sama","Tidak dapat ditentukan"],b:0,u:"Getah tak tervulkan memanjang ke 8.0 cm berbanding 7.0 cm."},
 {j:"nombor",t:"Berdasarkan Jadual 2, berapakah pemanjangan kekal (cm) jalur getah tak tervulkan selepas pemberat dialihkan?",b:1.5,tol:0.01,suf:"cm",u:"6.5 − 5.0 = 1.5 cm."},
 {j:"pilih",t:"Berdasarkan Jadual 2, mengapakah getah tak tervulkan tidak kembali ke panjang asal?",p:["Rantai polimer menggelongsor antara satu sama lain","Rantai polimer diikat oleh atom sulfur yang kuat","Getah tak tervulkan menyerap air semasa ujian","Pemberat yang digunakan terlalu ringan"],b:0,u:"Tiada rangkai silang untuk menarik rantai kembali."},
 {j:"pilih",t:"Unsur yang digunakan dalam pemvulkanan getah ialah:",p:["Sulfur","Klorin","Nitrogen","Natrium"],b:0,u:"Oksida logam, peroksida dan sinaran juga boleh digunakan."},
 {j:"pilih",t:"Jika terlalu banyak sulfur digunakan, getah tervulkan menjadi:",p:["Keras dan kurang kenyal","Lebih lembut dan melekit","Lebih cair seperti lateks","Larut dalam air paip"],b:0,u:"Terlalu banyak rangkai silang menghalang rantai bergerak."},
 {j:"pilih",t:"Getah tervulkan lebih tahan pengoksidaan kerana:",p:["Kurang ikatan C=C tinggal","Sulfur bertindak sebagai agen pengoksidaan","Getah tervulkan mengandungi lebih banyak oksigen","Rantai polimer menjadi lebih pendek"],b:0,u:"Sebahagian ikatan C=C digunakan untuk membentuk rangkai silang sulfur."},
 {j:"pilih",t:"Dalam eksperimen Jadual 2, pemboleh ubah yang dimalarkan ialah:",p:["Jisim pemberat dan saiz jalur","Jenis getah yang digunakan","Panjang selepas regangan","Panjang selepas pemberat dialih"],b:0,u:"Jenis getah ialah pemboleh ubah dimanipulasi; panjang ialah pemboleh ubah bergerak balas."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 2, getah manakah lebih sesuai untuk tayar dan mengapa?",p:["Tervulkan; kenyal semula, kuat dan tahan haba","Tak tervulkan; lebih mudah diregangkan dan lembut","Tak tervulkan; kekal memanjang selepas dipakai","Kedua-duanya sama sesuai untuk tayar kenderaan"],b:0,u:"Tayar perlu kembali ke bentuk asal dan tahan haba geseran."}},

{n:5, tempat:"Pejabat Penilai Getah & Plastik", sk:"12.1 Kegunaan polimer · 12.3 Getah sintetik", lampiran:null,
 kadNama:"Getah Sintetik", kadEm:"\u{1F93F}", kadFakta:"Neoprena tahan minyak dan cuaca (pakaian selam, hos); getah stirena-butadiena (SBR) untuk tayar; getah silikon tahan haba (acuan kek, alat perubatan).",
 bosKadNama:"Kesan Plastik", bosKadEm:"\u{1F30A}", bosKadFakta:"Kebanyakan plastik sintetik tidak terbiodegradasi. Pembakaran PVC membebaskan gas toksik seperti HCl, dan sisa plastik membahayakan hidupan laut.",
 soalan:[
 {j:"pilih",t:"Hos minyak di bengkel kereta lebih sesuai diperbuat daripada:",p:["Neoprena","Getah asli","Getah tak tervulkan","Kanji"],b:0,u:"Neoprena tahan minyak; getah asli membengkak dalam minyak."},
 {j:"pilih",t:"Acuan kek yang boleh dimasukkan ke dalam ketuhar sesuai diperbuat daripada:",p:["Getah silikon","Polistirena","Getah asli","Polietena"],b:0,u:"Getah silikon tahan suhu tinggi dan tidak toksik."},
 {j:"pilih",t:"Sarung tangan perubatan masih banyak diperbuat daripada lateks getah asli kerana:",p:["Nipis, kenyal dan sensitif sentuhan","Ia tahan minyak dan pelarut organik","Ia bebas daripada protein penyebab alahan","Ia diperbuat daripada petroleum murah"],b:0,u:"Namun sesetengah pengguna alah kepada protein lateks; nitril menjadi alternatif."},
 {j:"pilih",t:"Membakar sampah PVC secara terbuka TIDAK wajar kerana:",p:["Gas toksik HCl dibebaskan","PVC tidak boleh terbakar","PVC menghasilkan oksigen","PVC bertukar menjadi getah"],b:0,u:"PVC mengandungi klorin; pembakaran juga boleh menghasilkan dioksin."},
 {j:"pilih",t:"Pihak berkuasa tempatan mahu mengurangkan sisa polistirena. Langkah PALING berkesan ialah:",p:["Galakkan bekas makanan boleh guna semula","Benarkan pembakaran terbuka di tapak sampah","Buang polistirena ke dalam sungai","Tambah lebih banyak tong sampah biasa"],b:0,u:"Mengurangkan penggunaan di sumber lebih berkesan daripada pelupusan."},
 {j:"pilih",t:"Malaysia ialah pengeluar utama sarung tangan getah dunia. Kelebihan getah asli berbanding getah sintetik dari segi alam sekitar ialah:",p:["Daripada sumber boleh diperbaharui","Lebih tahan minyak dan bahan kimia","Tidak perlu diproses langsung","Tidak boleh terbiodegradasi"],b:0,u:"Pokok getah boleh ditanam semula; getah sintetik daripada petroleum."},
 {j:"banyak",t:"Pilih DUA kesan sisa plastik kepada alam sekitar.",p:["Hidupan laut tercekik","Longkang tersumbat","Tanah lebih subur","Udara lebih bersih"],b:[0,1],u:"Plastik tidak terurai dan boleh menyebabkan banjir kilat."},
 {j:"pilih",t:"Plastik terbiodegradasi daripada kanji dicadangkan menggantikan beg plastik. Kelemahan yang perlu dinilai ialah:",p:["Kos lebih tinggi dan kurang tahan lama","Ia tidak boleh terurai langsung","Ia membebaskan klorin apabila reput","Ia diperbuat daripada logam berat"],b:0,u:"Plastik berasaskan kanji lebih mesra alam tetapi kos dan ketahanannya perlu dipertimbang."}],
 bos:{j:"pilih",t:"Sebuah syarikat mahu memilih bahan untuk pakaian selam. Pilihan PALING wajar dan sebabnya ialah:",p:["Neoprena; tahan air laut, minyak dan penebat haba","Getah asli; murah tetapi mudah teroksida di laut","Polistirena; ringan tetapi rapuh dan mudah pecah","Kanji; terbiodegradasi tetapi larut dalam air laut"],b:0,u:"Neoprena kekal kenyal dalam air sejuk dan tahan bahan kimia."}},

{n:6, tempat:"Studio Kitar Semula Polimer", sk:"12.1 hingga 12.3 Mereka cipta menggunakan polimer", lampiran:null,
 kadNama:"Kod Kitar Semula", kadEm:"\u{267B}\u{FE0F}", kadFakta:"Kod resin pada plastik membantu pengasingan: 1 PET, 2 HDPE, 3 PVC, 4 LDPE, 5 PP, 6 PS.",
 bosKadNama:"Inovasi Getah", bosKadEm:"\u{1F4A1}", bosKadFakta:"Getah asli Malaysia digunakan dalam inovasi seperti asfalt bergetah (jalan lebih tahan) dan galas getah untuk bangunan tahan gempa.",
 soalan:[
 {j:"pilih",t:"Anda mahu membuat pasu bunga daripada sisa plastik. Plastik yang PALING sesuai dileburkan dan dibentuk semula ialah:",p:["Termoplastik seperti HDPE","Termoset seperti bakelit","Getah tervulkan","Melamin"],b:0,u:"Termoplastik melembut apabila dipanaskan dan boleh dibentuk semula."},
 {j:"pilih",t:"Idea PALING kreatif untuk menggunakan tayar terpakai ialah:",p:["Jadikan lantai taman permainan","Bakar secara terbuka di belakang rumah","Buang ke dalam sungai berdekatan","Tanam di tapak pelupusan sampah"],b:0,u:"Serpihan getah melindungi kanak-kanak apabila jatuh dan mengurangkan sisa."},
 {j:"pilih",t:"Anda mereka jalan kampung yang lebih tahan lama. Cadangan berasaskan polimer ialah:",p:["Campurkan getah asli ke dalam asfalt","Campurkan polistirena ke dalam simen","Gunakan kanji sebagai bahan jalan","Gantikan asfalt dengan getah tak tervulkan"],b:0,u:"Asfalt bergetah lebih kenyal, kurang retak dan menyokong pekebun kecil."},
 {j:"banyak",t:"Pilih DUA langkah keselamatan semasa melebur plastik untuk projek seni.",p:["Kerja di kawasan berudara","Pakai sarung tangan tahan haba","Lebur PVC di dalam bilik tertutup","Guna nyalaan terus pada plastik"],b:[0,1],u:"Wap plastik boleh toksik dan plastik cair melecurkan kulit."},
 {j:"pilih",t:"Anda mereka bekas makanan untuk gerai yang mesra alam. Bahan PALING sesuai ialah:",p:["Bekas daripada sisa tebu","Polistirena","Beg PVC","Aluminium foil sekali guna"],b:0,u:"Bekas daripada hampas tebu atau kanji terbiodegradasi."},
 {j:"pilih",t:"Untuk menghasilkan belon getah yang tidak mudah pecah, anda perlu:",p:["Memvulkankan lateks dengan sulfur secukupnya","Menambah asid supaya lateks cepat menggumpal","Menggunakan getah tak tervulkan sepenuhnya","Mengeringkan lateks di bawah matahari terik"],b:0,u:"Rangkai silang yang sederhana memberi kekenyalan dan kekuatan."},
 {j:"pilih",t:"Sekolah anda mahu kitar semula plastik. Langkah pertama PALING berkesan ialah:",p:["Asingkan plastik mengikut kod resin","Campurkan semua plastik dalam satu tong","Bakar plastik untuk kurangkan isi padu","Buang plastik bersama sisa makanan"],b:0,u:"Jenis plastik berbeza perlu diproses secara berasingan."},
 {j:"pilih",t:"Pekebun kecil getah mahu menambah pendapatan. Produk lateks yang PALING mudah dihasilkan di rumah ialah:",p:["Getah gelang atau kraf lateks","Tayar kapal terbang","Neoprena untuk pakaian selam","Plastik PVC untuk paip"],b:0,u:"Produk lateks ringkas boleh dibuat dengan acuan dan pemvulkanan sejuk."}],
 bos:{j:"buka",
  t:"Reka satu produk daripada sisa polimer atau getah asli untuk komuniti anda (contoh: kraf daripada plastik terpakai, mainan getah, alas lantai daripada tayar lama).",
  arahan:"Nyatakan jenis polimer yang digunakan dan pengelasannya (asli/sintetik, termoplastik/termoset/elastomer), proses yang terlibat (contoh: pemvulkanan atau pelemburan semula), sifat yang menjadikannya sesuai, langkah keselamatan, dan kesan kepada ekonomi dan alam sekitar.",
  u:"Jawapan TP6 yang kukuh memilih polimer yang sesuai (contoh: HDPE termoplastik untuk dilebur semula), menjelaskan sifat berdasarkan struktur (rangkai silang, rantai panjang), merancang langkah keselamatan wap toksik dan menilai faedah ekonomi serta pengurangan sisa."}}
];

module.exports = {
  id:"k5b4", tingkatan:5, kod:"4.0 Polimer",
  tajuk:"Rantai Panjang",
  subtajuk:"Kimia Ting. 5 · Bab 4 Polimer",
  spi:SPI["12"],
  ulasan:{
   1:"{n} dapat mengingat kembali maksud monomer dan polimer serta pengelasannya. Langkah seterusnya ialah menjelaskan tindak balas pempolimeran.",
   2:"{n} dapat menjelaskan pempolimeran penambahan dan kondensasi. Perlu lebih latihan mengaplikasikan konsep penggumpalan lateks.",
   3:"{n} boleh mengaplikasikan pengetahuan getah asli untuk menerangkan penggumpalan dan pencegahan penggumpalan lateks. Galakkan menganalisis kesan pemvulkanan.",
   4:"{n} mampu menganalisis data kekenyalan getah tervulkan dan tak tervulkan. Seterusnya latih menilai kegunaan polimer dan getah sintetik.",
   5:"{n} dapat menilai pemilihan getah asli, getah sintetik dan plastik dari segi kegunaan dan kesan alam sekitar. Sudah bersedia mereka cipta produk polimer.",
   6:"{n} berjaya mereka cipta produk daripada polimer atau getah secara kreatif dan bertanggungjawab. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Polimer. Cadangan: ulang hentian pertama dan bina jadual polimer dengan monomernya."
  },
  lampiran:{
   j1:jadual(1, "Beberapa polimer dan monomernya",
     ["Polimer", "Monomer", "Jenis"],
     [["Polietena","Etena","Sintetik"],["Polipropena","Propena","Sintetik"],["Polivinil klorida (PVC)","Kloroetena","Sintetik"],["Polistirena","Stirena","Sintetik"],["Kanji","Glukosa","Asli"],["Selulosa","Glukosa","Asli"],["Protein","Asid amino","Asli"],["Getah asli","Isoprena","Asli"]]),
   j2:jadual(2, "Panjang jalur getah (panjang asal 5.0 cm) dengan pemberat 50 g",
     ["Jenis getah", "Panjang semasa diregang (cm)", "Panjang selepas pemberat dialih (cm)"],
     [["Tak tervulkan","8.0","6.5"],["Tervulkan","7.0","5.0"]])
  },
  aras:ARAS
};
