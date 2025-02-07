import { defineConfig } from './utils/defineConfig'

export default defineConfig({
  site: {
    url: 'https://linaaaqi.com',
    title: 'Linaaaqi',
    description: '这是一个使用 Astro 和 React 开发的博客主题。',
    keywords: 'Linaaaqi,blog,Astro,theme,linaaaqi,博客主题',
    lang: 'zh-CN',
    favicon: '/favicon.ico',
    appleTouchIcon: '/apple-touch-icon.png',
  },
  author: {
    name: 'linaaaqi',
    twitterId: '@linaaaqi',
    avatar: 'https://s2.loli.net/2024/04/30/ozsnuS5Ihf3xMBG.webp',
  },
  hero: {
    name: 'Linaaaqi',
    bio: 'A static blog template build with Astro and React.',
    description: 'Clean, Cute, Fast.',
    socials: [
      {
        name: 'Github',
        icon: 'icon-github',
        url: 'https://github.com/linaaaqi/astro-obsidian',
        color: 'rgb(24, 23, 23)',
      },
      {
        name: 'X',
        icon: 'icon-x',
        url: 'https://twitter.com/linaaaqi',
        color: 'rgb(36, 46, 54)',
      },
      {
        name: 'Email',
        icon: 'icon-mail',
        url: 'mailto:linaaaqi@outlook.com',
        color: 'rgb(212, 70, 56)',
      },
    ],
    yiyan: '当第一颗卫星飞向大气层外，我们便以为自己终有一日会征服宇宙。',
  },
  color: {
    accent: [
      { light: '#F55555', dark: '#FCCF31' },
      { light: '#0396FF', dark: '#ABDCFF' },
      { light: '#fb7287', dark: '#99D8CF' },
      { light: '#F072B6', dark: '#FFF886' },
      { light: '#9F44D3', dark: '#E2B0FF' },
      { light: '#FF6666', dark: '#A1CCD1' },
      { light: '#F6416C', dark: '#838BC6' },
      { light: '#32CCBC', dark: '#90F7EC' },
      { light: '#33A6B8', dark: '#79F1A4' },
      { light: '#F55555', dark: '#FCCF31' },
    ],
    bg: {
      primary: { light: '#ffffff', dark: '#1c1c1e' },
      secondary: { light: '#f4f4f5', dark: '#27272a' },
    },
    text: {
      primary: { light: '#373a3c', dark: '#ffffff' },
      secondary: { light: '#71717a', dark: '#d1d5db' },
    },
    border: {
      primary: { light: '#e4e4e7', dark: '#3f3f46' },
      secondary: { light: '#e4e4e7', dark: '#3f3f46' },
    },
  },
  menus: [
    {
      name: '首页',
      link: '/',
      icon: 'icon-pantone',
    },
    {
      name: '归档',
      link: '/archives',
      icon: 'icon-archive',
    },
    {
      name: '项目',
      link: '/projects',
      icon: 'icon-flask',
    },
    {
      name: '关于',
      link: '/about',
      icon: 'icon-ghost',
    },
    {
      name: '友链',
      link: '/friends',
      icon: 'icon-hearts',
    },
  ],
  posts: {
    perPage: 10,
  },
  footer: {
    startTime: '2019-05-28T00:00:00Z',
  },
  comments: {
    enable: 'giscus',
    giscus: {
      repo: 'linaaaqi/blog',
      repoId: 'R_kgDONiDwnQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDONiDwnc4ClgYb',
    },
    waline: {
      serverURL: '',
    },
  },
  sponsor: {
    wechat: 'https://object.linaaaqi.com/bed%2F2024%2F0507_6e3e8f73df2d4e6d.webp',
    alipay: '',
    paypal: '',
    github: '',
    patreon: '',
    buymeacoffee: '',
  },
  analytics: {
    enable: false,
    google: {
      measurementId: '',
    },
    umami: {
      serverUrl: '',
      websiteId: '',
    },
    microsoftClarity: {
      projectId: '',
    },
  },
})
