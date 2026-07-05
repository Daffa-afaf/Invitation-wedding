# Undangan Pernikahan Digital — Dani & Putri

Struktur: **Cover (page pembuka)** → klik "Buka Undangan" → **Halaman Utama** yang bisa di-scroll
naik-turun berisi: Hero → Ayat Ar-Rum:21 → Profil Mempelai → Countdown → Love Story → Gallery →
Acara (dengan tombol Maps) → Amplop Digital → Ucapan Terima Kasih.

## 1. Jalankan di lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## 2. Ganti semua teks & tanggal

Cukup edit satu file: **`src/data/weddingData.ts`**
Semua nama, tanggal akad/resepsi, lokasi, love story, ucapan, dan nomor rekening ada di sana.
Tidak perlu sentuh file komponen lain.

## 3. Ganti gambar

Taruh foto kamu di `public/images/...` dengan nama file berikut (path sudah disiapkan di kode):

| Kebutuhan | Path |
|---|---|
| Background cover & hero & closing | `public/images/cover-bg.jpg` |
| Foto profil mempelai pria | `public/images/couple/groom.jpg` |
| Foto profil mempelai wanita | `public/images/couple/bride.jpg` |
| Foto love story (5 foto) | `public/images/love-story/1.jpg` s.d. `5.jpg` |
| Foto galeri prewedding (12 foto) | `public/images/gallery/1.jpg` s.d. `12.jpg` |
| QRIS/QR code amplop digital | `public/images/qr/groom-qr.png`, `public/images/qr/bride-qr.png` |
| (Opsional) musik latar | `public/audio/music.mp3` |

Gambar `cover-bg.jpg` sebaiknya foto vertikal (portrait) seperti contoh yang kamu kirim,
karena dipakai penuh di cover dan hero section.

Kalau jumlah foto love story atau gallery berbeda dari default, tinggal tambah/hapus item
array `loveStory` atau ubah angka `12` di `galleryPhotos` pada `weddingData.ts`.

## 4. Link personalisasi nama tamu (opsional)

Kamu bisa kirim link berbeda ke tiap tamu supaya nama mereka otomatis muncul di cover:

```
https://nama-project-kamu.vercel.app/?to=Bapak+Sutrisno
```

Spasi diganti `+`. Kalau parameter `to` tidak ada, otomatis tampil "Tamu Kehormatan".

## 5. Deploy ke Vercel

**Cara termudah (drag & drop):**
1. Jalankan `npm run build` → hasil ada di folder `dist/`
2. Buka [vercel.com](https://vercel.com) → New Project → Deploy → drag folder `dist`

**Cara via GitHub (disarankan, auto-redeploy tiap update):**
1. Push folder project ini ke repo GitHub baru
2. Di Vercel: New Project → Import repo tersebut
3. Framework Preset: **Vite** (otomatis terdeteksi)
4. Build command: `npm run build`, Output dir: `dist` (default, tidak perlu diubah)
5. Deploy

## 6. Tips ukuran file gambar

Foto galeri & love story sebaiknya dikompres dulu (misal lewat squoosh.app atau TinyPNG)
sebelum di-upload, supaya loading di HP tetap cepat — target di bawah ~300KB per foto.

## Struktur folder penting

```
src/
  data/weddingData.ts        <- SEMUA KONTEN diedit di sini
  components/
    Cover.tsx                 <- Page pembuka
    Ornament.tsx               <- Motif ornamen gold (dipakai berulang)
    MusicPlayer.tsx            <- Tombol musik latar (hapus dari App.tsx kalau tidak dipakai)
    sections/
      Hero.tsx
      QuranVerse.tsx
      CoupleProfile.tsx
      Countdown.tsx
      LoveStory.tsx
      Gallery.tsx
      Events.tsx
      DigitalEnvelope.tsx
      ThankYou.tsx
  App.tsx                      <- Merangkai semua section + logic buka undangan
public/images/                 <- Semua foto kamu diletakkan di sini
```
