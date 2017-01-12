const Issue = require('htmllint/lib/issue');

module.exports = {
	name: 'head-meta-description',
	on: ['tag'],
	filter: ['head']
};

module.exports.lint = function (element, options) {
	var issues = [];
	
	const required = options['head-meta-description-required'];
	const minLength = options['head-meta-description-min-length'];
	const maxLength = options['head-meta-description-max-length'];

	var metaDescriptionElements = element.children.filter((childElement) => {
		return childElement.type === 'tag' 
			&& childElement.name === 'meta' 
			&& childElement.attribs 
			&& childElement.attribs.name
			&& childElement.attribs.name.value === 'description';
	});

	if (required && metaDescriptionElements.length === 0) {
		let issue = new Issue('required', element.openLineCol, {});

		issues.push(issue);
	}

	metaDescriptionElements.forEach(metaDescriptionElement => {
		let metaDescription = metaDescriptionElement.attribs.content && metaDescriptionElement.attribs.content.value;

		if (minLength && (!metaDescription || (metaDescription && metaDescription.length < minLength))) {
			issues.push(new Issue('min-length', metaDescriptionElement.openLineCol, {minLength}));
		}

		if (maxLength && (!metaDescription || (metaDescription && metaDescription.length > maxLength))) {
			issues.push(new Issue('max-length', metaDescriptionElement.openLineCol, {maxLength}));
		}
	});
	
	return issues;
};