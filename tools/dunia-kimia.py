r"""Tetapkan objek DUNIA (warna, ikon hentian, misi) bab Kimia dalam index.html.
Jalankan semula selepas menambah bab: python tools/dunia-kimia.py"""
import re
D = r'''var DUNIA={
  k4b1:{warna:"#1F5FBF",lembut:"#DFE8FA",gelap:"#154285",ikon:"\u{1F97C}",
        hentian:["\u{1F52C}","\u{1F9EA}","\u{1F4CB}","\u{26A0}\u{FE0F}","\u{2696}\u{FE0F}","\u{1F4A1}"],
        misi:"Masuk makmal kimia: kenali bidang kimia, kaedah saintifik dan cara selamat mengendalikan radas."},
  k4b2:{warna:"#6B4BB0",lembut:"#EBE5F8",gelap:"#4A337A",ikon:"\u{269B}\u{FE0F}",
        hentian:["\u{1F9CA}","\u{1F321}\u{FE0F}","\u{269B}\u{FE0F}","\u{1F522}","\u{2622}\u{FE0F}","\u{1F4A1}"],
        misi:"Selami dunia zarah: jirim, model atom, proton, neutron, elektron dan isotop."},
  k4b3:{warna:"#B07A10",lembut:"#FBF0D6",gelap:"#7A540A",ikon:"\u{2696}\u{FE0F}",
        hentian:["\u{2696}\u{FE0F}","\u{1F9EE}","\u{1F388}","\u{1F524}","\u{1F4DD}","\u{1F4A1}"],
        misi:"Jadi juruukur zarah: jisim atom relatif, mol, formula dan persamaan kimia."},
  k4b4:{warna:"#0F7B5F",lembut:"#D8F2EA",gelap:"#0A5442",ikon:"\u{1F5C2}\u{FE0F}",
        hentian:["\u{1F4DC}","\u{1F5C2}\u{FE0F}","\u{1F388}","\u{1F525}","\u{1F9F4}","\u{1F4A1}"],
        misi:"Jelajahi Jadual Berkala: kumpulan 1, 17 dan 18, kala 3 serta unsur peralihan."},
  k4b5:{warna:"#B3261E",lembut:"#FBE2E0",gelap:"#7D1A15",ikon:"\u{1F517}",
        hentian:["\u{1F9C2}","\u{1F91D}","\u{1F4A7}","\u{1F529}","\u{1F50D}","\u{1F4A1}"],
        misi:"Ikat atom bersama: ikatan ion, kovalen, hidrogen, datif dan logam."},
  k4b6:{warna:"#D14D72",lembut:"#FBE3EA",gelap:"#93304F",ikon:"\u{1F34B}",
        hentian:["\u{1F34B}","\u{1F4CA}","\u{1F9EA}","\u{2697}\u{FE0F}","\u{1F9C2}","\u{1F50D}"],
        misi:"Uji rasa kimia: asid, bes, nilai pH, peneutralan, garam dan analisis kualitatif."},
  k4b7:{warna:"#1B6E9C",lembut:"#DCEEF8",gelap:"#124B6B",ikon:"\u{23F1}\u{FE0F}",
        hentian:["\u{23F1}\u{FE0F}","\u{1F4C8}","\u{1F321}\u{FE0F}","\u{2699}\u{FE0F}","\u{1F4A5}","\u{1F4A1}"],
        misi:"Kawal kelajuan tindak balas: kadar, faktor yang mempengaruhi dan teori perlanggaran."},
  k4b8:{warna:"#5E7D1E",lembut:"#E8F0D6",gelap:"#405614",ikon:"\u{1F3ED}",
        hentian:["\u{1F529}","\u{1FA9F}","\u{1F3FA}","\u{1F9F1}","\u{1F3ED}","\u{1F4A1}"],
        misi:"Lawati kilang bahan: aloi, kaca, seramik dan bahan komposit."},
  k5b1:{warna:"#7D1A15",lembut:"#F9DEDC",gelap:"#5A120F",ikon:"\u{1F50B}",
        hentian:["\u{1F504}","\u{1F4CF}","\u{1F50B}","\u{26A1}","\u{26CF}\u{FE0F}","\u{1F4A1}"],
        misi:"Hidupkan sel kimia: pengoksidaan, penurunan, sel volta, elektrolisis dan pengaratan."},
  k5b2:{warna:"#0E6E8C",lembut:"#D9EEF5",gelap:"#094B60",ikon:"\u{26FD}",
        hentian:["\u{1F6E2}\u{FE0F}","\u{1F517}","\u{1F525}","\u{1F37A}","\u{1F3F7}\u{FE0F}","\u{1F4A1}"],
        misi:"Selongkar sebatian karbon: siri homolog, tindak balas dan penamaan IUPAC."},
  k5b3:{warna:"#A0522D",lembut:"#F8E4D8",gelap:"#6E381F",ikon:"\u{1F525}",
        hentian:["\u{1F321}\u{FE0F}","\u{1F4C9}","\u{1F9EA}","\u{1F525}","\u{26FD}","\u{1F4A1}"],
        misi:"Ukur haba tindak balas: eksotermik, endotermik dan nilai bahan api."},
  k5b4:{warna:"#6B4BB0",lembut:"#EBE5F8",gelap:"#4A337A",ikon:"\u{1F9F6}",
        hentian:["\u{26D3}\u{FE0F}","\u{1F333}","\u{1F6DE}","\u{1F9EA}","\u{267B}\u{FE0F}","\u{1F4A1}"],
        misi:"Bina rantai panjang: polimer, getah asli, pemvulkanan dan getah sintetik."},
  k5b5:{warna:"#0F7B5F",lembut:"#D8F2EA",gelap:"#0A5442",ikon:"\u{1F9F4}",
        hentian:["\u{1F9C8}","\u{1F9FC}","\u{1F96B}","\u{1F48A}","\u{1F52C}","\u{1F33F}"],
        misi:"Jadi ahli kimia pengguna: minyak, sabun, bahan tambah makanan, ubat, nanoteknologi dan teknologi hijau."},
};'''
s = open('index.html', encoding='utf-8').read()
s2, n = re.subn(r'var DUNIA=\{.*?\n\};', lambda m: D, s, count=1, flags=re.S)
assert n == 1
open('index.html', 'w', encoding='utf-8', newline='\n').write(s2)
print('DUNIA dikemas kini')
