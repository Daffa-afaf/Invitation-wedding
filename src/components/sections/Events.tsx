import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Navigation } from "lucide-react";
import { events } from "../../data/weddingData";
import { Divider } from "../Ornament";

export default function Events() {
  return (
    // Menggunakan gradasi radial halus agar bagian tengah seksi ini terlihat agak menyala/terang (tidak flat)
    <section className="section-pad bg-radial-theme relative overflow-hidden bg-[#120e0c]">
      {/* Dekorasi lingkaran cahaya mewah di latar belakang */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-maroon-dark/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="text-center mb-12 relative z-10">
        <p className="font-body uppercase tracking-[0.3em] text-[11px] text-gold-light opacity-90">
          Save The Date
        </p>
        <Divider />
      </div>

      <div className="flex flex-col gap-8 relative z-10 px-2">
        {events.map((event, idx) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
            // KARTU BARU: Menggunakan gradasi mewah dari cokelat tua ke hitam, bayangan hitam tebal, dan border emas tipis yang solid
            className="relative rounded-3xl border border-gold/20 bg-gradient-to-b from-[#1c1613] to-[#14100e] p-7 text-center shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
          >
            {/* Aksen hiasan sudut mini khas undangan premium */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold/30 rounded-tl" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gold/30 rounded-tr" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gold/30 rounded-bl" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold/30 rounded-br" />

            {/* Judul Acara dengan efek glow halus */}
            <h3 className="font-display text-2xl text-cream tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-6">
              {event.title}
            </h3>

            <div className="flex flex-col gap-4 items-center">
              {/* Box Tanggal dengan background capsule estetik */}
              <div className="flex items-center gap-3 bg-black/30 border border-gold/10 px-5 py-2 rounded-full text-cream/90 text-xs font-body tracking-wider shadow-inner">
                <CalendarDays size={14} className="text-gold-light" />
                {event.date}
              </div>

              {/* Box Waktu */}
              <div className="flex items-center gap-3 bg-black/30 border border-gold/10 px-5 py-2 rounded-full text-cream/90 text-xs font-body tracking-wider shadow-inner">
                <Clock size={14} className="text-gold-light" />
                {event.time}
              </div>

              {/* Box Alamat yang rapi, bersih, dan kontras */}
              <div className="flex flex-col items-center gap-2 mt-2 max-w-[280px]">
                <div className="flex items-center gap-2 justify-center">
                  <MapPin
                    size={15}
                    className="text-gold-light flex-shrink-0 animate-bounce"
                    style={{ animationDuration: "3s" }}
                  />
                  <span className="text-cream font-display text-base tracking-wide">
                    {event.location}
                  </span>
                </div>
                <span className="text-cream/60 text-xs text-center leading-relaxed font-body px-2">
                  {event.address}
                </span>
              </div>
            </div>

            {/* Tombol Buka Lokasi namun untuk card akad nikah ditiadakan tombol navigasinya*/}
            {event.title !== "Akad Nikah" && (
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-7 w-full max-w-[200px] bg-gradient-to-r from-gold via-gold-light to-gold text-ink font-body font-semibold text-xs uppercase tracking-widest py-3 rounded-full shadow-lg shadow-black/50 hover:brightness-110 active:scale-[0.97] transition-all duration-300"
              >
                <Navigation size={12} strokeWidth={2.5} />
                Buka Lokasi
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
