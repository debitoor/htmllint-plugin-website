module.exports = [
	{
		desc: 'should have zero issues when a href dont start with whitespace(s)',
		input: '<html><body><a href="https://www.debitoor.com"/>link</a></body></html>',
		opts: { 'a-href-should-not-contain-whitespaces': true },
		output: 0
	},
	{
		desc: 'should have zero issues when a href dont include whitespace(s)',
		input: '<html><body><a href="https://debitoor.com"/>link</a></body></html>',
		opts: { 'a-href-should-not-contain-whitespaces': true },
		output: 0
	},
	{
		desc: 'should have one issue when a href start with whitespace',
		input: '<html><body><a href=" https://www.debitoor.com"/>link</a></body></html>',
		opts: { 'a-href-should-not-contain-whitespaces': true },
		output: 1
	},
	{
		desc: 'should have one issue when a href ends with whitespace',
		input: '<html><body><a href="https://www.debitoor.com "/>link</a></body></html>',
		opts: { 'a-href-should-not-contain-whitespaces': true },
		output: 1
	},
	{
		desc: 'should have one issue when a href includes whitespace',
		input: '<html><body><a href="https://www. debitoor.com"/>link</a></body></html>',
		opts: { 'a-href-should-not-contain-whitespaces': true },
		output: 1
	}
];