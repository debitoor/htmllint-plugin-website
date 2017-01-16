const Issue = require('htmllint/lib/issue');
const {isAbsolutePath, hasTrailingSlash} = require('../utils');

module.exports = {
	name: 'a-href-absolute-path-no-trailing-slash',
	on: ['tag'],
	filter: ['img']
};

module.exports.lint = function (element, options) {
	var issues = [];
	
	const src = element.attribs.src && element.attribs.src.value;
	const noTrailingSlash = options['a-href-absolute-path-no-trailing-slash'];
	
	if (noTrailingSlash && isAbsolutePath(src) && hasTrailingSlash(src)) {
		issues.push(new Issue('no-trailing-slash', element.openLineCol, {}));
	}

	return isues;
};