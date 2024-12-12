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
          {text: '更多',
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
            text: 'More',
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