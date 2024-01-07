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
    ["link", { rel: "icon", href: "/favicon.ico" }],
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
            { text: "基础", link: "/html/" },
            { text: "进阶", link: "/html/advanced" },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "css",
          items: [
            { text: "基础", link: "/css/" },
            { text: "进阶", link: "/css/advanced" },
          ],
          collapsible: true,
          collapsed: false,
        },
        {
          text: "javascript",
          items: [
            { text: "基础", link: "/javascript/" },
            { text: "进阶", link: "/javascript/advanced" },
            { text: "进阶", link: "/javascript/nightmare" },
          ],
          collapsible: true,
          collapsed: false,
        },
        {
          text: "vue",
          items: [
            { text: "基础", link: "/vue/" },
            { text: "进阶", link: "/vue/advanced" },
          ],
          collapsible: true,
          collapsed: false,
        },
        {
          text: "网络",
          items: [
            { text: "基础", link: "/network/" },
            { text: "进阶", link: "/network/advanced" },
          ],
          collapsible: true,
          collapsed: false,
        },
        {
          text: "安全",
          items: [
            { text: "基础", link: "/security/" },
            { text: "进阶", link: "/security/advanced" },
          ],
          collapsible: true,
          collapsed: false,
        },
        {
          text: "算法",
          items: [{ text: "基础", link: "/algorithm/" }],
          collapsible: true,
          collapsed: false,
        },
      ],
    },
  },
};
