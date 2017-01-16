const {isAbsoluteUrl, isAbsolutePath, isEmpty, isHttpsUrl, isLowerCase, hasTrailingSlashInUrlPath} = require('../utils');
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