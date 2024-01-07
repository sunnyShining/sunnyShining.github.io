export default {
  // 网站标题
  title: "sunshine",
  // 网站描述
  description: "sunshine",
  // 打包目录
  outDir: "../../docs",
  base: "/docs/",
  // 头部head
  head: [
    // 添加图标
    ["link", { rel: "icon", href: "/docs/favicon.ico" }],
  ],
  // 使用插件
  plugins: [],
  // 主题配置
  themeConfig: {
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 导航栏配置
    nav: [
      { text: "Github", link: "https://github.com/sunnyShining" },
      {
        text: "Visible",
        link: "https://sunnyshining.github.io/visible/editor/#/",
      },
    ],
    sidebar: {
      "/": [
        {
          text: "html",
          items: [
            { text: "html基础", link: "/html/" },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "css",
          items: [
            { text: "css基础", link: "/css/" },
          ],
        },
        {
          text: "javascript",
          items: [
            { text: "javascript基础", link: "/javascript/" },
          ],
        },
        {
          text: "typescript",
          items: [
            { text: "typescript基础", link: "/typescript/" },
          ],
        },
        {
          text: "vue",
          items: [
            { text: "vue基础", link: "/vue/" },
            { text: "vue进阶", link: "/vue/advanced" },
          ],
        },
        {
          text: "react",
          items: [
            { text: "react基础", link: "/react/" },
          ],
        },
        {
          text: "网络",
          items: [
            { text: "网络基础", link: "/network/" },
          ],
        },
        {
          text: "安全",
          items: [
            { text: "安全", link: "/security/" },
          ],
        },
        {
          text: "算法",
          items: [{ text: "算法基础", link: "/algorithm/" }],
        },
      ],
    },
  },
};
