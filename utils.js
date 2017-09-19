const url = require('url');

module.exports = {
	isAbsolutePath,
	isAbsoluteUrl,
	isEmpty,
	isHttpsUrl,
	isLowerCase,
	hasTrailingSlashInUrlPath,
	isInternalLink,
	isMailtoLink,
	isFirstCharSlash
};

function isAbsolutePath (value) {
	return value && /^\/[^\/]/g.test(value);
}

function isAbsoluteUrl (value) {
	return value && /^(?:https?:)?\/\//g.test(value);
}

function isHttpsUrl (value) {
	return value && /^https:\/\//g.test(value);
}

function isEmpty (array) {
	return array && array.length === 0;
}

function isLowerCase (value) {
	return value && value.toLowerCase() === value;
}

function hasTrailingSlashInUrlPath (value) {
	let urlObj = url.parse(value);

	if (urlObj.pathname.length === 1) {
		return false;
	}

	return urlObj.pathname.endsWith('/');
}

function isInternalLink (value) {
	let externalLinkRegex = new RegExp('^(?:[a-z]+:)?//', 'i');
	return value && !externalLinkRegex.test(value);
}

function isMailtoLink (value) {
	return value && /^mailto:/g.test(value);
}

function isFirstCharSlash (value) {
	return value && /^\//g.test(value);
}