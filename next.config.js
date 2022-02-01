module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });

        return config;
    },
    images: {
        domains: ['img.youtube.com']
    },
    i18n: {
        locales: ['en', 'pt'],
        defaultLocale: 'en'
    }
};
