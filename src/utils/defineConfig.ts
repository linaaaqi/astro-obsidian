export interface Site {
  url: string
  title: string
  description: string
  keywords: string
  lang: string
  favicon: string
  appleTouchIcon: string
}

export interface Author {
  name: string
  twitterId: string
  avatar: string
}

export interface Social {
  name: string
  icon: string
  url: string
  color: string
}

export interface Hero {
  name: string
  bio: string
  description: string
  socials: Social[]
  yiyan: string
}

export interface Color {
  light: string
  dark: string
}

export interface ColorSet {
  primary: Color
  secondary: Color
}

export interface Colors {
  accent: Color[]
  bg: ColorSet
  text: ColorSet
  border: ColorSet
}

export interface Menu {
  name: string
  link: string
  icon: string
}

export interface Giscus {
  repo: string
  repoId: string
  category: string
  categoryId: string
}

export interface Waline {
  serverURL: string
}

export interface Comments {
  enable: 'giscus' | 'waline'
  giscus: Giscus
  waline: Waline
}

export interface Sponsor {
  wechat: string
  alipay: string
  paypal: string
  github: string
  patreon: string
  buymeacoffee: string
}

export interface Google {
  measurementId: string
}

export interface Umami {
  serverUrl: string
  websiteId: string
}

export interface MicrosoftClarity {
  projectId: string
}

export interface Analytics {
  enable: boolean
  google: Google
  umami: Umami
  microsoftClarity: MicrosoftClarity
}

export interface AstroObsidianConfig {
  site: Site
  author: Author
  hero: Hero
  color: Colors
  menus: Menu[]
  posts: {
    perPage: number
  }
  footer: {
    startTime: string
  }
  comments: Comments
  sponsor: Sponsor
  analytics: Analytics
}

export const defineConfig = (config: AstroObsidianConfig) => config
