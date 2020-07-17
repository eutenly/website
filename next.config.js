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
    }
}));