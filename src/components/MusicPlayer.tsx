import { useEffect, useRef, useState } from 'react'
import { Music, Pause } from 'lucide-react'

// Taruh file musik kamu di /public/audio/music.mp3
// Tombol ini otomatis muncul setelah undangan dibuka.
export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    audioRef.current?.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }, [])

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/music.mp3" loop />
      <button
        onClick={toggle}
        aria-label={playing ? 'Pause musik' : 'Putar musik'}
        className="fixed bottom-5 right-5 z-40 w-11 h-11 rounded-full bg-ink/80 border border-gold/50 flex items-center justify-center text-gold-light backdrop-blur-sm shadow-lg"
        style={{ maxWidth: 'calc(50% - 20px)' }}
      >
        <div className={playing ? 'animate-spin-slow' : ''}>
          {playing ? <Pause size={16} /> : <Music size={16} />}
        </div>
      </button>
    </>
  )
}
