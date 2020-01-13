const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
console.log('index.html path',path.join(__dirname, '/src/index.html'))
module.exports = {
    mode: process.env.NODE_ENV || 'production',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3000,
        hot: true,
    },
    entry: './src/js/index.js',
    output: {
        path: path.resolve('public'),
        filename: '[name].js'    
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader','css-loader','sass-loader'],
              },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                        disable: true
                    },
                  },
                ],
              }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Social Relationship Manager',
            template: path.join(__dirname, '/src/index.html')
        })
    ]
};
