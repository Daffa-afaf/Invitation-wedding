import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Gift } from 'lucide-react'
import { digitalGifts } from '../../data/weddingData'
import { Divider } from '../Ornament'

export default function DigitalEnvelope() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    // Menggunakan warna latar solid yang mengalir halus dari seksi di atasnya
    <section className="section-pad bg-[#120e0c] relative overflow-hidden">
      {/* Dekorasi pendaran cahaya emas lembut di latar belakang */}
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="text-center mb-10 relative z-10">
        <div className="flex justify-center mb-2 text-gold-light">
          <Gift size={28} strokeWidth={1.5} />
        </div>
        <p className="font-body uppercase tracking-[0.25em] text-[11px] text-gold-light opacity-90">
          Gift
        </p>
        <Divider />
        <p className="font-body text-xs text-cream/60 max-w-[280px] mx-auto leading-relaxed mt-2">
          Doa restu Anda adalah hal yang paling kami harapkan. Namun tanpa mengurangi rasa hormat jika Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih untuk kami, dapat melalui:
        </p>
      </div>

      <div className="flex flex-col gap-6 relative z-10 px-2">
        {digitalGifts.map((gift, idx) => (
          <motion.div
            key={gift.accountNumber}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            // KARTU REKENING MEWAH: Gradasi cokelat-hitam tebal, border emas halus, dan bayangan dalam (shadow-2xl)
            className="relative rounded-3xl border border-gold/20 bg-gradient-to-b from-[#1c1613] to-[#14100e] p-6 text-center shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          >
            {/* Aksen hiasan siku sudut dekoratif agar serasi dengan seksi acara */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold/20 rounded-tl" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gold/20 rounded-tr" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gold/20 rounded-bl" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold/20 rounded-br" />

            {/* Area QR Code (Jika diisi gambar QR asli akan otomatis terbingkai rapi) */}
            {gift.qrImage && (
              <div className="flex justify-center mb-5">
                <div className="p-3 bg-white/5 border border-gold/10 rounded-2xl shadow-inner max-w-[140px] aspect-square flex items-center justify-center">
                  <img 
                    src={gift.qrImage} 
                    alt={`QR Code ${gift.name}`} 
                    className="w-full h-full object-contain rounded-lg opacity-85"
                    // Menangani teks penampung bawaan template jika gambar QR belum diganti user
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) parent.innerHTML = `<span class="text-[10px] text-gold-light/60 p-2 font-body uppercase tracking-wider block">QR Code Ready</span>`;
                    }}
                  />
                </div>
              </div>
            )}

            {/* Nama Bank */}
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-gold-light/80 font-bold">
              {gift.bank}
            </span>

            {/* Nama Pemilik Rekening */}
            <h3 className="font-display text-xl text-cream tracking-wide mt-1.5 mb-4">
              {gift.name}
            </h3>

            {/* Tombol Salin Kapsul yang Dipercantik Interaksinya */}
            <button
              onClick={() => handleCopy(gift.accountNumber, idx)}
              className={`inline-flex items-center justify-center gap-2.5 mx-auto border transition-all duration-300 font-body text-xs tracking-wider px-5 py-2.5 rounded-full shadow-md ${
                copiedIndex === idx
                  ? 'bg-emerald-800/30 border-emerald-500/40 text-emerald-300 scale-[0.98]'
                  : 'bg-black/30 border-gold/15 text-cream/80 hover:border-gold/40 hover:bg-black/50 active:scale-[0.97]'
              }`}
            >
              <span className="font-mono tracking-widest font-medium text-sm text-gold-light">
                {gift.accountNumber}
              </span>
              <span className="w-px h-3 bg-gold/20" />
              {copiedIndex === idx ? (
                <Check size={14} className="text-emerald-400" />
              ) : (
                <Copy size={13} className="text-gold-light" />
              )}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
