const webpack = require('webpack')
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: {
        index: "./src/index.js",
        explore: "./src/explore.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "docs"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: ["raw-loader"],
            },
            {
                test: /\.(txt)$/,
                use: ["raw-loader"],
            },
            {
                test: /\.(webp)$/,
                use: ["raw-loader"],
            },
        ],
    },

    stats: "errors-warnings",
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        watchFiles: ["src/**", "static/**"],
        static: {
            watch: true,
            directory: path.join(__dirname, "./static"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "main",
            chunks: ["index"],
            minify: "auto",
        }),
        new HtmlWebpackPlugin({
            title: "explore",
            filename: "explore/index.html",
            chunks: ["explore"],
            minify: "auto",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "./static"),
                    to: "static/",
                },
            ],
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
          }),
    ],
    optimization: {
        moduleIds: "deterministic",
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
}
