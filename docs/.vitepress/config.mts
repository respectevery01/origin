import { defineConfig } from 'vitepress'
const currentYear = new Date().getFullYear();

export default defineConfig({
  base: '/',
  head: [
    ['link',{rel:'icom',href:'./originmull.png'}]
  ],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      title: '原初混沌',
      description: '一本长篇科幻小说',
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
              { text: '第一章 我', link: '/waldoz/chapter3'}
            ]
          }
        ],
        socialLinks: [
          {
            icon: {
              svg: '<img src="https://pic.superbed.cc/item/671df513fa9f77b4dc0bddef.png" alt="Weibo" style="width: 1.5em; height: 1.5em;">'
            }, link: 'https://weibo.com/u/7764179887'
          },
          {
            icon: {
              svg: '<img src="https://static.afdiancdn.com/static/img/logo/logo.png" alt="afadian" style="width: 1.5em; height: 1.5em;">'
            }, link: 'https://afdian.com/a/jianqiumoli'
          }
          
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
        logo: 'https://pic.superbed.cc/item/671e2c99fa9f77b4dc0ddf5b.png'
      },
    },
    en: {
      label: 'English',
      lang: 'en', 
      link: '/en',
      title: 'OriginMull',
      description: 'A long-form science fiction novel',
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
              { text: 'Chapter 3: me', link: '/en/waldoz/chapter3'}
            ]
          }
        ],
        socialLinks: [
          { icon: 'twitter', link: 'https://x.com/jask_don'},
          {
            icon:{
            svg: '<img src="https://pic.superbed.cc/item/671dee5bfa9f77b4dc0ba4f0.png" alt="patreon" style="width: 1.5em; height: 1.5em;">'
          }, link: 'https://www.patreon.com/c/user?u=82749878'}
        ],
        footer: {
          message: 'Reproduction prohibited, all rights reserved',
          copyright: `Copyright © 2023-${currentYear} Jask`
        },
        logo: 'https://pic.superbed.cc/item/671e2c99fa9f77b4dc0ddf5b.png'
      }
      

     
    },
    tc: {
      label: '繁體中文',
      lang: 'tc',
      link: '/tc',
      title: '原初混沌',
      description: '一部長篇科幻小說',
      themeConfig: {
        nav: [
          { text: '主頁', link: '/tc'},
          { text: '關於', link: '/about'},
          { text: '隱私政策', link: '/tc/privacy'}
        ],
        
        socialLinks: [
          { icon: 'twitter', link: 'https://x.com/jask_don'},
          {
            icon:{
            svg: '<img src="https://pic.superbed.cc/item/671dee5bfa9f77b4dc0ba4f0.png" alt="patreon" style="width: 1.5em; height: 1.5em;">'
          }, link: 'https://www.patreon.com/c/user?u=82749878'}
        ],
        outlineTitle: '本頁目錄',
        footer: {
          message: '禁止複製，保留所有權利',
          copyright: `Copyright © 2023-${currentYear} Jask`
        },
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        },
        logo: 'https://pic.superbed.cc/item/671e2c99fa9f77b4dc0ddf5b.png'
      }
    }

    
  },

})