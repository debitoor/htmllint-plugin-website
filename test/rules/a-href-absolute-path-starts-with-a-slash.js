module.exports = [
	{
		desc: 'should have no issues when href is an absolute url',
		input: '<html><body><a href="http://foo/bar"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-starts-with-a-slash': true },
		output: 0
	},
	{
		desc: 'should have no issues when href is an absolute url',
		input: '<html><body><a href="https://foo/bar"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-starts-with-a-slash': true },
		output: 0
	},
	{
		desc: 'should have zero issues when a href is an absolute path with starting slash',
		input: '<html><body><a href="/foo/bar"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-starts-with-a-slash': true },
		output: 0
	},
	{
		desc: 'should have one issue when a href is an absolute path with no starting slash',
		input: '<html><body><a href="foo/bar/"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-starts-with-a-slash': true },
		output: 1
	},
	{
		desc: 'should have no issue when a href is a mailto link',
		input: '<html><body><a href="mailto:foo@bar.com"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-starts-with-a-slash': true },
		output: 0
	},
	{
		desc: 'should have no issue when a href is a tel link',
		input: '<html><body><a href="tel:8888888"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-starts-with-a-slash': true },
		output: 0
	},
	{
		desc: 'should have no issue when a href is a properly formated anchor link',
		input: '<html><body><a href="#foo-bar"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-starts-with-a-slash': true },
		output: 0
	},
	{
		desc: 'should have no issue when a href dont start with a slash',
		input: '<html><body><a href=" https://www.gov.uk/vat-flat-rate-scheme/how-much-you-pay"/>link</a></body></html>',
		opts: { 'a-href-absolute-path-starts-with-a-slash': true },
		output: 0
	}
];