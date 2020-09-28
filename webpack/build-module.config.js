const info = require( '../info' );
const merge = require( 'webpack-merge' );
const baseConfig = require( './build-base.config' );

module.exports = merge( baseConfig, {
	mode: 'development',
	output: {
		filename: info.packageFileName + '.module.js',
		library: info.packageBuildName,
		libraryTarget: 'umd'
	},
	externals: {
		'three': 'THREE'
	},
} );
