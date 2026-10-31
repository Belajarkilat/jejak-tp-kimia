/* Sumber kandungan — Kimia KSSM Tingkatan 4, Bab 8 Bahan Buatan dalam Industri.
   SK 8.1 Aloi dan kepentingannya, 8.2 Komposisi kaca dan kegunaannya, 8.3 Komposisi seramik dan
   kegunaannya, 8.4 Bahan komposit dan kepentingannya (DSKP KSSM Kimia Tingkatan 4 dan 5, dskp/kimia-en.pdf). */
const { jadual, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Gudang Aloi", sk:"8.1 Aloi · 8.2 Kaca · 8.3 Seramik · 8.4 Bahan komposit", lampiran:null,
 kadNama:"Aloi", kadEm:"\u{1F529}", kadFakta:"Aloi ialah campuran dua atau lebih unsur dengan unsur utamanya logam. Contoh: gangsa (kuprum dan stanum).",
 bosKadNama:"Bahan Komposit", bosKadEm:"\u{1F9F1}", bosKadFakta:"Bahan komposit terbentuk daripada dua atau lebih bahan dengan sifat berbeza, menghasilkan bahan yang lebih baik daripada komponen asalnya.",
 soalan:[
 {j:"pilih",t:"Apakah maksud aloi?",p:["Campuran logam dengan unsur lain","Sebatian ion antara logam dan bukan logam","Logam tulen yang dipanaskan hingga melebur","Bahan bukan logam yang sangat keras"],b:0,u:"Contoh: keluli ialah campuran besi dengan karbon."},
 {j:"pilih",t:"Gangsa ialah aloi bagi:",p:["Kuprum dan stanum","Kuprum dan zink","Besi dan karbon","Aluminium dan kuprum"],b:0,u:"Loyang = kuprum + zink; keluli = besi + karbon."},
 {j:"pilih",t:"Keluli nirkarat mengandungi besi, karbon dan:",p:["Kromium dan nikel","Stanum dan antimoni","Zink dan magnesium","Plumbum dan aluminium"],b:0,u:"Kromium membentuk lapisan oksida pelindung yang menghalang pengaratan."},
 {j:"pilih",t:"Komponen utama semua jenis kaca ialah:",p:["Silika","Natrium klorida","Kalsium hidroksida","Karbon"],b:0,u:"Silika, SiO₂, daripada pasir ialah bahan utama kaca."},
 {j:"pilih",t:"Kaca yang digunakan untuk peralatan makmal seperti bikar kerana tahan haba ialah kaca:",p:["Borosilikat","Soda kapur","Plumbum","Fotokromik"],b:0,u:"Boron oksida dalam kaca borosilikat mengurangkan pengembangan haba."},
 {j:"pilih",t:"Bahan utama seramik tradisional seperti batu-bata dan pasu ialah:",p:["Tanah liat","Pasir dan garam","Keluli dan konkrit","Getah dan plastik"],b:0,u:"Tanah liat (aluminosilikat) dibentuk dan dibakar pada suhu tinggi."},
 {j:"pilih",t:"Konkrit diperkukuh terdiri daripada konkrit dan:",p:["Rod keluli","Gentian kaca","Plastik poliester","Argentum klorida"],b:0,u:"Keluli memberi kekuatan regangan; konkrit kuat terhadap mampatan."},
 {j:"pilih",t:"Kaca fotokromik menjadi gelap di bawah cahaya terang kerana mengandungi:",p:["Argentum klorida","Natrium karbonat","Boron oksida","Plumbum(II) oksida"],b:0,u:"Ion argentum dalam AgCl ditukar kepada atom argentum oleh cahaya UV, menggelapkan kaca."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan aloi dan komposisinya yang betul.",p:["Loyang: kuprum dan zink","Keluli: besi dan karbon","Duralumin: aluminium, kuprum, magnesium dan mangan","Piuter: besi dan kromium","Gangsa: aluminium dan zink"],b:[0,1,2],u:"Piuter = stanum, kuprum dan antimoni; gangsa = kuprum dan stanum."}},

{n:2, tempat:"Bengkel Susunan Atom", sk:"8.1 Membandingkan sifat aloi dengan logam tulen", lampiran:null,
 kadNama:"Lapisan Atom", kadEm:"\u{1F9CA}", kadFakta:"Dalam logam tulen, atom bersaiz sama tersusun dalam lapisan teratur yang mudah menggelongsor apabila daya dikenakan.",
 bosKadNama:"Atom Asing", bosKadEm:"\u{1F534}", bosKadFakta:"Atom asing yang saiznya berbeza mengganggu susunan teratur, jadi lapisan atom sukar menggelongsor dan aloi menjadi lebih keras.",
 soalan:[
 {j:"pilih",t:"Mengapakah logam tulen lembut dan mudah dibentuk?",p:["Lapisan atom mudah menggelongsor","Atomnya bercas positif dan negatif","Logam tulen mengandungi atom asing","Ikatan antara atom sangat kuat"],b:0,u:"Atom bersaiz sama membentuk lapisan teratur yang mudah menggelongsor."},
 {j:"pilih",t:"Mengapakah aloi lebih keras daripada logam tulennya?",p:["Atom asing menghalang lapisan menggelongsor","Aloi mempunyai bilangan elektron lebih sedikit","Aloi tidak mempunyai ikatan logam langsung","Aloi mempunyai takat lebur lebih tinggi"],b:0,u:"Saiz atom asing yang berbeza mengganggu susunan teratur."},
 {j:"pilih",t:"Keluli nirkarat tidak berkarat kerana kromium:",p:["Membentuk lapisan oksida pelindung","Bertindak balas dengan air menjadi gas","Menyerap semua oksigen di udara","Menambah ketumpatan besi"],b:0,u:"Lapisan kromium(III) oksida yang nipis dan liat melindungi besi."},
 {j:"pilih",t:"Duralumin digunakan untuk badan kapal terbang kerana:",p:["Ringan dan kuat","Berat dan sangat rapuh","Mudah berkarat di udara","Berwarna keemasan berkilat"],b:0,u:"Aluminium ringan; logam tambahan menjadikannya kuat."},
 {j:"pilih",t:"Gangsa digunakan untuk membuat pingat dan tugu kerana:",p:["Keras, tahan kakisan dan berkilat","Lembut, mudah berkarat dan cepat menjadi kusam","Sangat ringan dan mudah terbakar","Boleh larut dalam air hujan"],b:0,u:"Gangsa tahan kakisan dan kekal menarik untuk tempoh lama."},
 {j:"pilih",t:"Loyang digunakan untuk alat muzik seperti trompet kerana:",p:["Tidak berkarat dan menghasilkan bunyi jelas","Sangat rapuh dan mudah pecah","Mudah bertindak balas dengan udara","Merupakan penebat elektrik"],b:0,u:"Loyang keras, tahan kakisan dan berkilat."},
 {j:"pilih",t:"Piuter digunakan untuk membuat cenderamata kerana:",p:["Berkilat, tahan kakisan dan mudah dibentuk","Sangat keras dan tidak boleh dibentuk","Mudah berkarat di udara lembap","Berbahaya dan beracun"],b:0,u:"Piuter (stanum dengan sedikit kuprum dan antimoni) cantik dan tahan kakisan."},
 {j:"banyak",t:"Pilih DUA sifat aloi berbanding logam tulennya.",p:["Lebih keras","Lebih tahan kakisan","Lebih mudah berkarat","Lebih lembut"],b:[0,1],u:"Aloi biasanya lebih keras, kuat dan tahan kakisan."}],
 bos:{j:"susun",t:"Susun langkah eksperimen membandingkan kekerasan gangsa dan kuprum.",p:["Letak bebola keluli di atas blok logam","Jatuhkan pemberat 1 kg dari ketinggian tetap","Ukur diameter lekuk pada blok","Ulang pada tempat lain dan kira purata","Bandingkan purata diameter lekuk"],b:[0,1,2,3,4],u:"Lekuk yang lebih kecil menunjukkan logam lebih keras."}},

{n:3, tempat:"Studio Kaca dan Seramik", sk:"8.2 Jenis kaca · 8.3 Seramik dan kegunaannya", lampiran:null,
 kadNama:"Jenis Kaca", kadEm:"\u{1FA9F}", kadFakta:"Kaca soda kapur murah untuk tingkap; borosilikat tahan haba untuk makmal; silika terlakur tahan suhu sangat tinggi; kaca plumbum berkilau untuk barang hiasan.",
 bosKadNama:"Seramik Termaju", bosKadEm:"\u{1F680}", bosKadFakta:"Seramik termaju seperti silikon karbida dan aluminium oksida digunakan dalam cakera brek, komponen enjin dan jubin perlindungan haba pesawat.",
 soalan:[
 {j:"pilih",t:"Kaca manakah PALING sesuai untuk tingkap rumah kerana murah dan mudah dibentuk?",p:["Soda kapur","Silika terlakur","Borosilikat","Plumbum"],b:0,u:"Kaca soda kapur paling murah dan mudah dihasilkan."},
 {j:"pilih",t:"Kanta teleskop yang tahan perubahan suhu melampau dibuat daripada kaca:",p:["Silika terlakur","Soda kapur","Plumbum","Fotokromik"],b:0,u:"Silika terlakur hampir tidak mengembang apabila dipanaskan."},
 {j:"pilih",t:"Kaca plumbum (kristal) digunakan untuk barang hiasan kerana:",p:["Indeks biasan tinggi dan berkilau","Sangat tahan haba melampau","Paling murah antara semua kaca","Berubah warna di bawah cahaya"],b:0,u:"Plumbum(II) oksida menambah indeks biasan, menjadikan kaca bergemerlapan."},
 {j:"pilih",t:"Mengapakah seramik digunakan untuk membuat jubin lantai dapur?",p:["Keras, tahan haba dan mudah dibersihkan","Lembut dan mudah dibengkokkan","Mengalirkan elektrik dengan baik","Ringan dan mudah terbakar"],b:0,u:"Seramik keras, lengai secara kimia dan tahan haba."},
 {j:"pilih",t:"Sifat seramik yang menjadi KELEMAHANNYA ialah:",p:["Rapuh","Keras","Tahan haba","Penebat"],b:0,u:"Seramik mudah retak atau pecah apabila dihentak."},
 {j:"pilih",t:"Penebat pada tiang voltan tinggi dibuat daripada seramik kerana seramik:",p:["Penebat elektrik yang baik","Konduktor elektrik yang sangat baik","Mudah berkarat apabila hujan","Sangat lembut dan mudah dibentuk"],b:0,u:"Seramik tidak mengalirkan elektrik dan tahan cuaca."},
 {j:"pilih",t:"Mengapakah bikar makmal tidak dibuat daripada kaca soda kapur?",p:["Mudah retak apabila dipanaskan","Terlalu mahal untuk dihasilkan","Tidak lut sinar langsung","Bertindak balas dengan air"],b:0,u:"Kaca soda kapur mengembang dengan banyak dan retak apabila suhu berubah mendadak."},
 {j:"pilih",t:"Bahan manakah ialah contoh seramik termaju?",p:["Silikon karbida","Batu-bata tanah liat","Pasu bunga tembikar","Jubin bumbung biasa"],b:0,u:"Seramik termaju dihasilkan daripada sebatian tulen seperti SiC dan Al₂O₃."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan bahan dan kegunaan yang tepat.",p:["Borosilikat: pinggan ketuhar","Seramik: penebat palam pencucuh","Silika terlakur: kanta teleskop","Soda kapur: bikar makmal","Kaca plumbum: penebat tiang elektrik"],b:[0,1,2],u:"Bikar dibuat daripada borosilikat; penebat tiang elektrik daripada seramik."}},

{n:4, tempat:"Makmal Ujian Bahan", sk:"8.1 Menganalisis data kekerasan aloi · 8.4 Bahan komposit", lampiran:"j1",
 kadNama:"Diameter Lekuk", kadEm:"\u{1F4CF}", kadFakta:"Dalam ujian kekerasan, lekuk yang lebih kecil bermaksud bahan lebih keras kerana lebih sukar diubah bentuk.",
 bosKadNama:"Komponen Komposit", bosKadEm:"\u{1F517}", bosKadFakta:"Gentian kaca = kaca + plastik poliester; gentian optik = kaca berketumpatan berbeza; konkrit diperkukuh = konkrit + keluli.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung purata diameter lekuk pada blok kuprum.",b:3,tol:0.01,suf:"mm",u:"(3.0 + 2.9 + 3.1) ÷ 3 = 3.0 mm."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung purata diameter lekuk pada blok gangsa.",b:2,tol:0.01,suf:"mm",u:"(2.0 + 2.1 + 1.9) ÷ 3 = 2.0 mm."},
 {j:"pilih",t:"Berdasarkan Jadual 1, bahan manakah lebih keras?",p:["Gangsa","Kuprum","Kedua-duanya sama","Tidak dapat ditentukan"],b:0,u:"Gangsa menghasilkan lekuk lebih kecil."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah pemboleh ubah dimanipulasikan?",p:["Jenis bahan","Diameter lekuk","Jisim pemberat","Ketinggian pemberat"],b:0,u:"Jenis bahan (kuprum atau gangsa) sengaja diubah."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah pemberat dijatuhkan dari ketinggian yang sama?",p:["Memastikan ujian adil","Supaya lekuk lebih besar","Mempercepat eksperimen","Menjimatkan bebola keluli"],b:0,u:"Tenaga hentaman perlu sama untuk kedua-dua bahan."},
 {j:"pilih",t:"Berdasarkan Jadual 1, kesimpulan manakah PALING tepat?",p:["Aloi lebih keras daripada logam tulennya","Logam tulen lebih keras daripada aloi","Kekerasan tidak bergantung pada bahan","Gangsa lebih lembut daripada kuprum"],b:0,u:"Atom stanum dalam gangsa menghalang lapisan atom kuprum menggelongsor."},
 {j:"pilih",t:"Topi keledar dan bot dibuat daripada gentian kaca kerana:",p:["Kuat, ringan dan tahan kakisan","Berat, rapuh dan sangat mudah berkarat di laut","Mengalirkan elektrik dengan baik","Murah tetapi mudah cair"],b:0,u:"Gentian kaca menggabungkan kekuatan kaca dan kelenturan plastik."},
 {j:"pilih",t:"Gentian optik menggantikan kabel kuprum dalam telekomunikasi kerana:",p:["Menghantar data lebih banyak dengan gangguan minimum","Lebih berat dan lebih mahal daripada kuprum","Mengalirkan elektrik lebih baik daripada kuprum","Mudah berkarat dan perlu diganti selalu"],b:0,u:"Gentian optik membawa isyarat cahaya dengan kehilangan kecil dan tidak terganggu oleh medan elektromagnet."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, jika duralumin diuji, ramalkan diameter lekuknya berbanding aluminium tulen.",p:["Lebih kecil","Lebih besar","Sama sahaja","Tiada lekuk langsung"],b:0,u:"Duralumin ialah aloi aluminium yang lebih keras, jadi lekuknya lebih kecil."}},

{n:5, tempat:"Bilik Jurutera Bahan", sk:"8.1 hingga 8.4 Menilai pemilihan bahan buatan", lampiran:null,
 kadNama:"Pilih Bahan", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Pemilihan bahan menilai sifat (kekuatan, berat, ketahanan), kos dan kesan alam sekitar.",
 bosKadNama:"Superkonduktor", bosKadEm:"\u{26A1}", bosKadFakta:"Superkonduktor mengalirkan elektrik tanpa rintangan pada suhu sangat rendah dan digunakan dalam mesin MRI serta kereta api maglev.",
 soalan:[
 {j:"pilih",t:"Sebuah syarikat memilih bahan untuk sudu dan garpu restoran. Pilihan PALING wajar ialah:",p:["Keluli nirkarat","Besi tulen","Kuprum tulen","Kaca soda kapur"],b:0,u:"Keluli nirkarat tahan karat, keras dan selamat untuk makanan."},
 {j:"pilih",t:"Jurutera memilih konkrit diperkukuh untuk jambatan, bukan konkrit biasa. Justifikasi terbaik ialah:",p:["Kuat terhadap mampatan dan regangan","Lebih ringan daripada kayu","Paling murah","Tidak perlu diselenggara langsung"],b:0,u:"Keluli menahan daya regangan yang konkrit sendiri tidak dapat tahan."},
 {j:"pilih",t:"Pengusaha kedai cermin mata mencadangkan kanta fotokromik kepada pemandu. Nilaikan.",p:["Wajar; gelap di bawah matahari, cerah di dalam bangunan","Tidak wajar kerana kanta menjadi gelap secara kekal selepas digunakan","Wajar kerana kanta mengalirkan elektrik","Tidak wajar kerana kanta mudah berkarat"],b:0,u:"Kaca fotokromik melindungi mata daripada silau tanpa menukar cermin mata."},
 {j:"pilih",t:"Mengapakah cakera brek kereta lumba dibuat daripada seramik termaju (komposit karbon-seramik)?",p:["Tahan haba sangat tinggi dan ringan","Murah dan mudah dihasilkan di rumah","Lembut dan senyap apabila digunakan","Mengalirkan elektrik ke roda"],b:0,u:"Brek menghasilkan haba yang sangat tinggi; seramik termaju tidak melebur atau berubah bentuk."},
 {j:"pilih",t:"Seorang kontraktor mahu menggunakan besi tulen untuk rangka bangunan tepi pantai. Penilaian terbaik ialah:",p:["Tidak wajar; guna keluli bersalut atau tahan karat","Wajar kerana besi tulen paling kuat","Wajar kerana besi tidak berkarat di pantai","Tidak wajar kerana besi terlalu ringan"],b:0,u:"Besi tulen lembut dan cepat berkarat dalam udara masin."},
 {j:"pilih",t:"Hospital mahu membeli mesin MRI yang menggunakan magnet superkonduktor. Kelebihan utama superkonduktor ialah:",p:["Tiada rintangan elektrik","Murah dan mudah diselenggara","Berfungsi tanpa elektrik","Tidak memerlukan penyejukan"],b:0,u:"Arus mengalir tanpa kehilangan tenaga, menghasilkan medan magnet kuat. Penyejukan masih diperlukan."},
 {j:"banyak",t:"Pilih DUA hujah kukuh untuk mengitar semula kaca berbanding membuat kaca baharu.",p:["Menjimatkan tenaga","Mengurangkan pengorekan pasir","Kaca terkitar tidak boleh dilebur","Kaca baharu lebih murah dibuang"],b:[0,1],u:"Kaca terkitar melebur pada suhu lebih rendah dan mengurangkan penggunaan bahan mentah."},
 {j:"pilih",t:"Bahan manakah PALING sesuai untuk pinggan yang dimasukkan ke dalam ketuhar?",p:["Kaca borosilikat","Kaca soda kapur","Plastik polietena","Loyang tipis"],b:0,u:"Borosilikat tahan perubahan suhu mendadak."}],
 bos:{j:"pilih",t:"Kerajaan merancang kabel internet bawah laut. Pilihan bahan manakah PALING wajar dan mengapa?",p:["Gentian optik; kapasiti data tinggi dan tidak berkarat","Kuprum tulen; paling murah untuk jarak jauh","Kaca soda kapur; mudah dipasang di laut","Seramik tradisional; mengalirkan elektrik"],b:0,u:"Gentian optik membawa data dengan kelajuan tinggi dan tahan persekitaran laut."}},

{n:6, tempat:"Studio Bahan Masa Depan", sk:"8.1 hingga 8.4 Mereka cipta bahan buatan", lampiran:null,
 kadNama:"Reka Komposit", kadEm:"\u{1F3D7}\u{FE0F}", kadFakta:"Komposit buatan sendiri boleh dihasilkan daripada bahan terpakai seperti dulang telur, kertas dan dawai untuk menguji kekuatan.",
 bosKadNama:"Bahan Lestari", bosKadEm:"\u{1F33F}", bosKadFakta:"Bahan lestari menggunakan sumber tempatan, mengurangkan sisa dan boleh dikitar semula selepas digunakan.",
 soalan:[
 {j:"pilih",t:"Anda mahu mereka bahan komposit murah untuk dinding pondok kebun sekolah. Gabungan PALING sesuai ialah:",p:["Simen dengan sabut kelapa","Kertas basah dengan gula","Plastisin dengan air","Kapas dengan minyak"],b:0,u:"Sabut kelapa bertindak sebagai gentian pengukuh dalam simen, seperti keluli dalam konkrit."},
 {j:"pilih",t:"Bagaimanakah anda menguji kekuatan bahan komposit buatan anda?",p:["Uji beban hingga patah dan banding","Lihat warna bahan selepas dikeringkan","Bau bahan selepas kering sepenuhnya","Timbang bahan sekali sahaja di makmal"],b:0,u:"Ujian beban yang adil membandingkan komposit dengan komponennya."},
 {j:"pilih",t:"Idea manakah PALING kreatif untuk menunjukkan mengapa aloi lebih keras?",p:["Model guli dua saiz dalam dulang","Baca definisi aloi tiga kali dengan kuat","Lukis logam tanpa sebarang atom di dalamnya","Simpan sudu dalam air selama seminggu"],b:0,u:"Guli besar dan kecil menunjukkan atom asing menghalang lapisan menggelongsor."},
 {j:"pilih",t:"Anda mereka bekas makanan yang boleh dipanaskan dalam ketuhar dan dibasuh berulang kali. Bahan terbaik ialah:",p:["Seramik atau kaca borosilikat","Plastik nipis","Kertas berlilin","Aluminium kerajang nipis"],b:0,u:"Seramik dan borosilikat tahan haba, lengai dan boleh digunakan semula."},
 {j:"banyak",t:"Pilih DUA ciri reka cipta bahan yang mengambil kira nilai ekonomi dan alam sekitar.",p:["Guna bahan buangan tempatan","Boleh dikitar semula","Guna bahan import mahal","Sekali guna sahaja"],b:[0,1],u:"Bahan tempatan dan boleh dikitar semula mengurangkan kos dan sisa."},
 {j:"pilih",t:"Anda mahu mereka tingkap bilik darjah yang mengurangkan silau matahari secara automatik. Bahan yang sesuai ialah:",p:["Kaca fotokromik","Kaca plumbum","Kaca soda kapur biasa","Seramik tradisional"],b:0,u:"Kaca fotokromik menjadi gelap apabila cahaya UV kuat."},
 {j:"pilih",t:"Mengapakah prototaip bahan anda perlu diuji beberapa kali?",p:["Keputusan lebih boleh dipercayai","Supaya bahan lebih cepat rosak","Untuk menambah kos projek","Ujian sekali sudah cukup"],b:0,u:"Ulangan mengurangkan ralat rawak dan menguatkan kesimpulan."},
 {j:"pilih",t:"Pengusaha kraf piuter tempatan mahu menarik pelancong. Cadangan berasaskan kimia yang PALING wajar ialah:",p:["Tonjolkan sifat tahan kakisan dan kilauan piuter","Cat piuter dengan cat berplumbum","Gantikan piuter dengan besi tulen","Rendam piuter dalam asid"],b:0,u:"Sifat aloi piuter menjadikan kraf kekal cantik dan bernilai."}],
 bos:{j:"buka",
  t:"Reka satu bahan komposit atau produk menggunakan aloi, kaca, seramik atau komposit untuk menyelesaikan masalah di sekolah atau komuniti anda.",
  arahan:"Nyatakan masalah, bahan yang dipilih dan komposisinya, DUA sifat yang menjadikannya sesuai, cara menguji prototaip, SATU kelemahan bahan dan cara mengatasinya, serta pertimbangan kos atau alam sekitar.",
  u:"Jawapan TP6 yang kukuh memilih bahan berdasarkan sifat yang tepat (contoh: konkrit diperkukuh sabut kelapa untuk wakaf kebun), mengaitkan sifat dengan susunan zarah atau komponen, merancang ujian adil, dan menilai kos serta kesan alam sekitar."}}
];

module.exports = {
  id:"k4b8", tingkatan:4, kod:"8.0 Bahan Buatan dalam Industri",
  tajuk:"Kilang Bahan",
  subtajuk:"Kimia Ting. 4 · Bab 8 Bahan Buatan dalam Industri",
  spi:SPI["8"],
  ulasan:{
   1:"{n} dapat mengingat kembali contoh aloi, kaca, seramik dan bahan komposit. Langkah seterusnya ialah menjelaskan perbezaan aloi dengan logam tulen.",
   2:"{n} dapat menjelaskan mengapa aloi lebih keras dan tahan kakisan berbanding logam tulen. Perlu lebih latihan mengaplikasikan jenis kaca dan seramik.",
   3:"{n} boleh mengaplikasikan sifat kaca dan seramik untuk memilih kegunaan yang sesuai. Galakkan menganalisis data ujian kekerasan.",
   4:"{n} mampu menganalisis data ujian kekerasan dan sifat bahan komposit. Seterusnya latih menilai pemilihan bahan buatan.",
   5:"{n} dapat menilai pemilihan bahan buatan berdasarkan sifat, kos dan kesan alam sekitar. Sudah bersedia mereka cipta bahan.",
   6:"{n} berjaya mereka cipta bahan atau produk kreatif menggunakan aloi, kaca, seramik atau komposit. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Bahan Buatan dalam Industri. Cadangan: ulang hentian pertama dan kenal pasti aloi serta kaca pada barangan di rumah."
  },
  lampiran:{
   j1:jadual(1, "Diameter lekuk pada blok kuprum dan gangsa",
     ["Blok", "Lekuk 1 (mm)", "Lekuk 2 (mm)", "Lekuk 3 (mm)"],
     [["Kuprum","3.0","2.9","3.1"],["Gangsa","2.0","2.1","1.9"]],
     "Pemberat 1 kg dijatuhkan dari ketinggian 50 cm ke atas bebola keluli.")
  },
  aras:ARAS
};
