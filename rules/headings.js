const Issue = require('htmllint/lib/issue');

module.exports = {
	name: 'headings',
	on: ['tag'],
	headings: createHeadings(),
	filter: ['h1','h2','h3','h4','h5','h6']
};

module.exports.end = function () {
	var issues = [];

	if (this.headings.h1 + this.headings.h2 + this.headings.h3 === 0) {
		issues.push(new Issue('at-least-one-h1-or-h2-or-h3', {}, {}));
	}

	this.headings = createHeadings();

	return issues;
};

module.exports.lint = function (element, options) {
	var issues = [];

	this.headings[element.name]++;

	if (this.headings.h1 > 1) {
		issues.push(new Issue('more-than-one-h1', element.openLineCol, {}));
	}

	if (element.parent.name === 'p') {
		issues.push(new Issue('in-p', element.openLineCol, {}));
	}

	return issues;
};

function createHeadings () {
	return { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 };
}