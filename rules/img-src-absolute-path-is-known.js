const Issue = require('htmllint/lib/issue');
const {isAbsolutePath, hasTrailingSlash} = require('../utils');

module.exports = {
	name: 'img-src-absolute-path-is-known',
	on: ['tag'],
	filter: ['img']
};

module.exports.lint = function (element, options) {
	var issues = [];

	const src = element.attribs.src && element.attribs.src.value;
	const isKnown = options['img-src-absolute-path-is-known'];
	
	if (isAbsolutePath(src) && isKnown(src)) {
		issues.push(new Issue('is-known', element.openLineCol, {}));
	}

	return isues;
};