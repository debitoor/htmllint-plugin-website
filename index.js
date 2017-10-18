module.exports = {
	rules: [
		require('./rules/a-href-absolute-path-is-known'),
		require('./rules/a-href-absolute-path-lowercase'),
		require('./rules/a-href-absolute-path-no-trailing-slash'),
		require('./rules/a-href-absolute-path-starts-with-a-slash'),
		require('./rules/a-href-should-not-contain-whitespaces'),
		require('./rules/head-link-canonical'),
		require('./rules/head-meta-description'),
		require('./rules/head-title'),
		require('./rules/headings'),
		require('./rules/img-alt-unique'),
		require('./rules/img-src-absolute-path'),
		require('./rules/img-src-absolute-path-is-known'),
		require('./rules/img-src-absolute-path-lowercase.js'),
		require('./rules/internal-link-should-be-absolute-path'),
	]
};