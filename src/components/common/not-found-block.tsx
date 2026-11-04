import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundBlock() {
  return (
    <section className="shell py-24 sm:py-32">
      <p className="mono-label">404</p>
      <h1 className="mt-6 max-w-[20ch] text-[clamp(2rem,6vw,3.5rem)] leading-[1] font-medium tracking-[-0.04em] text-balance">
        That page isn&rsquo;t here.
      </h1>
      <p className="mt-4 max-w-[44ch] leading-relaxed text-muted-foreground">
        The link may be old, or the project may have moved. The work is still where you left it.
      </p>
      <Link
        to="/"
        className="group mt-8 inline-flex items-center gap-2 text-sm font-medium"
      >
        Back to the portfolio
        <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      </Link>
    </section>
  )
}
