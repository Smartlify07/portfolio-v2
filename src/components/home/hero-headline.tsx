import { Fragment, useRef, useState } from 'react'
import { m, useReducedMotion } from 'motion/react'
import { site } from '@/content/site'
import type { HeroChipToken, HeroToken } from '@/content/site.types'
import { HeroHeadlineToken } from '@/components/home/hero-headline-token'
import { HeroImageDialog } from '@/components/home/hero-image-dialog'

const EASE = [0.22, 1, 0.36, 1] as const
const LINE_STAGGER = 0.08

/**
 * Serif display headline: each line fades up in sequence while the inline
 * chips pop in a beat later, so the stickers land after the words settle.
 * Tokens are separated by real spaces, so the heading reads and copies as
 * one sentence for screen readers and find-in-page.
 */
export function HeroHeadline() {
  const reduceMotion = useReducedMotion()
  const [openImage, setOpenImage] = useState<HeroChipToken | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  // The buttons inside the heading would otherwise join its accessible name.
  const headingLabel = site.hero.display
    .flat()
    .filter((token): token is Extract<HeroToken, { kind: 'text' }> => token.kind === 'text')
    .map((token) => token.text)
    .join(' ')

  const handleOpen = (chip: HeroChipToken, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger
    setOpenImage(chip)
  }

  return (
    <>
      <h1
        aria-label={headingLabel}
        className="mt-7 font-display text-[clamp(2.6rem,8.2vw,6.1rem)] leading-[0.94] tracking-[-0.01em] text-balance sm:mt-9"
      >
        {site.hero.display.map((line, lineIndex) => (
          <m.span
            key={lineIndex}
            className="block"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 + lineIndex * LINE_STAGGER, ease: EASE }}
          >
            {groupLine(line).map((group, groupIndex) => (
              <Fragment key={groupIndex}>
                {groupIndex > 0 ? ' ' : null}
                <span className="inline-block whitespace-nowrap">
                  {group.map((token, tokenIndex) => (
                    <Fragment key={tokenIndex}>
                      {tokenIndex > 0 ? ' ' : null}
                      <HeroHeadlineToken token={token} onOpen={handleOpen} />
                    </Fragment>
                  ))}
                </span>
              </Fragment>
            ))}
          </m.span>
        ))}
      </h1>

      <HeroImageDialog
        image={openImage}
        onClose={() => setOpenImage(null)}
        onCloseAutoFocus={(event) => {
          event.preventDefault()
          triggerRef.current?.focus()
        }}
      />
    </>
  )
}

/** Keeps a chip glued to the word before it, so a narrow screen never leaves one alone on a line. */
function groupLine(line: HeroToken[]) {
  const groups: HeroToken[][] = []

  for (const token of line) {
    const last = groups.at(-1)
    if (last && token.kind !== 'text') last.push(token)
    else groups.push([token])
  }

  return groups
}
