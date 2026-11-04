import { Link } from 'react-router-dom'

type HeaderLinkProps = {
  label: string
  href: string
}

/** Nav link with an underline that grows from the left on hover. */
export function HeaderLink({ label, href }: HeaderLinkProps) {
  return (
    <Link
      to={href}
      className="group relative px-2 py-2 text-[13px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
    >
      {label}
      <span
        aria-hidden
        className="absolute right-2 bottom-1 left-2 h-px origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100"
      />
    </Link>
  )
}
