import { defineConfig } from 'vitepress'

export default defineConfig({
  title: `Vue Super UI`,
  description: 'Super UI 组件库',
  base: '/vue-super-ui/',
  head: [ // 网站图标
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://cn.vitejs.dev/viteconf.svg' }]
  ],
  appearance: true, // 默认 true，设为 false 则无法切换dark/light主题，可选 'dark' true false
  markdown: {
    lineNumbers: false // 是否显示行数，默认false
  },
  themeConfig: {
    logo: '/amazing-icon.svg',

    editLink: {
      pattern: 'https://github.com/themusecatcher/vue-amazing-ui/tree/master/docs/:path',
      text: 'Suggest changes to this page'
    },
    // 默认支持icon包括：'discord'|'facebook'|'github'|'instagram'|'linkedin'|'mastodon'|'slack'|'twitter'|'youtube'
    socialLinks: [
      { icon: 'github', link: 'https://github.com/clearself/vue-super-ui' }
    ],

    // algolia: { // algolia 搜索服务 与 内置 search 可二选一
    //   appId: 'SHDNEYGA8Z',
    //   apiKey: '91419401b0b0efd31b610e54e5b97249',
    //   indexName: 'vue-super-ui'
    // },

    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
    },

    nav: [
      { text: '组件', link: '/guide/features', activeMatch: '/guide/' },
      { text: '工具', link: '/utils/started', activeMatch: '/utils/' },
      { 
        text: '博客',
        items: [
          { text: '前端技术栈', link: '/fe/html/standard' }
        ]
      },
      { text: '微前端', link: 'https://clearself.github.io/' },
      { text: '易收藏', link: 'https://ysc.dnscn.site/#/login' },
      { 
        text: '工程模版',
        items: [
          { text: 'Vue2+Webpack PC', link: 'https://github.com/clearself/webpack-pc-vue2-template' },
          { text: 'Vue2+Vite4 PC', link: 'https://github.com/clearself/vite4.x-vue2-template' },
          { text: 'Vue2+Webpack Moble', link: 'https://github.com/clearself/moble-vue-template' },
          { text: '微前端 qiankun', link: 'https://github.com/clearself/qiankun' },
          { text: 'Vue3+Vite+TS', link: 'https://github.com/clearself/v3-admin-vite' }
        ]
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            {
              text: '特性',
              link: '/guide/features'
            },
            {
              text: '快速上手',
              link: '/guide/started'
            }
          ]
        },
        {
          text: '组件',
          items: [
            {
              text: '警告提示 Alert',
              link: '/guide/components/alert'
            },
            {
              text: '头像 Avatar',
              link: '/guide/components/avatar'
            },
            {
              text: '回到顶部 BackTop',
              link: '/guide/components/backtop'
            },
            {
              text: '徽标数 Badge',
              link: '/guide/components/badge'
            },
            {
              text: '面包屑 Breadcrumb',
              link: '/guide/components/breadcrumb'
            },
            {
              text: '按钮 Button',
              link: '/guide/components/button'
            },
            {
              text: '卡片 Card',
              link: '/guide/components/card'
            },
            {
              text: '走马灯 Carousel',
              link: '/guide/components/carousel'
            },
            {
              text: '级联选择 Cascader',
              link: '/guide/components/cascader'
            },
            {
              text: '多选框 Checkbox',
              link: '/guide/components/checkbox'
            },
            // {
            //   text: '折叠面板 Collapse',
            //   link: '/guide/components/collapse'
            // },
            {
              text: '倒计时 Countdown',
              link: '/guide/components/countdown'
            },
            {
              text: '日期选择 DatePicker',
              link: '/guide/components/datepicker'
            },
            {
              text: '描述列表 Descriptions',
              link: '/guide/components/descriptions'
            },
            {
              text: '对话框 Dialog',
              link: '/guide/components/dialog'
            },
            {
              text: '分割线 Divider',
              link: '/guide/components/divider'
            },
            {
              text: '抽屉 Drawer',
              link: '/guide/components/drawer'
            },
            // {
            //   text: '文本省略 Ellipsis',
            //   link: '/guide/components/ellipsis'
            // },
            {
              text: '空状态 Empty',
              link: '/guide/components/empty'
            },
            {
              text: '弹性布局 Flex',
              link: '/guide/components/flex'
            },
            {
              text: '栅格 Grid',
              link: '/guide/components/grid'
            },
            {
              text: '图片 Image',
              link: '/guide/components/image'
            },
            {
              text: '输入框 Input',
              link: '/guide/components/input'
            },
            {
              text: '数字输入框 InputNumber',
              link: '/guide/components/inputnumber'
            },
            {
              text: '全局提示 Message',
              link: '/guide/components/message'
            },
            {
              text: '信息提示 Modal',
              link: '/guide/components/modal'
            },
            {
              text: '通知提醒 Notification',
              link: '/guide/components/notification'
            },
            {
              text: '数值动画 NumberAnimation',
              link: '/guide/components/numberanimation'
            },
            {
              text: '分页 Pagination',
              link: '/guide/components/pagination'
            },
            {
              text: '弹出确认 Popconfirm',
              link: '/guide/components/popconfirm'
            },
            {
              text: '进度条 Progress',
              link: '/guide/components/progress'
            },
            {
              text: '二维码 QRCode',
              link: '/guide/components/qrcode'
            },
            {
              text: '单选框 Radio',
              link: '/guide/components/radio'
            },
            {
              text: '评分 Rate',
              link: '/guide/components/rate'
            },
            {
              text: '结果 Result',
              link: '/guide/components/result'
            },
            {
              text: '选择器 Select',
              link: '/guide/components/select'
            },
            {
              text: '滑动输入条 Slider',
              link: '/guide/components/slider'
            },
            {
              text: '间距 Space',
              link: '/guide/components/space'
            },
            {
              text: '加载中 Spin',
              link: '/guide/components/spin'
            },
            {
              text: '统计数值 Statistic',
              link: '/guide/components/statistic'
            },
            {
              text: '步骤条 Steps',
              link: '/guide/components/steps'
            },
            {
              text: '触摸滑动插件 Swiper',
              link: '/guide/components/swiper'
            },
            {
              text: '开关 Switch',
              link: '/guide/components/switch'
            },
            {
              text: '表格 Table',
              link: '/guide/components/table'
            },
            // {
            //   text: '标签页 Tabs',
            //   link: '/guide/components/tabs'
            // },
            {
              text: '标签 Tag',
              link: '/guide/components/tag'
            },
            {
              text: '文本域 Textarea',
              link: '/guide/components/textarea'
            },
            {
              text: '文字滚动 TextScroll',
              link: '/guide/components/textscroll'
            },
            // {
            //   text: '时间轴 Timeline',
            //   link: '/guide/components/timeline'
            // },
            {
              text: '文字提示 Tooltip',
              link: '/guide/components/tooltip'
            },
            {
              text: '上传 Upload',
              link: '/guide/components/upload'
            },
            {
              text: '播放器 Video',
              link: '/guide/components/video'
            },
            {
              text: '瀑布流 Waterfall',
              link: '/guide/components/waterfall'
            }
          ]
        }
      ],
      '/utils/': [
        {
          text: '指引',
          items: [
            {
              text: '快速上手',
              link: '/utils/started'
            }
          ]
        },
        {
          text: '工具',
          items: [
            {
              text: 'add 加法',
              link: '/utils/add'
            },
            {
              text: 'raf 动画帧',
              link: '/utils/animation-frame'
            },
            {
              text: 'date 日期格式化',
              link: '/utils/date-format'
            },
            {
              text: 'debounce 防抖',
              link: '/utils/debounce'
            },
            {
              text: 'downloadFile 下载文件',
              link: '/utils/download-file'
            },
            {
              text: 'formatNumber 数字格式化',
              link: '/utils/format-number'
            },
            {
              text: 'raf 定时器',
              link: '/utils/raf-timeout'
            },
            {
              text: 'throttle 节流',
              link: '/utils/throttle'
            },
            {
              text: 'toggleDark 切换暗黑',
              link: '/utils/toggle-dark'
            }
          ]
        }
      ],
      '/fe/':[
        {
          text: 'HTML',
          collapsed: false,
          items: [
            { text: 'HTML编码规范', link: '/fe/html/standard' },
            { text: '回流和重绘制', link: '/fe/html/reflux' }
          ]
        },
        {
          text: 'CSS',
          collapsed: false,
          items: [
            { text: 'CSS编码规范', link: '/fe/css/css-standard' }
          ]
        },
        {
          text: 'Javascript',
          collapsed: false,
          items: [
            { text: 'Javascript编码规范', link: '/fe/js/js-standard' },
            { text: 'proxy的阐释', link: '/fe/js/proxy' },
            { text: '防抖 VS 节流', link: '/fe/js/throttle' },
            { text: 'js运行机制', link: '/fe/js/operating' },
            { text: '面向对象三种继承方式', link: '/fe/js/js-inherit' },
            { text: 'URLSearchParams API', link: '/fe/js/url-api' },
            { text: '动手实现Promise', link: '/fe/js/promise' },
            { text: 'RGB，HEX，HSL相互转换', link: '/fe/js/color-change' },
            { text: '前端实用方法', link: '/fe/js/fe-function' },
            { text: 'es6新增语法', link: '/fe/js/es6' },
            { text: '大数字加减乘除运算问题', link: '/fe/js/big-num' },
            { text: '接口数据的大数字问题', link: '/fe/js/big-data' }
          ]
        },
        {
          text: 'Vue',
          collapsed: false,
          items: [
            { text: 'Vue2和Vue3的区别', link: '/fe/vue/vue2-vue3' },
            { text: 'Vue3组合API', link: '/fe/vue/vue3-api' },
            { text: 'useTable hooks封装', link: '/fe/vue/useTable' }
            
          ]
        },
        { text: 'Nginx', link: '/fe/nginx' },
        { text: '单点登录实现方式', link: '/fe/single-login' },
        { text: 'git常用命令', link: '/fe/git' },
        { text: '前端项目优化', link: '/fe/fe-optimize' },
        { text: '前端优秀博客', link: '/fe/blog' },
        { text: 'ShowDoc本地部署', link: '/fe/showdoc' }
      ]
    }
  }
})
