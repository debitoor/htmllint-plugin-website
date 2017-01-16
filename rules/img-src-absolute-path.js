const Issue = require('htmllint/lib/issue');
const {isAbsolutePath} = require('../utils');

module.exports = {
	name: 'img-src-absolute-path',
	on: ['tag'],
	filter: ['img']
};

module.exports.lint = function (element, options) {
	var issues = [];
	
	const src = element.attribs.src && element.attribs.src.value;
	const absolutePath = options['img-src-absolute-path'];
	
	if (absolutePath && !isAbsolutePath(src)) {
		issues.push(new Issue('absolute-path', element.openLineCol, {}));
	}

	return issues;
};