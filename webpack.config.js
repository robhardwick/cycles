const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const CDNs = [
    "https://cycles1.willkommenrecords.co.uk",
    "https://cycles2.willkommenrecords.co.uk",
    "https://cycles3.willkommenrecords.co.uk",
];
let resources = new Proxy({}, {
    get: (target, name) => name in target ? target[name] : 0
});

module.exports = (env, argv) => ({
    output: {
        publicPath: "/cycles/",
        filename: argv.mode === "production" ? '[name].[contenthash].js' : '[name].js',
    },
    devServer: {
        publicPath: "/cycles/",
        openPage: "cycles/",
        hot: true
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            },
        },
        {
            test: /\.(svg|mp3|webm)$/,
            loader: "file-loader",
            options: {
                publicPath: (url, resourcePath, context) => {
                    if (argv.mode === "production") {
                        const index = resources[resourcePath.split('.').pop()]++;
                        return `${CDNs[index % CDNs.length]}/${url}`;
                    }
                    return url;
                }
            }
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
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
    optimization: {
        minimizer: [
            new TerserJSPlugin({
                terserOptions: {
                    mangle: true,
                    output: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
            new OptimizeCSSAssetsPlugin()
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: argv.mode === "production" ? '[name].[hash].css' : '[name].css',
            chunkFilename: argv.mode === "production" ? '[id].[hash].css' : '[id].css',
        }),
    ]
});