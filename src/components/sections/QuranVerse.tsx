import { motion } from 'framer-motion'
import { quranVerse } from '../../data/weddingData'
import { Divider, OrnamentFrame } from '../Ornament'

export default function QuranVerse() {
  return (
    <section className="section-pad bg-ink bg-radial-fade">
      <OrnamentFrame>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="text-center py-6"
        >
          <p
            dir="rtl"
            lang="ar"
            className="font-script text-2xl leading-[2.2] text-gold-light mb-6 px-2"
          >
            {quranVerse.arabic}
          </p>
          <Divider />
          <p className="font-body text-sm text-cream/85 leading-relaxed italic px-2">
            "{quranVerse.translation}"
          </p>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold mt-4">
            {quranVerse.reference}
          </p>
        </motion.div>
      </OrnamentFrame>
    </section>
  )
}
