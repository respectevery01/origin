import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
base:"/origin/",
  title: "原初混沌",
  description: "一本长篇科幻小说",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: '瓦尔多斯',
        items: [
          { text: '第一章 回忆', link: '/waldoz/chapter1' },
          { text: '第二章 失忆', link: '/waldoz/chapter2' },
		  { text: '第三章 我', link: '/waldoz/chapter3' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/respectevery01' },
	  { icon: 'twitter', link: 'https://x.com/jask_don'}
    ]
  }
})
