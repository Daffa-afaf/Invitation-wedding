import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Maximize2 } from 'lucide-react'
import { galleryPhotos } from '../../data/weddingData'
import { Divider } from '../Ornament'

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  return (
    // UBAH: Menggunakan motion.section dengan efek spring bolak-balik yang interaktif
    <motion.section 
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }} // Aktif berulang saat scroll naik/turun
      transition={{ 
        type: "spring", 
        stiffness: 90, 
        damping: 14 
      }}
      className="section-pad relative overflow-hidden bg-gradient-to-b from-[#120e0c] via-[#16110f] to-[#120e0c]"
    >
      {/* Efek pendaran cahaya redup latar belakang agar senada dengan seksi lainnya */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Konten Utama dibungkus z-10 agar berada di atas layer pendaran cahaya */}
      <div className="relative z-10 w-full">
        <div className="text-center mb-8">
          <p className="font-body uppercase tracking-[0.25em] text-xs text-gold-light">
            Our Gallery
          </p>
          <Divider />
          <p className="font-body text-sm text-cream/70 max-w-[260px] mx-auto">
            Sekilas momen indah yang diabadikan tentang kami.
          </p>
        </div>

        {/* Slider Container */}
        <div className="w-full py-4">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.2}
            spaceBetween={16}
            loop={galleryPhotos.length > 1}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="gallery-swiper pb-12"
          >
            {galleryPhotos.map((photo, idx) => (
              <SwiperSlide key={photo.src}>
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-gold/25 bg-black/40 shadow-xl shadow-black/50">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Tombol Perbesar Foto */}
                  <button
                    onClick={() => setActive(idx)}
                    className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-ink/70 border border-gold/40 flex items-center justify-center text-gold-light backdrop-blur-sm shadow-md"
                    aria-label="Perbesar foto"
                  >
                    <Maximize2 size={14} />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Teks Petunjuk Geser Baru */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-body text-[10px] uppercase tracking-[0.2em] text-cream text-center -mt-6 mb-4 animate-pulse"
          style={{ animationDuration: '3s' }}
        >
          &larr; Geser untuk melihat foto lainnya &rarr;
        </motion.p>
      </div>

      {/* Lightbox Pop-up saat foto diklik perbesar */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-6 right-6 text-cream/80 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full"
              onClick={() => setActive(null)}
              aria-label="Tutup"
            >
              <X size={22} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={galleryPhotos[active].src}
              alt={galleryPhotos[active].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section> // UBAH: Menutup dengan tag motion.section
  )
}
