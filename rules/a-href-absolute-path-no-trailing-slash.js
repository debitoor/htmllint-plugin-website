const Issue = require('htmllint/lib/issue');
const { isAbsolutePath, hasTrailingSlashInUrlPath } = require('../utils');

module.exports = {
	name: 'a-href-absolute-path-no-trailing-slash',
	on: ['tag'],
	filter: ['a']
};

module.exports.lint = function (element, options) {
	var issues = [];

	const href = element.attribs.href && element.attribs.href.value;
	const noTrailingSlash = options['a-href-absolute-path-no-trailing-slash'];

	if (noTrailingSlash && isAbsolutePath(href) && hasTrailingSlashInUrlPath(href)) {
		issues.push(new Issue('no-trailing-slash', element.openLineCol, { href }));
	}

	return issues;
};