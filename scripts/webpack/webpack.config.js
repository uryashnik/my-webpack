const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {PROJECT_ROOT, SOURCE_DIRECTORY, BUILD_DIRECTORY, DIST_DIRECTORY} = require('./constants');
const {HotModuleReplacementPlugin} = require('webpack');

module.exports = (env) => {
    console.log(PROJECT_ROOT, 'root');
    return {
        mode: 'none',
        devtool: false,
        entry: ['webpack-hot-middleware/client?reload=true&quiet=true', SOURCE_DIRECTORY],
        output: {path: BUILD_DIRECTORY, filename: 'bundle.js'},
        module: {
            rules: [{test: /\.css$/, use: ['style-loader', 'css-loader']}],
        },
        plugins: [
            // каждый плагин это конструктор
            new HtmlWebpackPlugin({
                template: './static/template.html',
                title: 'Изучаем Webpack 4',
            }),
            new CleanWebpackPlugin({
                root: PROJECT_ROOT,
                verbose: true,
                // cleanOnceBeforeBuildPatterns: [DIST_DIRECTORY, BUILD_DIRECTORY],
            }),
            new HotModuleReplacementPlugin(),
        ],
    };
};
