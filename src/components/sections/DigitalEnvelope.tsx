import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Gift, Home, CreditCard, MapPin } from "lucide-react";
import { Divider } from "../Ornament";

export default function DigitalEnvelope() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // DATA UTAMA: Menggunakan data asli BNI Danni dari kode Anda
  const dataBank = {
    name: "Danni Rozaq Ihsanuddin",
    provider: "BNI",
    accountNumber: "2091013532",
    logoImg: "/images/qr/Bni-logo.png",
  };

  const giftAddress = {
    receiver: "Danni Rozaq Ihsanuddin",
    phone: "085747495826",
    detail:
      "Perumahan Kutilang Sari I E12B, RT04/RW09, Susukan, Ungaran Timur, 50516",
  };

  return (
    <section
      className="section-pad relative overflow-hidden bg-[#120e0c]"
      style={{
        backgroundImage:
          "radial-gradient(rgba(201, 162, 39, 0.08) 1.2px, transparent 1.2px), radial-gradient(rgba(201, 162, 39, 0.05) 1.2px, transparent 1.2px)",
        backgroundSize: "32px 32px",
        backgroundPosition: "0 0, 16px 16px", // Trik CSS untuk membuat posisi titik bergeser silang estetik
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

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
          memberikan tanda kasih, kami menyediakan opsi berikut.
        </p>
      </div>

      <div className="flex flex-col gap-6 relative z-10 px-3 w-full max-w-[440px] mx-auto">
        {/* ================= KARTU ATAS: TRANSFER BANK BNI ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-gold/15 bg-gradient-to-br from-[#1d1613] via-[#15110e] to-[#0f0c0a] p-6 text-left shadow-[0_20px_40px_rgba(0,0,0,0.65)] overflow-hidden"
        >
          <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold/20 rounded-tl" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold/20 rounded-br" />

          {/* Baris Atas Kartu Bank */}
          <div className="flex justify-between items-center w-full mb-5">
            <div className="flex flex-col">
              <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold-light/60 font-bold leading-none">
                Nama Penerima
              </span>
              <h3 className="font-display text-lg text-cream tracking-wide mt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                {dataBank.name}
              </h3>
            </div>

            {/* TEMPAT LOGO GAMBAR BNI */}
            <div className="flex items-center justify-end pt-0.5">
              <img
                src={dataBank.logoImg}
                alt="Logo BNI"
                className="h-4 max-w-[65px] w-auto object-contain opacity-95 brightness-110"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const parent = e.currentTarget.parentElement;
                  if (parent)
                    parent.innerHTML = `<span class="text-xs font-mono text-[#E55300] font-bold tracking-wider">BNI</span>`;
                }}
              />
            </div>
          </div>

          {/* PERBAIKAN REVISI UTAMA: Mengubah susunan menjadi flex-col (Atas-Bawah) agar nomor rekening leluasa */}
          <div className="flex flex-col gap-3 bg-black/40 border border-gold/10 p-4 rounded-2xl shadow-inner w-full text-center">
            <div className="py-1">
              <span className="font-mono text-base tracking-[0.15em] font-semibold text-gold-light">
                {dataBank.accountNumber}
              </span>
            </div>

            {/* Tombol salin dipindah ke bawah, melebar penuh ke samping (Full Width) */}
            {/* KODE BARU: Tombol Rekening saat sukses tetap berwarna emas mewah */}
            <button
              onClick={() => handleCopy(dataBank.accountNumber, 1)}
              className={`inline-flex items-center justify-center gap-2 border transition-all duration-300 font-body text-xs font-semibold tracking-wider py-2.5 rounded-xl shadow-md w-full ${
                copiedIndex === 1
                  ? "bg-gold/20 border-gold/40 text-gold-light scale-[0.98]" // <-- Solusi: Menggunakan emas transparan saat tersalin
                  : "bg-gold/10 border-gold/20 text-gold-light hover:bg-gold/20 active:scale-[0.97]"
              }`}
            >
              {copiedIndex === 1 ? (
                <>
                  <Check size={13} className="text-gold-light" /> Nomor Rekening
                  Tersalin
                </> // Ikon centang berwarna emas
              ) : (
                <>
                  <CreditCard size={12} /> Salin Nomor Rekening
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* ================= KARTU BAWAH: ALAMAT KADO FISIK ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-3xl border border-gold/15 bg-gradient-to-br from-[#1d1613] via-[#15110e] to-[#0f0c0a] p-6 text-left shadow-[0_20px_40px_rgba(0,0,0,0.65)] overflow-hidden"
        >
          <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold/20 rounded-tl" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold/20 rounded-br" />

          {/* Baris Atas Kartu Alamat */}
          <div className="flex justify-between items-start w-full mb-4">
            <div className="flex flex-col">
              <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold-light/60 font-bold leading-none">
                Pengiriman Kado Fisik
              </span>
              <h3 className="font-display text-lg text-cream tracking-wide mt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] flex items-center gap-2">
                <Home size={16} className="text-gold-light" /> Rumah Mempelai
                Pria
              </h3>
            </div>
          </div>

          {/* Baris Bawah: Detail Alamat dan Tombol Salin */}
          <div className="bg-black/40 border border-gold/10 p-4 rounded-2xl shadow-inner w-full flex flex-col gap-3">
            <div className="text-xs font-body text-cream/80 leading-relaxed">
              <p className="font-semibold text-gold-light text-sm mb-1">
                {giftAddress.receiver} ({giftAddress.phone})
              </p>
              <p className="text-cream/60 leading-relaxed">
                {giftAddress.detail}
              </p>
            </div>

            {/* PERBAIKAN SINTAKS: Memperbaiki penutupan tag tombol yang sempat rusak/terpotong */}
            <button
              onClick={() => handleCopy(giftAddress.detail, 2)}
              className={`inline-flex items-center justify-center gap-2 border transition-all duration-300 font-body text-xs font-semibold tracking-wider py-2.5 rounded-xl shadow-md w-full ${
                copiedIndex === 2
                  ? "bg-gold/20 border-gold/40 text-gold-light scale-[0.98]" // <-- Solusi: Menghapus warna hijau, ganti dengan emas redup anggun
                  : "bg-gold/10 border-gold/20 text-gold-light hover:bg-gold/20 active:scale-[0.97]"
              }`}
            >
              {copiedIndex === 2 ? (
                <>
                  <Check size={13} className="text-gold-light" /> Alamat
                  Berhasil Disalin
                </>
              ) : (
                <>
                  <MapPin size={12} /> Salin Alamat Rumah
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
