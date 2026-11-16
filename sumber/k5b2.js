/* Sumber kandungan — Kimia KSSM Tingkatan 5, Bab 2 Sebatian Karbon.
   SK 10.1 Jenis sebatian karbon, 10.2 Siri homolog, 10.3 Sifat kimia dan saling pertukaran sebatian
   antara siri homolog, 10.4 Isomer dan penamaan mengikut IUPAC
   (DSKP KSSM Kimia Tingkatan 4 dan 5, dskp/kimia-en.pdf). */
const { jadual, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Telaga Minyak", sk:"10.1 Jenis sebatian karbon · 10.2 Siri homolog", lampiran:null,
 kadNama:"Hidrokarbon", kadEm:"\u{1F6E2}\u{FE0F}", kadFakta:"Hidrokarbon ialah sebatian yang mengandungi karbon dan hidrogen sahaja. Alkana tepu (ikatan tunggal); alkena tak tepu (ikatan ganda dua C=C).",
 bosKadNama:"Siri Homolog", bosKadEm:"\u{1F517}", bosKadFakta:"Ahli siri homolog mempunyai formula am dan kumpulan berfungsi yang sama, dan setiap ahli berbeza sebanyak CH₂.",
 soalan:[
 {j:"pilih",t:"Sebatian organik ialah sebatian karbon yang:",p:["Berasal daripada hidupan","Terdapat dalam batuan dan mineral","Terbentuk daripada logam dan bukan logam","Wujud dalam keadaan gas pada suhu bilik"],b:0,u:"Contoh: glukosa, protein dan minyak. CO₂ dan karbonat ialah sebatian karbon tak organik."},
 {j:"pilih",t:"Formula am alkana ialah:",p:["CₙH₂ₙ₊₂","CₙH₂ₙ","CₙH₂ₙ₋₂","CₙH₂ₙ₊₁OH"],b:0,u:"Contoh: metana CH₄, etana C₂H₆."},
 {j:"pilih",t:"Kumpulan berfungsi bagi alkohol ialah:",p:["Hidroksil, –OH","Karboksil, –COOH","Ikatan ganda dua C=C","Karboksilat, –COO–"],b:0,u:"Contoh: etanol, C₂H₅OH."},
 {j:"pilih",t:"Kumpulan berfungsi bagi asid karboksilik ialah:",p:["Karboksil, –COOH","Hidroksil, –OH","Ikatan ganda dua C=C","Ikatan ganda tiga C≡C"],b:0,u:"Contoh: asid etanoik, CH₃COOH."},
 {j:"pilih",t:"Nama ahli alkena yang mempunyai tiga atom karbon ialah:",p:["Propena","Propana","Propanol","Etena"],b:0,u:"Propena, C₃H₆."},
 {j:"pilih",t:"Petroleum dipisahkan kepada pecahan melalui:",p:["Penyulingan berperingkat","Penapisan dengan kertas turas","Penghabluran pada suhu bilik","Elektrolisis larutan akueus"],b:0,u:"Pecahan dipisahkan mengikut julat takat didih."},
 {j:"pilih",t:"Ester mempunyai bau:",p:["Wangi seperti buah","Busuk seperti telur","Tajam seperti ammonia","Tiada bau langsung"],b:0,u:"Ester digunakan sebagai perisa dan pewangi."},
 {j:"banyak",t:"Pilih DUA hidrokarbon tak tepu.",p:["Etena","Propuna","Etana","Butana"],b:[0,1],u:"Alkena (C=C) dan alkuna (C≡C) tak tepu; alkana tepu."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan siri homolog dan contohnya yang betul.",p:["Alkana: butana","Alkohol: propan-1-ol","Ester: etil etanoat","Asid karboksilik: etanol","Alkena: metana"],b:[0,1,2],u:"Etanol ialah alkohol; metana ialah alkana."}},

{n:2, tempat:"Bilik Siri Homolog", sk:"10.2 Sifat fizik siri homolog", lampiran:"j1",
 kadNama:"Takat Didih", kadEm:"\u{1F321}\u{FE0F}", kadFakta:"Takat didih ahli siri homolog bertambah apabila bilangan atom karbon bertambah kerana saiz molekul dan daya Van der Waals bertambah.",
 bosKadNama:"Keadaan Fizik", bosKadEm:"\u{1F9CA}", bosKadFakta:"Alkana dengan 1 hingga 4 atom karbon ialah gas pada suhu bilik; 5 hingga 17 atom karbon ialah cecair.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah corak takat didih alkana?",p:["Bertambah dengan bilangan karbon","Berkurang dengan bilangan karbon","Tidak berubah","Turun kemudian naik"],b:0,u:"Takat didih naik dari −162 °C (metana) ke 36 °C (pentana)."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah keadaan fizik pentana pada suhu bilik (25 °C)?",p:["Cecair","Gas","Pepejal","Plasma"],b:0,u:"Takat didih pentana 36 °C, lebih tinggi daripada suhu bilik."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah formula molekul butana?",p:["C₄H₁₀","C₄H₈","C₄H₆","C₄H₁₂"],b:0,u:"CₙH₂ₙ₊₂ dengan n = 4."},
 {j:"pilih",t:"Berdasarkan Jadual 1, berapakah perbezaan JMR antara dua ahli berturutan?",p:["14","12","16","2"],b:0,u:"Setiap ahli berbeza sebanyak CH₂ = 12 + 2 = 14."},
 {j:"pilih",t:"Berdasarkan Jadual 1, ramalkan takat didih heksana, C₆H₁₄.",p:["Kira-kira 69 °C","Kira-kira −100 °C","Kira-kira 0 °C","Kira-kira 36 °C"],b:0,u:"Corak menunjukkan takat didih terus naik; heksana mendidih pada 69 °C."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah takat didih bertambah?",p:["Daya antara molekul bertambah","Ikatan kovalen dalam molekul lemah","Molekul menjadi bercas","Ikatan hidrogen hilang"],b:0,u:"Molekul lebih besar mempunyai daya Van der Waals lebih kuat."},
 {j:"pilih",t:"Mengapakah alkana tidak larut dalam air tetapi larut dalam pelarut organik?",p:["Alkana ialah molekul kovalen bukan kutub","Alkana ialah sebatian ion","Alkana mempunyai ikatan hidrogen yang kuat","Alkana bertindak balas dengan air"],b:0,u:"Bahan bukan kutub larut dalam pelarut bukan kutub."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung jisim molekul relatif propana, C₃H₈. (JAR: C = 12, H = 1)",b:44,tol:0.01,u:"3(12) + 8(1) = 44."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, alkana manakah sesuai sebagai gas memasak dalam tong (dicecairkan di bawah tekanan)?",p:["Propana dan butana","Metana dan etana","Pentana dan heksana","Etana dan pentana"],b:0,u:"Propana dan butana ialah gas pada suhu bilik tetapi mudah dicecairkan di bawah tekanan (LPG). Metana dan etana sukar dicecairkan; pentana dan heksana sudah cecair."}},

{n:3, tempat:"Makmal Tindak Balas Organik", sk:"10.3 Sifat kimia alkana, alkena, alkohol dan asid karboksilik", lampiran:null,
 kadNama:"Ujian Ketaktepuan", kadEm:"\u{1F7E4}", kadFakta:"Alkena menyahwarnakan air bromin (perang → tidak berwarna) dan larutan kalium manganat(VII) berasid (ungu → tidak berwarna). Alkana tidak.",
 bosKadNama:"Pengesteran", bosKadEm:"\u{1F34C}", bosKadFakta:"Asid karboksilik + alkohol → ester + air, dengan asid sulfurik pekat sebagai mangkin.",
 soalan:[
 {j:"pilih",t:"Bagaimanakah anda membezakan heksana dan heksena?",p:["Tambah air bromin","Tambah air suling ke dalamnya","Ukur jisim kedua-dua cecair","Bandingkan warna kedua-duanya"],b:0,u:"Heksena menyahwarnakan air bromin; heksana tidak (dalam gelap)."},
 {j:"pilih",t:"Etena bertindak balas dengan hidrogen dengan mangkin nikel pada 180 °C. Hasilnya ialah:",p:["Etana","Etanol","Etuna","Asid etanoik"],b:0,u:"Penghidrogenan: C₂H₄ + H₂ → C₂H₆."},
 {j:"pilih",t:"Etena bertindak balas dengan stim (asid fosforik, 300 °C, 60 atm). Hasilnya ialah:",p:["Etanol","Etana","Etil etanoat","Asid etanoik"],b:0,u:"Penghidratan: C₂H₄ + H₂O → C₂H₅OH."},
 {j:"pilih",t:"Etanol dipanaskan dengan larutan kalium dikromat(VI) berasid. Perubahan warna yang diperhatikan ialah:",p:["Jingga kepada hijau","Hijau kepada jingga","Ungu kepada tidak berwarna","Biru kepada merah"],b:0,u:"Etanol dioksidakan kepada asid etanoik; Cr₂O₇²⁻ (jingga) diturunkan kepada Cr³⁺ (hijau)."},
 {j:"pilih",t:"Wap etanol dialirkan melalui serpihan porselin panas. Gas yang terhasil ialah:",p:["Etena","Etana","Oksigen","Hidrogen"],b:0,u:"Pendehidratan: C₂H₅OH → C₂H₄ + H₂O."},
 {j:"pilih",t:"Asid etanoik bertindak balas dengan etanol (H₂SO₄ pekat). Hasil yang berbau buah ialah:",p:["Etil etanoat","Etanol","Etena","Etil metanoat"],b:0,u:"CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O."},
 {j:"pilih",t:"Etanol dihasilkan daripada glukosa melalui:",p:["Penapaian oleh yis","Peretakan","Penghidrogenan","Pengesteran"],b:0,u:"C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂, dengan enzim zimase dalam yis."},
 {j:"pilih",t:"Mengapakah heksena terbakar dengan nyalaan yang lebih berjelaga berbanding heksana?",p:["Peratus karbon mengikut jisim lebih tinggi","Heksena mempunyai lebih banyak hidrogen","Heksena tidak mengandungi karbon","Heksena ialah sebatian ion"],b:0,u:"Heksena C₆H₁₂ 85.7% C; heksana C₆H₁₄ 83.7% C. Lebih banyak karbon tidak terbakar lengkap."}],
 bos:{j:"susun",t:"Susun saling pertukaran berikut untuk menghasilkan etil etanoat daripada glukosa.",p:["Glukosa ditapai menjadi etanol","Sebahagian etanol dioksidakan menjadi asid etanoik","Asid etanoik dicampur dengan etanol","Ditambah asid sulfurik pekat dan dipanaskan","Etil etanoat terhasil"],b:[0,1,2,3,4],u:"Penapaian → pengoksidaan → pengesteran."}},

{n:4, tempat:"Bilik Isomer", sk:"10.4 Isomer dan penamaan IUPAC", lampiran:"j2",
 kadNama:"Isomer", kadEm:"\u{1FA9E}", kadFakta:"Isomer ialah molekul dengan formula molekul yang sama tetapi formula struktur yang berbeza.",
 bosKadNama:"Nama IUPAC", bosKadEm:"\u{1F3F7}\u{FE0F}", bosKadFakta:"Nama IUPAC = cabang (dengan nombor kedudukan) + rantai karbon terpanjang + akhiran kumpulan berfungsi.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 2, X dan Y ialah isomer kerana:",p:["Formula molekul sama, struktur berbeza","Formula molekul berbeza, struktur sama","Takat didih kedua-duanya sama","Kedua-duanya ialah alkena"],b:0,u:"Kedua-duanya C₄H₁₀ tetapi susunan atom berbeza."},
 {j:"pilih",t:"Berdasarkan Jadual 2, apakah nama IUPAC bagi Y?",p:["2-metilpropana","Butana","1-metilpropana","Metilbutana"],b:0,u:"Rantai terpanjang 3 karbon (propana) dengan cabang metil pada karbon ke-2."},
 {j:"pilih",t:"Berdasarkan Jadual 2, mengapakah takat didih Y lebih rendah daripada X?",p:["Y bercabang, luas permukaan sentuhan kecil","Y mempunyai lebih banyak atom karbon","Y ialah sebatian ion yang lemah","Y mempunyai ikatan ganda dua"],b:0,u:"Molekul bercabang lebih padat, jadi daya Van der Waals lebih lemah."},
 {j:"pilih",t:"Berapakah bilangan isomer bagi butena, C₄H₈ (tidak termasuk isomer geometri dan siklik)?",p:["3","1","2","5"],b:0,u:"But-1-ena, but-2-ena dan 2-metilpropena."},
 {j:"pilih",t:"Nama IUPAC bagi CH₃CH₂CH₂OH ialah:",p:["Propan-1-ol","Propan-2-ol","Propanol-3","Propena"],b:0,u:"Kumpulan –OH pada karbon pertama rantai tiga karbon."},
 {j:"pilih",t:"Nama IUPAC bagi CH₃COOCH₃ ialah:",p:["Metil etanoat","Etil metanoat","Asid etanoik","Metil propanoat"],b:0,u:"Bahagian daripada alkohol (metil) disebut dahulu, diikuti bahagian daripada asid (etanoat)."},
 {j:"pilih",t:"Nama IUPAC bagi CH₂=CHCH₂CH₃ ialah:",p:["But-1-ena","But-2-ena","Butana","Prop-1-ena"],b:0,u:"Ikatan ganda dua bermula pada karbon pertama rantai empat karbon."},
 {j:"pilih",t:"Pentana mempunyai berapa isomer?",p:["3","2","4","5"],b:0,u:"Pentana, 2-metilbutana dan 2,2-dimetilpropana."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 2, mengapakah X dan Y mempunyai sifat kimia yang serupa?",p:["Kedua-duanya alkana dengan ikatan tunggal","Kedua-duanya mempunyai takat didih sama","Kedua-duanya mempunyai kumpulan –OH","Kedua-duanya bertindak balas dengan air bromin"],b:0,u:"Sifat kimia ditentukan oleh kumpulan berfungsi; kedua-duanya alkana tepu."}},

{n:5, tempat:"Pejabat Penilai Bahan Api", sk:"10.1 hingga 10.3 Menilai kegunaan sebatian karbon", lampiran:null,
 kadNama:"Biodiesel", kadEm:"\u{1F33E}", kadFakta:"Biodiesel ialah ester yang dihasilkan daripada minyak sawit atau minyak masak terpakai, dan boleh menggantikan sebahagian diesel petroleum.",
 bosKadNama:"Pembakaran Lengkap", bosKadEm:"\u{1F525}", bosKadFakta:"Pembakaran lengkap menghasilkan CO₂ dan air. Pembakaran tak lengkap menghasilkan karbon monoksida beracun dan jelaga.",
 soalan:[
 {j:"pilih",t:"Kerajaan mahu menggalakkan biodiesel sawit. Hujah PALING kukuh menyokongnya ialah:",p:["Sumber boleh diperbaharui dan dihasilkan tempatan","Biodiesel tidak membebaskan sebarang gas","Biodiesel lebih murah dalam semua keadaan","Biodiesel tidak perlu diproses langsung"],b:0,u:"Kelapa sawit boleh ditanam semula dan menyokong ekonomi tempatan."},
 {j:"pilih",t:"Mengapakah dapur gas perlu diselenggara supaya nyalaan berwarna biru, bukan kuning?",p:["Nyalaan kuning menandakan pembakaran tak lengkap dan CO","Nyalaan biru lebih sejuk dan menjimatkan gas","Nyalaan kuning lebih panas dan cepat masak","Warna nyalaan tidak penting"],b:0,u:"Pembakaran tak lengkap menghasilkan karbon monoksida beracun."},
 {j:"pilih",t:"Seorang rakan mahu meminum etanol makmal kerana \"sama seperti minuman beralkohol\". Respons PALING tepat ialah:",p:["Bahaya; etanol makmal mungkin dicampur bahan toksik","Selamat kerana etanol ialah makanan","Selamat jika dicampur air","Bahaya kerana etanol ialah alkana"],b:0,u:"Etanol makmal sering dicampur metanol (beracun) dan pengambilan alkohol membahayakan kesihatan."},
 {j:"pilih",t:"Etanol dicampur dengan petrol sebagai gasohol. Penilaian terbaik ialah:",p:["Jimat petrol, tetapi tanaman bersaing dengan makanan","Tiada kelemahan langsung kerana etanol daripada tumbuhan","Etanol tidak boleh terbakar dalam enjin kenderaan","Etanol meningkatkan jelaga berbanding petrol biasa"],b:0,u:"Etanol boleh diperbaharui, tetapi tanah pertanian untuk bahan api boleh menjejaskan bekalan makanan."},
 {j:"pilih",t:"Pengusaha minyak masak terpakai mahu menjualnya kepada kilang biodiesel. Nilaikan.",p:["Wajar; sisa jadi bahan api dan kurang pencemaran","Tidak wajar kerana minyak terpakai tiada nilai","Lebih baik dibuang ke dalam longkang","Tidak wajar kerana biodiesel ialah alkana"],b:0,u:"Minyak terpakai yang dibuang mencemarkan air; menjadikannya biodiesel bernilai ekonomi."},
 {j:"pilih",t:"Bahan manakah PALING sesuai untuk menghilangkan kesan cat minyak pada berus?",p:["Pelarut organik seperti turpentin","Air paip sejuk","Larutan garam","Jus limau"],b:0,u:"Cat minyak larut dalam pelarut organik."},
 {j:"banyak",t:"Pilih DUA langkah wajar semasa menggunakan generator petrol di rumah.",p:["Letak di luar rumah berudara","Pasang pengesan karbon monoksida","Guna di dalam bilik tidur","Tutup semua tingkap rapat"],b:[0,1],u:"Gas ekzos mengandungi CO yang tidak berbau dan beracun."},
 {j:"pilih",t:"Antara bahan api berikut, yang manakah membebaskan paling sedikit jelaga per mol apabila dibakar?",p:["Metana","Heksena","Oktana","Heksana"],b:0,u:"Metana mempunyai peratus karbon paling rendah dan mudah terbakar lengkap."}],
 bos:{j:"pilih",t:"Sebuah kilang mahu menghasilkan etanol. Kaedah penapaian atau penghidratan etena? Penilaian PALING seimbang ialah:",p:["Penapaian lestari; penghidratan lebih cepat dan hasil lebih tulen","Penapaian sentiasa lebih baik dalam semua aspek termasuk kelajuan","Penghidratan etena menggunakan yis dan gula sebagai bahan mentah","Kedua-dua kaedah sama sepenuhnya dari segi kos dan kelajuan"],b:0,u:"Penapaian lestari tetapi perlahan dan perlu penyulingan; penghidratan cepat tetapi bergantung pada petroleum."}},

{n:6, tempat:"Studio Organik", sk:"10.1 hingga 10.4 Mereka cipta menggunakan sebatian karbon", lampiran:null,
 kadNama:"Perisa Ester", kadEm:"\u{1F353}", kadFakta:"Ester berbeza menghasilkan bau berbeza: contohnya pentil etanoat berbau pisang dan oktil etanoat berbau oren.",
 bosKadNama:"Produk Hijau", bosKadEm:"\u{1F4A1}", bosKadFakta:"Produk berasaskan sebatian karbon yang baik menggunakan sumber boleh diperbaharui dan selamat kepada pengguna.",
 soalan:[
 {j:"pilih",t:"Anda mahu menghasilkan perisa pisang untuk kek. Bahan yang perlu ditindakbalaskan ialah:",p:["Pentanol dan asid etanoik","Etena dan air bromin","Metana dan klorin","Glukosa dan air"],b:0,u:"Pengesteran pentanol dan asid etanoik menghasilkan pentil etanoat (bau pisang)."},
 {j:"pilih",t:"Idea manakah PALING kreatif untuk menunjukkan isomer kepada murid?",p:["Bina model butana dan 2-metilpropana","Baca definisi isomer dengan kuat di hadapan kelas","Lukis satu molekul butana sahaja di papan putih","Menghafal nama IUPAC tanpa melihat strukturnya"],b:0,u:"Model fizikal menunjukkan formula molekul sama tetapi struktur berbeza."},
 {j:"pilih",t:"Anda mereka pembersih tangan. Mengapakah etanol 70% dipilih?",p:["Membunuh kuman dan cepat meruap","Etanol ialah bahan bukan organik","Etanol tidak boleh terbakar","Etanol tidak larut dalam air"],b:0,u:"Etanol 70% mendenaturasikan protein kuman dan meruap tanpa meninggalkan sisa."},
 {j:"pilih",t:"Komuniti kampung banyak menghasilkan sisa buah. Cadangan berasaskan kimia PALING berguna ialah:",p:["Tapai sisa buah menjadi bioetanol","Bakar sisa buah secara terbuka di tepi kampung","Buang sisa buah ke dalam sungai berdekatan","Simpan sisa buah dalam stor sehingga reput"],b:0,u:"Penapaian menukar gula dalam buah kepada etanol."},
 {j:"banyak",t:"Pilih DUA langkah keselamatan semasa penyediaan ester di makmal sekolah.",p:["Panaskan dalam kukus air","Guna asid sulfurik pekat dengan cermat","Panaskan campuran dengan nyalaan Bunsen terus","Hidu wap ester terus dari mulut tabung"],b:[0,1],u:"Alkohol dan ester mudah terbakar; asid pekat mengakis."},
 {j:"pilih",t:"Bagaimanakah anda menguji sama ada sampel minyak mengandungi lemak tak tepu?",p:["Uji dengan air bromin","Timbang sampel minyak dengan neraca elektronik","Hidu bau sampel minyak dengan berhati-hati","Bandingkan warna minyak dengan minyak lain"],b:0,u:"Ikatan C=C menyahwarnakan air bromin."},
 {j:"pilih",t:"Anda mereka kempen keselamatan gas memasak. Mesej PALING penting ialah:",p:["Periksa kebocoran dan pastikan nyalaan biru","Simpan tong gas di bawah matahari","Guna api untuk mencari kebocoran","Tutup tingkap semasa memasak"],b:0,u:"Kebocoran gas dan pembakaran tak lengkap adalah bahaya utama."},
 {j:"pilih",t:"Pengusaha sabun kecil mahu menggunakan minyak sawit. Mengapakah pilihan ini sesuai di Malaysia?",p:["Minyak sawit mudah didapati dan murah","Minyak sawit ialah alkana tepu","Minyak sawit tidak boleh diproses","Minyak sawit diimport dari luar"],b:0,u:"Sumber tempatan mengurangkan kos dan menyokong industri tempatan."}],
 bos:{j:"buka",
  t:"Reka satu produk berasaskan sebatian karbon (contoh: pewangi ester, pembersih berasaskan etanol, bioetanol daripada sisa) untuk perusahaan kecil.",
  arahan:"Nyatakan bahan mentah, siri homolog yang terlibat, persamaan kimia utama (contoh: penapaian atau pengesteran), nama IUPAC hasil, langkah keselamatan, dan pertimbangan kos serta alam sekitar.",
  u:"Jawapan TP6 yang kukuh memilih tindak balas yang betul (contoh: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂), menamakan hasil mengikut IUPAC, menyatakan syarat tindak balas, mengambil kira keselamatan bahan mudah terbakar dan menilai kelestarian."}}
];

module.exports = {
  id:"k5b2", tingkatan:5, kod:"2.0 Sebatian Karbon",
  tajuk:"Rantai Karbon",
  subtajuk:"Kimia Ting. 5 · Bab 2 Sebatian Karbon",
  spi:SPI["10"],
  ulasan:{
   1:"{n} dapat mengingat kembali jenis sebatian karbon, formula am dan kumpulan berfungsi siri homolog. Langkah seterusnya ialah menjelaskan sifat fizik siri homolog.",
   2:"{n} dapat menjelaskan corak sifat fizik dalam siri homolog. Perlu lebih latihan mengaplikasikan sifat kimia alkana, alkena, alkohol dan asid karboksilik.",
   3:"{n} boleh mengaplikasikan sifat kimia dan saling pertukaran antara siri homolog. Galakkan menganalisis isomer dan penamaan IUPAC.",
   4:"{n} mampu menganalisis isomer dan menamakan sebatian mengikut IUPAC. Seterusnya latih menilai kegunaan sebatian karbon.",
   5:"{n} dapat menilai kegunaan bahan api dan sebatian karbon dari segi keselamatan, ekonomi dan alam sekitar. Sudah bersedia mereka cipta produk.",
   6:"{n} berjaya mereka cipta produk berasaskan sebatian karbon secara kreatif dan bertanggungjawab. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Sebatian Karbon. Cadangan: ulang hentian pertama dan bina jadual formula am serta kumpulan berfungsi setiap siri homolog."
  },
  lampiran:{
   j1:jadual(1, "Takat didih lima ahli pertama alkana",
     ["Alkana", "Formula molekul", "Takat didih (°C)"],
     [["Metana","CH_4","−162"],["Etana","C_2H_6","−89"],["Propana","C_3H_8","−42"],["Butana","C_4H_{10}","−1"],["Pentana","C_5H_{12}","36"]]),
   j2:jadual(2, "Dua sebatian dengan formula molekul C₄H₁₀",
     ["Sebatian", "Formula struktur ringkas", "Takat didih (°C)"],
     [["X","CH_3CH_2CH_2CH_3","−1"],["Y","CH_3CH(CH_3)CH_3","−12"]])
  },
  aras:ARAS
};
