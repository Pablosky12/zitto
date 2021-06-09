const path = require('path');
const { default: TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './app/index.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: ['ts-loader'],
                exclude: [/node_modules/]
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [
            new TsconfigPathsPlugin({ configFile: './tsconfig.json' })
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'node',
    externals: [webpackNodeExternals()],
    watch: true
};