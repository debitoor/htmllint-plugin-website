module.exports = [
	{
		desc: 'should have one issue when title is longer than 2',
		input: '<html><head><title>foo</title></head></html>',
		opts: { 'head-title-max-length': 2 },
		output: 1
	},
	{
		desc: 'should have zero issue when title is shorter than 3',
		input: '<html><head><title>foo</title></head></html>',
		opts: { 'head-title-max-length': 3 },
		output: 0
	},
	{
		desc: 'should have zero issue when title is shorter than 4',
		input: '<html><head><title>foo</title></head></html>',
		opts: { 'head-title-max-length': 4 },
		output: 0
	},
	{
		desc: 'should have zero issue when title is empty',
		input: '<html><head><title></title></head></html>',
		opts: { 'head-title-max-length': 4 },
		output: 0
	},
	{
		desc: 'should have one issue when title is shorter than min length 4',
		input: '<html><head><title>foo</title></head></html>',
		opts: { 'head-title-min-length': 4 },
		output: 1
	},
	{
		desc: 'should have zero issues when title is longer than min length 2',
		input: '<html><head><title>foo</title></head></html>',
		opts: { 'head-title-min-length': 2 },
		output: 0
	},
	{
		desc: 'should have one issue when title is empty and min length is 4',
		input: '<html><head><title></title></head></html>',
		opts: { 'head-title-min-length': 4 },
		output: 1
	},
	{
		desc: 'should have zero issues when title with html entity is longer than max length of 1',
		input: '<html><head><title>&amp;</title></head></html>',
		opts: { 'head-title-max-length': 1 },
		output: 0
	}
];