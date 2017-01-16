module.exports = [
	{
		desc: 'should return zero issues for a document with two img tags that have unique alt/src',
		input: '<html><body><img src="/foo.jpg" alt="foo" /><img src="/bar.jpg" alt="bar" /><body></html>',
		opts: { 'img-alt-unique': true },
		output: 0
	},
	{
		desc: 'should return zero issues for a document with two img tags with identical alt/src',
		input: '<html><body><img src="/foo.jpg" alt="foo" /><img src="/foo.jpg" alt="foo" /><body></html>',
		opts: { 'img-alt-unique': true },
		output: 0
	},
	{
		desc: 'should return zero issues for a document with two img tags that have unique alt and identical src',
		input: '<html><body><img src="/foo.jpg" alt="foo" /><img src="/foo.jpg" alt="bar" /><body></html>',
		opts: { 'img-alt-unique': true },
		output: 0
	},
	{
		desc: 'should return zero issues for a document with two img tags that have identical src and empty alt',
		input: '<html><body><img src="/foo.jpg" alt="" /><img src="/foo.jpg" alt="" /><body></html>',
		opts: { 'img-alt-unique': true },
		output: 0
	},
	{
		desc: 'should return one issue for a document with two img tags that have identical alt and unique src',
		input: '<html><body><img src="/foo.jpg" alt="foo" /><img src="/bar.jpg" alt="foo" /><body></html>',
		opts: { 'img-alt-unique': true },
		output: 1
	}
];