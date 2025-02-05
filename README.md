# Civil Career

**Program Pembinaan Mahasiswa Wirausaha (P2MW) Universitas Tadulako**

Aplikasi pembelajaran berbasis web yang dibangun menggunakan Next.js dan React.

## Struktur Folder

```
src/
├── app/                    # Folder utama Next.js app router
├── components/            # Komponen yang dapat digunakan kembali
│   └── layout/           # Komponen layout seperti Header dan Sidebar
├── features/             # Fitur-fitur utama aplikasi
│   ├── dashboard/        # Halaman dashboard dan komponennya
│   ├── home/            # Halaman beranda dan komponennya
│   └── video/           # Fitur video pembelajaran
└── store/               # State management (Zustand)
```

## Deskripsi Folder

### `src/app`
Folder ini berisi konfigurasi routing Next.js dan layout utama aplikasi. File `page.tsx` berfungsi sebagai halaman utama (root).

### `src/components`
Berisi komponen-komponen reusable yang dapat digunakan di berbagai bagian aplikasi.
- `layout/`: Komponen layout seperti Header dan Sidebar yang digunakan di seluruh aplikasi

### `src/features`
Berisi modul-modul fitur utama aplikasi yang diorganisir berdasarkan domain:
- `dashboard/`: Fitur dashboard user yang menampilkan learning path dan course cards
- `home/`: Halaman beranda dengan informasi features dan landing page
- `video/`: Fitur pembelajaran video termasuk video player dan daftar pelajaran

### `src/store`
Berisi state management menggunakan Zustand untuk mengelola state global aplikasi.

## Teknologi yang Digunakan

- Next.js
- React
- TypeScript
- Zustand (State Management)

## Cara Menjalankan Proyek

1. Install dependencies:
```bash
npm install
# atau
yarn install
# atau
pnpm install
# atau
bun install
```

2. Jalankan development server:
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

3. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Fitur Utama

- 📚 Learning Path
- 🎥 Video Pembelajaran
- 📱 Dashboard Interaktif
- 🔍 Pencarian Kursus
- 👤 Manajemen Profil

## Kontribusi

Silakan buat pull request untuk kontribusi. Untuk perubahan besar, harap buka issue terlebih dahulu untuk mendiskusikan perubahan yang diinginkan.
