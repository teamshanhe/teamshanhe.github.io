import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "山河大学公共百科",
  description: "山河大学公共百科",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
