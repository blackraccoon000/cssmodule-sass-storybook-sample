const path = require('path')

console.log(path.join(__dirname, 'styles'))

module.exports = {
  reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
}
