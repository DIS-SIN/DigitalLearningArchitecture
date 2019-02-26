const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: [
        '@babel/polyfill',
        'whatwg-fetch',
        __dirname + '/js/index.jsx'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ],
                            "plugins": [
                                [
                                    "@babel/plugin-proposal-class-properties",
                                    {
                                        "loose": true
                                    }
                                ]
                            ]
                        }
                    }
                ],
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: true } },
                    {
                        loader: 'sass-loader', options: {
                            sourceMap: true,
                            includePaths: glob.sync('node_modules').map((d) => path.join(__dirname, d)),
                        }
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })
    ]
};

module.exports = config;
