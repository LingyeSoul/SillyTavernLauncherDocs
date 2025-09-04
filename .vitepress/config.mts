import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SillyTavernLauncher酒馆启动器",
  description: "简单易用的酒馆启动器",
  head: [
    ["link", { rel: "icon", href: `/favicon.ico` }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/start' },
      { text: '', component: 'SponsorButton' }
    ],

    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '开始使用', link: '/start' },
          { text: '手动更新', link: '/update' },
          //{ text: 'markdown-examples', link: '/markdown-examples' },
          //{ text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '设置讲解',
        items: [
          { text: '设置讲解', link: '/setting' },
        ]
      },
      {
        text: '错误排查',
        items: [
          { text: '常见问题', link: '/faqs' },
          { text: 'Git安装失败', link: '/gitconfig' },
        ]
      },
      {
        text: '打赏',
        items: [
          { text: '打赏开发者', link: '/tipping' },
        ]
      },
      {
        text: '远程服务',
        items: [
          { text: '在闲鱼下单', link: '/xianyu' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LingyeSoul/SillyTavernLauncher' }
    ],
    footer: {
      copyright: 'Copyright © 2025-现在 泠夜Soul'
    }
  }
})