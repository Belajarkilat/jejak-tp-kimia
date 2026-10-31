"""Tampalan (31 Okt 2026): tukar salinan app Jejak TP Sejarah kepada Jejak TP Kimia (T4-T5 sahaja).
Id bab k{tingkatan}b{bab}; jadual/fungsi DB berawalan jk_ (projek Supabase jejaktpmath).
Jalankan sekali dari akar repo: python tools/tampal-kimia.py"""
import re, glob
def baca(p): return open(p, encoding='utf-8').read()
def tulis(p, s): open(p, 'w', encoding='utf-8', newline='\n').write(s)
FAIL = ['index.html','semak.html','landing.html','terma.html','privasi.html','manifest.webmanifest','sw.js',
        'sumber.js','konfig.js','skema.sql','bina.js','bab-indeks.js','CNAME','robots.txt','sitemap.xml'] + glob.glob('migrasi-*.sql') + glob.glob('tools/*.js') \
       + glob.glob('supabase/**/*.*', recursive=True)
UMUM = [
 ('Anak NaikGred Sejarah','Anak NaikGred Kimia'),
 ('Jejak TP Sejarah','Jejak TP Kimia'),
 ('jejaktpsejarah','jejaktpkimia'),
 ('jejak-tp-sejarah','jejak-tp-kimia'),
 ('DSKP KSSM Sejarah','DSKP KSSM Kimia'),
 ('Sejarah KSSM','Kimia KSSM'),
 ('bayar-sejarah','bayar-kimia'),
 ('TOYYIB_KATEGORI_SEJARAH','TOYYIB_KATEGORI_KIMIA'),
 ('js_','jk_'), ('"js-','"jk-'), ("'js-","'jk-"), ('startsWith("js-")','startsWith("jk-")'),
]
for p in FAIL:
    try: s = baca(p)
    except Exception: continue
    t = s
    for a, b in UMUM: t = t.replace(a, b)
    if p.endswith('.js') and (p.startswith('tools') or p == 'bina.js'):
        t = t.replace('/^s\db\d+\.js$/', '/^k\db\d+\.js$/').replace('s1b1', 'k4b1')
    if t != s: tulis(p, t); print('dikemas kini:', p)
s = baca('index.html')
G = [
 ('"s"+', '"k"+'), ('/^s(\d)b/', '/^k(\d)b/'), ('/^s(\d)b(\d+)$/', '/^k(\d)b(\d+)$/'),
 ('/^s\d+b\d+$/', '/^k\d+b\d+$/'), ('"s1b1"', '"k4b1"'),
 ('<span>Sejarah Menengah Rendah</span>', '<span>Kimia Tingkatan 4 dan 5</span>'),
 ('"Sejarah · Tingkatan "', '"Kimia · Tingkatan "'),
 ('Jom mula jejak Sejarah!', 'Jom mula jejak Kimia!'),
 ('Rekod PBD Sejarah', 'Rekod PBD Kimia'),
 ('"Kelas Sejarah "', '"Kelas Kimia "'),
 ('&middot; Sejarah</h1>', '&middot; Kimia</h1>'),
 ('k.nama,"Sejarah",BAB.kod', 'k.nama,"Kimia",BAB.kod'),
 ('panitia Sejarah kita', 'panitia Sains kita'),
 ('var JUMLAH_BAB={1:8,2:10,3:8,4:12,5:11};', 'var JUMLAH_BAB={4:8,5:5};'),
]
for a, b in G:
    if a not in s: print('TIADA:', a)
    s = s.replace(a, b)
tulis('index.html', s)
t = baca('semak.html').replace('"s1b1"', '"k4b1"'); tulis('semak.html', t)
t = baca('sw.js').replace('"bank-s1b1.js?v=1"', '"bank-k4b1.js?v=1"')
t = re.sub(r'(VERSI\s*=\s*")[^"]*(")', r'\1jk-2026-10-31a\2', t); tulis('sw.js', t)
for p in ['index.html','semak.html']:
    baki = [l.strip()[:170] for l in baca(p).split('\n') if 'Sejarah' in l or re.search(r'\bs\db\d', l)]
    print(p, 'baki:', len(baki))
    for l in baki: print('   ', l)
