# Kedaiin — halaman marketing

Halaman statis satu kolom: `index.html` + `styles.css` + `main.js` + `assets/`. Tanpa framework,
tanpa build step, tanpa library. `main.js` (~2,7 KB) hanya untuk reveal, accordion FAQ, dan
lightbox gambar (klik gambar → overlay ukuran penuh; `Escape`/×/klik latar menutup).

## Melihat di lokal

```sh
python3 -m http.server 8080
# buka http://localhost:8080/
```

## Mengganti teks

Semua teks ada di `index.html`. Urutan bagian: hero → cara kerja → fitur (6 kartu) →
tampilan → apa yang baru (rilis) → harga → unduhan (3 kartu) → kata pemilik resto →
tanya jawab → penutup.

- **Harga** dan **Kata pemilik resto** sengaja masih placeholder. Isi hanya dengan
  angka dan kutipan yang benar; jangan mengarang.
- Nomor WhatsApp ada di tiga tempat (`wa.me/62895415204242`) dan sekali sebagai teks
  (`0895-4152-04242`). Ganti semuanya kalau nomor berubah.

## Mengganti gambar

| Berkas | Dipakai di | Ukuran |
|---|---|---|
| `assets/hero-bill.webp` | hero (dan lightbox) | 1000×625 |
| `assets/fitur-kasir-meja-crop.webp` | kartu "Meja & bill" | 460×288 |
| `assets/fitur-printer-crop.webp` | kartu "Cetak ke printer dapur & bar" | 460×288 |
| `assets/fitur-stok-crop.webp` | kartu "Stok & resep" | 460×288 |
| `assets/fitur-shift-crop.webp` | kartu "Shift & laci kas" | 460×288 |
| `assets/fitur-laporan-crop.webp` | kartu "Laporan penjualan" | 460×288 |
| `assets/fitur-offline-crop.webp` | kartu "Tetap jalan tanpa internet" | 460×288 |
| `assets/kasir-meja.webp`, `printer.webp`, `stok.webp`, `shift.webp`, `laporan.webp`, `offline.webp` | hanya lightbox (`data-full` di kartu) | 1200×750 |
| `assets/tampilan-kasir.webp` | bagian Tampilan | 1280×800 |
| `assets/tampilan-laporan.webp` | bagian Tampilan | 1280×800 |
| `assets/tampilan-pengaturan.webp` | bagian Tampilan | 1280×800 |
| `assets/screenshots/pengaturan-kategori.webp` | seksi "Apa yang baru" (kategori Printer) | 1280×800 |
| `assets/og.jpg` | pratinjau tautan (og:image) | 1200×630 |

Kartu Fitur memakai potongan detail (crop) supaya teks di dalam tangkapan layar terbaca;
berkas 1200×750 tetap disimpan sebagai gambar ukuran penuh di lightbox.

Aturan gambar: WebP/JPEG, maksimal 200 KB per berkas, skala tampil ≥ 0,6 (kartu fitur),
≥ 0,75 (Tampilan), ≥ 0,55 (hero) diukur `displayedWidth / naturalWidth` pada 1280 px.
Ganti `width`/`height` di `index.html` bila rasio gambar berubah, dan perbarui `alt`.
`og.html` adalah sumber `assets/og.jpg` — ubah di situ lalu tangkap ulang 1200×630.

## Cek sebelum mengunggah

- Buka di 1280×800 dan 390×844: tidak boleh ada gulir horizontal.
- Satu `h1` per halaman, semua gambar punya `alt`.
- Total berat halaman (HTML + CSS + gambar) ≤ 2 MB.
- Unduhan di seksi "Unduhan" menunjuk tag rilis tetap (`v1.2.7`), bukan `/latest`: ganti
  ketiga tautan + ukuran di kartu saat versi baru naik.
- Baris "Installer belum ditandatangani" wajib tetap di seksi unduhan selama sertifikat
  penandatangan belum ada — jangan dipindah ke halaman lain atau disembunyikan.

## Publikasi

Repo publik: <https://github.com/LIinz27/Kedaiin-landing> — GitHub Pages dari branch `main`,
folder `/ (root)`. URL sementara (aktif):

<https://liinz27.github.io/Kedaiin-landing/>

Setiap `git push` ke `main` menerbitkan ulang halaman dalam ~1 menit.

### Custom domain `kedaiin.id` — BELUM AKTIF

Domain **belum dibeli**, jadi DNS belum diubah dan GitHub Pages belum diarahkan. Jangan
menganggap `kedaiin.id` hidup sampai dua langkah di bawah selesai.

1. **DNS di registrar** (setelah domain dibeli):

   | Tipe | Nama | Nilai |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `liinz27.github.io` |

2. **GitHub** → repo → Settings → Pages → Custom domain: `kedaiin.id` (atau `www.kedaiin.id`),
   Save; tunggu sertifikat terbit, lalu centang **Enforce HTTPS**.

Setelah itu `canonical`, `og:url`, dan `og:image` di `index.html` sudah menunjuk `https://kedaiin.id/`
sehingga tidak perlu diubah lagi.
