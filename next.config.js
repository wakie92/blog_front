const withTypescript = require("@zeit/next-typescript");
const withCss = require("@zeit/next-css");
const withSass = require('@zeit/next-sass');
module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
})
module.exports = withTypescript(
  withCss({
    webpack: config => {
      return config;
    }
  })
);
