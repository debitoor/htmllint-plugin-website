module.exports = [
	{
		desc: 'should return one issue for a document with more than one h1',
		input: '<html><body><h1>foo</h1><h1>bar</h1><body></html>',
		opts: { 'headings': true },
		output: 1
	}/*,
	{
		desc: 'should return one issue for a document with a heading inside a paragraph',
		input: '<html><body><p><h1>Heading 1</h1></p><body></html>',
		opts: { 'headings': true },
		output: 1
	}*/
];