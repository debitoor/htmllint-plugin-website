const {
	isAbsoluteUrl,
	isAbsolutePath,
	isEmpty,
	isHttpsUrl,
	isLowerCase, hasTrailingSlashInUrlPath,
	isInternalLink,
	isMailtoLink,
	isFirstCharSlash,
	absoluteUrlIsHost
} = require('../utils');
const assert = require('assert');

describe('utils', () => {
	describeFunc(isAbsoluteUrl, [
		{ args: ['http://foo.bar'], expected: true },
		{ args: ['https://foo.bar'], expected: true },
		{ args: ['//foo.bar'], expected: true },
		{ args: ['/foo.bar'], expected: false }
	]);

	describeFunc(isAbsolutePath, [
		{ args: ['http://foo.bar'], expected: false },
		{ args: ['https://foo.bar'], expected: false },
		{ args: ['//foo.bar'], expected: false },
		{ args: ['/foo.bar'], expected: true }
	]);

	describeFunc(isEmpty, [
		{ args: [[]], expected: true },
		{ args: [[1]], expected: false }
	]);

	describeFunc(isHttpsUrl, [
		{ args: ['http://foo.bar'], expected: false },
		{ args: ['https://foo.bar'], expected: true }
	]);

	describeFunc(isLowerCase, [
		{ args: ['abc'], expected: true },
		{ args: ['ABC'], expected: false }
	]);

	describeFunc(hasTrailingSlashInUrlPath, [
		{ args: ['https://foo.bar/'], expected: false },
		{ args: ['https://foo.bar/baz'], expected: false },
		{ args: ['https://foo.bar/baz/qux'], expected: false },
		{ args: ['https://foo.bar/baz/'], expected: true },
		{ args: ['https://foo.bar/baz/qux/'], expected: true },
		{ args: ['https://foo.bar/baz/qux/?quux=quuz'], expected: true },
		{ args: ['https://foo.bar/baz/qux?quux=quuz'], expected: false }
	]);
	describeFunc(isInternalLink, [
		{ args: ['http://foo.bar'], expected: false },
		{ args: ['https://foo.bar'], expected: false },
		{ args: ['/foo/bar'], expected: true },
		{ args: ['foo/bar'], expected: true },
		{ args: ['mailto:foo@bar.com'], expected: true },
	]);
	describeFunc(isMailtoLink, [
		{ args: ['mailto:'], expected: true },
		{ args: ['mailto:foo@bar.com'], expected: true },
		{ args: ['/mailto:'], expected: false },
		{ args: ['mail:foo@bar.com'], expected: false },
	]);
	describeFunc(isFirstCharSlash, [
		{ args: ['/foo-bar'], expected: true },
		{ args: ['foo-bar'], expected: false },
		{ args: ['foo/bar'], expected: false },
		{ args: ['/foo/bar'], expected: true },
	]);

	describeFunc(absoluteUrlIsHost, [
		{ args: [new RegExp('^(https?:\/\/)?(www\.)?debitoor\.com'), 'https://debitoor.com'], expected: true},
		{ args: [new RegExp('^(https?:\/\/)?(www\.)?debitoor\.com'), 'http://debitoor.com'], expected: true},
		{ args: [new RegExp('^(https?:\/\/)?(www\.)?debitoor\.com'), 'www.debitoor.com'], expected: true},
		{ args: [new RegExp('^(https?:\/\/)?(www\.)?debitoor\.com'), '/foo/bar'], expected: false}
	]);

});

function describeFunc (func, tests) {
	describe(func.name, () => {
		tests.forEach(test => {
			describe(JSON.stringify(test.args), () => {
				let expected = test.expected;
				let actual = func.apply(null, test.args);

				it(`should be ${expected}`, () => {
					assert.equal(expected, actual);
				});
			});
		});
	});
}