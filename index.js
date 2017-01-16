module.exports = {
	rules: [
		require('./rules/a-href-absolute-path-no-trailing-slash'),
		require('./rules/head-link-canonical'),
		require('./rules/head-meta-description'),
		require('./rules/img-src-absolute-path'),
		require('./rules/img-src-absolute-path-is-known'),
		require('./rules/img-src-absolute-path-lowercase.js')
	]
}