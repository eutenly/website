const nextSASS = require("@zeit/next-sass");
const nextCSS = require("@zeit/next-css");

module.exports = nextSASS(nextCSS({
    webpack: config => {

        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: "empty"
        };

        return config;
    },
    devIndicators: {
        autoPrerender: false
    },
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          '/': { page: '/' },
          '/invite/index.html': { page: '/invite' },
          '/patreon/index.html': { page: '/patreon' },
          '/support-server/index.html': { page: '/support-server' },
          '/twitter/index.html': { page: '/twitter' },
          '/vote/index.html': { page: '/vote' },
          '/voter-perks/index.html': { page: '/voter-perks' },
        }
      },
}));