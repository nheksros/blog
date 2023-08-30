import { defineConfig } from 'vitepress'
import sidebarAuto from './sidebarAuto'
// 用于生成sitemap
import { createContentLoader } from 'vitepress'
import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'

const path = require("path");

export default defineConfig({
  title: "Rarrot",
  description: "Rarrot的个人博客网站",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-90hqhBZdbA' }]
  ],
  lastUpdated: true,
  // cleanUrls: true,
  markdown: {
    lineNumbers: true,
    // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
    // theme: 'one-dark-pro',
  },

  // 用于生成sitemap
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https:/www.rorrot.cc/' })
    const pages = await createContentLoader(["**/*.md"]).load()
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))

    sitemap.pipe(writeStream)
    pages.forEach((page) => sitemap.write(
      page.url
        // Strip `index.html` from URL
        .replace(/index.html$/g, '')
        // Optional: if Markdown files are located in a subfolder
        .replace(/^\/Rarrot/, '')
      ))
    sitemap.end()

    await new Promise((r) => writeStream.on('finish', r))
  },

  themeConfig: {
    // logo: {
    //   light: '/logo-light.svg',
    //   dark: '/logo-dark.svg',
    // },
    logo: "https://cdn.staticaly.com/gh/hr1201/img@main/imgs/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230508210154.jpg",

    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2023.4-${new Date().getFullYear()}.${new Date().getMonth() + 1}`,
    },
    algolia: {
      appId: 'A5NVAQQUEO',
      apiKey: 'fa9cdd39aee827af75ca9ead469cec1b',
      indexName: 'rorrot',
    },

    lastUpdatedText: '更新日期',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    darkModeSwitchLabel: '主题',
    outline: [2, 3],
    outlineTitle: '本页目录',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    editLink: {
      pattern: 'https://github.com/hr1201/hr1201.github.io/blob/main/Rarrot/:path',
      text: '在GitHub编辑此页',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hr1201' },
      { icon: "twitter", link: "https://twitter.com/home" },
      // 自定义社交连接
      // {
      //  icon: {
      //   svg: '<svg role="img" viewBox="0 0 24 24" xmlns="SVG namespace"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
      //  },
      //  link: "...",
      // },
    ],
    nav: [
      {
        text: '前端',
        items: [
          { text: "HTML", link: "/articles/HTML/浏览器渲染过程" },
          { text: "css", link: "/articles/css/css工作流程" },
          { text: "JavaScript", link: "/articles/JavaScript/0认识JavaScript" },
          { text: "typescript", link: "/articles/typescript/01-基础类型" },
          { text: "Vue", link: "/articles/Vue/01-Vue3基础语法" },
        ],
      },
      { text: '工具', link: '/articles/工具/nvm' },
      { text: '动画', link: '/cartoonsMD/O.o欢迎' },

    ],
    sidebar: {
      "/articles/HTML": sidebarAuto(
        path.resolve(__dirname, "../articles/HTML"),
      ),
      "/articles/css": sidebarAuto(
        path.resolve(__dirname, "../articles/css"),
      ),

      // 定义"/articles/" 将此配置为路径，只有包含这个路径的才会出现侧边栏
      "/articles/JavaScript": sidebarAuto(
        path.resolve(__dirname, "../articles/JavaScript"),
        "JavaScript"
      ).concat(sidebarAuto(
        path.resolve(__dirname, "../articles/JavaScript/问题"),
        "问题"
      )),

      "/articles/typescript": sidebarAuto(
        path.resolve(__dirname, "../articles/typescript"),
      ),
      
      "/articles/Vue": sidebarAuto(
        path.resolve(__dirname, "../articles/Vue"),
      ).concat(sidebarAuto(
        path.resolve(__dirname, "../articles/Vue/问题"),
        "问题"
      )),
      
      "/cartoonsMD": sidebarAuto(
        path.resolve(__dirname, "../cartoonsMD"),
        '动画'
      ),
      "/articles/工具": sidebarAuto(
        path.resolve(__dirname, "../articles/工具"),
        '工具'
      ),
    }

  },
})
