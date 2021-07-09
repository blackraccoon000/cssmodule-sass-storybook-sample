const path = require('path')

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
		{
			name: "@storybook/preset-scss",
			options: {
				cssLoaderOptions: {
					modules: true,
				},
				scssLoaderOptions: {
					sourceMap: true,
				},
			},
		},
  ],
  "core": {
    "builder": "webpack5"
  },
	webpackFinal: async (config) => {
		config.resolve.modules = [
			...(config.resolve.modules || []),
			path.resolve(__dirname, "../"),
		];
		return config;
	},
}