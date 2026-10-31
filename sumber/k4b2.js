/* Sumber kandungan — Kimia KSSM Tingkatan 4, Bab 2 Jirim dan Struktur Atom.
   SK 2.1 Konsep asas jirim, 2.2 Perkembangan model atom, 2.3 Struktur atom,
   2.4 Isotop dan kegunaannya (DSKP KSSM Kimia Tingkatan 4 dan 5, dskp/kimia-en.pdf). */
const { jadual, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Dewan Zarah", sk:"2.1 Konsep asas jirim · 2.2 Perkembangan model atom", lampiran:null,
 kadNama:"Jirim", kadEm:"\u{1F9CA}", kadFakta:"Jirim ialah apa-apa sahaja yang mempunyai jisim dan memenuhi ruang. Jirim terdiri daripada zarah: atom, molekul atau ion.",
 bosKadNama:"Model Atom", bosKadEm:"\u{269B}\u{FE0F}", bosKadFakta:"Model atom berkembang daripada Dalton (sfera pejal) kepada Thomson, Rutherford (nukleus), Bohr (petala) dan Chadwick (neutron).",
 soalan:[
 {j:"pilih",t:"Jirim ialah sesuatu yang:",p:["Mempunyai jisim dan memenuhi ruang","Hanya wujud dalam bentuk pepejal","Boleh dilihat dengan mata kasar sahaja","Tidak boleh berubah keadaan fizikal"],b:0,u:"Semua jirim mempunyai jisim dan isi padu, sama ada pepejal, cecair atau gas."},
 {j:"pilih",t:"Zarah yang bercas positif atau negatif dikenali sebagai:",p:["Ion","Atom neutral","Molekul","Unsur"],b:0,u:"Ion terbentuk apabila atom menerima atau melepaskan elektron."},
 {j:"pilih",t:"Gas oksigen, O₂, terdiri daripada zarah jenis:",p:["Molekul","Ion positif","Ion negatif","Atom tunggal"],b:0,u:"Dua atom oksigen bergabung membentuk satu molekul O₂."},
 {j:"pilih",t:"Proses pepejal berubah terus menjadi gas tanpa melalui keadaan cecair ialah:",p:["Pemejalwapan","Pendidihan","Pembekuan","Kondensasi"],b:0,u:"Contohnya ais kering (karbon dioksida pepejal) dan iodin."},
 {j:"pilih",t:"Saintis yang mencadangkan atom sebagai sfera pejal yang tidak boleh dibahagi ialah:",p:["John Dalton","Ernest Rutherford","J.J. Thomson","Niels Bohr"],b:0,u:"Dalton mencadangkan atom sebagai zarah terkecil yang tidak boleh dicipta, dimusnahkan atau dibahagi."},
 {j:"pilih",t:"Saintis yang menemui elektron dan mencadangkan model 'roti kismis' ialah:",p:["J.J. Thomson","James Chadwick","John Dalton","Niels Bohr"],b:0,u:"Thomson mencadangkan elektron bertaburan dalam sfera bercas positif."},
 {j:"pilih",t:"Neutron ditemui oleh:",p:["James Chadwick","Ernest Rutherford","J.J. Thomson","Niels Bohr"],b:0,u:"Chadwick membuktikan kewujudan neutron dalam nukleus pada tahun 1932."},
 {j:"banyak",t:"Pilih DUA keadaan jirim yang zarahnya bergerak bebas dan rawak ke semua arah.",p:["Gas","Cecair","Pepejal","Hablur pepejal"],b:[0,1],u:"Zarah cecair dan gas bergerak secara rawak. Zarah pepejal hanya bergetar di kedudukan tetap."}],
 bos:{j:"susun",t:"Susun model atom mengikut urutan perkembangannya, bermula yang paling awal.",p:["Dalton: sfera pejal","Thomson: elektron dalam sfera positif","Rutherford: nukleus di pusat atom","Bohr: elektron dalam petala","Chadwick: neutron dalam nukleus"],b:[0,1,2,3,4],u:"Dalton (1803), Thomson (1897), Rutherford (1911), Bohr (1913), Chadwick (1932)."}},

