// =========================================================================
// SEMUA KONTEN UNDANGAN DIATUR DI FILE INI.
// Ganti teks & path gambar di bawah sesuai kebutuhan kamu.
// Gambar diletakkan di folder /public/images/... (lihat komentar tiap bagian)
// =========================================================================

export const coupleInfo = {
  groomFullName: 'Danni Rozaq Ihsanuddin',
  groomNickname: 'Danni',
  groomChildOrder: 'Putra pertama dari Bapak Dwi Wuryanto & Ibu Susanti',
  groomInstagram: '@dannirzq',
  brideFullName: 'Putri Indah Lestari',
  brideNickname: 'Putri',
  brideChildOrder: 'Putri kedua dari Bapak Kanafi Heriyanto & Ibu Sri Wahyuni',
  brideInstagram: '@putriindaahl',
  // PERBAIKAN: Jalur foto profil menggunakan slash '/' dan tanpa kata 'public'
  groomPhoto: '/images/couple/profil3.jpeg',
  bridePhoto: '/images/couple/profil5.jpeg',
}

// Tanggal & waktu acara akad, dipakai untuk countdown dinamis
export const weddingDateTime = '2026-08-01T11:00:00+07:00'
export const weddingDateDisplay = '01 . 08 . 2026'

// Teks keterangan tanggal lengkap di bagian bawah kartu countdown
export const weddingDateFull = 'Sabtu, 01 Agustus 2026'

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
    year: 'Agustus 2016',
    title: 'Pertama Bertemu',
    description:
      'Kami bertemu untuk pertama kali saat menempuh pendidikan di kampus POLITEKNIK NEGERI MARITIM INDONESIA SEMARANG.',
    photo: '/images/love-story/lovestory1.jpeg',
  },
  {
    year: 'Juni 2025',
    title: 'Mulai Dekat',
    description:
      'Kami bertemu kembali sebagai teman lama yang sudah lama tidak bertemu, dari pertemuan itu kami mulai saling mengenal dan dekat satu sama lain.',
    photo: '/images/love-story/lovestory2.jpeg',
  },
  {
    year: 'Juni 2025',
    title: 'Resmi Berkomitmen',
    description:
      'Setelah melewati banyak hal bersama, kami memutuskan untuk saling serius menjalani hubungan ini.',
    photo: '/images/love-story/lovestory3.jpeg',
  },
  {
    year: 'Juni 2026',
    title: 'Hari Bahagia Kami',
    description:
      'Pada tanggal 6 Juni 2026 kami resmi mengikat janji suci pernikahan dan memulai hidup baru sebagai pasangan suami istri.',
    photo: '/images/love-story/lovestory4.jpeg',
  },
]

// Bebas isi berapapun foto di dalam array ini, layout tidak akan rusak/pecah
export const galleryPhotos = [
  { src: '/images/gallery/gallery1.jpeg', alt: 'Foto prewedding Dani & Putri 1' },
  { src: '/images/gallery/gallery2.jpeg', alt: 'Foto prewedding Dani & Putri 2' },
  { src: '/images/gallery/gallery5.jpeg', alt: 'Foto prewedding Dani & Putri 3' },
  { src: '/images/gallery/gallery4.jpeg', alt: 'Foto prewedding Dani & Putri 4' },
  { src: '/images/gallery/gallery6.jpeg', alt: 'Foto prewedding Dani & Putri 5' },
]

// Acara / rangkaian kegiatan
export const events = [
  {
    title: 'Akad Nikah',
    date: 'Sabtu, 06 Juni 2026',
    time: '08.00 – 09.30 WIB',
    location: 'Kediaman Mempelai Wanita',
    address: 'Jl. Damai, Gg. Rahayu, Duri - Riau',
    mapsUrl: 'https://maps.app.goo.gl/rJ8qmuhYU5Um9S6X7',
  },
  {
    title: 'Ngunduh Mantu',
    date: 'Sabtu, 01 Agustus 2026',
    time: '11.00 – 14.00 WIB',
    location: 'Warung Joglo Mbah Singo',
    address: 'Jl. Ke Perkebunan No.1, Wonorejo, Bawen, Kec. Bawen, Kabupaten Semarang, Jawa Tengah',
    mapsUrl: 'https://maps.app.goo.gl/AeXptVTp7QhPsAtG8',
  },
]

// Amplop digital — rekening & QRIS masing-masing mempelai
export const digitalGifts = [
  {
    name: 'Danni Rozaq Ihsanuddin',
    bank: 'BNI',
    accountNumber: '0435293106',
    qrImage: '/images/qr/Bni-logo.png',
  },
  {
    name: 'Putri Indah Lestari',
    bank: 'BCA',
    accountNumber: '0092690057',
    qrImage: '/images/qr/Bca-logo.png',
  },
]

export const thankYouMessage =
  'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restu yang diberikan, kami mengucapkan terima kasih yang sebesar-besarnya.'
