const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.(s[ac]|c)ss$/,
                use: [
                    'style-loader', 
                    'css-loader',
                    'postcss-loader',
                    {
                        loader:'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, '..', 'node_modules')],
                                outputStyle: 'compressed',
                            }
                        }
                    }             
                ],
            },
            {
                test: /\.(:?png|jpg|ico|gif|jpeg)$/i,
                type: 'asset/resources'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            }
        ]
    },
    
    output: {
        path: path.resolve(__dirname, '..', './dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './public/index.html'),
        }),
    ],

    // plugins: [
    //     new CopyPlugin ({
    //         patterns: [{ from: 'source', to: 'destination'}]
    //     }),
    // ],

    stats: 'summary'
}