const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        new HtmlWebpackPlugin({
            title: 'Social Relationship Manager',
            template: path.join(__dirname, '/src/index.html')
        }),
        new HtmlWebpackPlugin({
            title: 'Social Relationship Manager | Privacy',
            template: path.join(__dirname, '/src/privacy.html'),
            filename: 'privacy.html'
        }),
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        alias: {
            Constants: path.resolve(__dirname, './src/js/constants.js'),
            DB: path.resolve(__dirname, './src/js/db/db.js'),
            Store: path.resolve(__dirname, './src/js/db/store.js'),
            Actions: path.resolve(__dirname, './src/js/db/actions'),
            Reducers: path.resolve(__dirname, './src/js/db/reducers'),
            Models: path.resolve(__dirname, './src/js/models'),
            UI: path.resolve(__dirname, './src/js/ui'),
            Components: path.resolve(__dirname, './src/js/ui/components'),
            Utils: path.resolve(__dirname, './src/js/utils'),
        }
    }
}
