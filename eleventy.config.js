const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

function isoDate() {
  function join(t, a, s) {
    function format(m) {
       const f = new Intl.DateTimeFormat('en', m);
       return f.format(t);
    }
    return a.map(format).join(s);
 }

 const a = [{year: 'numeric'}, {month: '2-digit'}, {day: '2-digit'}];
 return join(new Date, a, '-');
}

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css',],
  });

  eleventyConfig.addGlobalData("buildDate", isoDate);

  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

  eleventyConfig.addPassthroughCopy({ "src/favicon/*": "/" });

  return {
    dir: {
      input: 'src',
    },
  };
};
