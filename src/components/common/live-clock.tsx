import { useMemo } from 'react'
import { useLocalTime } from '@/hooks/use-local-time'
import { formatOffset } from '@/lib/time'

type LiveClockProps = {
  timeZone: string
  label: string
}

/** Local time in the studio's time zone, ticking every second. */
export function LiveClock({ timeZone, label }: LiveClockProps) {
  const time = useLocalTime(timeZone)
  const offset = useMemo(() => formatOffset(timeZone), [timeZone])

  return (
    <p className="mono-label flex items-center gap-2 tabular-nums">
      <span aria-hidden className="size-1 rounded-full bg-live" />
      <span>
        {time} <span className="text-muted-foreground/60">{offset}</span>
      </span>
      <span className="sr-only">local time in {label}</span>
    </p>
  )
}
