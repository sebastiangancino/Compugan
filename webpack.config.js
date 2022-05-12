
/*const path = require('path');//nos permite saber donde
//está ubicado el proyecto, es decir local o en un servidor, etc
const HtmlWebpackPlugin = require('html-webpack-plugin'); //viene del recurso que instalamos
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', //punto de entrada
    output: { //donde va a vivir el proyecto ya preparado
        path: path.resolve(__dirname, 'dist'),//  resolve  dirname para saber donde nos encontramos, dist de distribution

        filename: 'bundle.js',  //nombre del empaquetad 
        publicPath: '/'
    },
    mode: 'development', //modo desarrollo
    resolve: {
        extensions: ['.js', '.jsx'], //extensiones con que vamos a trabajar
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve( __dirname, 'src/assets/icons/'),
            '@logos': path.resolve( __dirname, 'src/assets/logos/')
        }
    },

    
    module: {  //las reglas a crear y plugins
        rules: [
            {
                test: /\.(js|jsx)?$/, //probar los elementos los que vamos a trabajar
                exclude: /node_modules/, // lo que ignora
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]

            },
            {
                // test: /\.s[ac]ss$/i,
                test: /\.(scss|css)$/,
                use: [
                    "style-loader", "css-loader", "sass-loader",
                ],
            },
            { // configuración para assets
                test: /\.(png|svg|jpg|gif)$/,
                type: 'assets'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // debe estar importado Html Webpack plugin
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({ //plugin css y sass
            filename: '[name].css'
        }),
    ],
        /* devServer: {// configuración de modo desarrollo para el servidor
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            compress: true,
            port: 3000, // puerto más común

        }    //shift alt a para comentar
        devServer: {
            historyApiFallback: true,
        }
}*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	

    mode: 'development', //modo desarrollo
    resolve: {
        extensions: ['.js', '.jsx'], //extensiones con que vamos a trabajar
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
        }
    },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				type: 'asset'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	],
	devServer: {
		historyApiFallback: true,
	}
}