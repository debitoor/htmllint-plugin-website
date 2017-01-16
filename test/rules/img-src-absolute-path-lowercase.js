module.exports = [
	{
		desc: 'should have zero issues',
		input: '<html><body><img src="/foo.bar.jpg"/></body></html>',
		opts: { 'img-src-absolute-path-lowercase': 1},
		output: 0
	},
	{
		desc: 'should have one issue',
		input: '<html><body><img src="/foo.bar.JPG"/></body></html>',
		opts: { 'img-src-absolute-path-lowercase': 1},
		output: 1
	}
];