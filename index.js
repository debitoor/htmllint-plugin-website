module.exports = {
	rules: [
		require('./rules/head-link-canonical'),
		require('./rules/head-meta-description'),
		require('./rules/img-src-absolute-path-known'),
		require('./rules/img-src-absolute-path-lowercase.js'),
		require('./rules/img-src-absolute-path-is-known.js')
	]
}