{n:2, tempat:"Bilik Nukleus", sk:"2.3 Struktur atom", lampiran:"j1",
 kadNama:"Nombor Proton", kadEm:"\u{1F522}", kadFakta:"Nombor proton ialah bilangan proton dalam nukleus. Nombor nukleon ialah jumlah proton dan neutron.",
 bosKadNama:"Elektron Valens", bosKadEm:"\u{2728}", bosKadFakta:"Elektron valens ialah elektron dalam petala paling luar. Bilangannya menentukan sifat kimia unsur.",
 soalan:[
 {j:"pilih",t:"Zarah subatom yang bercas positif ialah:",p:["Proton","Neutron","Elektron","Nukleon"],b:0,u:"Proton bercas +1, elektron bercas −1 dan neutron neutral."},
 {j:"pilih",t:"Zarah subatom yang terletak di luar nukleus ialah:",p:["Elektron","Proton","Neutron","Proton dan neutron"],b:0,u:"Elektron bergerak dalam petala yang mengelilingi nukleus."},
 {j:"pilih",t:"Mengapakah atom neutral secara keseluruhannya?",p:["Bilangan proton sama dengan bilangan elektron","Bilangan neutron sama dengan bilangan proton","Atom tidak mengandungi sebarang zarah bercas","Elektron dan neutron bersama-sama membatalkan cas proton"],b:0,u:"Cas positif proton diimbangi oleh cas negatif elektron yang sama bilangan."},
 {j:"pilih",t:"Berdasarkan Jadual 1, berapakah bilangan neutron dalam atom natrium?",p:["12","11","23","34"],b:0,u:"Bilangan neutron = nombor nukleon − nombor proton = 23 − 11 = 12."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah susunan elektron atom natrium?",p:["2.8.1","2.8.2","2.9","2.1.8"],b:0,u:"11 elektron diisi: 2 dalam petala pertama, 8 dalam petala kedua, 1 dalam petala ketiga."},
 {j:"pilih",t:"Berdasarkan Jadual 1, berapakah elektron valens atom klorin?",p:["7","17","8","2"],b:0,u:"Susunan elektron klorin ialah 2.8.7, jadi ada 7 elektron valens."},
 {j:"pilih",t:"Berdasarkan Jadual 1, unsur manakah mempunyai bilangan proton dan neutron yang sama?",p:["Karbon","Natrium","Klorin","Kalium"],b:0,u:"Karbon: 6 proton dan 12 − 6 = 6 neutron."},
 {j:"pilih",t:"Berdasarkan Jadual 1, berapakah jumlah zarah subatom dalam satu atom karbon-12?",p:["18","12","6","24"],b:0,u:"6 proton + 6 neutron + 6 elektron = 18 zarah subatom."}],
 bos:{j:"banyak",t:"Berdasarkan Jadual 1, pilih SEMUA pernyataan yang betul.",p:["Kalium mempunyai 20 neutron","Klorin mempunyai 17 elektron","Natrium mempunyai 3 petala berisi elektron","Karbon mempunyai 12 proton","Kalium mempunyai 2 elektron valens"],b:[0,1,2],u:"Kalium: 39 − 19 = 20 neutron, susunan 2.8.8.1 (1 elektron valens). Karbon ada 6 proton, bukan 12."}},

{n:3, tempat:"Ruang Perubahan Keadaan", sk:"2.1 Mengaplikasikan teori kinetik jirim", lampiran:"g1",
 kadNama:"Takat Lebur", kadEm:"\u{1F321}\u{FE0F}", kadFakta:"Takat lebur ialah suhu tetap apabila pepejal bertukar menjadi cecair. Suhu kekal kerana haba digunakan untuk mengatasi daya tarikan antara zarah.",
 bosKadNama:"Teori Kinetik", bosKadEm:"\u{1F3C3}", bosKadFakta:"Teori kinetik jirim menyatakan zarah sentiasa bergerak. Apabila dipanaskan, tenaga kinetik zarah bertambah.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah takat lebur naftalena?",p:["80 °C","30 °C","55 °C","100 °C"],b:0,u:"Suhu kekal pada 80 °C semasa naftalena melebur."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah suhu kekal dari minit ke-4 hingga minit ke-10?",p:["Haba diserap untuk mengatasi daya tarikan antara zarah","Penunu Bunsen dipadamkan buat seketika","Naftalena berhenti menerima haba daripada air","Zarah naftalena berhenti bergerak sepenuhnya"],b:0,u:"Haba pendam digunakan untuk memutuskan daya tarikan antara zarah, bukan untuk menaikkan suhu."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah keadaan naftalena pada minit ke-6?",p:["Pepejal dan cecair","Pepejal sahaja","Cecair sahaja","Gas sahaja"],b:0,u:"Semasa peleburan, pepejal dan cecair wujud bersama."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah yang berlaku kepada tenaga kinetik zarah dari minit ke-0 hingga minit ke-4?",p:["Bertambah","Berkurang","Tidak berubah","Menjadi sifar"],b:0,u:"Suhu meningkat, jadi tenaga kinetik purata zarah bertambah."},
 {j:"pilih",t:"Mengapakah naftalena dalam Rajah 1 dipanaskan dalam kukus air, bukan terus dengan nyalaan?",p:["Pemanasan sekata dan wap naftalena mudah terbakar","Kukus air menyejukkan naftalena dengan cepat","Air bertindak balas dengan naftalena","Naftalena larut dengan cepat dalam air panas"],b:0,u:"Kukus air memberi haba sekata dan mengelakkan nyalaan menyentuh wap naftalena yang mudah terbakar."},
 {j:"pilih",t:"Bau minyak wangi tersebar ke seluruh bilik. Ini menunjukkan bahawa zarah:",p:["Bergerak secara rawak dan meresap","Pegun dan tidak berubah tempat","Bertambah besar apabila dipanaskan","Bertukar menjadi zarah air"],b:0,u:"Resapan berlaku kerana zarah bergerak secara rawak dari kepekatan tinggi ke rendah."},
 {j:"pilih",t:"Air pada 25 °C ialah cecair. Takat lebur air ialah 0 °C dan takat didihnya 100 °C. Etanol mempunyai takat lebur −117 °C dan takat didih 78 °C. Apakah keadaan etanol pada 90 °C?",p:["Gas","Cecair","Pepejal","Pepejal dan cecair"],b:0,u:"90 °C lebih tinggi daripada takat didih etanol (78 °C), jadi etanol berada dalam keadaan gas."},
 {j:"pilih",t:"Titisan air terbentuk di luar gelas berisi air sejuk. Proses ini ialah:",p:["Kondensasi","Penyejatan","Pemejalwapan","Peleburan"],b:0,u:"Wap air di udara menyerahkan haba kepada gelas sejuk lalu terkondensasi menjadi cecair."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, apakah yang berlaku kepada susunan zarah selepas minit ke-10?",p:["Zarah cecair bergerak lebih laju apabila suhu naik","Zarah tersusun rapat dalam corak tetap","Zarah bertukar menjadi atom baharu","Zarah berhenti bergetar sepenuhnya"],b:0,u:"Selepas semua pepejal melebur, haba menaikkan tenaga kinetik zarah cecair dan suhu meningkat semula."}},

{n:4, tempat:"Makmal Isotop", sk:"2.4 Isotop dan kegunaannya · 2.3 Menganalisis struktur atom", lampiran:"j2",
 kadNama:"Isotop", kadEm:"\u{2622}\u{FE0F}", kadFakta:"Isotop ialah atom unsur yang sama dengan bilangan proton yang sama tetapi bilangan neutron yang berbeza.",
 bosKadNama:"Jisim Atom Relatif", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Jisim atom relatif unsur ialah purata jisim isotopnya berdasarkan peratus kelimpahan masing-masing.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 2, mengapakah klorin-35 dan klorin-37 ialah isotop?",p:["Bilangan proton sama tetapi bilangan neutron berbeza","Bilangan neutron sama tetapi bilangan proton berbeza","Bilangan elektron berbeza tetapi proton sama","Nombor nukleon sama tetapi nombor proton berbeza"],b:0,u:"Kedua-duanya ada 17 proton, tetapi 18 dan 20 neutron."},
 {j:"pilih",t:"Berdasarkan Jadual 2, mengapakah isotop klorin mempunyai sifat kimia yang sama?",p:["Susunan elektron sama","Bilangan neutron sama","Jisim atom sama","Nombor nukleon sama"],b:0,u:"Sifat kimia ditentukan oleh elektron valens. Kedua-dua isotop mempunyai susunan 2.8.7."},
 {j:"pilih",t:"Berdasarkan Jadual 2, hitung jisim atom relatif klorin.",p:["35.5","36.0","35.0","37.0"],b:0,u:"(35 × 75 + 37 × 25) ÷ 100 = 35.5."},
 {j:"pilih",t:"Berdasarkan Jadual 2, mengapakah jisim atom relatif klorin lebih hampir kepada 35?",p:["Kelimpahan klorin-35 lebih tinggi","Klorin-37 lebih reaktif","Klorin-35 lebih berat","Klorin-37 tidak stabil"],b:0,u:"Purata berwajaran lebih dipengaruhi oleh isotop yang lebih banyak, iaitu klorin-35 (75%)."},
 {j:"pilih",t:"Isotop manakah digunakan oleh ahli arkeologi untuk menganggar usia fosil?",p:["Karbon-14","Kobalt-60","Iodin-131","Natrium-24"],b:0,u:"Kadar reputan karbon-14 digunakan untuk menentukan usia bahan organik purba."},
 {j:"pilih",t:"Isotop manakah digunakan untuk mengesan kebocoran paip bawah tanah?",p:["Natrium-24","Karbon-14","Uranium-235","Fosforus-32"],b:0,u:"Natrium-24 dicampur ke dalam air paip; sinaran yang tinggi menunjukkan lokasi kebocoran."},
 {j:"pilih",t:"Doktor merawat pesakit kelenjar tiroid. Isotop manakah PALING sesuai?",p:["Iodin-131","Karbon-14","Kobalt-60 untuk sterilisasi","Uranium-235"],b:0,u:"Kelenjar tiroid menyerap iodin, jadi iodin-131 sesuai untuk rawatan dan diagnosis."},
 {j:"pilih",t:"Atom X mempunyai 8 proton dan 10 neutron. Atom Y mempunyai 8 proton dan 8 neutron. Apakah kesimpulannya?",p:["X dan Y ialah isotop oksigen","X dan Y ialah unsur yang berlainan","X lebih reaktif daripada Y","Y mempunyai lebih banyak elektron"],b:0,u:"Nombor proton sama (8) bermakna unsur yang sama, iaitu oksigen. Neutron berbeza bermakna isotop."}],
 bos:{j:"banyak",t:"Berdasarkan Jadual 2, pilih SEMUA pernyataan yang betul tentang isotop klorin.",p:["Klorin-37 mempunyai 20 neutron","Kedua-dua isotop mempunyai 17 elektron","Klorin-35 mempunyai 18 neutron","Klorin-37 mempunyai 19 proton","Klorin-35 lebih reaktif daripada klorin-37"],b:[0,1,2],u:"Kedua-dua isotop ada 17 proton dan 17 elektron, maka sifat kimianya sama."}},

{n:5, tempat:"Bilik Penilaian", sk:"2.1 hingga 2.4 Menilai penggunaan pengetahuan jirim dan isotop", lampiran:null,
 kadNama:"Keselamatan Sinaran", kadEm:"\u{1F9BA}", kadFakta:"Bahan radioaktif mesti disimpan dalam bekas plumbum tebal, dikendalikan dengan alat penyepit dan pendedahan dikurangkan.",
 bosKadNama:"Kebaikan dan Risiko", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Isotop radioaktif memberi faedah dalam perubatan, pertanian dan industri, tetapi sinarannya boleh merosakkan sel hidup jika tidak dikawal.",
 soalan:[
 {j:"pilih",t:"Sebuah hospital mahu mensterilkan alat pembedahan plastik yang tidak tahan haba. Pilihan terbaik ialah:",p:["Sinaran gama daripada kobalt-60","Merebus alat dalam air mendidih","Membakar alat dengan nyalaan","Merendam alat dalam air paip"],b:0,u:"Sinaran gama membunuh mikroorganisma tanpa memanaskan alat plastik."},
 {j:"pilih",t:"Seorang pekerja mencadangkan sumber radioaktif disimpan di dalam laci meja pejabat. Nilaikan cadangan ini.",p:["Tidak wajar; simpan dalam bekas plumbum di bilik khas","Wajar kerana laci meja menghalang semua sinaran","Wajar jika laci itu dikunci setiap hari","Tidak wajar kerana sumber itu akan cair"],b:0,u:"Plumbum tebal menyerap sinaran. Laci kayu tidak menghalang sinaran gama."},
 {j:"pilih",t:"Petani mahu tahu berapa banyak baja fosfat yang diserap tanaman. Isotop manakah paling wajar dipilih?",p:["Fosforus-32","Kobalt-60","Uranium-235","Karbon-14"],b:0,u:"Fosforus-32 boleh dijejaki dalam tumbuhan untuk mengkaji penyerapan baja."},
 {j:"pilih",t:"Antara berikut, hujah manakah PALING kukuh menyokong penggunaan tenaga nuklear daripada uranium-235?",p:["Tenaga besar daripada bahan api yang sedikit","Tiada sisa langsung dihasilkan oleh loji nuklear","Lebih murah daripada semua sumber tenaga lain","Tidak memerlukan sebarang kawalan keselamatan"],b:0,u:"Pembelahan nukleus U-235 membebaskan tenaga yang sangat besar, walaupun sisa radioaktifnya perlu diurus."},
 {j:"pilih",t:"Seorang murid berkata, \"Model atom Dalton salah, jadi ia tidak berguna.\" Respons manakah PALING wajar?",p:["Model Dalton menjadi asas kepada model yang lebih baik","Betul, semua model lama perlu dilupakan","Model Dalton masih tepat sepenuhnya","Model atom tidak penting dalam kimia"],b:0,u:"Sains berkembang. Setiap model menerangkan sebahagian bukti dan membuka jalan kepada model seterusnya."},
 {j:"pilih",t:"Bahan P melebur pada 45 °C dan bahan Q pada 120 °C. Bahan manakah sesuai untuk lilin yang tidak cair di dalam kereta yang panas (60 °C)?",p:["Q, kerana takat leburnya lebih tinggi daripada 60 °C","P, kerana takat leburnya lebih rendah","P, kerana ia cair dengan mudah","Kedua-duanya kerana lilin tidak cair"],b:0,u:"Bahan Q kekal pepejal pada 60 °C kerana takat leburnya 120 °C."},
 {j:"banyak",t:"Pilih DUA langkah yang wajar untuk melindungi pekerja di makmal radioisotop.",p:["Pakai lencana filem untuk memantau dos","Gunakan penyepit panjang","Pegang sumber dengan tangan","Makan di dalam makmal itu"],b:[0,1],u:"Lencana filem memantau pendedahan; penyepit panjang menambah jarak dari sumber."},
 {j:"pilih",t:"Mengapakah karbon-14 TIDAK sesuai untuk menentukan usia batuan berusia jutaan tahun?",p:["Hampir semua karbon-14 telah mereput dalam tempoh itu","Batuan tidak mengandungi sebarang atom","Karbon-14 tidak memancarkan sebarang sinaran","Karbon-14 hanya terdapat dalam air laut"],b:0,u:"Separuh hayat karbon-14 kira-kira 5 730 tahun, jadi selepas jutaan tahun bakinya terlalu sedikit untuk diukur."}],
 bos:{j:"pilih",t:"Kerajaan mempertimbangkan penggunaan sinaran gama untuk mengawet rempah eksport. Penilaian manakah PALING seimbang?",p:["Wajar jika dos dikawal dan pekerja dilindungi","Tidak wajar kerana rempah menjadi radioaktif","Wajar tanpa sebarang peraturan keselamatan","Tidak wajar kerana rempah akan cair"],b:0,u:"Penyinaran makanan tidak menjadikan makanan radioaktif, tetapi dos dan keselamatan pekerja mesti dikawal."}},

{n:6, tempat:"Studio Atom", sk:"2.1 hingga 2.4 Mereka cipta model dan penyelesaian", lampiran:null,
 kadNama:"Model Fizikal", kadEm:"\u{1F3D7}\u{FE0F}", kadFakta:"Model fizikal menggunakan bahan mudah untuk menunjukkan idea abstrak seperti susunan elektron dan saiz relatif nukleus.",
 bosKadNama:"Reka Cipta Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Reka cipta yang baik menyatakan konsep sains dengan tepat, menggunakan bahan selamat dan menerangkan batasan model.",
 soalan:[
 {j:"pilih",t:"Anda mahu membina model atom natrium daripada bahan kitar semula. Ciri manakah WAJIB ada?",p:["11 elektron dalam susunan 2.8.1","8 elektron dalam satu petala","Nukleus tanpa sebarang proton","Elektron di dalam nukleus"],b:0,u:"Model mesti tepat: natrium ada 11 proton dan 11 elektron dalam susunan 2.8.1."},
 {j:"pilih",t:"Bagaimanakah model anda menunjukkan bahawa saiz nukleus sangat kecil berbanding atom?",p:["Gunakan biji kacang di tengah padang bola","Gunakan dua bola yang sama besar","Lukis nukleus sebesar petala luar","Abaikan saiz kerana tidak penting"],b:0,u:"Analogi kacang di tengah padang menunjukkan kebanyakan atom ialah ruang kosong."},
 {j:"pilih",t:"Idea manakah paling kreatif untuk mengajar teori kinetik jirim kepada murid sekolah rendah?",p:["Main peranan sebagai zarah pepejal, cecair dan gas","Membaca definisi teori kinetik dengan kuat di hadapan kelas","Menyalin nota daripada buku teks","Menghafal takat lebur bahan"],b:0,u:"Main peranan menjadikan gerakan zarah mudah dibayangkan."},
 {j:"pilih",t:"Anda mereka bekas simpanan ais krim untuk penjual di pasar malam. Prinsip jirim manakah PALING membantu?",p:["Mengurangkan pemindahan haba supaya ais krim lambat melebur","Menambah haba supaya ais krim cepat mengeras","Menggunakan bekas logam nipis tanpa penebat","Membiarkan bekas terbuka supaya udara masuk"],b:0,u:"Penebat haba melambatkan peleburan dengan mengurangkan haba yang sampai ke ais krim."},
 {j:"banyak",t:"Pilih DUA ciri poster kesedaran isotop yang bertanggungjawab.",p:["Faedah dan risiko isotop dinyatakan","Simbol amaran sinaran dipaparkan","Isotop selamat dipegang dengan tangan","Semua sinaran tidak berbahaya"],b:[0,1],u:"Maklumat yang seimbang dan simbol amaran membantu masyarakat membuat keputusan yang selamat."},
 {j:"pilih",t:"Model atom anda menunjukkan elektron sebagai titik pada bulatan. Apakah batasan model ini?",p:["Elektron sebenarnya bergerak dan tidak pegun","Elektron sebenarnya lebih besar daripada nukleus","Elektron sebenarnya berada dalam nukleus","Model ini tiada sebarang batasan"],b:0,u:"Model ialah penyederhanaan. Elektron sentiasa bergerak di sekeliling nukleus."},
 {j:"pilih",t:"Bagaimanakah anda menguji sama ada model teori kinetik anda difahami rakan?",p:["Minta rakan menerangkan perubahan keadaan menggunakan model","Minta rakan menyalin model sebiji-sebiji","Minta rakan menilai warna model sahaja","Simpan model tanpa sebarang tunjuk cara"],b:0,u:"Kefahaman diuji apabila rakan dapat menggunakan model untuk menerangkan fenomena."},
 {j:"pilih",t:"Bahan manakah PALING sesuai untuk mewakili elektron dalam model mudah alih?",p:["Manik kecil yang ringan","Batu besar yang berat","Kaca pecah yang tajam","Bateri terpakai yang bocor"],b:0,u:"Manik ringan, selamat dan mudah dilekatkan."}],
 bos:{j:"buka",
  t:"Reka satu model atau bahan bantu mengajar untuk menerangkan struktur atom DAN isotop kepada rakan sekelas.",
  arahan:"Pilih satu unsur (contoh: karbon, klorin atau natrium). Nyatakan bilangan proton, neutron dan elektron, susunan elektron, sekurang-kurangnya SATU isotopnya beserta kegunaan, bahan yang digunakan untuk model dan SATU batasan model anda.",
  u:"Jawapan TP6 yang kukuh memberi bilangan zarah subatom dan susunan elektron yang tepat, membezakan isotop melalui bilangan neutron, mengaitkan isotop dengan kegunaan sebenar, memilih bahan yang selamat dan murah, serta mengakui batasan model."}}
];

module.exports = {
  id:"k4b2", tingkatan:4, kod:"2.0 Jirim dan Struktur Atom",
  tajuk:"Rahsia Zarah",
  subtajuk:"Kimia Ting. 4 · Bab 2 Jirim dan Struktur Atom",
  spi:SPI["2"],
  ulasan:{
   1:"{n} dapat mengingat kembali konsep asas jirim dan perkembangan model atom. Langkah seterusnya ialah menjelaskan struktur atom.",
   2:"{n} dapat menjelaskan struktur atom, termasuk zarah subatom dan susunan elektron. Perlu lebih latihan mengaplikasikan teori kinetik jirim.",
   3:"{n} boleh mengaplikasikan teori kinetik jirim untuk menerangkan perubahan keadaan dan lengkung pemanasan. Galakkan menganalisis isotop.",
   4:"{n} mampu menganalisis isotop dan mengira jisim atom relatif daripada kelimpahan. Seterusnya latih menilai kegunaan isotop.",
   5:"{n} dapat menilai kegunaan isotop dan pengetahuan jirim untuk membuat keputusan yang wajar. Sudah bersedia mereka cipta model.",
   6:"{n} berjaya mereka cipta model atau bahan bantu yang tepat tentang struktur atom dan isotop. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Jirim dan Struktur Atom. Cadangan: ulang hentian pertama dan lukis susunan elektron 20 unsur pertama bersama rakan."
  },
  lampiran:{
   j1:jadual(1, "Nombor proton dan nombor nukleon beberapa atom",
     ["Unsur", "Nombor proton", "Nombor nukleon"],
     [["Karbon","6","12"],["Natrium","11","23"],["Klorin","17","35"],["Kalium","19","39"]]),
   g1:{jenis:"graf", x:[0,2,4,6,8,10,12], xLabel:"Masa (minit)", titik:true,
     siri:[{label:"Suhu naftalena (°C)", y:[30,55,80,80,80,80,100], warna:"merah"}],
     kapsyen:"Rajah 1 · Lengkung pemanasan naftalena dalam kukus air",
     alt:"Graf suhu melawan masa: suhu naik dari 30 ke 80 darjah Celsius dalam 4 minit, kekal 80 dari minit 4 hingga 10, kemudian naik ke 100 pada minit 12"},
   j2:jadual(2, "Isotop klorin",
     ["Isotop", "Nombor proton", "Nombor nukleon", "Kelimpahan (%)"],
     [["Klorin-35","17","35","75"],["Klorin-37","17","37","25"]])
  },
  aras:ARAS
};
