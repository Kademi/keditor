const path = require('path');
const argv = require('yargs').argv;
const packageJson = require('./package.json');
const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const WrapperPlugin = require('wrapper-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const BANNER = `${packageJson.title} v${packageJson.version} | Copyright (c) 2016-present ${packageJson.author}`;

if (argv.prod) {
    process.env.NODE_ENV = 'production';
}
let PROD = process.env.NODE_ENV === 'production';

module.exports = {
    mode: PROD ? 'production' : 'development',
    devtool: PROD ? 'source-map' : 'eval-source-map',
    
    entry: {
        'keditor': './src/keditor/index.js',
        'keditor-components': './src/components/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        umdNamedDefine: true,
        filename: `js/[name].js`,
        globalObject: `typeof self !== 'undefined' ? self : this`
    },
    
    optimization: {
        minimizer: [
            new TerserJSPlugin({
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false
                    }
                }
            })
        ],
    },
    
    plugins: PROD ? [
        new webpack.BannerPlugin(BANNER),
        new WrapperPlugin({
            test: /\.css$/,
            footer: `/*# sourceMappingURL=[name].css.map */`
        }),
        new MiniCssExtractPlugin({
            filename: `css/[name].css`
        })
    ] : [
        new MiniCssExtractPlugin({
            filename: `css/[name].css`
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'string-replace-loader',
                        options: {
                            multiple: [
                                {
                                    search: '@{version}',
                                    replace: packageJson.version
                                }
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ],
            }
        ]
    },
    externals: {
        jquery: 'jQuery',
        keditor: 'KEditor',
        ckeditor: 'CKEDITOR'
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js']
    }
};
