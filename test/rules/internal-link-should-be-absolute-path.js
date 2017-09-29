module.exports = [
	{
		desc: 'should have no issue when href do not include current domain',
		input: '<html><body><a href="/foo/bar"/>link</a></body></html>',
		opts: { 'internal-link-should-be-absolute-path': (href) => new RegExp('^(https?:\/\/)?(www\.)?debitoor\.com').test(href)},
		output: 0
	},
	{
		desc: 'should have no issue when href do not include current domain',
		input: '<html><body><a href="https://debitoor.com/foo/bar"/>link</a></body></html>',
		opts: { 'internal-link-should-be-absolute-path': (href) => new RegExp('^(https?:\/\/)?(www\.)?debitoor\.com').test(href)},
		output: 1
	},
	{
		desc: 'should have no issue when href do not include current domain',
		input: '<html><body><a href="http://debitoor.com/foo/bar"/>link</a></body></html>',
		opts: { 'internal-link-should-be-absolute-path': (href) => new RegExp('^(https?:\/\/)?(www\.)?debitoor\.com').test(href)},
		output: 1
	},
	{
		desc: 'should have no issue when href do not include current domain',
		input: '<html><body><a href="www.debitoor.com/foo/bar"/>link</a></body></html>',
		opts: { 'internal-link-should-be-absolute-path': (href) => new RegExp('^(https?:\/\/)?(www\.)?debitoor\.com').test(href)},
		output: 1
	},
	{
		desc: 'should have zero issues when check is disabled',
		input: '<html><body><a href="www.debitoor.com/foo/bar"/>link</a></body></html>',
		opts: { 'internal-link-should-be-absolute-path': false},
		output: 0
	}
];