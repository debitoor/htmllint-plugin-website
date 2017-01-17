const Issue = require('htmllint/lib/issue');
const {isAbsolutePath} = require('../utils');

module.exports = {
	name: 'a-href-absolute-path-is-known',
	on: ['tag'],
	filter: ['a']
};

module.exports.lint = function (element, options) {
	var issues = [];
	
	const href = element.attribs.href && element.attribs.href.value;
	const isKnownFunc = options['a-href-absolute-path-is-known'];
	
	if (isKnownFunc && isAbsolutePath(href) && !isKnownFunc(href)) {
		issues.push(new Issue('should-be-known', element.openLineCol, {}));
	}

	return issues;
};