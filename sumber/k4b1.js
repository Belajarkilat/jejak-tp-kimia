/* Sumber kandungan — Kimia KSSM Tingkatan 4, Bab 1 Pengenalan kepada Kimia.
   Standard Kandungan 1.1 Perkembangan bidang kimia dan kepentingannya dalam kehidupan,
   1.2 Penyiasatan saintifik dalam kimia, 1.3 Penggunaan, pengurusan dan pengendalian radas
   serta bahan kimia (DSKP KSSM Kimia Tingkatan 4 dan 5, dskp/kimia-en.pdf). */
const { jadual, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Pintu Makmal", sk:"1.1 Perkembangan bidang kimia dan kepentingannya", lampiran:null,
 kadNama:"Kimia", kadEm:"\u{1F9EA}", kadFakta:"Kimia ialah bidang sains yang mengkaji komposisi, struktur, sifat dan interaksi antara jirim.",
 bosKadNama:"Kerjaya Kimia", bosKadEm:"\u{1F468}\u{200D}\u{1F52C}", bosKadFakta:"Ahli farmasi, jurutera kimia, ahli kimia forensik dan ahli toksikologi ialah antara kerjaya yang memerlukan ilmu kimia.",
 soalan:[
 {j:"pilih",t:"Kimia ialah bidang sains yang mengkaji:",p:["Komposisi, struktur, sifat dan interaksi jirim","Pergerakan planet, bintang dan galaksi di angkasa lepas","Tingkah laku haiwan dalam habitat semula jadi","Bentuk muka bumi dan pembentukan gunung"],b:0,u:"Kimia mengkaji jirim: apa kandungannya, bagaimana strukturnya, sifatnya dan cara ia bertindak balas."},
 {j:"pilih",t:"Bahan kimia manakah yang ditambah kepada makanan untuk memanjangkan tempoh simpanan?",p:["Pengawet","Pewarna makanan","Perisa tiruan","Pemekat kanji"],b:0,u:"Pengawet seperti natrium benzoat melambatkan pertumbuhan mikroorganisma."},
 {j:"pilih",t:"Kerjaya manakah yang menyediakan dan membekalkan ubat kepada pesakit?",p:["Ahli farmasi","Ahli geologi","Ahli astronomi","Ahli arkeologi"],b:0,u:"Ahli farmasi menggunakan ilmu kimia tentang ubat, dos dan kesan sampingan."},
 {j:"pilih",t:"Ahli kimia yang menganalisis bukti di tempat kejadian jenayah ialah ahli kimia:",p:["Forensik","Polimer sintetik","Makanan ternakan","Tanah pertanian"],b:0,u:"Ahli kimia forensik menganalisis sampel seperti darah, dadah dan serat."},
 {j:"banyak",t:"Pilih DUA contoh bahan kimia dalam kehidupan harian.",p:["Ubat gigi","Sabun mandi","Cahaya matahari","Bunyi guruh"],b:[0,1],u:"Ubat gigi dan sabun ialah campuran bahan kimia. Cahaya dan bunyi ialah tenaga, bukan jirim."},
 {j:"pilih",t:"Industri manakah yang menghasilkan baja untuk meningkatkan hasil tanaman?",p:["Industri agrokimia","Industri pelancongan","Industri perfileman","Industri perbankan"],b:0,u:"Industri agrokimia menghasilkan baja, racun serangga dan racun rumpai."},
 {j:"pilih",t:"Jurutera kimia biasanya bertugas untuk:",p:["Mereka bentuk proses pembuatan bahan kimia","Merawat pesakit yang cedera parah di wad kecemasan hospital","Melukis pelan bangunan pencakar langit","Mengajar bahasa asing di universiti"],b:0,u:"Jurutera kimia mereka bentuk dan mengendalikan proses di kilang kimia."},
 {j:"pilih",t:"Teknologi kimia hijau bertujuan untuk:",p:["Mengurangkan bahan buangan berbahaya","Menambah penggunaan bahan api fosil di kilang-kilang","Menghasilkan lebih banyak plastik","Membakar sisa secara terbuka"],b:0,u:"Kimia hijau mereka bentuk proses yang selamat dan kurang mencemarkan alam sekitar."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan kerjaya dan tugas yang betul.",p:["Ahli farmasi: membekalkan ubat","Ahli kimia forensik: menganalisis bukti jenayah","Jurutera kimia: mereka bentuk proses kilang","Ahli toksikologi: mereka bentuk bangunan","Ahli geologi: menyediakan ubat batuk"],b:[0,1,2],u:"Ahli toksikologi mengkaji kesan bahan toksik, dan ahli geologi mengkaji batuan."}},

{n:2, tempat:"Meja Penyiasat", sk:"1.2 Penyiasatan saintifik dalam kimia", lampiran:null,
 kadNama:"Hipotesis", kadEm:"\u{1F914}", kadFakta:"Hipotesis ialah pernyataan yang menghubungkan pemboleh ubah dimanipulasikan dengan pemboleh ubah bergerak balas, dan boleh diuji melalui eksperimen.",
 bosKadNama:"Kaedah Saintifik", bosKadEm:"\u{1F4CB}", bosKadFakta:"Kaedah saintifik bermula dengan pemerhatian dan pernyataan masalah, kemudian hipotesis, eksperimen, analisis data dan kesimpulan.",
 soalan:[
 {j:"pilih",t:"Pemboleh ubah yang sengaja diubah oleh penyiasat dalam eksperimen ialah pemboleh ubah:",p:["Dimanipulasikan","Bergerak balas","Dimalarkan","Dikawal"],b:0,u:"Pemboleh ubah dimanipulasikan diubah dengan sengaja untuk melihat kesannya."},
 {j:"pilih",t:"Pemboleh ubah yang berubah akibat perubahan pemboleh ubah dimanipulasikan ialah pemboleh ubah:",p:["Bergerak balas","Dimanipulasikan","Dimalarkan","Dihapuskan"],b:0,u:"Pemboleh ubah bergerak balas ialah hasil yang diukur atau diperhatikan."},
 {j:"pilih",t:"Mengapakah sesetengah pemboleh ubah perlu dimalarkan dalam eksperimen?",p:["Supaya ujian itu adil","Supaya eksperimen cepat siap","Supaya hasil sentiasa sama","Supaya radas tidak rosak"],b:0,u:"Hanya satu faktor diubah supaya perubahan hasil boleh dikaitkan dengan faktor itu sahaja."},
 {j:"pilih",t:"Langkah PERTAMA dalam kaedah saintifik ialah:",p:["Membuat pemerhatian","Membuat kesimpulan akhir","Menulis laporan","Mentafsir data"],b:0,u:"Penyiasatan bermula dengan pemerhatian yang menimbulkan persoalan."},
 {j:"pilih",t:"Pernyataan manakah ialah hipotesis yang boleh diuji?",p:["Semakin tinggi suhu, semakin cepat gula larut","Gula ialah bahan yang sangat manis rasanya","Air ialah cecair yang paling penting untuk semua hidupan di Bumi","Eksperimen ini sangat menyeronokkan"],b:0,u:"Hipotesis menghubungkan pemboleh ubah dimanipulasikan (suhu) dengan bergerak balas (kadar melarut)."},
 {j:"pilih",t:"Pernyataan yang menerangkan maksud sesuatu istilah berdasarkan apa yang diperhatikan atau diukur dalam eksperimen ialah:",p:["Definisi secara operasi","Hipotesis eksperimen","Pernyataan masalah","Kesimpulan akhir"],b:0,u:"Definisi secara operasi menerangkan istilah melalui apa yang dibuat dan diperhatikan dalam eksperimen."},
 {j:"susun",t:"Susun langkah kaedah saintifik mengikut urutan yang betul.",p:["Mengenal pasti masalah","Membuat hipotesis","Menjalankan eksperimen","Mentafsir data","Membuat kesimpulan"],b:[0,1,2,3,4],u:"Masalah dikenal pasti dahulu, kemudian hipotesis diuji melalui eksperimen, data ditafsir dan kesimpulan dibuat."},
 {j:"pilih",t:"Kesimpulan eksperimen dibuat berdasarkan:",p:["Data dan pemerhatian","Pendapat rakan sekelas","Jawapan dalam buku kerja","Teka-teki penyiasat"],b:0,u:"Kesimpulan mesti disokong oleh data yang dikumpul, sama ada hipotesis diterima atau ditolak."}],
 bos:{j:"pilih",t:"Seorang murid mengkaji kesan saiz zarah marmar terhadap masa gas terbebas. Apakah pemboleh ubah yang dimalarkan?",p:["Isi padu dan kepekatan asid","Saiz zarah ketulan kalsium karbonat (marmar)","Masa gas terbebas","Jenis pemerhatian murid"],b:0,u:"Saiz zarah dimanipulasikan, masa ialah pemboleh ubah bergerak balas, dan isi padu serta kepekatan asid dimalarkan."}},

{n:3, tempat:"Rak Bahan Kimia", sk:"1.3 Penggunaan, pengurusan dan pengendalian radas serta bahan kimia", lampiran:null,
 kadNama:"Simbol Bahaya", kadEm:"\u{26A0}\u{FE0F}", kadFakta:"Label bahan kimia memaparkan simbol bahaya seperti mudah terbakar, toksik, mengakis, merengsa, pengoksida dan bahan letupan.",
 bosKadNama:"Kebuk Wasap", bosKadEm:"\u{1F32C}\u{FE0F}", bosKadFakta:"Kebuk wasap menyedut keluar gas beracun atau wap berbahaya supaya tidak terhidu oleh pengguna makmal.",
 soalan:[
 {j:"pilih",t:"Asid sulfurik pekat boleh membakar kulit. Simbol bahaya manakah yang sesuai pada botolnya?",p:["Mengakis","Mudah terbakar","Radioaktif","Bahan letupan"],b:0,u:"Bahan mengakis memusnahkan tisu hidup dan logam."},
 {j:"pilih",t:"Etanol perlu dijauhkan daripada api kerana ia bersifat:",p:["Mudah terbakar","Mengakis kulit dan logam","Bahan radioaktif kuat","Pengoksida yang kuat"],b:0,u:"Etanol mudah meruap dan wapnya mudah terbakar."},
 {j:"pilih",t:"Di manakah eksperimen yang membebaskan gas klorin patut dijalankan?",p:["Dalam kebuk wasap","Di atas meja guru","Di tepi tingkap terbuka","Di dalam stor bahan"],b:0,u:"Klorin beracun, jadi ia mesti dikendalikan dalam kebuk wasap."},
 {j:"pilih",t:"Larutan asid terpercik ke mata seorang murid. Tindakan segera yang betul ialah:",p:["Bilas mata dengan air mengalir","Gosok mata dengan tisu kering","Titiskan larutan alkali ke mata","Tunggu sehingga waktu rehat"],b:0,u:"Bilas dengan banyak air di stesen pencuci mata, kemudian maklumkan guru."},
 {j:"pilih",t:"Bagaimanakah sisa logam natrium dilupuskan dengan selamat?",p:["Simpan semula dalam minyak parafin","Buang ke dalam singki dan alirkan air paip","Campurkan dengan air paip","Buang ke dalam tong sampah"],b:0,u:"Natrium bertindak balas cergas dengan air, jadi ia disimpan dalam minyak parafin."},
 {j:"pilih",t:"Kebakaran kecil berpunca daripada minyak berlaku di makmal. Pemadam api yang SESUAI ialah:",p:["Pemadam api serbuk kering","Sebaldi air paip yang sejuk dan banyak","Kipas angin yang kuat","Kain basah yang dikibas"],b:0,u:"Air menyebarkan minyak yang terbakar. Serbuk kering memutuskan bekalan oksigen."},
 {j:"banyak",t:"Pilih DUA amalan selamat semasa memanaskan cecair dalam tabung uji.",p:["Halakan mulut tabung uji menjauhi orang","Panaskan perlahan sambil menggoncang","Tutup mulut tabung uji dengan rapat","Pegang tabung uji dengan tangan"],b:[0,1],u:"Mulut tabung dihalakan menjauhi orang dan dipanaskan perlahan untuk mengelakkan percikan."},
 {j:"pilih",t:"Mengapakah asid pekat dicairkan dengan menuang asid ke dalam air, bukan sebaliknya?",p:["Mengurangkan percikan akibat haba","Asid menjadi lebih pekat dengan cepat","Air menjadi lebih tulen selepas itu","Supaya asid tidak berubah warna"],b:0,u:"Pencairan membebaskan haba. Menuang asid ke dalam air yang banyak menyerap haba dan mengurangkan percikan."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan bahan dan cara penyimpanan yang betul.",p:["Natrium: dalam minyak parafin","Larutan argentum nitrat: botol perang","Fosforus putih: dalam air","Etanol: di sebelah penunu Bunsen","Asid nitrik pekat: di bawah cahaya matahari"],b:[0,1,2],u:"Argentum nitrat dan asid nitrik terurai oleh cahaya, jadi disimpan dalam botol perang di tempat gelap. Etanol mesti dijauhkan daripada api."}},

{n:4, tempat:"Bilik Data", sk:"1.2 Menganalisis data penyiasatan saintifik", lampiran:"j1",
 kadNama:"Mentafsir Data", kadEm:"\u{1F4CA}", kadFakta:"Mentafsir data bermaksud memberi penerangan rasional tentang corak atau hubungan dalam data yang dikumpul.",
 bosKadNama:"Inferens", bosKadEm:"\u{1F50E}", bosKadFakta:"Inferens ialah kesimpulan awal yang munasabah untuk menerangkan sesuatu pemerhatian.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah pemboleh ubah dimanipulasikan?",p:["Suhu air","Masa gula larut","Jisim gula","Jenis gula"],b:0,u:"Suhu air sengaja diubah: 30, 40, 50 dan 60 °C."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah pemboleh ubah bergerak balas?",p:["Masa gula larut sepenuhnya","Suhu air dalam bikar","Isi padu air dalam bikar","Jisim gula yang digunakan dalam setiap set"],b:0,u:"Masa melarut berubah apabila suhu berubah, jadi ia pemboleh ubah bergerak balas."},
 {j:"pilih",t:"Apakah hubungan antara suhu dan masa melarut dalam Jadual 1?",p:["Suhu meningkat, masa berkurang","Suhu meningkat, masa bertambah","Suhu tidak mempengaruhi masa","Masa sama pada setiap suhu"],b:0,u:"Masa turun dari 120 s ke 45 s apabila suhu naik dari 30 °C ke 60 °C."},
 {j:"pilih",t:"Berdasarkan Jadual 1, ramalkan masa gula larut pada suhu 70 °C.",p:["Kurang daripada 45 s","Antara 60 s dan 80 s","Tepat 120 s","Lebih daripada 120 s"],b:0,u:"Corak menunjukkan masa terus berkurang apabila suhu meningkat, jadi kurang daripada 45 s."},
 {j:"pilih",t:"Hipotesis manakah sepadan dengan Jadual 1?",p:["Semakin tinggi suhu, semakin singkat masa gula larut","Semakin banyak gula digunakan, semakin panjang masa larut","Semakin besar bikar, semakin cepat gula larut","Gula larut paling cepat dalam air yang sejuk"],b:0,u:"Hipotesis menghubungkan suhu (dimanipulasikan) dengan masa melarut (bergerak balas)."},
 {j:"pilih",t:"Mengapakah jisim gula dan isi padu air sama bagi setiap set dalam Jadual 1?",p:["Untuk memastikan ujian adil","Untuk menjimatkan bahan","Untuk menambah suhu air","Untuk mempercepat kerja"],b:0,u:"Pemboleh ubah dimalarkan supaya perbezaan masa hanya disebabkan oleh suhu."},
 {j:"pilih",t:"Inferens yang paling munasabah daripada Jadual 1 ialah:",p:["Zarah bergerak lebih laju pada suhu tinggi","Gula bertukar menjadi garam apabila dipanas","Air panas mengandungi lebih banyak gula","Bikar menyerap gula pada suhu tinggi"],b:0,u:"Pada suhu tinggi, zarah air bergerak lebih laju dan memecahkan hablur gula dengan lebih cepat."},
 {j:"pilih",t:"Kelemahan manakah boleh menjejaskan kejituan data dalam Jadual 1?",p:["Murid tidak mengacau dengan cara yang sama","Murid mencatat suhu dalam unit °C","Murid menggunakan jam randik digital untuk merekod masa","Murid menggunakan bikar 250 cm³"],b:0,u:"Kadar kacauan yang berbeza ialah pemboleh ubah yang tidak dikawal dan boleh mengubah masa melarut."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, kesimpulan manakah PALING tepat?",p:["Hipotesis diterima: suhu tinggi memendekkan masa melarut","Hipotesis ditolak: suhu langsung tidak mempengaruhi masa melarut","Hipotesis diterima: jisim gula menentukan masa larut","Tiada kesimpulan kerana data hanya empat set"],b:0,u:"Data konsisten menunjukkan masa berkurang apabila suhu meningkat, jadi hipotesis diterima."}},

{n:5, tempat:"Bilik Keputusan", sk:"1.3 Menilai amalan keselamatan dan pengurusan bahan", lampiran:null,
 kadNama:"Risiko Makmal", kadEm:"\u{1F6A8}", kadFakta:"Keputusan keselamatan yang baik menilai bahaya bahan, cara pendedahan dan langkah kawalan sebelum eksperimen bermula.",
 bosKadNama:"Pelupusan Sisa", bosKadEm:"\u{267B}\u{FE0F}", bosKadFakta:"Sisa kimia diasingkan mengikut jenis. Sisa organik, logam berat dan asid tidak boleh dibuang terus ke dalam singki.",
 soalan:[
 {j:"pilih",t:"Murid A mahu memanaskan heksana dengan penunu Bunsen. Nilaikan cadangan itu.",p:["Tidak wajar, guna kukus air kerana heksana mudah terbakar","Wajar kerana heksana ialah cecair yang mendidih perlahan dan selamat","Wajar jika nyalaan penunu Bunsen dibuat sangat besar","Tidak wajar kerana heksana ialah bahan yang mengakis"],b:0,u:"Wap heksana mudah terbakar. Kukus air memanaskan tanpa nyalaan terdedah."},
 {j:"pilih",t:"Sisa larutan plumbum(II) nitrat perlu dilupuskan. Keputusan terbaik ialah:",p:["Kumpul dalam bekas sisa logam berat berlabel","Tuang ke dalam singki dengan air yang banyak","Buang ke dalam longkang di luar makmal","Campur dengan sisa organik dalam satu bekas"],b:0,u:"Plumbum ialah logam berat toksik dan mesti dikumpul untuk dilupuskan oleh pihak berlesen."},
 {j:"pilih",t:"Sebuah makmal tiada kebuk wasap. Eksperimen manakah PALING wajar ditangguhkan?",p:["Menghasilkan gas klorin","Meneutralkan asid cair","Melarutkan garam biasa","Mengukur suhu air paip"],b:0,u:"Gas klorin beracun dan memerlukan kebuk wasap."},
 {j:"pilih",t:"Antara berikut, pakaian manakah PALING sesuai semasa mengendalikan asid pekat?",p:["Kot makmal, gogal dan sarung tangan","Baju lengan pendek, seluar pendek dan selipar","Jam tangan dan gelang logam","Kot makmal tanpa perlindungan mata"],b:0,u:"Perlindungan mata, kulit dan tangan diperlukan apabila mengendalikan bahan mengakis."},
 {j:"pilih",t:"Rakan anda mahu membau gas secara terus dari mulut tabung uji. Nasihat terbaik ialah:",p:["Kibas gas ke arah hidung dari jauh","Hidu terus dengan hidung yang dekat","Rasa gas itu dengan lidah sedikit","Tutup tabung dan goncang dengan kuat"],b:0,u:"Gas dikibas perlahan ke arah hidung supaya hanya sedikit yang terhidu."},
 {j:"pilih",t:"Label sebotol bahan kimia telah tertanggal. Apakah tindakan PALING bertanggungjawab?",p:["Asingkan dan maklumkan guru makmal","Teka isinya berdasarkan warna","Guna untuk eksperimen hari ini","Buang terus ke dalam singki"],b:0,u:"Bahan tanpa label tidak boleh digunakan atau dibuang sesuka hati kerana sifatnya tidak diketahui."},
 {j:"banyak",t:"Pilih DUA keputusan yang mengurangkan risiko tumpahan asid di makmal.",p:["Simpan botol asid di rak bawah","Bawa botol dengan dua tangan","Simpan botol asid di rak tinggi","Bawa beberapa botol serentak"],b:[0,1],u:"Rak rendah dan pegangan dua tangan mengurangkan risiko botol jatuh dan pecah."},
 {j:"pilih",t:"Kenyataan manakah PALING wajar tentang penggunaan bahan kimia di rumah?",p:["Jangan campur peluntur dengan pencuci berasid","Campur semua jenis pencuci supaya lebih berkesan membersih","Simpan bahan pencuci dalam botol minuman","Buang sisa pencuci ke dalam sungai"],b:0,u:"Peluntur yang dicampur dengan pembersih berasid membebaskan gas klorin yang beracun."}],
 bos:{j:"pilih",t:"Sebuah sekolah perlu memilih satu langkah paling berkesan untuk mengurangkan kemalangan makmal. Pilihan terbaik ialah:",p:["Taklimat keselamatan dan latihan sebelum amali","Menambah bilangan murid dalam setiap kumpulan","Membenarkan murid makan semasa amali","Mengurangkan masa guru di dalam makmal"],b:0,u:"Murid yang faham bahaya dan prosedur keselamatan lebih kurang terdedah kepada kemalangan."}},

{n:6, tempat:"Studio Kimia Muda", sk:"1.1 hingga 1.3 Mereka cipta penyelesaian berasaskan kimia", lampiran:null,
 kadNama:"Inovasi", kadEm:"\u{1F4A1}", kadFakta:"Inovasi kimia yang baik menyelesaikan masalah sebenar, selamat digunakan dan mengambil kira kos, budaya serta alam sekitar.",
 bosKadNama:"Reka Cipta", bosKadEm:"\u{1F6E0}\u{FE0F}", bosKadFakta:"Reka cipta yang berasas menyatakan masalah, prinsip kimia, bahan, langkah keselamatan dan cara menguji keberkesanannya.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu mengurangkan sisa kimia daripada amali. Idea manakah paling berasas?",p:["Amali skala mikro dengan isi padu bahan yang kecil","Menggandakan isi padu bahan bagi setiap kumpulan","Membuang sisa terus ke dalam longkang sekolah","Menghentikan semua amali kimia sepanjang tahun"],b:0,u:"Kimia skala mikro menjimatkan bahan dan mengurangkan sisa tanpa menghentikan pembelajaran."},
 {j:"pilih",t:"Anda mereka label keselamatan untuk bahan pencuci di rumah. Unsur PALING penting ialah:",p:["Simbol bahaya dan arahan pertolongan cemas","Gambar kartun yang besar, berwarna dan menarik perhatian","Harga dan nama kedai pembekal","Warna botol yang paling terang"],b:0,u:"Label mesti memberitahu bahaya dan tindakan jika berlaku kemalangan."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk menunjukkan kepentingan kimia kepada penduduk kampung?",p:["Bengkel membuat sabun daripada minyak masak terpakai","Ceramah panjang tentang formula kimia yang sukar difahami penduduk","Pameran botol kosong tanpa penerangan","Pertandingan mencampur bahan pencuci"],b:0,u:"Bengkel sabun mengaitkan kimia dengan masalah sebenar, menjimatkan kos dan mengurangkan pencemaran minyak."},
 {j:"pilih",t:"Anda mahu menguji keberkesanan penapis air buatan sendiri. Reka bentuk ujian terbaik ialah:",p:["Bandingkan kekeruhan air sebelum dan selepas penapisan","Rasa air yang ditapis untuk menilai kebersihannya","Tapis air sekali sahaja tanpa sebarang rekod","Bandingkan warna bekas penapis yang digunakan"],b:0,u:"Ujian adil mengukur pemboleh ubah bergerak balas (kekeruhan) sebelum dan selepas penapisan."},
 {j:"banyak",t:"Pilih DUA ciri reka cipta kimia yang mengambil kira nilai masyarakat.",p:["Menggunakan bahan tempatan yang murah","Selamat kepada pengguna dan alam","Memerlukan bahan import yang mahal","Membebaskan gas yang berbau kuat"],b:[0,1],u:"Bahan tempatan menjimatkan kos dan keselamatan melindungi masyarakat serta alam sekitar."},
 {j:"pilih",t:"Cadangan manakah PALING kreatif dan selamat untuk mengitar semula sisa kulit telur?",p:["Jadikan serbuk kalsium untuk baja tanah berasid","Bakar secara terbuka di belakang sekolah","Campur dengan asid pekat tanpa pengawasan","Buang ke dalam sungai sebagai makanan ikan"],b:0,u:"Kulit telur mengandungi kalsium karbonat yang boleh meneutralkan tanah berasid."},
 {j:"pilih",t:"Sebelum melaksanakan projek kimia di sekolah, langkah PERTAMA yang wajar ialah:",p:["Menilai risiko dan mendapatkan kelulusan guru","Membeli semua bahan dan radas tanpa membuat senarai terlebih dahulu","Menjalankan projek tanpa memberitahu sesiapa","Memilih bahan yang paling berbahaya"],b:0,u:"Penilaian risiko dan kelulusan memastikan projek selamat dan terancang."},
 {j:"pilih",t:"Bagaimanakah murid boleh menunjukkan sikap saintifik semasa projek?",p:["Merekod data dengan jujur walaupun tidak dijangka","Mengubah data supaya sepadan dengan hipotesis yang dibuat pada awal projek","Menyalin data kumpulan lain tanpa izin","Meninggalkan data yang tidak disukai"],b:0,u:"Kejujuran dalam merekod data ialah asas sikap saintifik."}],
 bos:{j:"buka",
  t:"Reka satu poster atau prosedur keselamatan makmal kimia untuk murid Tingkatan 4 yang baru pertama kali masuk ke makmal.",
  arahan:"Masukkan sekurang-kurangnya EMPAT simbol bahaya dengan contoh bahan, DUA peraturan pengendalian radas, SATU langkah pertolongan cemas dan SATU cara pelupusan sisa. Terangkan mengapa setiap langkah penting.",
  u:"Jawapan TP6 yang kukuh menggunakan simbol bahaya dengan contoh bahan yang tepat (contoh: asid sulfurik pekat mengakis, etanol mudah terbakar), peraturan yang boleh dilaksanakan, langkah pertolongan cemas yang betul, dan pelupusan sisa yang tidak mencemarkan alam sekitar."}}
];

module.exports = {
  id:"k4b1", tingkatan:4, kod:"1.0 Pengenalan kepada Kimia",
  tajuk:"Makmal Pertama",
  subtajuk:"Kimia Ting. 4 · Bab 1 Pengenalan kepada Kimia",
  spi:SPI["1"],
  ulasan:{
   1:"{n} dapat mengingat kembali pengetahuan asas tentang kimia, penyiasatan saintifik dan pengendalian radas. Langkah seterusnya ialah menjelaskan kepentingannya.",
   2:"{n} dapat menjelaskan kepentingan kimia dan langkah penyiasatan saintifik. Perlu lebih latihan mengaplikasikan peraturan keselamatan makmal.",
   3:"{n} boleh mengaplikasikan pengetahuan tentang simbol bahaya dan pengendalian bahan kimia dalam situasi mudah. Galakkan menganalisis data eksperimen.",
   4:"{n} mampu menganalisis data penyiasatan saintifik, termasuk pemboleh ubah dan hubungannya. Seterusnya latih menilai keputusan keselamatan makmal.",
   5:"{n} dapat menilai amalan keselamatan dan pengurusan bahan kimia untuk membuat keputusan yang wajar. Sudah bersedia mereka cipta penyelesaian berasaskan kimia.",
   6:"{n} berjaya mereka cipta penyelesaian kreatif dan selamat berasaskan kimia dengan mengambil kira nilai masyarakat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pengenalan kepada Kimia. Cadangan: ulang hentian pertama sambil mengenal pasti simbol bahaya pada botol bahan kimia di makmal."
  },
  lampiran:{
   j1:jadual(1, "Masa 5 g gula larut dalam 100 cm³ air pada suhu berbeza",
     ["Suhu air (°C)", "Masa gula larut sepenuhnya (s)"],
     [["30","120"],["40","90"],["50","62"],["60","45"]],
     "Air dikacau dengan cara yang sama bagi setiap set.")
  },
  aras:ARAS
};
