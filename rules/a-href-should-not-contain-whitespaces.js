const Issue = require('htmllint/lib/issue');
const {
	containsWhiteSpace
} = require('../utils.js');

module.exports = {
	name: 'a-href-should-not-contain-whitespaces',
	on: ['tag'],
	filter: ['a']
};

module.exports.lint = function (element, options) {
	var issues = [];

	const href = element.attribs.href && element.attribs.href.value;

	const shouldNotContainWhitespaces = options['a-href-should-not-contain-whitespaces'];

	if (shouldNotContainWhitespaces && containsWhiteSpace(href)) {
		issues.push(new Issue('should-not-contain-whitespace', element.openLineCol, {
			href
		}));
	}

	return issues;
};