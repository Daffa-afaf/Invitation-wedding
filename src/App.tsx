import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Cover from './components/Cover'
import MusicPlayer from './components/MusicPlayer'
import Hero from './components/sections/Hero'
import QuranVerse from './components/sections/QuranVerse'
import CoupleProfile from './components/sections/CoupleProfile'
import Countdown from './components/sections/Countdown'
import LoveStory from './components/sections/LoveStory'
import Gallery from './components/sections/Gallery'
import Events from './components/sections/Events'
import DigitalEnvelope from './components/sections/DigitalEnvelope'
import ThankYou from './components/sections/ThankYou'

// 1. IMPORT VARIABEL BACKGROUND UTAMA DI SINI
import { mainBackground } from './data/weddingData'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [guestName, setGuestName] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const to = params.get('to')
    if (to) setGuestName(to.replace(/\+/g, ' '))
  }, [])

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [opened])

  return (
    <>
      {/* PERBAIKAN: Mengirimkan status opened agar musik berputar tepat saat tombol diklik */}
      <MusicPlayer shouldPlay={opened} />

      <AnimatePresence>
        {!opened && (
          <motion.div
            key="cover"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50"
            style={{ maxWidth: 480, margin: '0 auto' }}
          >
            <Cover guestName={guestName} onOpen={() => setOpened(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {opened && (
        // 2. TAMBAHKAN CLASS UTILITY BACKGROUND & KODE STYLE DI BAWAH INI
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${mainBackground})` }}
        >
          {/* Layer overlay opsional agar teks di atas background utama tetap mudah dibaca */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Konten Undangan Utama */}
          <div className="relative z-10">
            <Hero />
            <QuranVerse />
            <CoupleProfile />
            <Countdown />
            <LoveStory />
            <Gallery />
            <Events />
            <DigitalEnvelope />
            <ThankYou />
          </div>
        </motion.main>
      )}
    </>
  )
}
