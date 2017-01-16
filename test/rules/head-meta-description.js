module.exports = [
	{
		desc: 'should have one issue when description is longer than 2',
		input: '<html><head><meta name="description" content="foo"></head></html>',
		opts: { 'head-meta-description-max-length': 2 },
		output: 1
	},
	{
		desc: 'should have zero issue when description is shorter than 3',
		input: '<html><head><meta name="description" content="foo"></head></html>',
		opts: { 'head-meta-description-max-length': 3 },
		output: 0
	},
	{
		desc: 'should have zero issue when description is shorter than 4',
		input: '<html><head><meta name="description" content="foo"></head></html>',
		opts: { 'head-meta-description-max-length': 4 },
		output: 0
	},
	{
		desc: 'should have zero issue when description is empty',
		input: '<html><head><meta name="description" content=""></head></html>',
		opts: { 'head-meta-description-max-length': 4 },
		output: 0
	},
	{
		desc: 'should have one issue when description is shorter than min length 4',
		input: '<html><head><meta name="description" content="foo"></head></html>',
		opts: { 'head-meta-description-min-length': 4 },
		output: 1
	},
	{
		desc: 'should have zero issues when description is longer than min length 2',
		input: '<html><head><meta name="description" content="foo"></head></html>',
		opts: { 'head-meta-description-min-length': 2 },
		output: 0
	},
	{
		desc: 'should have one issue when description is empty and min length is 4',
		input: '<html><head><meta name="description" content=""></head></html>',
		opts: { 'head-meta-description-min-length': 4 },
		output: 1
	},
	{
		desc: 'should have zero issues when description with html entity is longer than max length of 1',
		input: '<html><head><meta name="description" content="&amp;"></head></html>',
		opts: { 'head-meta-description-max-length': 1 },
		output: 0
	}
];