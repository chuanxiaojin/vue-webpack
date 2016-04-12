var webpack = require('webpack');
var path = require('path');
// var CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * 自定义路径
 */
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');

var publicPath = '/dist/'
module.exports = {
	entry: { //可以定义多个入口文件
		app: path.resolve(APP_PATH, 'app.js'),
		// css: path.resolve(APP_PATH, 'css/app.css'),
		// 这样打包第三方文件会打包出一个 js 文件 (还没有弄明白)
		vendor : [path.resolve(APP_PATH, 'vendor/bootstrap/bootstrap-2.0.2-min.css'), path.resolve(APP_PATH, 'vendor/lzx/lzx.common-0.1.0.css')]
		// bootstrap: path.resolve(APP_PATH, 'vendor/bootstrap/bootstrap-2.0.2-min.css')
		// vendor: ['jquery']  // jquery 不用直接可以干掉
	},
	output: {
		path: DIST_PATH,
		filename: 'js/[name].min.js', // 添加hash 
		publicPath: publicPath
	},
	module: {
		perLoaders: [
	        {
	            test: /\.jsx?$/,
	            include: APP_PATH,
	            loader: 'jshint-loader'
	        }
	    ],
		loaders: [
			{ 
				test: /\.js$/, 
				loader: 'babel', 
				exclude: /node_modules/
			},
			{
				test: /\.(css|scss)$/,
				// loader: "style-loader!css-loader!autoprefixer"
				// 将css文件单独打包
				loader:  ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
			},
			{
				test: /\.less$/,
				// loader: 'style-loader!css-loader!less-loader'},
				loader:  ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url?limit=8192' // 图片低于 8MB 时转换成 inline base64，非常神奇！
			},
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.(html|tpl)$/,
				loader: 'html-loader'
			}
		]
	},
	vue: {   //vue 配置, 需要单独拿出来配置
		loaders: {
			css: 'style!css!autoprefixer!sass?sourceMap'
		}
	},
	//服务器配置, 自动刷新
	devServer: {
		historyApiFallback: true,
		hot: false,
		inline: true,
		progress: true,
		contentBase:'./dist',
		//其实很简单的，只要配置这个参数就可以了
		//好像还是8080，不知道怎么回事，慢慢看
        proxy: {
          '/api/*': {
              target: 'http://localhost:3000',
              secure: false
          }
        }
	},
	//配置babel转化成es5的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
	plugins: [
		//这个使用uglifyJs压缩你的js代码
	    new webpack.optimize.UglifyJsPlugin({minimize: true}),
	    // 打包第三方文件
	    new webpack.optimize.CommonsChunkPlugin({
	    	name: "vendor",
	    	filename: "js/vendor.min.js"
	    }),
	    //将css文件单独打包
	    new ExtractTextPlugin("css/[name].min.css"),  
		// 记载 jquery 若不需要怎不用加载
	    new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
	    }),
	    new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
    		favicon:'./src/favicon.ico', //favicon路径
			filename:'/index.html',	//生成的html存放路径，相对于 path
			template:'./index.html',	//html模板路径
			inject:true,	//允许插件修改哪些内容，包括head与body
			hash:true,	//为静态资源生成hash值
			minify:{	//压缩HTML文件
				removeComments:true,	//移除HTML中的注释
				collapseWhitespace:true	//删除空白符与换行符
			}
		})
	],
	resolve: {
		// root参数将node_modules设置成了搜索目录。
		root: [process.cwd() + '/src', process.cwd() + '/node_modules'],
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: 'eval-source-map'
}