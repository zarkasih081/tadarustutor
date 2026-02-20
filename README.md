# Tadarus Tutor v2.0 (Modular)

Platform edukasi Alquran berbasis web dengan arsitektur Vanilla JS Modular.

## Struktur Folder
- `assets/css/`: File styling (CSS Variables)
- `assets/js/modules/`: Logika bisnis modular (Router, State, Components)
- `assets/js/app.js`: Entry point

## Cara Deploy ke GitHub Pages
1. Buat repositori baru di GitHub.
2. Push seluruh file ini ke branch `main`.
3. Masuk ke **Settings > Pages**.
4. Pilih Source: **Deploy from a branch**, Branch: **main**, Folder: **/(root)**.
5. Simpan. Website akan tersedia di `https://username.github.io/repository/`.

## Cara Menambah Tutor Baru
Buka file `assets/js/modules/state.js` dan tambahkan objek baru ke dalam array `tutors`.

## Keunggulan Teknis
- **Zero Dependencies**: Tanpa framework eksternal.
- **SEO Friendly**: Dilengkapi meta tag dan struktur semantic.
- **Fast Loading**: Menggunakan lazy loading gambar dan ES Modules.
- **Hash-based Routing**: Mencegah error 404 pada navigasi internal di GitHub Pages.
