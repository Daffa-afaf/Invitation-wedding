import { motion } from 'framer-motion'
import { coupleInfo, thankYouMessage, coverBackground } from '../../data/weddingData'
import { Divider, MonogramSeal } from '../Ornament'

export default function ThankYou() {
  return (
    <section
      className="relative section-pad text-center overflow-hidden"
      style={{
        backgroundImage: `url(${coverBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-ink/85" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="flex justify-center mb-6">
          <MonogramSeal size={80} />
        </div>
        <p className="font-body uppercase tracking-[0.25em] text-xs text-gold-light">
          Terima Kasih
        </p>
        <Divider />
        <p className="font-body text-sm text-cream/80 leading-relaxed max-w-[280px] mx-auto">
          {thankYouMessage}
        </p>

        <div className="mt-10">
          <p className="font-script italic text-2xl text-gold-light">Kami yang berbahagia,</p>
          <h3 className="font-display text-3xl text-cream mt-3">
            {coupleInfo.groomNickname} <span className="text-gold-light">&</span>{' '}
            {coupleInfo.brideNickname}
          </h3>
        </div>

      </motion.div>
    </section>
  )
}
