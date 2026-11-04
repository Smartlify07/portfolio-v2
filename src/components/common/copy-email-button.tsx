import { Check, Copy } from 'lucide-react'
import { m } from 'motion/react'
import { useCopy } from '@/hooks/use-copy'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

type CopyEmailButtonProps = {
  email: string
  className?: string
}

/**
 * Outline button that swaps "Copy email" for "Copied" in place.
 * Both labels share one grid cell, so the button is always as wide as the
 * longer label and clicking never reflows the row it sits in.
 */
export function CopyEmailButton({ email, className }: CopyEmailButtonProps) {
  const { copied, copy } = useCopy()

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={() => void copy(email)}
          className={cn('justify-center', className)}
        >
          <span aria-live="polite" className="grid place-items-center">
            <m.span
              aria-hidden={copied}
              animate={{ opacity: copied ? 0 : 1 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="col-start-1 row-start-1 inline-flex items-center gap-2"
            >
              <Copy className="size-3.5" />
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase">Copy email</span>
            </m.span>

            <m.span
              aria-hidden={!copied}
              animate={{ opacity: copied ? 1 : 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="col-start-1 row-start-1 inline-flex items-center gap-2"
            >
              <Check className="size-3.5" />
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase">Copied</span>
            </m.span>
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={8}>
        {email}
      </TooltipContent>
    </Tooltip>
  )
}
