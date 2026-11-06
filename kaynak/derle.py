"""Kaynak dosyalarından tek dosyalık index.html üretir.

Kullanım (depo kök dizininde):  python kaynak/derle.py
"""
from pathlib import Path

KOK = Path(__file__).resolve().parent.parent
KAYNAK = KOK / "kaynak"
VERI = ["uniteler_01-06.js", "uniteler_07-12.js", "uniteler_13-18.js", "sinav.js", "sinav_ek.js"]

sablon = (KAYNAK / "app.html").read_text(encoding="utf-8")
veri = "".join((KAYNAK / f).read_text(encoding="utf-8") + "\n" for f in VERI)
sablon = sablon.replace("<!--BILDIR-->", (KAYNAK / "bildir.html").read_text(encoding="utf-8"))  # ortak hata bildirimi
(KOK / "index.html").write_text(sablon.replace("/*DATA*/", veri), encoding="utf-8")
print("index.html güncellendi")
