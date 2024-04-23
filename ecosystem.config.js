module.exports = {
	 apps: [
		{
			name: 'zekrimarket',
			exec_mode: 'cluster',
			instances: 'max',
			script: './.output/server/index.mjs',
			args: 'start'
		}
	]
}
