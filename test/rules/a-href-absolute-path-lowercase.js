module.exports = [
	{
		desc: 'should have zero issues when a href is an absolute url (not path)',
		input: '<html><body><a href="http://FOO/BAR"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-lowercase': true },
		output: 0
	},
	{
		desc: 'should have zero issues when a href is an lowercase absolute path',
		input: '<html><body><a href="/foo/bar"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-lowercase': true },
		output: 0
	},
	{
		desc: 'should have one issue when a href is an absolute path but not lowercase',
		input: '<html><body><a href="/foo/BAR"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-lowercase': true },
		output: 1
	},
	{
		desc: 'should have one issue when a href is an absolute path and query string is not lowercase',
		input: '<html><body><a href="/foo/bar?query=HI"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-lowercase': true },
		output: 1
	},
	{
		desc: 'should have zero issues when a href is an absolute path and query string is lowercase',
		input: '<html><body><a href="/foo/bar?query=hi"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-lowercase': true },
		output: 0
	}
];