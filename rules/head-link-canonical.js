const Issue = require('htmllint/lib/issue');
const {isAbsoluteUrl, isEmpty, isHttpsUrl, isLowerCase} = require('../utils');

module.exports = {
	name: 'head-link-canonical',
	on: ['tag'],
	filter: ['head']
};

module.exports.lint = function (element, options) {
	var issues = [];
	
	const absolute = options['head-link-canonical-absolute'];
	const https = options['head-link-canonical-https'];
	const lowercase = options['head-link-canonical-lowercase'];
	const required = options['head-link-canonical-required'];
		
	var linkCanonicalElements = element.children.filter((childElement) => {
		return childElement.type === 'tag'
			&& childElement.name === 'link'
			&& childElement.attribs
			&& childElement.attribs.rel
			&& childElement.attribs.rel.value === 'canonical';
	});

	if (required && isEmpty(linkCanonicalElements)) {
		issues.push(new Issue('required', element.openLineCol, {}));
	}

	linkCanonicalElements.forEach(linkCanonicalElement => {
		let href = linkCanonicalElement.attribs.href && linkCanonicalElement.attribs.href.value;

		if (required && !href) {
			issues.push(new Issue('required', linkCanonicalElement.openLineCol, {}));
		}
		
		if (href) {
			if (absolute && !isAbsoluteUrl(href)) {
				issues.push(new Issue('absolute', linkCanonicalElement.openLineCol, {href}));
			}

			if (https && !isHttpsUrl(href)) {
				issues.push(new Issue('https', linkCanonicalElement.openLineCol, {href}));
			}

			if (lowercase && !isLowerCase(href)) {
				issues.push(new Issue('lowercase', linkCanonicalElement.openLineCol, {href}));
			}
		}
	});
	
	return issues;
};