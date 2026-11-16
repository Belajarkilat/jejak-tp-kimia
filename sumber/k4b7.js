/* Sumber kandungan — Kimia KSSM Tingkatan 4, Bab 7 Kadar Tindak Balas.
   SK 7.1 Menentukan kadar tindak balas, 7.2 Faktor yang mempengaruhi kadar tindak balas,
   7.3 Aplikasi faktor dalam kehidupan harian, 7.4 Teori perlanggaran
   (DSKP KSSM Kimia Tingkatan 4 dan 5, dskp/kimia-en.pdf). */
const { jadual, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Garisan Mula", sk:"7.1 Menentukan kadar tindak balas · 7.2 Faktor yang mempengaruhi kadar", lampiran:null,
 kadNama:"Kadar Tindak Balas", kadEm:"\u{23F1}\u{FE0F}", kadFakta:"Kadar tindak balas ialah perubahan kuantiti bahan tindak balas atau hasil tindak balas per unit masa.",
 bosKadNama:"Lima Faktor", bosKadEm:"\u{1F5D2}\u{FE0F}", bosKadFakta:"Saiz bahan (jumlah luas permukaan), kepekatan, suhu, mangkin dan tekanan (bagi gas) mempengaruhi kadar tindak balas.",
 soalan:[
 {j:"pilih",t:"Kadar tindak balas ialah:",p:["Perubahan kuantiti per unit masa","Jumlah jisim hasil di akhir tindak balas","Masa untuk memulakan tindak balas","Suhu tertinggi semasa tindak balas berlaku"],b:0,u:"Contohnya isi padu gas terbebas per saat (cm³ s⁻¹)."},
 {j:"pilih",t:"Tindak balas manakah mempunyai kadar paling TINGGI?",p:["Letupan bunga api","Pengaratan pagar besi","Fotosintesis daun","Pereputan kayu"],b:0,u:"Letupan berlaku dalam masa yang sangat singkat."},
 {j:"pilih",t:"Unit yang sesuai bagi kadar pembebasan gas hidrogen ialah:",p:["cm³ s⁻¹","cm³","s cm⁻³","mol"],b:0,u:"Isi padu gas dibahagikan dengan masa."},
 {j:"pilih",t:"Kadar tindak balas pada satu ketika tertentu ditentukan daripada graf dengan:",p:["Kecerunan tangen","Luas di bawah lengkung","Nilai paksi-x","Nilai maksimum paksi-y"],b:0,u:"Kadar seketika = kecerunan tangen kepada lengkung pada masa itu."},
 {j:"pilih",t:"Mangkin ialah bahan yang:",p:["Mengubah kadar tetapi tidak berubah secara kimia","Ditambah untuk menambah jumlah hasil tindak balas","Habis digunakan semasa tindak balas berlaku","Sentiasa memperlahankan tindak balas kimia"],b:0,u:"Mangkin tidak mengubah kuantiti hasil, hanya kadar tindak balas."},
 {j:"pilih",t:"Bagi jisim yang sama, serbuk zink mempunyai jumlah luas permukaan yang:",p:["Lebih besar daripada ketulan","Lebih kecil daripada ketulan","Sama dengan ketulan","Sifar"],b:0,u:"Semakin kecil saiz zarah, semakin besar jumlah luas permukaan yang terdedah."},
 {j:"pilih",t:"Faktor tekanan hanya mempengaruhi kadar tindak balas yang melibatkan:",p:["Gas","Pepejal","Cecair","Larutan akueus"],b:0,u:"Tekanan tinggi memampatkan zarah gas, jadi bilangan zarah per unit isi padu bertambah."},
 {j:"banyak",t:"Pilih DUA kuantiti yang boleh diukur untuk menentukan kadar tindak balas zink dengan asid.",p:["Isi padu gas H₂ terbebas","Pengurangan jisim zink","Warna asid hidroklorik","Bau gas yang terbebas"],b:[0,1],u:"Perubahan yang boleh diukur terhadap masa ialah isi padu gas dan jisim bahan."}],
 bos:{j:"banyak",t:"Pilih SEMUA perubahan yang akan menambah kadar tindak balas antara ketulan marmar dan asid hidroklorik.",p:["Guna serbuk marmar","Panaskan asid","Guna asid lebih pekat","Tambah air suling ke dalam asid","Sejukkan campuran dalam ais"],b:[0,1,2],u:"Air mencairkan asid dan suhu rendah memperlahankan zarah, jadi kedua-duanya mengurangkan kadar."}},

