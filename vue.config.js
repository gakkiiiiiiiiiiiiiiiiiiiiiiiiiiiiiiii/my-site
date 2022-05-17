const path = require('path');

module.exports = {
	transpileDependencies: ['vuetify'],

	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
		},
	},

	css: {
		loaderOptions: {
			less: {
				lessOptions: {
					modifyVars: {
						'primary-color': '#ec6800',
					},

					javascriptEnabled: true,
				},
			},
		},
	},
};
