const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css',],
  });

  eleventyConfig.addGlobalData("buildDate", () => new Date());

  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

  return {
    dir: {
      input: 'src',
    },
  };
};
