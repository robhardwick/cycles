const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            },
        },
        {
            test: /\.(jpg|mp3)$/,
            use: 'file-loader'
        },
        {
            test: /\.css$/,
            use: [
                { loader: 'style-loader', options: { injectType: 'styleTag' } },
                'css-loader'
            ]
        },

        {
            test: /\.html$/,
            use: [{
                loader: "html-loader"
            }]
        }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};