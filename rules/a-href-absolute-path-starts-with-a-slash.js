const Issue = require('htmllint/lib/issue');
const { isInternalLink, isMailtoLink, isFirstCharSlash } = require('../utils.js');

module.exports = {
	name: 'a-href-absolute-path-starts-with-a-slash',
	on: ['tag'],
	filter: ['a']
};

module.exports.lint = function (element, options) {
	var issues = [];

	const href = element.attribs.href && element.attribs.href.value;

	const noStartingSlash = options['a-href-absolute-path-starts-with-a-slash'];
	const linkIsInternal = isInternalLink(href);
	const firstCharIsSlash = isFirstCharSlash(href);
	const hrefIsMailLink = isMailtoLink(href);

	if (noStartingSlash && linkIsInternal && !firstCharIsSlash && !hrefIsMailLink) {
		issues.push(new Issue('no-starting-slash-internal-link', element.openLineCol, {href}));
	}

	return issues;
};