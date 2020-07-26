const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    // console.log(env);

    return {
        mode: 'none',
        devtool: false,
        plugins: [
            // каждый плагин это конструктор
            new HtmlWebpackPlugin({
                template: './static/template.html',
                title: 'Изучаем Webpack 4',
            }),
        ],
    };
};
