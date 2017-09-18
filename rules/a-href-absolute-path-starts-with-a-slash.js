const Issue = require('htmllint/lib/issue');
const { isInternalLink } = require('../utils.js');

module.exports = {
	name: '',
	on: ['tag'],
	filter: ['a']
};

module.exports.link = function (element, options) {
	var issues = [];

	const href = element.attribs.href && element.attribs.href.value;
	const noStartingSlash = options['a-href-absolute-path-starts-with-a-slash.js'];
	console.log('Href: ', href);
	const linkIsInternal = isInternalLink(href);

	if (noStartingSlash) {
		issues.push(new Issue('no-starting-slash-on-internal-links'), element.openLineCol, {href});
	}

	return issues;
};