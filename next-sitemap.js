/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://henriquecesp.dev/',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    alternateRefs: [
        {
            href: 'https://henriquecesp.dev/pt',
            hreflang: 'pt-br'
        }
    ]
};
