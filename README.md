# Medhal · Fıkıh İlmine Giriş

İslam Hukukuna Giriş (el-Medhal) dersi için hazırlanmış, tarayıcıda çalışan konu anlatımı ve sınav programı.

**Açmak için:** `index.html` dosyasını herhangi bir tarayıcıda açın. GitHub Pages açıksa: https://alpkiraym.github.io/madhal/

## İçerik

**Konu anlatımı:** İdeal Medhal Özeti'nin ders sırasına göre 18 ünite. Arapça terimler, tablolar ve her ünitenin sonunda kısa bir test var.

1. İslam'dan Önce Araplar
2. Şeriat, Fıkıh ve Kanun
3. Şer'î Deliller ve Önceki Şeriatler
4. Fıkhın Evreleri
5. Yaşayan Ehl-i Sünnet Mezhepleri
6. Mülkiyet Teorisi: Malın Tanımı ve Haklar
7. Malın Kısımları
8. Mülkiyet ve Milk Çeşitleri
9. İrtifak Hakları ve Milk-i Tam
10. Milk-i Tamın Sebepleri: İstîlâ ve Miras
11. Şuf'a Hakkı
12. Akit: Tasarruf, Rükün ve İrade Beyanı
13. Ehliyet ve Ehliyet Arızaları
14. Velayet, Vekâlet ve Fuzûlî
15. Akdin Ayıpları ve İkrah
16. Akdin Tasnifleri
17. Muhayyerlikler
18. Ceza Nazariyesi

**Sınav merkezi:** çoktan seçmeli test, doğru-yanlış (ve 2022 sınavından sahih-batıl alıştırması), kavram eşleştirme, bilgi kartları, mülakat tarzı sorular ve vaka analizi. Ünitelere göre filtrelenebilir.

## Kaynaklar

Ders sırası ve iskelet: *İslam Fıkhına Giriş Özeti* (İdeal Medhal Özeti, 2021). Genişletme: Yusuf Çiftçi, *İslam Hukukuna Giriş Ders Notları*; Zeki Koçak – Fikret Güneş, *İslam Hukukuna Giriş* (DİYK Erzurum 2011); Faruk Yıldız usul ve medhal notları; M. Mehmetoğlu – H. İ. Aydın, *İslam Hukuku'na Giriş Özet Çalışması*; Fıkıh İlmine Giriş çalışma soruları ve 2022 Medhal sınavı cevapları. Hepsi Abdülkerîm Zeydân'ın *el-Medhal li-dirâseti'ş-şerîati'l-İslâmiyye* eserini esas alır.

## Düzenleme

İçerik `kaynak/` klasöründedir:

- `uniteler_*.js` – konu anlatımları ve ünite sonu testleri
- `sinav.js`, `sinav_ek.js` – kavramlar, doğru-yanlış, test, mülakat ve vaka soruları
- `app.html` – arayüz şablonu

Değişiklikten sonra `python kaynak/derle.py` komutu `index.html` dosyasını yeniden üretir.