{n:2, tempat:"Bilik Graf", sk:"7.1 Kadar purata dan kadar seketika daripada graf", lampiran:"g1",
 kadNama:"Kadar Purata", kadEm:"\u{1F4C8}", kadFakta:"Kadar purata = jumlah perubahan kuantiti ÷ jumlah masa yang diambil.",
 bosKadNama:"Lengkung Mendatar", bosKadEm:"\u{2796}", bosKadFakta:"Apabila lengkung menjadi mendatar, tindak balas telah lengkap kerana satu bahan tindak balas telah habis.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah jumlah isi padu gas hidrogen yang terkumpul dalam Eksperimen I?",b:42,tol:0.01,suf:"cm³",u:"Lengkung Eksperimen I mendatar pada 42 cm³."},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung kadar purata tindak balas Eksperimen I dalam 60 saat pertama. Beri jawapan kepada 2 tempat perpuluhan.",b:0.43,tol:0.005,suf:"cm³ s⁻¹",u:"26 cm³ ÷ 60 s = 0.43 cm³ s⁻¹."},
 {j:"pilih",t:"Berdasarkan Rajah 1, eksperimen manakah mempunyai kadar awal lebih tinggi?",p:["Eksperimen II","Eksperimen I","Kedua-duanya sama","Tidak dapat ditentukan"],b:0,u:"Lengkung Eksperimen II lebih curam pada permulaan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah kecerunan lengkung berkurang dengan masa?",p:["Kepekatan asid berkurang","Suhu campuran meningkat dengan banyak","Mangkin ditambah semasa tindak balas","Isi padu asid bertambah"],b:0,u:"Bahan tindak balas digunakan, jadi kepekatan berkurang dan kadar menurun."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah jumlah isi padu gas dalam kedua-dua eksperimen sama?",p:["Bilangan mol asid sama","Kedua-dua eksperimen menggunakan ketulan zink","Suhu dalam kedua-dua eksperimen berbeza","Eksperimen II menggunakan mangkin"],b:0,u:"Saiz zarah hanya mengubah kadar, bukan kuantiti hasil."},
 {j:"pilih",t:"Berdasarkan Rajah 1, pada masa berapakah tindak balas Eksperimen II lengkap?",p:["Kira-kira 120 s","Kira-kira 30 s","Kira-kira 210 s","Kira-kira 60 s"],b:0,u:"Lengkung Eksperimen II mendatar pada 42 cm³ bermula kira-kira 120 s."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah perbezaan antara Eksperimen I dan II yang PALING munasabah?",p:["II menggunakan serbuk zink","II menggunakan asid lebih cair","I menggunakan suhu lebih tinggi","I menggunakan mangkin kuprum(II) sulfat"],b:0,u:"Kadar awal II lebih tinggi tetapi isi padu akhir sama, sepadan dengan luas permukaan lebih besar."},
 {j:"pilih",t:"Radas manakah sesuai untuk mengumpul gas dalam eksperimen Rajah 1?",p:["Buret terbalik dalam besen air","Bikar terbuka di atas meja","Kelalang volumetrik bertutup","Pipet yang dipegang tegak"],b:0,u:"Gas hidrogen tidak larut dalam air, jadi boleh dikumpul melalui sesaran air dalam buret terbalik."}],
 bos:{j:"nombor",t:"Berdasarkan Rajah 1, hitung kadar purata keseluruhan Eksperimen I jika tindak balas lengkap pada 180 s. Beri jawapan kepada 2 tempat perpuluhan.",b:0.23,tol:0.005,suf:"cm³ s⁻¹",u:"42 cm³ ÷ 180 s = 0.23 cm³ s⁻¹."}},

