import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { coupleInfo } from '../../data/weddingData'
import { Divider } from '../Ornament'

function ProfileCard({
  photo,
  name,
  childOrder,
  instagram,
  delay,
}: {
  photo: string
  name: string
  childOrder: string
  instagram: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="flex flex-col items-center text-center gap-3"
    >
      <div className="relative">
        <div className="w-36 h-44 rounded-t-[100px] rounded-b-none overflow-hidden border-2 border-gold">
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute -inset-1.5 rounded-t-[100px] rounded-b-none border border-gold/30" />
      </div>
      <h3 className="font-display text-2xl text-cream mt-1">{name}</h3>
      <p className="font-body text-xs text-cream/70 leading-relaxed max-w-[220px]">
        {childOrder}
      </p>
      <a
        href={`https://instagram.com/${instagram.replace('@', '')}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 text-gold-light text-xs font-body"
      >
        <Instagram size={13} /> {instagram}
      </a>
    </motion.div>
  )
}

export default function CoupleProfile() {
  return (
    <section className="section-pad relative overflow-hidden bg-gradient-to-b from-[#120E0C] via-[#1F1714] to-[#120E0C]">
      <div className="text-center mb-10">
        <p className="font-body uppercase tracking-[0.25em] text-xs text-gold-light">
          Kedua Mempelai
        </p>
        <Divider />
      </div>

      <div className="flex flex-col gap-14">
        <ProfileCard
          photo={coupleInfo.groomPhoto}
          name={coupleInfo.groomFullName}
          childOrder={coupleInfo.groomChildOrder}
          instagram={coupleInfo.groomInstagram}
          delay={0}
        />
        <div className="flex justify-center">
          <span className="font-script italic text-3xl text-gold-light">&</span>
        </div>
        <ProfileCard
          photo={coupleInfo.bridePhoto}
          name={coupleInfo.brideFullName}
          childOrder={coupleInfo.brideChildOrder}
          instagram={coupleInfo.brideInstagram}
          delay={0.15}
        />
      </div>
    </section>
  )
}
