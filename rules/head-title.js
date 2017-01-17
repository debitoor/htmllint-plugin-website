const Issue = require('htmllint/lib/issue');
const htmlEntities = require('html-entities');
const entities = new htmlEntities.AllHtmlEntities();	

module.exports = {
	name: 'head-title',
	on: ['tag'],
	filter: ['head']
};

module.exports.lint = function (element, options) {
	var issues = [];
	
	const required = options['head-title-required'];
	const minLength = options['head-title-min-length'];
	const maxLength = options['head-title-max-length'];

	if (!required && !minLength && !maxLength) {
		return issues;
	}

	var titleElements = element.children.filter((childElement) => {
		return childElement.type === 'tag' 
			&& childElement.name === 'title';
	});

	if (required && titleElements.length === 0) {
		let issue = new Issue('required', element.openLineCol, {});

		issues.push(issue);
	}

	titleElements.forEach(titleElement => {
		let title = titleElement.children
			.filter(c => c.type === 'text')
			.map(c => c.data)
			.join('');

		if (title) {
			title = entities.decode(title);
		}

		if (minLength && (!title || title.length < minLength)) {
			issues.push(new Issue('min-length', titleElement.openLineCol, {minLength}));
		}

		if (maxLength && title && title.length > maxLength) {
			issues.push(new Issue('max-length', titleElement.openLineCol, {maxLength}));
		}
	});
	
	return issues;
};