var path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		publicPath:'/dist',
		path: path.resolve(__dirname, 'dist'),
		filename: 'html-template-engine.js',
	    libraryTarget: 'umd',
	    library: 'HTMLTemplateEngine'
	},
	devtool: "source-map",
  	devServer: {
	    contentBase:  './dist',
	    hot: true,
	    disableHostCheck: true,
	    historyApiFallback: true
  	},
};