{n:3, tempat:"Dapur Kadar", sk:"7.3 Aplikasi faktor kadar tindak balas dalam kehidupan harian", lampiran:null,
 kadNama:"Peti Sejuk", kadEm:"\u{1F9CA}", kadFakta:"Suhu rendah memperlahankan tindak balas penguraian makanan oleh mikroorganisma, jadi makanan tahan lebih lama.",
 bosKadNama:"Periuk Tekanan", bosKadEm:"\u{1F372}", bosKadFakta:"Periuk tekanan menaikkan takat didih air melebihi 100 °C, jadi makanan masak lebih cepat.",
 soalan:[
 {j:"pilih",t:"Mengapakah makanan disimpan di dalam peti sejuk?",p:["Suhu rendah melambatkan penguraian","Suhu rendah menambah bilangan mikroorganisma","Peti sejuk menambah kepekatan makanan","Mangkin dalam peti sejuk memusnahkan bakteria"],b:0,u:"Kadar tindak balas biokimia mikroorganisma berkurang pada suhu rendah."},
 {j:"pilih",t:"Daging dipotong kecil sebelum dimasak supaya cepat masak. Faktor yang terlibat ialah:",p:["Luas permukaan","Kepekatan","Tekanan","Mangkin"],b:0,u:"Kepingan kecil mempunyai jumlah luas permukaan lebih besar untuk menerima haba."},
 {j:"pilih",t:"Mengapakah makanan cepat masak dalam periuk tekanan?",p:["Takat didih air meningkat","Kepekatan makanan bertambah dengan banyak sekali","Periuk tekanan menyejukkan makanan","Mangkin dilepaskan daripada periuk"],b:0,u:"Suhu lebih tinggi daripada 100 °C menambah kadar tindak balas memasak."},
 {j:"pilih",t:"Kayu api kecil lebih mudah terbakar berbanding kayu balak besar kerana:",p:["Jumlah luas permukaannya lebih besar","Kayu kecil mengandungi lebih banyak air","Kayu balak lebih ringan daripada kayu kecil","Kayu kecil mempunyai mangkin semula jadi"],b:0,u:"Lebih banyak permukaan terdedah kepada oksigen."},
 {j:"pilih",t:"Dalam proses Haber untuk menghasilkan ammonia, mangkin yang digunakan ialah:",p:["Besi","Nikel","Platinum","Vanadium(V) oksida"],b:0,u:"Serbuk besi mempercepat tindak balas N₂ + 3H₂ ⇌ 2NH₃."},
 {j:"pilih",t:"Dalam proses Sentuh untuk menghasilkan asid sulfurik, mangkin yang digunakan ialah:",p:["Vanadium(V) oksida","Serbuk besi","Nikel","Kuprum(II) sulfat"],b:0,u:"V₂O₅ mempercepat pengoksidaan SO₂ kepada SO₃."},
 {j:"pilih",t:"Mengapakah ubat tablet larut lebih cepat jika dikunyah sebelum ditelan?",p:["Luas permukaan bertambah","Suhu ubat meningkat dengan banyak","Kepekatan asid perut berkurang","Mangkin dalam ubat terbebas"],b:0,u:"Zarah yang lebih kecil larut dan diserap lebih cepat."},
 {j:"pilih",t:"Pengilang roti menambah yis dan menyimpan doh di tempat suam. Ini kerana:",p:["Suhu sesuai menambah kadar penapaian","Suhu suam membunuh yis dengan cepat","Doh menjadi lebih sejuk dan keras","Tekanan doh berkurang dengan cepat"],b:0,u:"Enzim dalam yis bertindak paling cepat pada suhu suam yang optimum."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan aplikasi dan faktor kadar yang betul.",p:["Peti sejuk: suhu","Kayu api dibelah kecil: luas permukaan","Enzim dalam detergen: mangkin","Periuk tekanan: mangkin","Kunyah makanan: tekanan"],b:[0,1,2],u:"Periuk tekanan melibatkan suhu (takat didih tinggi); mengunyah melibatkan luas permukaan."}},

{n:4, tempat:"Makmal Teori Perlanggaran", sk:"7.4 Teori perlanggaran · 7.2 Menganalisis kesan kepekatan", lampiran:"j1",
 kadNama:"Perlanggaran Berkesan", kadEm:"\u{1F4A5}", kadFakta:"Perlanggaran berkesan berlaku apabila zarah berlanggar dengan orientasi yang betul dan tenaga sekurang-kurangnya sama dengan tenaga pengaktifan.",
 bosKadNama:"Tenaga Pengaktifan", bosKadEm:"\u{26F0}\u{FE0F}", bosKadFakta:"Tenaga pengaktifan ialah tenaga minimum yang diperlukan oleh zarah untuk bertindak balas. Mangkin menyediakan laluan dengan tenaga pengaktifan lebih rendah.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah hubungan antara kepekatan natrium tiosulfat dan masa tanda X hilang?",p:["Kepekatan tinggi, masa singkat","Kepekatan tinggi, masa panjang","Kepekatan tidak mempengaruhi masa","Masa sama bagi semua kepekatan"],b:0,u:"Masa berkurang dari 60 s ke 12 s apabila kepekatan naik dari 0.04 ke 0.20 mol dm⁻³."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung 1/masa bagi kepekatan 0.20 mol dm⁻³. Beri jawapan kepada 3 tempat perpuluhan.",b:0.083,tol:0.0005,suf:"s⁻¹",u:"1 ÷ 12 = 0.083 s⁻¹."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah 1/masa digunakan untuk mewakili kadar tindak balas?",p:["Kadar berkadar songsang dengan masa","Masa berkadar langsung dengan kadar","1/masa sentiasa sama dengan kepekatan","Supaya nombor kelihatan lebih kecil"],b:0,u:"Semakin singkat masa, semakin tinggi kadar; 1/masa memberi ukuran kadar."},
 {j:"pilih",t:"Berdasarkan Jadual 1, terangkan mengapa kadar bertambah apabila kepekatan meningkat.",p:["Lebih banyak zarah per unit isi padu, frekuensi perlanggaran berkesan bertambah","Tenaga pengaktifan tindak balas berkurang apabila kepekatan meningkat","Zarah menjadi lebih besar dan lebih berat dalam larutan pekat","Suhu larutan naik apabila kepekatan bertambah"],b:0,u:"Kepekatan tinggi menambah bilangan zarah per unit isi padu, bukan tenaga zarah."},
 {j:"pilih",t:"Berdasarkan Jadual 1, ramalkan masa tanda X hilang jika kepekatan 0.10 mol dm⁻³ digunakan.",p:["Antara 20 s dan 30 s","Kurang daripada 12 s","Lebih daripada 60 s","Tepat 15 s"],b:0,u:"0.10 terletak antara 0.08 (30 s) dan 0.12 (20 s)."},
 {j:"pilih",t:"Bagaimanakah kenaikan suhu menambah kadar tindak balas mengikut teori perlanggaran?",p:["Lebih banyak zarah mencapai tenaga pengaktifan","Tenaga pengaktifan tindak balas berkurang dengan banyak","Bilangan zarah dalam larutan bertambah","Zarah menjadi lebih kecil dan ringan"],b:0,u:"Zarah bergerak lebih laju; lebih banyak perlanggaran mencapai tenaga pengaktifan."},
 {j:"pilih",t:"Bagaimanakah mangkin menambah kadar tindak balas?",p:["Laluan dengan tenaga pengaktifan lebih rendah","Menambah tenaga kinetik semua zarah dalam campuran","Menambah bilangan zarah tindak balas","Menaikkan suhu campuran tindak balas"],b:0,u:"Lebih banyak zarah dapat mengatasi tenaga pengaktifan yang lebih rendah."},
 {j:"pilih",t:"Dalam eksperimen Jadual 1, apakah pemboleh ubah yang dimalarkan?",p:["Suhu dan isi padu asid","Kepekatan tiosulfat","Masa tanda X hilang","Kadar tindak balas"],b:0,u:"Hanya kepekatan tiosulfat diubah; suhu, isi padu dan kepekatan asid dimalarkan."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, mengapakah tanda X menjadi tidak kelihatan?",p:["Mendakan sulfur terbentuk dan melindungi tanda X","Larutan bertukar menjadi biru tua","Gas klorin terbebas dan melunturkan tanda X","Air tersejat dan kertas menjadi kering"],b:0,u:"Na₂S₂O₃ + 2HCl → 2NaCl + SO₂ + S + H₂O. Sulfur kuning menjadikan larutan keruh."}},

{n:5, tempat:"Pejabat Jurutera Kilang", sk:"7.2 hingga 7.4 Menilai kawalan kadar tindak balas", lampiran:null,
 kadNama:"Kawalan Kadar", kadEm:"\u{1F39B}\u{FE0F}", kadFakta:"Industri mengawal kadar supaya hasil diperoleh dengan cepat, selamat dan menjimatkan tenaga.",
 bosKadNama:"Keselamatan Habuk", bosKadEm:"\u{26A0}\u{FE0F}", bosKadFakta:"Habuk halus seperti tepung atau habuk arang mempunyai luas permukaan besar dan boleh terbakar dengan sangat cepat sehingga meletup.",
 soalan:[
 {j:"pilih",t:"Kilang tepung melarang api terbuka dan merokok. Penilaian manakah PALING tepat?",p:["Wajar kerana habuk tepung boleh meletup","Tidak wajar kerana tepung tidak boleh terbakar","Wajar kerana asap mencemarkan tepung","Tidak wajar kerana habuk tepung terlalu besar"],b:0,u:"Habuk halus mempunyai luas permukaan sangat besar, jadi pembakaran boleh berlaku sangat cepat."},
 {j:"pilih",t:"Sebuah kilang mahu menambah kadar penghasilan tetapi menjimatkan kos tenaga. Pilihan PALING wajar ialah:",p:["Guna mangkin","Naikkan suhu setinggi mungkin","Guna bahan dalam ketulan besar","Cairkan semua bahan tindak balas"],b:0,u:"Mangkin menambah kadar tanpa tenaga haba tambahan dan boleh digunakan semula."},
 {j:"pilih",t:"Rakan anda mencadangkan menggunakan asid pekat dan panas untuk membersihkan kerak cerek dengan cepat di rumah. Nilaikan.",p:["Tidak wajar; guna cuka suam untuk keselamatan","Wajar kerana kadar paling tinggi lebih baik","Wajar kerana asid pekat tidak berbahaya","Tidak wajar kerana asid tidak bertindak balas"],b:0,u:"Kadar tinggi tidak semestinya terbaik; keselamatan pengguna lebih penting."},
 {j:"pilih",t:"Mengapakah enzim lebih sesuai daripada suhu tinggi dalam detergen pencuci pakaian?",p:["Kotoran tanggal pada suhu rendah dan kain tidak rosak","Enzim menaikkan suhu air dengan cepat","Suhu tinggi menjimatkan elektrik","Enzim mewarnakan pakaian"],b:0,u:"Enzim ialah mangkin biologi yang berfungsi pada suhu sederhana."},
 {j:"pilih",t:"Doktor menasihati pesakit menyimpan ubat tertentu di tempat sejuk dan gelap. Sebab PALING munasabah ialah:",p:["Melambatkan penguraian bahan aktif ubat","Menambah kekuatan ubat dari masa ke masa","Menyebabkan ubat lebih cepat larut","Supaya ubat bertukar warna"],b:0,u:"Haba dan cahaya mempercepat tindak balas penguraian bahan aktif."},
 {j:"pilih",t:"Pengusaha jeruk mahu proses penjerukan berlaku perlahan supaya rasa sekata. Keputusan terbaik ialah:",p:["Simpan pada suhu rendah yang terkawal","Simpan di bawah cahaya matahari terik","Potong buah menjadi serbuk halus","Tambah garam secara berlebihan"],b:0,u:"Suhu rendah memperlahankan tindak balas dan mikroorganisma."},
 {j:"banyak",t:"Pilih DUA keputusan wajar bagi pengurus lombong arang batu untuk mengelakkan letupan.",p:["Kawal habuk arang di udara","Larang api dan percikan","Tambah habuk di laluan","Guna lampu berapi terbuka"],b:[0,1],u:"Habuk halus dan sumber nyalaan boleh mencetuskan letupan."},
 {j:"pilih",t:"Dua murid membandingkan kadar dengan suhu berbeza tetapi menggunakan kepekatan asid berlainan. Penilaian terbaik ialah:",p:["Ujian tidak adil; kepekatan perlu dimalarkan","Ujian adil kerana suhu sudah diubah","Ujian adil kerana ada dua murid","Ujian tidak adil kerana suhu diubah"],b:0,u:"Hanya satu pemboleh ubah boleh diubah; kepekatan mesti sama."}],
 bos:{j:"pilih",t:"Sebuah kilang ammonia memilih suhu sederhana (sekitar 450 °C) dan mangkin besi, bukan suhu sangat tinggi. Justifikasi PALING kukuh ialah:",p:["Kadar memuaskan dengan kos tenaga terkawal","Suhu tinggi tidak memberi sebarang kesan","Mangkin besi menambah jumlah ammonia","Suhu rendah meletupkan reaktor"],b:0,u:"Mangkin membolehkan kadar yang mencukupi tanpa suhu dan kos tenaga yang terlalu tinggi."}},

{n:6, tempat:"Studio Laju-Perlahan", sk:"7.1 hingga 7.4 Mereka cipta menggunakan pengetahuan kadar tindak balas", lampiran:null,
 kadNama:"Reka Bentuk Eksperimen", kadEm:"\u{1F4CB}", kadFakta:"Eksperimen kadar yang baik mengubah satu faktor, mengukur satu kuantiti terhadap masa dan memalarkan faktor lain.",
 bosKadNama:"Inovasi Kadar", bosKadEm:"\u{1F4A1}", bosKadFakta:"Inovasi yang baik mengawal kadar tindak balas mengikut keperluan: dipercepat untuk kecekapan, diperlahankan untuk keselamatan atau pengawetan.",
 soalan:[
 {j:"pilih",t:"Anda mereka bekas makanan untuk penjual nasi lemak supaya makanan lambat basi tanpa elektrik. Idea paling berasas ialah:",p:["Bekas bertebat dengan pek ais","Bekas logam nipis di bawah matahari","Bekas terbuka supaya udara masuk","Bekas berwarna hitam yang menyerap haba"],b:0,u:"Suhu rendah melambatkan tindak balas penguraian oleh mikroorganisma."},
 {j:"pilih",t:"Anda mahu mereka tablet pembersih yang larut cepat dalam air. Ciri manakah PALING membantu?",p:["Butiran kecil yang dipadatkan longgar","Satu ketulan besar yang sangat padat","Tablet yang disimpan dalam peti sejuk","Tablet tanpa sebarang bahan aktif"],b:0,u:"Luas permukaan besar mempercepat pelarutan dan tindak balas."},
 {j:"pilih",t:"Idea manakah PALING kreatif untuk menunjukkan kesan suhu terhadap kadar kepada murid?",p:["Perlumbaan tablet effervesen dalam air sejuk dan suam","Membaca nota tentang suhu dengan kuat","Melukis termometer pada kertas sahaja","Merebus air tanpa sebarang pemerhatian"],b:0,u:"Gelembung gas yang dapat dilihat menunjukkan perbezaan kadar dengan jelas."},
 {j:"pilih",t:"Anda mereka eksperimen kesan mangkin terhadap penguraian hidrogen peroksida. Apakah yang perlu diukur?",p:["Isi padu oksigen setiap 30 saat","Warna larutan hidrogen peroksida","Jisim bikar kosong sebelum eksperimen","Bau gas oksigen yang terbebas"],b:0,u:"Kuantiti hasil terhadap masa memberikan kadar tindak balas."},
 {j:"banyak",t:"Pilih DUA ciri reka bentuk pemadam api yang berkaitan dengan kadar tindak balas pembakaran.",p:["Memutuskan bekalan oksigen","Menurunkan suhu bahan bakar","Menambah luas permukaan bahan api","Menambah oksigen kepada api"],b:[0,1],u:"Mengurangkan oksigen dan suhu melambatkan pembakaran."},
 {j:"pilih",t:"Pengusaha tapai mahu tapai cepat siap tanpa menjejaskan rasa. Cadangan terbaik ialah:",p:["Simpan pada suhu suam yang terkawal","Rebus tapai dalam air mendidih","Simpan tapai dalam peti beku","Tambah asid hidroklorik pekat"],b:0,u:"Suhu suam optimum mempercepat tindakan enzim yis tanpa membunuhnya."},
 {j:"pilih",t:"Bagaimanakah anda menilai sama ada reka bentuk bekas anda benar-benar melambatkan makanan basi?",p:["Banding masa basi dengan bekas biasa","Tanya pendapat pelanggan tanpa membuat sebarang ujian","Ukur berat bekas sebelum digunakan","Lihat warna bekas sahaja"],b:0,u:"Ujian kawalan yang adil membuktikan kesan reka bentuk."},
 {j:"pilih",t:"Mengapakah murid perlu mempertimbangkan kos dan budaya dalam reka cipta kawalan kadar?",p:["Supaya penyelesaian dapat digunakan masyarakat","Supaya reka cipta kelihatan lebih mahal","Kos tidak penting dalam kimia","Budaya menentukan kadar tindak balas"],b:0,u:"Penyelesaian yang mampu milik dan sesuai dengan amalan setempat lebih mudah diterima."}],
 bos:{j:"buka",
  t:"Reka satu produk atau kaedah yang mengawal kadar tindak balas untuk menyelesaikan masalah harian (contoh: mengawet makanan, mempercepat kompos, pek panas segera).",
  arahan:"Nyatakan masalah, tindak balas yang terlibat, faktor kadar yang dikawal (sekurang-kurangnya DUA), terangkan menggunakan teori perlanggaran, cadangkan cara menguji keberkesanannya dan SATU pertimbangan keselamatan atau kos.",
  u:"Jawapan TP6 yang kukuh memilih faktor yang sesuai (contoh: suhu dan luas permukaan untuk kompos), menerangkan dengan frekuensi perlanggaran berkesan dan tenaga pengaktifan, merancang ujian adil dan mengambil kira keselamatan serta kos."}}
];

module.exports = {
  id:"k4b7", tingkatan:4, kod:"7.0 Kadar Tindak Balas",
  tajuk:"Laju dan Perlahan",
  subtajuk:"Kimia Ting. 4 · Bab 7 Kadar Tindak Balas",
  spi:SPI["7"],
  ulasan:{
   1:"{n} dapat mengingat kembali maksud kadar tindak balas dan faktor yang mempengaruhinya. Langkah seterusnya ialah menentukan kadar daripada graf.",
   2:"{n} dapat menjelaskan dan mengira kadar purata dan kadar seketika daripada graf. Perlu lebih latihan mengaplikasikan faktor kadar dalam kehidupan harian.",
   3:"{n} boleh mengaplikasikan faktor kadar tindak balas untuk menerangkan fenomena harian dan proses industri. Galakkan menganalisis data menggunakan teori perlanggaran.",
   4:"{n} mampu menganalisis data kadar menggunakan teori perlanggaran dan tenaga pengaktifan. Seterusnya latih menilai keputusan kawalan kadar.",
   5:"{n} dapat menilai keputusan mengawal kadar tindak balas dari segi keselamatan, kos dan keberkesanan. Sudah bersedia mereka cipta penyelesaian.",
   6:"{n} berjaya mereka cipta produk atau kaedah yang mengawal kadar tindak balas secara kreatif. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kadar Tindak Balas. Cadangan: ulang hentian pertama dan bandingkan kadar tablet effervesen dalam air sejuk dan suam."
  },
  lampiran:{
   g1:{jenis:"graf", x:[0,30,60,90,120,150,180,210], xLabel:"Masa (s)", titik:true,
     siri:[{label:"Eksperimen I (cm³)", y:[0,15,26,34,39,41,42,42], warna:"ungu"},
           {label:"Eksperimen II (cm³)", y:[0,28,38,41,42,42,42,42], warna:"merah"}],
     kapsyen:"Rajah 1 · Isi padu gas hidrogen melawan masa (zink berlebihan, asid hidroklorik sama)",
     alt:"Graf isi padu gas melawan masa: Eksperimen I naik perlahan dan mendatar pada 42 sentimeter padu sekitar 180 saat; Eksperimen II naik lebih curam dan mendatar pada 42 sentimeter padu sekitar 120 saat"},
   j1:jadual(1, "Masa tanda X hilang bagi kepekatan natrium tiosulfat berbeza",
     ["Kepekatan Na_2S_2O_3 (mol dm^{−3})", "Masa (s)"],
     [["0.20","12"],["0.16","15"],["0.12","20"],["0.08","30"],["0.04","60"]],
     "50 cm³ Na_2S_2O_3 + 5 cm³ HCl 1.0 mol dm^{−3} pada suhu bilik.")
  },
  aras:ARAS
};
