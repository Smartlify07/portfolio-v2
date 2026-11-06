import type { HeroChipToken, HeroToken } from '@/content/site.types'
import { HeroChip } from '@/components/home/hero-chip'

type HeroHeadlineTokenProps = {
  token: HeroToken
  onOpen: (chip: HeroChipToken, trigger: HTMLButtonElement) => void
}

/** One word run, clickable image chip, or portrait placeholder in the headline. */
export function HeroHeadlineToken({ token, onOpen }: HeroHeadlineTokenProps) {
  if (token.kind === 'chip') {
    return <HeroChip chip={token} onOpen={(trigger) => onOpen(token, trigger)} />
  }

  return (
    <span className={token.italic ? 'inline-block italic' : 'inline-block'}>{token.text}</span>
  )
}
