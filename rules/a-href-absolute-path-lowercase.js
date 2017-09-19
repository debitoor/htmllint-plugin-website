const Issue = require('htmllint/lib/issue');
const { isAbsolutePath, isLowerCase } = require('../utils');

module.exports = {
	name: 'a-href-absolute-path-lowercase',
	on: ['tag'],
	filter: ['a']
};

module.exports.lint = function (element, options) {
	var issues = [];

	const href = element.attribs.href && element.attribs.href.value;
	const shouldBeLowerCase = options['a-href-absolute-path-lowercase'];

	if (shouldBeLowerCase && isAbsolutePath(href) && !isLowerCase(href)) {
		issues.push(new Issue('lowercase', element.openLineCol, { href }));
	}

	return issues;
};