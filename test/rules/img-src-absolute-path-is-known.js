module.exports = [
	{
		desc: 'should have zero issues when there are no unknown absolute path',
		input: '<html><body><img src="/foo/bar.jpg"/></body></html>',
		opts: { 'img-src-absolute-path-is-known': (src) => src === '/foo/bar.jpg' },
		output: 0
	},
	{
		desc: 'should have one issue when there is an unknown absolute path',
		input: '<html><body><img src="/foo/bar.jpg"/></body></html>',
		opts: { 'img-src-absolute-path-is-known': (src) => src === '/foo/bar/baz.jpg' },
		output: 1
	},
	{
		desc: 'should have zero issues when false',
		input: '<html><body><img src="/foo/bar.jpg"/></body></html>',
		opts: { 'img-src-absolute-path-is-known': false },
		output: 0
	}
];