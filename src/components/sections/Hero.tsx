import { motion } from 'framer-motion'
// 1. GANTI KODE IMPORT DI BAWAH INI (coverBackground diubah menjadi mainBackground)
import { coupleInfo, weddingDateDisplay, mainBackground } from '../../data/weddingData'
import { Divider } from '../Ornament'

export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-8 overflow-hidden"
      // 2. GANTI PROP STYLE DI BAWAH INI AGAR MENGGUNAKAN mainBackground
      style={{
        backgroundImage: `url(${mainBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10"
      >
        <p className="font-body uppercase tracking-[0.3em] text-xs text-gold-light mb-4">
          Undangan Ngunduh Mantu
        </p>
        <h1 className="font-display text-5xl text-cream">
          {coupleInfo.groomNickname}
          <span className="block font-script italic text-gold-light text-2xl my-2">&</span>
          {coupleInfo.brideNickname}
        </h1>
        <Divider />
        <p className="font-script text-xl text-gold-light">{weddingDateDisplay}</p>
        <p className="font-body text-sm text-cream/70 mt-6 max-w-[280px] mx-auto leading-relaxed">
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir
          merayakan hari bahagia kami.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-gold-light/80"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-gold-light to-transparent" />
      </motion.div>
    </section>
  )
}
