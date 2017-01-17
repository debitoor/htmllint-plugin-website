module.exports = [
	{
		desc: 'should have zero issues when a href is known',
		input: '<html><body><a href="/foo/bar"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-is-known': (href) => href === '/foo/bar' },
		output: 0
	},
	{
		desc: 'should have zero issues when a href is not an absolute path',
		input: '<html><body><a href="http://SOMETHING"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-is-known': (href) => href === '/foo/bar' },
		output: 0
	},
	{
		desc: 'should have zero issues when a href is a mailto link',
		input: '<html><body><a href="mailto:info@google.com"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-is-known': (href) => href === '/foo/bar' },
		output: 0
	},
	{
		desc: 'should have one issue when a href is an absolute path but not known',
		input: '<html><body><a href="/foo/baz"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-is-known': (href) => href === '/foo/bar' },
		output: 1
	},
	{
		desc: 'should have zero issues when check is disabled',
		input: '<html><body><a href="/foo/baz"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-is-known': false },
		output: 0
	}
];