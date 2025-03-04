module.exports = {
    title: 'Minify Plugin Documentation',
    description: 'Documentation for the Minify plugin',
    base: '/docs/minify/',
    lang: 'en-US',
    head: [
        ['meta', {content: 'https://github.com/nystudio107', property: 'og:see_also',}],
        ['meta', {content: 'https://twitter.com/nystudio107', property: 'og:see_also',}],
        ['meta', {content: 'https://youtube.com/nystudio107', property: 'og:see_also',}],
        ['meta', {content: 'https://www.facebook.com/newyorkstudio107', property: 'og:see_also',}],
    ],
    themeConfig: {
        repo: 'nystudio107/craft-minify',
        docsDir: 'docs/docs',
        docsBranch: 'develop',
        algolia: {
            appId: '',
            apiKey: '',
            indexName: 'minify'
        },
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        sidebar: 'auto',
    },
};
