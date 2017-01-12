module.exports = {
	isAbsoluteUrl,
	isEmpty,
	isHttpsUrl,
	isLowerCase	
};

function isAbsoluteUrl (value) {
	return value && /^https?:\/\//g.test(value);
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