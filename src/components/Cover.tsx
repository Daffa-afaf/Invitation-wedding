import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import {
  coupleInfo,
  weddingDateDisplay,
  coverBackground,
} from "../data/weddingData";

interface CoverProps {
  guestName: string;
  onOpen: () => void;
}

export default function Cover({ guestName, onOpen }: CoverProps) {
  return (
    <div
      className="relative w-full h-screen overflow-hidden flex flex-col"
      style={{
        backgroundImage: `url(${coverBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark gradient overlay so gold text stays legible over any photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/20 to-ink/90" />

      {/* 1. KELOMPOK ATAS: Judul, Nama Pengantin, dan Tanggal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center pt-10 px-6 text-center"
      >
        <span className="font-body uppercase tracking-[0.3em] text-xs text-gold-light mb-4">
          The Wedding Of
        </span>

        {/* Pindahkan kode Nama Pengantin & Tanggal ke dalam flex-col yang sama agar menempel di bawahnya */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="font-display text-4xl text-cream leading-tight">
            {coupleInfo.groomNickname}{" "}
            <span className="text-gold-light italic">&</span>{" "}
            {coupleInfo.brideNickname}
          </h1>
          <div className="divider-flourish my-3 w-40">
            <span className="line" />
          </div>
          <p className="font-script text-lg text-gold-light tracking-wide">
            {weddingDateDisplay}
          </p>
        </motion.div>
      </motion.div>

      {/* 2. PEMBATAS RUANG TENGAH (Pindahkan ke posisi ini) */}
      <div className="flex-1" />

      {/* 3. KELOMPOK BAWAH: Nama Tamu dan Tombol */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="relative z-10 px-6 pb-10 flex flex-col items-center gap-5 w-full"
      >
        <div className="text-center">
          <p className="font-body text-[11px] uppercase tracking-[0.2em] text-gold-light/90">
            Kepada Bapak/Ibu/Saudara/i
          </p>
          <p className="font-display text-xl text-cream mt-1">
            {guestName || "Tamu Kehormatan"}
          </p>
        </div>

        <button
          onClick={onOpen}
          className="w-full max-w-[280px] flex items-center justify-center gap-2 bg-gold hover:bg-gold-light active:scale-[0.98] transition-all text-ink font-body font-medium tracking-wide py-3.5 rounded-full shadow-lg shadow-black/40"
        >
          <Mail size={18} strokeWidth={2} />
          Buka Undangan
        </button>
      </motion.div>
    </div>
  );
}
