const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

let env = process.env.NODE_ENV || 'development';
let isProd = env === 'production';

module.exports = {
    entry: {
        bundle: [
            './src/js/index.js',
            './src/scss/style.scss'
        ]
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
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
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !isProd
                        }
                    }
                ]
            }
        ]
    }, 
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css"
        })
    ],
    devServer: {
        contentBase: './dist'
    }
};
