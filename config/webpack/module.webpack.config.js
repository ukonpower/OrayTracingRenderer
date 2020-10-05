const info = require( '../../info' );
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");
const { merge } = require( 'webpack-merge' );
const baseConfig = require( './base.webpack.config' );

module.exports = merge( baseConfig, {
	mode: 'development',
	output: {
		filename: info.packageFileName + '.module.js',
		library: info.packageBuildName,
		libraryTarget: 'var',
	},
	plugins: [
        new EsmWebpackPlugin()
    ]
} );
