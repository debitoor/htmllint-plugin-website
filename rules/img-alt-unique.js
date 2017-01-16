const Issue = require('htmllint/lib/issue');

module.exports = {
	name: 'img-alt-unique',
	on: ['tag'],
	alts: {},
	filter: ['img']
};

module.exports.end = function () {
	this.alts = {};
};

module.exports.lint = function (element, options) {
	const unique = options['img-alt-unique'];
	const src = element.attribs.src && element.attribs.src.value;
	const alt = element.attribs.alt && element.attribs.alt.value;

	let alts = this.alts;

	if (unique) {
		if (alts[alt]) {
			if (alts[alt] !== src) {
				return [new Issue('unique', element.openLineCol, {})];
			} 
		} else {
			alts[alt] = src;
		}
	}

	return [];
};