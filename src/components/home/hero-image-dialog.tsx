import { useEffect, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import type { HeroChipToken } from '@/content/site.types'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'

type HeroImageDialogProps = {
  image: HeroChipToken | null
  onClose: () => void
  /** Lets the headline return focus to the chip that opened the dialog. */
  onCloseAutoFocus?: (event: Event) => void
}

/** Lightbox for a hero chip: the full image, assembled as a mosaic. */
export function HeroImageDialog({ image, onClose, onCloseAutoFocus }: HeroImageDialogProps) {
  // Hold the last image while the dialog animates out; clearing it with `open`
  // would blank the panel before the exit transition could play.
  const [lastImage, setLastImage] = useState<HeroChipToken | null>(image)

  useEffect(() => {
    if (image) setLastImage(image)
  }, [image])

  const active = image ?? lastImage
  const [width, height] = active?.aspect ?? [16, 10]

  return (
    <Dialog
      open={Boolean(image)}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
    >
      <DialogContent
        showCloseButton={false}
        onCloseAutoFocus={onCloseAutoFocus}
        className="w-[min(64rem,94vw)] max-w-none gap-0 overflow-hidden p-0 shadow-2xl shadow-foreground/25 data-[state=closed]:[animation-duration:200ms]"
        style={{ maxWidth: `min(64rem, 94vw, calc((100dvh - 10rem) * ${width / height}))` }}
      >
        {active ? (
          <>
            <div className="flex items-start justify-between gap-6 px-4 pt-4 pb-3 sm:px-5">
              <div className="min-w-0">
                <DialogTitle className="font-display text-xl leading-tight font-normal sm:text-2xl">
                  {active.caption}
                </DialogTitle>
                <DialogDescription className="mt-1 text-[11px] leading-relaxed">
                  {active.credit && active.creditHref ? (
                    <a
                      href={active.creditHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1"
                    >
                      {active.credit}
                      <ArrowUpRight className="size-3" />
                    </a>
                  ) : (
                    active.alt
                  )}
                </DialogDescription>
              </div>

              <DialogClose asChild>
                <Button variant="ghost" size="icon-sm" aria-label="Close image">
                  <X />
                </Button>
              </DialogClose>
            </div>

            <div className="px-2 pb-2 sm:px-3 sm:pb-3">
              <img
                src={active.src}
                alt={active.alt}
                className="block h-auto w-full rounded-lg"
              />
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
