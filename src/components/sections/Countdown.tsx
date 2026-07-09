import { motion } from 'framer-motion'
import { CalendarPlus } from 'lucide-react'
import { useCountdown } from '../../hooks/useCountdown'
import { downloadIcsEvent } from '../../utils/generateIcs'
import { weddingDateTime, weddingDateFull, coupleInfo } from '../../data/weddingData'
import { MonogramSeal } from '../Ornament'

function TimeCard({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      key={value}
      initial={{ opacity: 0.4, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      // PERBAIKAN KARTU ANGKA: Putih gading mewah dengan border emas tipis dan bayangan lembut
      className="flex-1 bg-[#F3EAD8] border border-gold/20 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] py-4 flex flex-col items-center"
    >
      {/* Warna angka diubah ke maroon tua berkelas agar kontras */}
      <span className="font-display text-3xl text-[#5A1818] font-bold leading-none">
        {String(value).padStart(2, '0')}
      </span>
      <span className="font-body text-[9px] uppercase tracking-[0.15em] font-semibold text-ink/60 mt-2">
        {label}
      </span>
    </motion.div>
  )
}

export default function Countdown() {
  const { days, hours, minutes, seconds, isPast } = useCountdown(weddingDateTime)

  const handleSaveDate = () => {
    downloadIcsEvent({
      title: `Pernikahan ${coupleInfo.groomNickname} & ${coupleInfo.brideNickname}`,
      description: 'Undangan ngunduh mantu — jangan lupa hadir dan berikan doa restu.',
      location: 'Ungaran, Semarang, Jawa Tengah',
      start: new Date(weddingDateTime),
      durationHours: 5,
    })
  }

  return (
    // 1. PERBAIKAN BACKGROUND LUAR: Diubah menjadi hitam-cokelat solid (#120e0c) polos agar warna merah pudar tertutup total
    <section className="section-pad bg-[#120E0C] relative overflow-hidden" style={{ backgroundImage: 'radial-gradient(rgba(201, 162, 39, 0.15) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      {/* Aksen cahaya emas redup di latar belakang agar tidak flat */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gold/5 rounded-full blur-[90px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        // 2. PERBAIKAN KOTAK BESAR: Menggunakan gradasi gelap premium dari cokelat tua ke hitam, menyatu dengan seksi acara
        className="relative rounded-3xl bg-gradient-to-b from-[#1c1613] to-[#14100e] border border-gold/20 px-6 py-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
      >
        {/* Aksen hiasan siku sudut mini khas undangan premium */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold/20 rounded-tl" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gold/20 rounded-tr" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gold/20 rounded-bl" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold/20 rounded-br" />

        <div className="flex justify-center mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          <MonogramSeal size={60} />
        </div>

        <h2 className="font-display text-3xl text-cream tracking-wide">Menghitung Hari</h2>

        {isPast ? (
          <p className="font-script text-2xl text-gold-light mt-8 animate-pulse">Hari bahagia telah tiba!</p>
        ) : (
          <div className="flex justify-center gap-2.5 mt-8 px-1">
            <TimeCard value={days} label="Hari" />
            <TimeCard value={hours} label="Jam" />
            <TimeCard value={minutes} label="Menit" />
            <TimeCard value={seconds} label="Detik" />
          </div>
        )}

        {/* Box Tag Tanggal yang lebih rapi */}
        <div className="inline-block bg-black/40 border border-gold/10 px-5 py-1.5 rounded-full mt-6 shadow-inner">
          <p className="font-body text-[11px] uppercase tracking-wider text-gold-light/90">{weddingDateFull}</p>
        </div>

        <br />

        {/* 3. PERBAIKAN TOMBOL: Dibuat bergradasi emas solid mengkilap, senada dengan tombol lokasi seksi acara */}
        <button
          onClick={handleSaveDate}
          className="inline-flex items-center justify-center gap-2 mt-7 w-full max-w-[220px] bg-gradient-to-r from-gold via-gold-light to-gold text-ink font-body font-semibold text-xs uppercase tracking-widest py-3 rounded-full shadow-lg shadow-black/50 hover:brightness-110 active:scale-[0.97] transition-all duration-300"
        >
          <CalendarPlus size={13} strokeWidth={2.5} />
          Simpan Tanggalnya
        </button>
      </motion.div>
    </section>
  )
}
