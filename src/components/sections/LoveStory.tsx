import { motion } from 'framer-motion'
import { loveStory } from '../../data/weddingData'
import { Divider } from '../Ornament'

export default function LoveStory() {
  return (
    // Latar belakang menggunakan warna solid gelap senada dengan halaman lainnya
    <section className="section-pad relative overflow-hidden bg-gradient-to-b from-[#120E0C] via-[#1B1411] to-[#0F0C0A]">
      <div className="text-center mb-12 relative z-10">
        <p className="font-body uppercase tracking-[0.25em] text-[11px] text-gold-light opacity-90">
          Our Love Story
        </p>
        <Divider />
        <p className="font-body text-xs text-cream/70 max-w-[260px] mx-auto leading-relaxed mt-2">
          Perjalanan kami, dari perkenalan sederhana hingga memutuskan untuk melangkah bersama.
        </p>
      </div>

      {/* Alur Garis Lini Masa */}
      <div className="relative border-l border-gold/25 ml-4 md:ml-6 flex flex-col gap-10 z-10 pr-2">
        {loveStory.map((story, idx) => (
          <motion.div
            key={story.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="relative pl-6 md:pl-8"
          >
            {/* PERBAIKAN 1: Titik lini masa baru dengan efek lingkaran cincin emas yang menyala */}
            <div className="absolute -left-[6.5px] top-1.5 w-3 h-3 rounded-full bg-gold border border-[#120e0c] ring-4 ring-gold/15 shadow-[0_0_8px_#C9A227] z-10" />

            {/* Container Kartu Cerita */}
            <div className="rounded-3xl overflow-hidden border border-gold/15 bg-gradient-to-b from-[#1c1613] to-[#14100e] shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
              
              {/* Foto Momen */}
              <div className="w-full aspect-[4/3] overflow-hidden bg-black/20">
                <img
                  src={story.photo}
                  alt={story.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-90"
                />
              </div>

              {/* PERBAIKAN 2: Area teks menggunakan padding yang pas dan warna teks kontras */}
              <div className="p-5 text-left relative">
                {/* Aksen hiasan pojok kanan atas kartu teks */}
                <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-gold/20 rounded-tr" />
                
                {/* Penanda Tahun */}
                <span className="font-display text-sm text-gold-light tracking-wider font-semibold">
                  {story.year}
                </span>
                
                {/* Judul Momen */}
                <h3 className="font-display text-xl text-cream tracking-wide mt-1 mb-2">
                  {story.title}
                </h3>
                
                {/* Deskripsi Cerita */}
                <p className="font-body text-xs text-cream/60 leading-relaxed">
                  {story.description}
                </p>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
