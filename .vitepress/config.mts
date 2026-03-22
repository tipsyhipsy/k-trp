import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '韓国旅行ガイド 2026',
  description: 'ソウル 2泊3日の旅',
  base: '/k-trp/',
  lang: 'ja',
  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }]
  ],
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' }
    ],
    sidebar: [
      {
        text: 'ガイド',
        items: [
          { text: '旅行日程表', link: '/韓国旅行日程表' },
          { text: 'フレーズ集', link: '/フレーズ集' },
          { text: 'マナー集', link: '/マナー集' },
          { text: '持ち物チェックリスト', link: '/持ち物チェックリスト' },
          { text: '昌徳宮 秘苑予約ガイド', link: '/昌徳宮秘苑予約ガイド' },
          { text: '文化うんちく集', link: '/文化うんちく集' }
        ]
      }
    ],
    outline: { label: '目次' },
    docFooter: { prev: '前へ', next: '次へ' }
  }
})
