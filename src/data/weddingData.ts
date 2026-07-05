// =========================================================================
// SEMUA KONTEN UNDANGAN DIATUR DI FILE INI.
// Ganti teks & path gambar di bawah sesuai kebutuhan kamu.
// Gambar diletakkan di folder /public/images/... (lihat komentar tiap bagian)
// =========================================================================

export const coupleInfo = {
  groomFullName: 'Danni Rozaq Ihsanuddin',
  groomNickname: 'Danni',
  groomChildOrder: 'Putra pertama dari Bapak Dwi Wuryanto & Ibu Susanti',
  groomInstagram: '@dani.ap',
  brideFullName: 'Putri Indah Lestari',
  brideNickname: 'Putri',
  brideChildOrder: 'Putri kedua dari Bapak Kanafi Heriyanto & Ibu ',
  brideInstagram: '@putri.ayu',
  // PERBAIKAN: Jalur foto profil menggunakan slash '/' dan tanpa kata 'public'
  groomPhoto: '/images/couple/profil1.jpeg',
  bridePhoto: '/images/couple/profil2.jpeg',
}

// Tanggal & waktu acara akad, dipakai untuk countdown dinamis
export const weddingDateTime = '2026-08-02T11:00:00+07:00'
export const weddingDateDisplay = '02 . 08 . 2026'

// Teks keterangan tanggal lengkap di bagian bawah kartu countdown
export const weddingDateFull = 'Minggu, 02 Agustus 2026'

// Latar belakang halaman cover (page pembuka)
export const coverBackground = '/images/cover-bg.jpeg'

// Latar belakang halaman utama (page setelah undangan dibuka)
export const mainBackground = '/images/cover2.jpeg'

// Ayat Al-Qur'an
export const quranVerse = {
  arabic:
    'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ mِّنْ أَنْفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۚ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ',
  translation:
    'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan pasanganmu dari jenismu sendiri, agar kamu hidup tenang bersamanya. Dia juga menumbuhkan rasa cinta dan kasih sayang di antara kamu. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.',
  reference: 'QS. Ar-Rum: 21',
}

// Love story — urutkan dari awal kenal sampai memutuskan menikah
// PERBAIKAN: Jalur foto diubah dari backslash '\' ke slash '/' dan tanpa kata 'public'
export const loveStory = [
  {
    year: '2019',
    title: 'Pertama Bertemu',
    description:
      'Dipertemukan lewat teman kuliah yang sama, obrolan singkat itu ternyata jadi awal dari cerita panjang.',
    photo: '/images/love-story/lovestory1.jpeg',
  },
  {
    year: '2020',
    title: 'Mulai Dekat',
    description:
      'Dari sekadar bertukar kabar, perlahan tumbuh kebiasaan saling cerita hal kecil setiap hari.',
    photo: '/images/love-story/lovestory2.jpeg',
  },
  {
    year: '2022',
    title: 'Resmi Berkomitmen',
    description:
      'Setelah melewati banyak hal bersama, kami memutuskan untuk saling serius menjalani hubungan ini.',
    photo: '/images/love-story/lovestory3.jpeg',
  },
  {
    year: '2025',
    title: 'Lamaran',
    description:
      'Restu dari kedua keluarga menjadi langkah pertama menuju hari yang telah kami nantikan.',
    photo: '/images/love-story/lovestory4.jpeg',
  },
  {
    year: '2026',
    title: 'Menuju Pernikahan',
    description:
      'Dan kini, kami siap melangkah ke jenjang yang lebih serius — menikah dan membangun rumah tangga.',
    photo: '/images/love-story/lovestory5.jpeg',
  },
]

// Bebas isi berapapun foto di dalam array ini, layout tidak akan rusak/pecah
export const galleryPhotos = [
  { src: '/images/gallery/gallery1.jpeg', alt: 'Foto prewedding Dani & Putri 1' },
  { src: '/images/gallery/gallery2.jpeg', alt: 'Foto prewedding Dani & Putri 2' },
  { src: '/images/gallery/gallery3.jpeg', alt: 'Foto prewedding Dani & Putri 3' },
  { src: '/images/gallery/gallery4.jpeg', alt: 'Foto prewedding Dani & Putri 4' },
  { src: '/images/gallery/gallery5.jpeg', alt: 'Foto prewedding Dani & Putri 5' },
]

// Acara / rangkaian kegiatan
export const events = [
  {
    title: 'Akad Nikah',
    date: 'Sabtu, 06 Juni 2026',
    time: '08.00 – 09.30 WIB',
    location: 'Kediaman Mempelai Wanita',
    address: 'Jl. Damai-Gg. Rahayu',
    mapsUrl: 'https://maps.app.goo.gl/rJ8qmuhYU5Um9S6X7',
  },
  {
    title: 'Ngunduh Mantu',
    date: 'Minggu, 02 Agustus 2026',
    time: '11.00 – 14.00 WIB',
    location: 'Warung Joglo Mbah Singo',
    address: 'Jl. Ke Perkebunan No.1, Wonorejo, Bawen, Kec. Bawen, Kabupaten Semarang, Jawa Tengah',
    mapsUrl: 'https://maps.app.goo.gl/AeXptVTp7QhPsAtG8',
  },
]

// Amplop digital — rekening & QRIS masing-masing mempelai
export const digitalGifts = [
  {
    name: 'Dani Roza1q Ihsanuddin',
    bank: 'BCA',
    accountNumber: '1234567890',
    qrImage: '/images/qr/groom-qr.png',
  },
  {
    name: 'Putri Indah Lestari',
    bank: 'Mandiri',
    accountNumber: '0987654321',
    qrImage: '/images/qr/bride-qr.png',
  },
]

export const thankYouMessage =
  'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restu yang diberikan, kami mengucapkan terima kasih yang sebesar-besarnya.'
