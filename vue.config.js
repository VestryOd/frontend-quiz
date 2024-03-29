module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/assets/scss/app.scss";`
            }
        }
    },
    chainWebpack: config => {
        config.module.rules.delete("svg");
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    loader: 'vue-svg-loader',
                },
            ],
        }
    }
};
