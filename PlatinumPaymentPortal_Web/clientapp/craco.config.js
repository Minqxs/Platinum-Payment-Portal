module.exports = {
    babel: {
        plugins: ["relay"],
    },
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.devtool = "source-map"; // enable detailed trace
            return webpackConfig;
        },
    },
};
