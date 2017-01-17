module.exports = [
	{
		desc: 'should have zero issues when canonical link is an absolute url',
		input: '<html><head><link rel="canonical" href="https://google.com"></head><body></body></html>',
		opts: { 'head-link-canonical-absolute': true },
		output: 0
	},
	{
		desc: 'should have one issue when canonical link is not an absolute url',
		input: '<html><head><link rel="canonical" href="/google.com"></head><body></body></html>',
		opts: { 'head-link-canonical-absolute': true },
		output: 1
	},
	{
		desc: 'should have zero issues when canonical link has https protocol',
		input: '<html><head><link rel="canonical" href="https://google.com"></head><body></body></html>',
		opts: { 'head-link-canonical-https': true },
		output: 0
	},
	{
		desc: 'should have one issue when canonical link does not have https protocol',
		input: '<html><head><link rel="canonical" href="http://google.com"></head><body></body></html>',
		opts: { 'head-link-canonical-https': true },
		output: 1
	},
	{
		desc: 'should have zero issues when canonical link is lowercase',
		input: '<html><head><link rel="canonical" href="https://google.com"></head><body></body></html>',
		opts: { 'head-link-canonical-lowercase': true },
		output: 0
	},
	{
		desc: 'should have one issue when canonical link is not lowercase',
		input: '<html><head><link rel="canonical" href="https://Google.com"></head><body></body></html>',
		opts: { 'head-link-canonical-lowercase': true },
		output: 1
	},
	{
		desc: 'should have zero issues when canonical link is present',
		input: '<html><head><link rel="canonical" href="https://google.com"></head><body></body></html>',
		opts: { 'head-link-canonical-required': true },
		output: 0
	},
	{
		desc: 'should have one issue when canonical link is not present',
		input: '<html><head></head><body></body></html>',
		opts: { 'head-link-canonical-required': true },
		output: 1
	},
	{
		desc: 'should have one issue when canonical link is empty',
		input: '<html><head><link rel="canonical" href=""></head><body></body></html>',
		opts: { 'head-link-canonical-required': true },
		output: 1
	}
];