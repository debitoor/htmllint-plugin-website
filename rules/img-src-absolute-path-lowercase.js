const Issue = require('htmllint/lib/issue');
const {isAbsolutePath, isLowerCase} = require('../utils');

module.exports = {
	name: 'img-src-absolute-path-lowercase',
	on: ['tag'],
	filter: ['img']
};

module.exports.lint = function (element, options) {
	var issues = [];
	
	const src = element.attribs.src && element.attribs.src.value;
	const lowercase = options['img-src-absolute-path-lowercase'];
	
	if (lowercase && isAbsolutePath(src) && !isLowerCase(src)) {
		issues.push(new Issue('lowercase', element.openLineCol, {}));
	}

	return isues;
};