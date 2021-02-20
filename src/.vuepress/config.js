const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Hallo.tools Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    smoothScroll: true,
    repo: 'Zitkala/Hallo.Tools-Docs',
    editLinks: true,
    docsDir: 'src',
    docsRepo:'Zitkala/Hallo.Tools-Docs',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Hallo.Tools Website',
        link: 'https://hallo.tools'
      }
    ],
    sidebar: {
      '/de/': [
        {
          lang: 'de-DE',
          title: 'Get Started',
          collapsable: false,
          children: [
            '',
            'twitch-authentifizierung',
            'allgemeines-zur-bedienung',
            'chatbot-verbinden',
            'bot-account-wechseln',
            'bot-aus-dem-chat-entfernen',
          ]
        },
        {
          lang: 'de-DE',
          title: 'Chatbot',
          collapsable: false,
          children: [
            'chatbot/commands',
            'chatbot/schedules',
          ]
        },
        {
          lang: 'de-DE',
          title: 'Tools',
          collapsable: false,
          children: [
            'tools/zufaellige-ausgaben',
            'tools/telegram-benachrichtigungen',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
