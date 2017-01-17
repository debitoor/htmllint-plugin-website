module.exports = [
	{
		desc: 'should have zero issues when a href is an absolute url',
		input: '<html><body><a href="http://foo/bar"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-no-trailing-slash': true },
		output: 0
	},
	{
		desc: 'should have zero issues when a href is an absolute path without trailing slash',
		input: '<html><body><a href="/foo/bar"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-no-trailing-slash': true },
		output: 0
	},
	{
		desc: 'should have one issue when a href is an absolute path with trailing slash',
		input: '<html><body><a href="/foo/bar/"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-no-trailing-slash': true },
		output: 1
	},
	{
		desc: 'should have one issue when a href is an absolute path with trailing slash and query string',
		input: '<html><body><a href="/foo/bar/?query=hi"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-no-trailing-slash': true },
		output: 1
	},
	{
		desc: 'should have zero issues when a href is an absolute path without trailing slash and query string',
		input: '<html><body><a href="/foo/bar?query=hi"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-no-trailing-slash': true },
		output: 0
	}
];