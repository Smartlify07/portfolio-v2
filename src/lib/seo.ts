type Meta = {
  title: string
  description: string
}

function upsertMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.name = name
    document.head.appendChild(tag)
  }

  tag.content = content
}

/** Keeps title and description in step with the active route. */
export function applyDocumentMeta({ title, description }: Meta) {
  document.title = title
  upsertMeta('description', description)
}
