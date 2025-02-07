import rehypeShiki from '@shikijs/rehype'
import type { RehypePlugin } from '@astrojs/markdown-remark'

export const rehypeCodeHighlight: [RehypePlugin, unknown] = [
  rehypeShiki,
  {
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    defaultColor: false,
  },
]
