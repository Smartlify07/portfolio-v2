const formatterCache = new Map<string, Intl.DateTimeFormat>()

function getFormatter(timeZone: string, withSeconds: boolean) {
  const key = `${timeZone}:${withSeconds}`
  let formatter = formatterCache.get(key)

  if (!formatter) {
    formatter = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      ...(withSeconds ? { second: '2-digit' } : {}),
      hour12: false,
      timeZone,
    })
    formatterCache.set(key, formatter)
  }

  return formatter
}

/** "14:32" — a clock reading in the given time zone. */
export function formatClock(timeZone: string, date = new Date()): string {
  return getFormatter(timeZone, false).format(date)
}

/** "GMT+1" — the current UTC offset label for the given time zone. */
export function formatOffset(timeZone: string, date = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    timeZoneName: 'shortOffset',
  }).formatToParts(date)

  return parts.find((part) => part.type === 'timeZoneName')?.value ?? ''
}
