/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://komodo-news.vercel.app",
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const dynamicPages = require("./pages-server.js");
    return await dynamicPages();
  },
};
