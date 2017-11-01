const path = require("path");
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "./app/index.html",
    filename: "index.html",
    inject: "body"
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractTextPluginConfig =  new ExtractTextPlugin({
    filename: "bundle.css"
});

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve("chrome/build"),
        filename: "index.js"
    },
    module: {

        rules: [
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
            { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
            {
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader", 
                        {
                            loader: "postcss-loader", 
                            options: {plugins: [autoprefixer()]}
                        }
                    ]
                }),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig]
};
