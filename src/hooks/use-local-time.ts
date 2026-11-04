import { useEffect, useState } from 'react'
import { formatClock } from '@/lib/time'

/** Ticking clock for a time zone, updating once per second. */
export function useLocalTime(timeZone: string) {
  const [time, setTime] = useState(() => formatClock(timeZone))

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatClock(timeZone)), 1000)
    return () => window.clearInterval(id)
  }, [timeZone])

  return time
}
