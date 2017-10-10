const Issue = require('htmllint/lib/issue');
const { absoluteUrlIsHost, isAbsolutePath } = require('../utils');

module.exports = {
	name: 'internal-link-should-be-absolute-path',
	on: ['tag'],
	filter: ['a']
};

module.exports.lint = function (element, options) {
	var issues = [];

	const href = element.attribs.href && element.attribs.href.value;
	const internalLinkAbsolutePath = options['internal-link-should-be-absolute-path'];

	if (internalLinkAbsolutePath && internalLinkAbsolutePath(href)) {
		issues.push(new Issue('internal-link-should-be-absolute-path', element.openLineCol, { href }));
	}

	return issues;
}