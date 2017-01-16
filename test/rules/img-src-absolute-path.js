module.exports = [
	{
		desc: 'should have one issue when img src is an absolute url',
		input: '<html><body><img src="http://foo/bar.jpg"/></body></html>',
		opts: { 'img-src-absolute-path': true },
		output: 1
	},
	{
		desc: 'should have zero issue when img src is an absolute path',
		input: '<html><body><img src="/foo/bar.jpg"/></body></html>',
		opts: { 'img-src-absolute-path': true },
		output: 0
	}
];