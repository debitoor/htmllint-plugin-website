const url = require('url');

module.exports = {
	isAbsolutePath,
	isAbsoluteUrl,
	isEmpty,
	isHttpsUrl,
	isLowerCase,
	hasTrailingSlashInUrlPath
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