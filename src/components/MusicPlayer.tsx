import { useEffect, useRef, useState } from 'react'
import { Music, Pause } from 'lucide-react'

// Tambahkan interface props di atas fungsi
interface MusicPlayerProps {
  shouldPlay: boolean;
}

export default function MusicPlayer({ shouldPlay }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  // Otomatis putar musik ketika status shouldPlay bernilai true
  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.play()
        .then(() => setPlaying(true))
        .catch((err) => console.log("Autoplay diblokir", err))
    }
  }, [shouldPlay])

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
      >
        <div className={playing ? 'animate-spin-slow' : ''}>
          {playing ? <Pause size={16} /> : <Music size={16} />}
        </div>
      </button>
    </>
  )
}
