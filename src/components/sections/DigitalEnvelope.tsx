import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Gift } from "lucide-react";
import { digitalGifts } from "../../data/weddingData";
import { Divider } from "../Ornament";

export default function DigitalEnvelope() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="section-pad relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1C1512] via-[#120E0C] to-[#0A0706]">
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
          Doa restu Anda adalah hal yang paling kami harapkan. Namun jika ingin
          memberikan tanda kasih, kami menyediakan amplop digital berikut.
        </p>
      </div>

      <div className="flex flex-col gap-6 relative z-10 px-3">
        {digitalGifts.map((gift, idx) => (
          <motion.div
            key={gift.accountNumber}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            className="relative rounded-3xl border border-gold/15 bg-gradient-to-br from-[#1d1613] via-[#15110e] to-[#0f0c0a] p-6 text-left shadow-[0_20px_40px_rgba(0,0,0,0.65)] overflow-hidden"
          >
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold/20 rounded-tl" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold/20 rounded-br" />

            {/* BARIS ATAS */}
            <div className="flex justify-between items-start w-full mb-5">
              <div className="flex flex-col">
                <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold-light/60 font-bold leading-none">
                  Nomor Rekening
                </span>
                <h3 className="font-display text-lg text-cream tracking-wide mt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {gift.name}
                </h3>
              </div>

              {gift.qrImage && (
                /* Menghilangkan semua tinggi pembungkus bawaan agar menempel natural */
                <div className="flex items-center justify-end pt-0.5">
                  <img
                    src={gift.qrImage}
                    alt={`Logo ${gift.bank}`}
                    /* PERBAIKAN: h-4 membuat logo menjadi kecil manis, max-w-[65px] mencegah melebar */
                    className="h-4 max-w-[65px] w-auto object-contain opacity-90 brightness-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent)
                        parent.innerHTML = `<span class="text-[10px] font-mono text-gold-light/60 font-bold tracking-wider">${gift.bank}</span>`;
                    }}
                  />
                </div>
              )}
            </div>

            {/* BARIS BAWAH */}
            <div className="flex justify-between items-center gap-3 bg-black/40 border border-gold/10 p-3.5 rounded-2xl shadow-inner w-full">
              <div className="flex flex-col pl-1">
                <span className="font-mono text-base tracking-[0.18em] font-semibold text-gold-light">
                  {gift.accountNumber.replace(/(\d{4})/g, "$1 ").trim()}
                </span>
              </div>

              <button
                onClick={() => handleCopy(gift.accountNumber, idx)}
                className={`inline-flex items-center justify-center gap-2 border transition-all duration-300 font-body text-xs font-medium tracking-wider px-4 py-2 rounded-xl shadow-md ${
                  copiedIndex === idx
                    ? "bg-emerald-900/30 border-emerald-500/40 text-emerald-300 scale-[0.98]"
                    : "bg-gold/10 border-gold/20 text-gold-light hover:bg-gold/20 active:scale-[0.97]"
                }`}
              >
                {copiedIndex === idx ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    Tersalin
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    Salin
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
