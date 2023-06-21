const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');
const pkg = require('./package.json');
const baseConfiguration = require('../../webpack.base.js');

const port = pkg.port;
const isProduction = (process.env.NODE_ENV === 'production');
const moduleName = 'core';

module.exports = (env, argv) => merge(baseConfiguration(port, argv.mode), {
        plugins: [
            new ModuleFederationPlugin({
                name: moduleName,
                library: {
                    name: moduleName, type: 'var'
                },
                filename: `${moduleName}_remoteEntry.js`,
                remotes: {},
                exposes: {
                    './store': './src/store',
                    './productCategoryService': './src/service/productCategory',
                    './productService': './src/service/product',
                },
                shared: {

                }
            }),
        ]
    }
);
