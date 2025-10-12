/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://metsamaahind.ee/",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: [],
};
