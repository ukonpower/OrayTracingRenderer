const path = require( 'path' );

module.exports = {
	resolve: {
		modules: [ 'node_modules' ],
		extensions: [ '.ts', '.js' ],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			},
			{
				test: /\.(glsl|vs|fs)$/,
				use: [
					{
						loader: 'shader-loader',
						options: {
							glsl: {
								chunkPath: './src/utils/shader/modules/'
							}
						}
					}
				]
			}
		]
	}
};
