import { useEffect, useState } from 'react'

export function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState(() => calculate(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculate(targetDate))
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return timeLeft
}

function calculate(targetDate: string) {
  const total = +new Date(targetDate) - +new Date()
  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
  }
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / 1000 / 60) % 60),
    seconds: Math.floor((total / 1000) % 60),
    isPast: false,
  }
}
