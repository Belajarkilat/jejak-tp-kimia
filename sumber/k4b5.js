/* Sumber kandungan — Kimia KSSM Tingkatan 4, Bab 5 Ikatan Kimia.
   SK 5.1 Asas pembentukan sebatian, 5.2 Ikatan ion, 5.3 Ikatan kovalen, 5.4 Ikatan hidrogen,
   5.5 Ikatan datif, 5.6 Ikatan logam, 5.7 Sifat sebatian ion dan sebatian kovalen
   (DSKP KSSM Kimia Tingkatan 4 dan 5, dskp/kimia-en.pdf). */
const { jadual, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Gerbang Ikatan", sk:"5.1 Asas pembentukan sebatian · 5.2 Ikatan ion · 5.3 Ikatan kovalen", lampiran:null,
 kadNama:"Susunan Oktet", kadEm:"\u{1F3AF}", kadFakta:"Atom bergabung untuk mencapai susunan elektron duplet atau oktet yang stabil seperti gas adi.",
 bosKadNama:"Ion dan Kovalen", bosKadEm:"\u{1F91D}", bosKadFakta:"Ikatan ion terbentuk melalui pemindahan elektron (logam kepada bukan logam). Ikatan kovalen terbentuk melalui perkongsian elektron (antara bukan logam).",
 soalan:[
 {j:"pilih",t:"Atom bergabung membentuk sebatian supaya mencapai susunan elektron:",p:["Stabil","Yang paling banyak petala dan elektron","Tanpa sebarang elektron valens langsung","Yang sama dengan logam alkali"],b:0,u:"Susunan duplet atau oktet yang stabil seperti gas adi."},
 {j:"pilih",t:"Ikatan ion terbentuk melalui:",p:["Pemindahan elektron","Perkongsian elektron","Lautan elektron","Daya antara molekul"],b:0,u:"Atom logam menderma elektron kepada atom bukan logam."},
 {j:"pilih",t:"Ikatan kovalen terbentuk melalui:",p:["Perkongsian elektron","Pemindahan elektron","Tarikan ion","Lautan elektron"],b:0,u:"Atom bukan logam berkongsi pasangan elektron."},
 {j:"pilih",t:"Sebatian manakah mempunyai ikatan ion?",p:["NaCl","CO₂","H₂O","CH₄"],b:0,u:"NaCl terbentuk antara logam (Na) dan bukan logam (Cl)."},
 {j:"pilih",t:"Molekul nitrogen, N₂, mempunyai ikatan:",p:["Ganda tiga","Tunggal antara dua atom","Ganda dua antara dua atom","Ion antara dua atom"],b:0,u:"Setiap atom N (2.5) berkongsi 3 elektron, membentuk ikatan ganda tiga."},
 {j:"pilih",t:"Ikatan yang terbentuk apabila sepasang elektron dikongsi dan kedua-dua elektron itu datang daripada SATU atom sahaja ialah ikatan:",p:["Datif","Ion","Logam","Hidrogen"],b:0,u:"Ikatan datif (koordinat), contohnya dalam ion ammonium NH₄⁺."},
 {j:"pilih",t:"Ikatan logam dihuraikan sebagai tarikan antara ion logam positif dengan:",p:["Lautan elektron","Ion negatif","Molekul air","Proton atom lain"],b:0,u:"Elektron valens dinyahsetempatkan dan bebas bergerak di antara ion logam."},
 {j:"pilih",t:"Ikatan hidrogen terbentuk antara atom hidrogen yang terikat kepada N, O atau F dengan:",p:["Atom N, O atau F molekul lain","Atom logam alkali seperti natrium","Atom gas adi seperti argon","Atom karbon dalam rantai panjang"],b:0,u:"Atom H yang terikat kepada atom sangat elektronegatif tertarik kepada pasangan elektron bebas atom N, O atau F lain."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan sebatian dan jenis ikatan yang betul.",p:["MgO: ikatan ion","Cl₂: ikatan kovalen","Kuprum: ikatan logam","CH₄: ikatan ion","KCl: ikatan kovalen"],b:[0,1,2],u:"CH₄ terdiri daripada bukan logam sahaja, jadi kovalen. KCl terbentuk antara logam dan bukan logam, jadi ion."}},

{n:2, tempat:"Jambatan Ion", sk:"5.2 Ikatan ion", lampiran:"r1",
 kadNama:"Ion Natrium", kadEm:"\u{1F9C2}", kadFakta:"Atom natrium (2.8.1) menderma satu elektron menjadi ion Na⁺ (2.8). Atom klorin (2.8.7) menerima satu elektron menjadi ion Cl⁻ (2.8.8).",
 bosKadNama:"Daya Elektrostatik", bosKadEm:"\u{1F9F2}", bosKadFakta:"Ion bercas berlawanan ditarik oleh daya tarikan elektrostatik yang kuat, membentuk kekisi hablur.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah susunan elektron ion natrium?",p:["2.8","2.8.1","2.8.8","2.8.7"],b:0,u:"Natrium kehilangan elektron valensnya dan mencapai susunan oktet 2.8."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah ion klorida bercas negatif?",p:["Menerima satu elektron","Menderma satu elektron kepada natrium","Kehilangan satu proton daripada nukleus","Menerima satu proton daripada natrium"],b:0,u:"17 proton tetapi 18 elektron, jadi cas bersih −1."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapakah elektron yang dipindahkan?",p:["1","2","7","8"],b:0,u:"Satu elektron dipindahkan daripada Na kepada Cl."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah yang menyatukan ion-ion itu?",p:["Daya elektrostatik","Perkongsian pasangan elektron antara Na dan Cl","Ikatan hidrogen antara molekul NaCl","Lautan elektron yang bergerak bebas"],b:0,u:"Ion positif dan negatif ditarik oleh daya elektrostatik yang kuat."},
 {j:"pilih",t:"Magnesium (2.8.2) bertindak balas dengan oksigen (2.6). Apakah ion yang terbentuk?",p:["Mg²⁺ dan O²⁻","Mg⁺ dan O⁻ sahaja","Mg²⁻ dan O²⁺","Mg⁻ dan O⁺"],b:0,u:"Mg menderma 2 elektron; O menerima 2 elektron."},
 {j:"pilih",t:"Apakah formula sebatian ion yang terbentuk antara kalsium (2.8.8.2) dan klorin (2.8.7)?",p:["CaCl₂","CaCl","Ca₂Cl","CaCl₃"],b:0,u:"Ca²⁺ memerlukan dua Cl⁻ untuk meneutralkan cas."},
 {j:"pilih",t:"Mengapakah unsur Kumpulan 1 mudah membentuk ion positif?",p:["Mudah menderma satu elektron","Mempunyai tujuh elektron valens yang mudah diterima","Mempunyai susunan elektron oktet yang stabil","Mempunyai bilangan neutron yang sangat banyak"],b:0,u:"Menderma satu elektron valens cukup untuk mencapai oktet."},
 {j:"pilih",t:"Unsur X mempunyai nombor proton 19 dan unsur Y nombor proton 9. Apakah formula sebatian X dan Y?",p:["XY","X₂Y","XY₂","X₂Y₃"],b:0,u:"X (2.8.8.1) membentuk X⁺; Y (2.7) membentuk Y⁻. Nisbah 1:1."}],
 bos:{j:"susun",t:"Susun langkah pembentukan natrium klorida mengikut urutan.",p:["Atom Na menderma satu elektron","Atom Cl menerima elektron itu","Ion Na⁺ dan Cl⁻ terbentuk","Ion ditarik oleh daya elektrostatik","Kekisi hablur NaCl terbentuk"],b:[0,1,2,3,4],u:"Pemindahan elektron menghasilkan ion bercas berlawanan yang kemudian membentuk kekisi hablur."}},

{n:3, tempat:"Taman Kovalen", sk:"5.3 Ikatan kovalen · 5.5 Ikatan datif · 5.6 Ikatan logam", lampiran:null,
 kadNama:"Kongsi Elektron", kadEm:"\u{1F465}", kadFakta:"Ikatan tunggal berkongsi satu pasang elektron, ikatan ganda dua dua pasang dan ikatan ganda tiga tiga pasang.",
 bosKadNama:"Ion Ammonium", bosKadEm:"\u{1F9EA}", bosKadFakta:"Dalam NH₄⁺, atom N menderma pasangan elektron bebasnya kepada ion H⁺ membentuk ikatan datif.",
 soalan:[
 {j:"pilih",t:"Berapakah pasang elektron dikongsi dalam molekul oksigen, O₂?",p:["2","1","3","4"],b:0,u:"Setiap atom O (2.6) memerlukan 2 elektron, jadi dua pasang dikongsi (ikatan ganda dua)."},
 {j:"pilih",t:"Berapakah ikatan kovalen tunggal dalam molekul metana, CH₄?",p:["4","1","2","8"],b:0,u:"Karbon (2.4) berkongsi satu pasang elektron dengan setiap empat atom H."},
 {j:"pilih",t:"Formula molekul sebatian antara karbon (2.4) dan oksigen (2.6) melalui ikatan ganda dua ialah:",p:["CO₂","CO","C₂O","CO₃"],b:0,u:"O=C=O: karbon membentuk dua ikatan ganda dua."},
 {j:"pilih",t:"Molekul air, H₂O, mempunyai berapa pasangan elektron bebas pada atom oksigen?",p:["2","0","1","4"],b:0,u:"O mempunyai 6 elektron valens: 2 digunakan untuk ikatan dengan H, baki 4 elektron = 2 pasangan bebas."},
 {j:"pilih",t:"Dalam ion hidroksonium, H₃O⁺, ikatan datif terbentuk apabila:",p:["Atom O menderma pasangan elektron kepada H⁺","Atom H menderma pasangan elektron kepada atom O","Atom O memindahkan satu elektron kepada H","Atom H berkongsi elektron dengan atom H lain"],b:0,u:"Atom O dalam H₂O mempunyai pasangan elektron bebas yang diderma kepada H⁺."},
 {j:"pilih",t:"Mengapakah logam boleh mengalirkan elektrik dalam keadaan pepejal?",p:["Ada elektron bebas","Ion logam bergerak","Ikatan kovalen kuat","Menyerap air udara"],b:0,u:"Elektron yang dinyahsetempatkan bergerak membawa cas."},
 {j:"pilih",t:"Mengapakah logam bersifat mulur dan boleh ditempa?",p:["Lapisan atom boleh menggelongsor","Atom tiada elektron","Ion bercas negatif","Terdiri daripada molekul kecil"],b:0,u:"Lautan elektron mengekalkan ikatan walaupun lapisan ion logam menggelongsor."},
 {j:"banyak",t:"Pilih DUA molekul yang mempunyai ikatan kovalen ganda dua.",p:["O₂","CO₂","H₂","Cl₂"],b:[0,1],u:"H₂ dan Cl₂ mempunyai ikatan tunggal."}],
 bos:{j:"pilih",t:"Unsur P (nombor proton 6) bergabung dengan unsur Q (nombor proton 17). Apakah formula dan jenis ikatannya?",p:["PQ₄, kovalen","PQ, ion","P₄Q, kovalen","PQ₂, ion"],b:0,u:"P ialah karbon (2.4), Q ialah klorin (2.8.7). Karbon berkongsi elektron dengan 4 atom Cl: CCl₄ kovalen."}},

{n:4, tempat:"Makmal Sifat Sebatian", sk:"5.7 Menganalisis sifat sebatian ion dan sebatian kovalen", lampiran:"j1",
 kadNama:"Takat Lebur", kadEm:"\u{1F525}", kadFakta:"Sebatian ion mempunyai takat lebur tinggi kerana daya elektrostatik kuat perlu diatasi. Sebatian kovalen ringkas mempunyai takat lebur rendah kerana daya antara molekul lemah.",
 bosKadNama:"Kekonduksian", bosKadEm:"\u{26A1}", bosKadFakta:"Sebatian ion mengalirkan elektrik dalam keadaan leburan atau akueus kerana ionnya bebas bergerak, tetapi tidak dalam keadaan pepejal.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, bahan manakah ialah sebatian ion?",p:["P","Q","R","Q dan R"],b:0,u:"P mempunyai takat lebur tinggi, larut dalam air, dan mengalirkan elektrik dalam leburan tetapi bukan pepejal."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah P tidak mengalirkan elektrik dalam keadaan pepejal?",p:["Ion tidak bebas bergerak","Tiada ion","Elektron terlalu banyak","P ialah logam"],b:0,u:"Dalam pepejal, ion terikat pada kedudukan tetap dalam kekisi."},
 {j:"pilih",t:"Berdasarkan Jadual 1, bahan manakah mungkin ialah logam?",p:["R","P","Q","P dan Q"],b:0,u:"R mengalirkan elektrik dalam keadaan pepejal dan leburan, ciri logam."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah takat lebur Q rendah?",p:["Daya antara molekul lemah","Ikatan kovalen lemah","Q ada ion bebas","Q ialah logam"],b:0,u:"Hanya daya Van der Waals yang lemah antara molekul perlu diatasi, bukan ikatan kovalen."},
 {j:"pilih",t:"Berdasarkan Jadual 1, pelarut manakah sesuai untuk melarutkan Q?",p:["Pelarut organik seperti propanon","Air suling pada suhu bilik","Larutan natrium klorida pekat","Asid hidroklorik pekat"],b:0,u:"Sebatian kovalen biasanya larut dalam pelarut organik."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah keadaan fizik Q pada suhu bilik (25 °C)?",p:["Cecair","Pepejal","Gas","Plasma"],b:0,u:"Q melebur pada −23 °C dan mendidih pada 77 °C, jadi cecair pada 25 °C."},
 {j:"pilih",t:"Berdasarkan Jadual 1, bahan manakah paling mungkin natrium klorida?",p:["P","Q","R","Tiada"],b:0,u:"NaCl ialah sebatian ion: takat lebur 801 °C, larut dalam air, konduktor dalam leburan."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah leburan P mengalirkan elektrik tetapi cecair Q tidak?",p:["Leburan P mengandungi ion bebas","Q mempunyai ion tetapi ion itu tidak bergerak","P ialah molekul yang tidak bercas","Cecair Q terlalu sejuk untuk mengalirkan arus"],b:0,u:"Leburan sebatian ion mengandungi ion yang bebas bergerak membawa cas; Q terdiri daripada molekul neutral."}],
 bos:{j:"banyak",t:"Berdasarkan Jadual 1, pilih SEMUA kesimpulan yang betul.",p:["P ialah sebatian ion","Q ialah sebatian kovalen","R mempunyai elektron bebas","Q mengalirkan elektrik dalam pepejal","P larut dalam propanon"],b:[0,1,2],u:"Q tidak mengalirkan elektrik dalam sebarang keadaan; P tidak larut dalam propanon."}},

{n:5, tempat:"Bilik Penilai Ikatan", sk:"5.4 Ikatan hidrogen · 5.6 Ikatan logam · 5.7 Menilai sifat bahan", lampiran:null,
 kadNama:"Ikatan Hidrogen", kadEm:"\u{1F4A7}", kadFakta:"Ikatan hidrogen menjadikan takat didih air (100 °C) jauh lebih tinggi berbanding molekul lain yang saiznya hampir sama.",
 bosKadNama:"Pilih Bahan", bosKadEm:"\u{1F9F0}", bosKadFakta:"Sifat bahan bergantung pada jenis ikatan. Memilih bahan yang betul bermaksud memadankan ikatan dengan keperluan.",
 soalan:[
 {j:"pilih",t:"Takat didih air 100 °C, manakala hidrogen sulfida, H₂S, −60 °C. Penjelasan terbaik ialah:",p:["Air mempunyai ikatan hidrogen","H₂S mempunyai ikatan ion","Air ialah sebatian ion","Jisim H₂S lebih kecil"],b:0,u:"Ikatan hidrogen antara molekul air memerlukan lebih banyak tenaga untuk diatasi."},
 {j:"pilih",t:"Sebuah syarikat mahu memilih bahan untuk wayar elektrik rumah. Pilihan terbaik ialah:",p:["Kuprum","Natrium klorida pepejal yang tulen","Sulfur pepejal yang berwarna kuning","Getah asli yang lembut dan kenyal"],b:0,u:"Kuprum mempunyai ikatan logam dengan elektron bebas, jadi konduktor yang baik dan mulur."},
 {j:"pilih",t:"Seorang murid berkata garam pepejal boleh digunakan sebagai konduktor dalam litar. Nilaikan.",p:["Salah; ion pepejal tidak bebas bergerak","Betul kerana garam mengandungi ion bercas","Betul kerana garam ialah logam berkilat","Salah kerana garam tiada sebarang ion"],b:0,u:"Garam mengalirkan elektrik hanya apabila dilebur atau dilarutkan."},
 {j:"pilih",t:"Kertas tisu basah lebih kuat melekat pada kaca berbanding tisu kering. Penjelasan yang PALING munasabah ialah:",p:["Ikatan hidrogen terbentuk","Ikatan ion terbentuk","Ikatan logam terbentuk","Air menjadi gam"],b:0,u:"Molekul air membentuk ikatan hidrogen dengan permukaan kaca dan gentian kertas."},
 {j:"pilih",t:"Mengapakah etanol larut dalam air tetapi heksana tidak larut?",p:["Etanol membentuk ikatan hidrogen dengan air","Heksana membentuk ikatan hidrogen dengan air","Etanol ialah sebatian ion yang terion dalam air","Heksana bertindak balas dengan air menjadi gas"],b:0,u:"Kumpulan –OH pada etanol membentuk ikatan hidrogen dengan molekul air."},
 {j:"pilih",t:"Pakar cadangkan aluminium untuk badan kapal terbang. Penilaian manakah PALING tepat?",p:["Wajar; ringan, kuat dan boleh dibentuk","Tidak wajar kerana aluminium ialah sebatian ion","Tidak wajar kerana aluminium tidak mulur langsung","Wajar kerana aluminium mudah terbakar di udara"],b:0,u:"Ikatan logam memberi sifat mulur dan kuat; ketumpatan aluminium rendah."},
 {j:"banyak",t:"Pilih DUA sebab pelarut organik seperti propanon diletakkan jauh dari api di makmal.",p:["Ia mudah meruap","Wapnya mudah terbakar","Ia ialah sebatian ion","Ia bertindak balas dengan kaca"],b:[0,1],u:"Sebatian kovalen ringkas seperti propanon mempunyai takat didih rendah dan mudah terbakar."},
 {j:"pilih",t:"Pilihan manakah PALING wajar untuk membersihkan kesan minyak (sebatian kovalen) pada baju?",p:["Pelarut organik atau sabun","Air paip sahaja tanpa sebarang bahan lain","Larutan garam biasa yang pekat","Asid hidroklorik pekat yang dicairkan sedikit"],b:0,u:"Minyak tidak larut dalam air tetapi larut dalam pelarut organik; sabun membantu menyingkirkannya."}],
 bos:{j:"pilih",t:"Sebuah kilang mahu memilih bahan bekas untuk menyimpan leburan natrium klorida (801 °C). Pilihan PALING wajar ialah:",p:["Seramik tahan haba","Plastik polietena yang ringan dan murah","Bekas kaca biasa daripada dapur","Bekas kayu yang dilapik kertas"],b:0,u:"Seramik mempunyai takat lebur sangat tinggi dan tidak bertindak balas dengan leburan garam."}},

{n:6, tempat:"Studio Ikatan", sk:"5.1 hingga 5.7 Mereka cipta menggunakan pengetahuan ikatan kimia", lampiran:null,
 kadNama:"Model Ikatan", kadEm:"\u{1F3D7}\u{FE0F}", kadFakta:"Model ikatan yang baik menunjukkan elektron valens, cara elektron dipindah atau dikongsi, dan susunan stabil yang terhasil.",
 bosKadNama:"Bahan Pintar", bosKadEm:"\u{1F4A1}", bosKadFakta:"Reka cipta bahan baharu bermula dengan memahami jenis ikatan dan sifat yang dihasilkannya.",
 soalan:[
 {j:"pilih",t:"Anda mereka permainan untuk menunjukkan ikatan ion. Peraturan manakah PALING tepat?",p:["Pemain logam beri kad elektron kepada bukan logam","Dua pemain bukan logam berkongsi kad elektron","Semua pemain membuang kad elektron mereka","Pemain gas adi mengambil kad pemain lain"],b:0,u:"Ikatan ion melibatkan pemindahan elektron daripada logam kepada bukan logam."},
 {j:"pilih",t:"Bahan manakah PALING sesuai untuk membina model 3D molekul metana?",p:["Bola polistirena dan batang kayu","Kaca pecah dan dawai tajam berkarat","Kepingan logam berat yang tajam","Plastisin cair yang sangat panas"],b:0,u:"Bahan ringan dan selamat; batang mewakili ikatan kovalen antara C dan H."},
 {j:"pilih",t:"Anda mahu mereka kuali yang mudah dibersihkan. Lapisan manakah sesuai berdasarkan ikatan?",p:["Polimer kovalen licin","Lapisan garam ion yang mudah larut dalam air","Lapisan natrium logam yang sangat reaktif","Lapisan ais yang mempunyai ikatan hidrogen"],b:0,u:"Polimer kovalen seperti PTFE licin dan tidak melekat."},
 {j:"pilih",t:"Idea manakah PALING kreatif untuk menunjukkan ikatan hidrogen dalam air kepada murid?",p:["Banding titisan air dan alkohol di atas syiling","Baca definisi ikatan hidrogen sepuluh kali","Lukis atom H dengan pelbagai warna sahaja","Tuang air ke dalam singki dengan cepat"],b:0,u:"Air membentuk titisan lebih tinggi kerana ikatan hidrogen (tegangan permukaan)."},
 {j:"banyak",t:"Pilih DUA ciri bahan pembalut wayar yang baik berdasarkan ikatan.",p:["Sebatian kovalen penebat","Tahan haba yang sederhana","Mempunyai elektron bebas","Larut dengan mudah dalam air"],b:[0,1],u:"Penebat tidak mempunyai elektron atau ion bebas; ketahanan haba penting untuk keselamatan."},
 {j:"pilih",t:"Anda mencadangkan cara murah untuk menguji sama ada bahan X ialah sebatian ion. Kaedah terbaik ialah:",p:["Uji kekonduksian larutan akueusnya","Uji rasa bahan X dengan lidah","Lihat warna bahan X sahaja","Bau bahan X dengan teliti dan rapat"],b:0,u:"Larutan sebatian ion mengalirkan elektrik; ujian rasa dan bau tidak selamat."},
 {j:"pilih",t:"Sebuah syarikat mahu bahan aloi untuk rangka basikal. Pertimbangan manakah PALING wajar?",p:["Kekuatan, berat dan kos","Warna asal logam tulen sahaja","Kebolehan larut dalam air hujan","Bau logam selepas dipotong"],b:0,u:"Ikatan logam memberi kekuatan; ketumpatan dan kos penting kepada pengguna."},
 {j:"pilih",t:"Bagaimanakah anda membetulkan rakan yang melukis ikatan ion NaCl dengan elektron dikongsi?",p:["Tunjuk elektron dipindah dan ion berkurungan","Tambah lebih banyak elektron dikongsi pada lukisan","Buang atom klorin daripada lukisan itu","Tukar natrium kepada gas adi dalam lukisan"],b:0,u:"Rajah ikatan ion menunjukkan ion dalam kurungan dengan cas, bukan perkongsian elektron."}],
 bos:{j:"buka",
  t:"Reka satu model fizikal atau digital yang membandingkan ikatan ion, ikatan kovalen dan ikatan logam.",
  arahan:"Gunakan SATU contoh setiap jenis (contoh: NaCl, H₂O, kuprum). Tunjukkan susunan elektron atau gambaran ikatan, terangkan DUA sifat fizik setiap bahan berdasarkan ikatannya, dan nyatakan bahan model serta SATU batasannya.",
  u:"Jawapan TP6 yang kukuh menunjukkan pemindahan elektron (ion), perkongsian elektron (kovalen) dan lautan elektron (logam) dengan tepat, mengaitkan sifat seperti takat lebur dan kekonduksian dengan jenis ikatan, dan menilai batasan model."}}
];

module.exports = {
  id:"k4b5", tingkatan:4, kod:"5.0 Ikatan Kimia",
  tajuk:"Rantai Atom",
  subtajuk:"Kimia Ting. 4 · Bab 5 Ikatan Kimia",
  spi:SPI["5"],
  ulasan:{
   1:"{n} dapat mengingat kembali asas pembentukan sebatian dan jenis ikatan kimia. Langkah seterusnya ialah menjelaskan pembentukan ikatan ion.",
   2:"{n} dapat menjelaskan pembentukan ikatan ion melalui pemindahan elektron. Perlu lebih latihan mengaplikasikan ikatan kovalen, datif dan logam.",
   3:"{n} boleh mengaplikasikan pengetahuan ikatan kovalen, datif dan logam untuk menulis formula dan menerangkan sifat. Galakkan menganalisis sifat sebatian.",
   4:"{n} mampu menganalisis data takat lebur, kekonduksian dan keterlarutan untuk mengenal pasti sebatian ion dan kovalen. Seterusnya latih menilai pemilihan bahan.",
   5:"{n} dapat menilai sifat bahan berdasarkan jenis ikatan untuk membuat keputusan yang wajar. Sudah bersedia mereka cipta model ikatan.",
   6:"{n} berjaya mereka cipta model atau penyelesaian kreatif yang membandingkan jenis ikatan kimia. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Ikatan Kimia. Cadangan: ulang hentian pertama dan lukis rajah pembentukan NaCl dan H₂O bersama rakan."
  },
  lampiran:{
   r1:{jenis:"kimia", mod:"atom", atom:[{simbol:"Na", susunan:[2,8], cas:"+"},{simbol:"Cl", susunan:[2,8,8], cas:"−"}],
     kapsyen:"Rajah 1 · Susunan elektron ion dalam natrium klorida",
     alt:"Ion natrium dengan susunan elektron 2.8 dan cas positif, dan ion klorida dengan susunan elektron 2.8.8 dan cas negatif, masing-masing dalam kurungan"},
   j1:jadual(1, "Sifat tiga bahan P, Q dan R",
     ["Sifat", "P", "Q", "R"],
     [["Takat lebur (°C)","801","−23","1085"],["Takat didih (°C)","1413","77","2562"],["Kekonduksian pepejal","Tidak","Tidak","Ya"],["Kekonduksian leburan","Ya","Tidak","Ya"],["Keterlarutan dalam air","Larut","Tidak larut","Tidak larut"],["Keterlarutan dalam propanon","Tidak larut","Larut","Tidak larut"]])
  },
  aras:ARAS
};
