import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "酒馆启动器",
  description: "简单易用的酒馆启动器",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/start' }
    ],

    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '开始使用', link: '/start' },
          //{ text: 'markdown-examples', link: '/markdown-examples' },
          //{ text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '设置讲解',
        items: [
          { text: '设置讲解', link: '/setting' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LingyeSoul/SillyTavernLauncher' }
    ],
    footer: {
      
      copyright: 'Copyright © 2025-现在 泠夜Soul'
    }
  }
})
