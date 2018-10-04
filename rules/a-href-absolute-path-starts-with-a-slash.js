const Issue = require('htmllint/lib/issue');
const { isMailtoLink, isHrefAnchorLink, isFirstCharSlash, isInternalLink, isTelLink } = require('../utils.js');

module.exports = {
	name: 'a-href-absolute-path-starts-with-a-slash',
	on: ['tag'],
	filter: ['a']
};

module.exports.lint = function(element, options) {
	var issues = [];

	const href = element.attribs.href && element.attribs.href.value;

	const noStartingSlashOpts = options['a-href-absolute-path-starts-with-a-slash'];
	const hrefIsTelLink = isTelLink(href);
	const hrefIsMailLink = isMailtoLink(href);
	const hrefIsAnchor = isHrefAnchorLink(href);

	if (
		noStartingSlashOpts
		&& isInternalLink(href)
		&& !isFirstCharSlash(href)
		&& !hrefIsMailLink
		&& !hrefIsTelLink
		&& !hrefIsAnchor
	) {
		issues.push(new Issue('no-starting-slash-internal-link', element.openLineCol, { href }));
	}

	return issues;
};