module.exports = {
    title: 'CoderBook',
    description: 'CoderBook',
    base: '/coderbook/',
	themeConfig: {
	    // repo: 'https://github.com/xxxxxxx/blog-demo',
        //repoLabel: 'My GitHub',
	  	nav: [
	  		{ text: '首页', link: '/' },
	  		{ text: 'ElasticSearch6.x', link: '/es6/index.md' }
        ],
        sidebar: {
            '/es6/':[
                '',
                'chapter1',
                'chapter2',
                'chapter3',
                'chapter4',
                'chapter5',
                'chapter6',
                'chapter7',
                'chapter8',
                'chapter9',
                'chapter10',
                'chapter11',
            ]
        }
	}
}
