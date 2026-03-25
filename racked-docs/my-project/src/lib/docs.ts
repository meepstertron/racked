// src/lib/docs.ts
const modules = import.meta.glob('/src/docs/**/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>

export interface DocMeta {
  slug: string
  title: string
  headings: string[]
}

export interface DocPage extends DocMeta {
  content: string
}

const parse = (path: string, raw: string): DocPage => ({
  slug: path.replace('/src/docs/', '').replace('.md', ''),
  title: raw.match(/^# (.+)/m)?.[1] ?? 'Untitled',
  headings: [...raw.matchAll(/^## (.+)/gm)].map(m => m[1]),
  content: raw
})

const all = Object.entries(modules).map(([path, raw]) => parse(path, raw))

export const getNav = (): DocMeta[] => all.map(({ slug, title, headings }) => ({ slug, title, headings }))
export const getPage = (slug: string): DocPage | undefined => all.find(p => p.slug === slug)