# Kedaiin — halaman marketing

Halaman statis satu kolom: `index.html` + `styles.css` + `assets/`. Tanpa framework,
tanpa build step, tanpa JavaScript (FAQ memakai `<details>` bawaan HTML).

## Melihat di lokal

```sh
python3 -m http.server 8080
# buka http://localhost:8080/
```

## Mengganti teks

Semua teks ada di `index.html`. Urutan bagian: hero → cara kerja → fitur (6 kartu) →
tampilan → harga → kata pemilik resto → tanya jawab → penutup.

- **Harga** dan **Kata pemilik resto** sengaja masih placeholder. Isi hanya dengan
  angka dan kutipan yang benar; jangan mengarang.
- Nomor WhatsApp ada di tiga tempat (`wa.me/62895415204242`) dan sekali sebagai teks
  (`0895-4152-04242`). Ganti semuanya kalau nomor berubah.

## Mengganti gambar

| Berkas | Dipakai di | Ukuran |
|---|---|---|
| `assets/hero-bill.webp` | hero | 1280×800 |
| `assets/kasir-meja.webp` | kartu "Meja & bill" | 1200×750 |
| `assets/printer.webp` | kartu "Cetak ke printer dapur & bar" | 1200×750 |
| `assets/stok.webp` | kartu "Stok & resep" | 1200×750 |
| `assets/shift.webp` | kartu "Shift & laci kas" | 1200×750 |
| `assets/laporan.webp` | kartu "Laporan penjualan" | 1200×750 |
| `assets/offline.webp` | kartu "Tetap jalan tanpa internet" | 1200×750 |
| `assets/tampilan-kasir.webp` | bagian Tampilan | 1800×1125 |
| `assets/tampilan-laporan.webp` | bagian Tampilan | 1800×1125 |
| `assets/tampilan-pengaturan.webp` | bagian Tampilan | 1800×1125 |
| `assets/og.jpg` | pratinjau tautan (og:image) | 1200×630 |

Aturan gambar: WebP/JPEG, maksimal 200 KB per berkas, lebar 2× dari lebar tampil.
Ganti `width`/`height` di `index.html` bila rasio gambar berubah, dan perbarui `alt`.
`og.html` adalah sumber `assets/og.jpg` — ubah di situ lalu tangkap ulang 1200×630.

## Cek sebelum mengunggah

- Buka di 1280×800 dan 390×844: tidak boleh ada gulir horizontal.
- Satu `h1` per halaman, semua gambar punya `alt`.
- Total berat halaman (HTML + CSS + gambar) ≤ 2 MB.
