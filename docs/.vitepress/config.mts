import { defineConfig } from 'vitepress'
const currentYear = new Date().getFullYear();

export default defineConfig({
  base: '/',
  head : [
    ['link',{rel:'icon',href:'./logo.png'}]
  ],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      title: '梦海拾遗',
      description: '记录稀奇古怪的文章',
      themeConfig: {
        nav: [
          { text: '主页', link: '/'},
          { text: '关于', link: '/about'},
          { text: '隐私政策', link: '/privacy'}
        ],
        sidebar: [
          {
            text: '瓦尔多斯',
            items: [
              { text: '第一章 回忆', link: '/waldoz/chapter1'},
              { text: '第二章 失忆', link: '/waldoz/chapter2'},
              { text: '第三章 我', link: '/waldoz/chapter3'},
              { text: '第四章 忏悔日', link: '/waldoz/chapter4'}
            ]
          },
          {text: '前传',
            items: [
              {text: '更多', link: "/"}
            ]
          }
        ],
        socialLinks: [
          { icon: 'twitter', link: 'https://x.com/jask_don'}
          
        ],
        footer: {
          message: '禁止转载，保留所有权利',
          copyright: `Copyright © 2023-${currentYear} Jask`

        },
        outlineTitle: '本页目录',
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        },
        logo: '/logo.png'
      },
    },
    en: {
      label: 'English',
      lang: 'en', 
      link: '/en',
      title: 'TFDS',
      description: 'Documentation of rare and bizarre articles',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en'},
          { text: 'About', link: '/en/about'},
          { text: 'Privacy', link: '/en/privacy'}
        ],
        sidebar: [
          {
            text: 'Waldoz',
            items: [
              { text: 'Chapter 1: Memories', link: '/en/waldoz/chapter1'},
              { text: 'Chapter 2: Amnesia', link: '/en/waldoz/chapter2'},
              { text: 'Chapter 3: me', link: '/en/waldoz/chapter3'},
              {text: 'Chapter 4: Day of Repentance', link: '/en/waldoz/chapter4'}
            ]
          },
          {
            text: 'Forward',
            items: [
              {text: 'More', link: '/'}
            ]
          }
        ],
        socialLinks: [
          { icon: 'twitter', link: 'https://x.com/jask_don'}
        ],
        footer: {
          message: 'Reproduction prohibited, all rights reserved',
          copyright: `Copyright © 2023-${currentYear} Jask`
        },
        logo: '/logo.png'
      }
      

     
    },

    
  },

})