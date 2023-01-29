const webpack = require('webpack');
const ReactRefreshWebpackPlugin  = require('@pmmmwh/react-refresh-webpack-plugin');

const PortNumber = 3000;

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
        compress: true,
        port: PortNumber,
        proxy: {
            '/api': {
                target: `http://localhost:${PortNumber}`,
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    },
    devtool: 'cheap-module-source-map',
    
    plugins: [
        new ReactRefreshWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
    ],
}