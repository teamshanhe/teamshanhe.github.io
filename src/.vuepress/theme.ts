import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  hostname: "https://to-be-decided",

  author: [
    {
      name: "山河大学",
      url: "https://github.com/teamshanhe",
    },
    {
      name: "山河大学计算机院",
      url: "https://github.com/teamshanhe",
    }
  ],

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  repo: "teamshanhe/teamshanhe.github.io",

  docsDir: "src",

  footer: "使用 <a href=\"https://theme-hope.vuejs.press/zh/\" target=\"_blank\">VuePress Theme Hope</a> 主题 | CC BY-SA 4.0 协议",
  displayFooter: true,

  
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },
  
  plugins: {
    components: {
      components: ["Badge", "VPCard"],
    },

    
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },
  },
});
