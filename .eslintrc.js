module.exports = {
	root: true,
	env: {
		node: true
	},
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'semi': ['error', 'never'],
		'no-console': 'warn',
		'quotes': ['error', 'single'],
		'curly': 'error',
		'brace-style': ['error', 'stroustrup'],
		'indent': ['error', 'tab'],
		'eol-last': ['error', 'always'],
		'@typescript-eslint/no-unused-vars': 'error'
	}
}
