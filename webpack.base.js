module.exports = (port) => {
    const isProduction = (process.env.NODE_ENV === 'production');

    return {
        entry: './src/index',
        cache: false,

        mode: isProduction ? 'production' : 'development',
        ...(isProduction && { devtool: 'source-map' }),

        devServer: {
            historyApiFallback: true,
            port: port,
        },

        optimization: {
            minimize: isProduction
        },

        output: {
            publicPath: `http://localhost:${port}/`
        },

        resolve: {
            extensions: ['.jsx', '.js', '.json']
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [require.resolve('@babel/preset-react')]
                    }
                }
            ]
        },
    }
}
